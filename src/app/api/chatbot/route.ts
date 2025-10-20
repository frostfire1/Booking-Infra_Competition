import { NextRequest, NextResponse } from 'next/server';

import knowledgeBase from '@/data/chatbot-knowledge.json';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { prisma } from '@/lib/prisma';
import { BookingStatus } from '@prisma/client';


export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    // Dynamically build context from the knowledgeBase JSON
    let context = '';
    for (const [key, value] of Object.entries(knowledgeBase)) {
      context += `${key}: ${JSON.stringify(value)}\n`;
    }

    // Backend function descriptions for AI
    const functionDescriptions = `Kamu dapat memanggil fungsi backend berikut dengan format <call>...</call> untuk mendapatkan data secara real-time:
- listKnowledgeKeys: Mendapatkan daftar semua kunci data di knowledge base. Contoh: <call>listKnowledgeKeys</call>
- getKnowledgeValue(key): Mendapatkan data detail dari knowledge base berdasarkan kunci. Contoh: <call>getKnowledgeValue(facilities)</call>
- getBookingsInRange(start, end, status): Mendapatkan daftar booking pada rentang waktu dan status tertentu. Contoh: <call>getBookingsInRange('2025-10-20','2025-10-20','APPROVED')</call>

Jika user bertanya tentang fasilitas yang dipinjam hari ini, langsung panggil <call>getBookingsInRange('YYYY-MM-DD','YYYY-MM-DD','APPROVED')</call> dengan tanggal hari ini. Jangan minta tanggal lagi jika sudah jelas maksudnya hari ini.`;

    const prompt = `Kamu adalah Agent Moklet, asisten virtual booking fasilitas di SMK Telkom Malang. Jawab dengan ramah, profesional, dan gunakan bahasa Indonesia yang natural. Jika pertanyaan berkaitan dengan booking, fasilitas, status, atau pembayaran, gunakan data di bawah ini dan panggil fungsi backend jika perlu.

${functionDescriptions}

Jika kamu masih memproses atau membutuhkan data tambahan dari backend, jangan berikan tag <endoutput> pada jawabanmu. Hanya gunakan <endoutput> jika jawaban sudah final dan siap dikirim ke user. Jika masih menunggu data atau sedang berpikir, berikan instruksi atau tag <getinfo>/<call> saja tanpa <endoutput>.

Format output:
<endoutput>output akan dikirim ke user</endoutput>
<getinfo>tuliskan fungsi atau langkah untuk mendapatkan informasi yang relevan, atau panggil fungsi backend jika perlu</getinfo>

Data referensi:
${context}

Pertanyaan pengguna: ${message}
Jawaban:`;

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyDfIEXazVqtXwOZ0mM95oSB6yaXJp9ZzII");
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
      const result = await model.generateContent([prompt]);
      // Log Gemini AI response for debugging
      console.log('Gemini AI response:', typeof result?.response?.text === 'function' ? result?.response?.text() : result?.response?.text);
      // Parse <endoutput> from Gemini AI response and ignore <getinfo> and <call>
      const aiResponse = typeof result?.response?.text === 'function' ? result?.response?.text() : result?.response?.text;
      const outputMatch = aiResponse?.match(/<endoutput>([\s\S]*?)<\/endoutput>/);
      const output = outputMatch ? outputMatch[1].trim() : null;
      // Only return the output from <endoutput> in the API response
      if (output && result?.response?.candidates?.[0]?.finishReason === 'STOP') {
        return NextResponse.json({
          response: output,
          timestamp: new Date().toISOString()
        });
      } else {
        // No <endoutput> present, do not respond with output
        return NextResponse.json({
          response: '',
          info: 'AI masih memproses atau menunggu data backend.',
          timestamp: new Date().toISOString()
        });
      }
    } catch (err) {
      console.error('MokletAgent error:', err);
      console.error('GEMINI_API_KEY:', process.env.GEMINI_API_KEY);
      return NextResponse.json({
        response: 'Maaf, terjadi kesalahan saat menghubungi MokletAgent.',
        error: err instanceof Error ? err.message : String(err),
        timestamp: new Date().toISOString()
      }, { status: 400 });
    }


  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

/**
 * getKnowledgeValue(key: string): any
 *   - Returns the value for a specific key from the knowledge base JSON (e.g., facilities, booking_statuses).
 *   - Example: getKnowledgeValue('facilities')
 *
 * listKnowledgeKeys(): string[]
 *   - Returns a list of all available keys in the knowledge base (e.g., facilities, equipment, faq, etc).
 *   - Example: listKnowledgeKeys()
 *
 * getBookingsInRange(start: string, end: string, status?: BookingStatus): Promise<any[]>
 *   - Returns a list of bookings in a specific time range and status (default: APPROVED).
 *   - Example: getBookingsInRange('2025-10-01', '2025-10-31', 'APPROVED')
 *
 * callFunctionFromAI(callString: string): any | Promise<any>
 *   - Parses <call>...</call> tags from AI response and calls the corresponding function.
 *   - Supports: listKnowledgeKeys, getKnowledgeValue(key), getBookingsInRange(start, end, status)
 *   - Example: <call>getKnowledgeValue(facilities)</call>
 *             <call>listKnowledgeKeys</call>
 *             <call>getBookingsInRange('2025-10-01','2025-10-31','APPROVED')</call>
 */

// Utility function to get specific value from knowledgeBase
export function getKnowledgeValue(key: string) {
  return (knowledgeBase as Record<string, unknown>)[key];
}

// Utility function to list all available knowledge keys
export function listKnowledgeKeys() {
  return Object.keys(knowledgeBase);
}

// Utility function to get bookings in a specific time range
export async function getBookingsInRange(start: string, end: string, status: BookingStatus = 'APPROVED') {
  const bookings = await prisma.booking.findMany({
    where: {
      startDate: { gte: new Date(start) },
      endDate: { lte: new Date(end) },
      status,
    },
    include: {
      facility: { select: { id: true, name: true } },
      user: { select: { name: true, email: true } },
    },
    orderBy: { startDate: 'asc' },
  });
  return bookings.map((booking) => ({
    id: booking.id,
    title: booking.title || `${booking.facility.name} Booking`,
    startDate: booking.startDate.toISOString(),
    endDate: booking.endDate.toISOString(),
    facility: booking.facility.name,
    facilityId: booking.facility.id,
    organizer: booking.user.name || booking.user.email,
    status: booking.status,
  }));
}

// Extend callFunctionFromAI to support getBookingsInRange
export async function callFunctionFromAI(callString: string) {
  const match = callString.match(/<call>(.*?)<\/call>/);
  if (!match) return null;
  const callContent = match[1].trim();
  if (callContent.startsWith('listKnowledgeKeys')) {
    return listKnowledgeKeys();
  }
  if (callContent.startsWith('getKnowledgeValue(')) {
    const argMatch = callContent.match(/getKnowledgeValue\((.*?)\)/);
    if (argMatch) {
      const key = argMatch[1].replace(/['"`]/g, '').trim();
      return getKnowledgeValue(key);
    }
  }
  if (callContent.startsWith('getBookingsInRange(')) {
    // Example: getBookingsInRange('2025-10-01','2025-10-31','APPROVED')
    const argMatch = callContent.match(/getBookingsInRange\((.*?)\)/);
    if (argMatch) {
      const args = argMatch[1].split(',').map(a => a.replace(/['"`]/g, '').trim());
      const [start, end, status] = args;
      return await getBookingsInRange(start, end, status as BookingStatus);
    }
  }
  return null;
}
