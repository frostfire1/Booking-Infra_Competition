import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import knowledgeBase from '@/data/chatbot-knowledge.json';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '', {
  apiVersion: 'v1'
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Process message and generate intelligent response
    const response = generateIntelligentResponse(message);

    return NextResponse.json({ 
      response: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// Helper function to get chat history from cookies
function getChatHistory(request: NextRequest) {
  const chatHistoryCookie = request.cookies.get('chat_history');
  
  if (chatHistoryCookie) {
    try {
      return JSON.parse(chatHistoryCookie.value);
    } catch (error) {
      console.error('Error parsing chat history:', error);
    }
  }
  
  return [];
}

// Helper function to save chat history to cookies
function saveChatHistory(request: NextRequest, chatHistory: any[]) {
  // Limit chat history to last 10 messages to avoid cookie size issues
  const limitedHistory = chatHistory.slice(-10);
  
  // This would typically be handled by setting cookies in the response
  // For now, we'll just return the limited history
  return limitedHistory;
}

// Helper function to generate intelligent response based on knowledge base
function generateIntelligentResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Greeting responses
  if (lowerMessage.includes('halo') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return `Halo! Saya Lily, asisten virtual untuk sistem booking ${knowledgeBase.system_info.name}. Ada yang bisa saya bantu?`;
  }
  
  // Specific facility search (check this first)
  for (const facility of knowledgeBase.facilities) {
    const facilityName = facility.name.toLowerCase();
    if (lowerMessage.includes(facilityName) || 
        (lowerMessage.includes('aula') && facilityName.includes('aula')) ||
        (lowerMessage.includes('lab 1') && facilityName.includes('lab 1')) ||
        (lowerMessage.includes('lab 2') && facilityName.includes('lab 2')) ||
        (lowerMessage.includes('lab 5') && facilityName.includes('lab 5')) ||
        (lowerMessage.includes('ruang gabungan') && facilityName.includes('ruang gabungan')) ||
        (lowerMessage.includes('podcast') && facilityName.includes('podcast')) ||
        (lowerMessage.includes('rapat') && facilityName.includes('rapat')) ||
        (lowerMessage.includes('robotik') && facilityName.includes('robotik')) ||
        (lowerMessage.includes('cyber') && facilityName.includes('cyber'))) {
      return `**${facility.name}**\n\n` +
             `📝 Deskripsi: ${facility.description}\n` +
             `👥 Kapasitas: ${facility.capacity} orang\n` +
             `✨ Fitur: ${facility.features.join(', ')}\n` +
             `🎯 Cocok untuk: ${facility.suitable_for.join(', ')}\n\n` +
             `Untuk booking fasilitas ini, silakan klik tombol "Buat Booking" di dashboard.`;
    }
  }
  
  // Facility information
  if (lowerMessage.includes('fasilitas') || lowerMessage.includes('ruang') || lowerMessage.includes('lab') || lowerMessage.includes('aula')) {
    let response = `Fasilitas yang tersedia di ${knowledgeBase.system_info.name}:\n\n`;
    knowledgeBase.facilities.forEach((facility, index) => {
      response += `${index + 1}. **${facility.name}**\n`;
      response += `   - Kapasitas: ${facility.capacity} orang\n`;
      response += `   - Deskripsi: ${facility.description}\n`;
      response += `   - Cocok untuk: ${facility.suitable_for.join(', ')}\n\n`;
    });
    response += `Untuk booking, silakan klik tombol "Buat Booking" di dashboard.`;
    return response;
  }
  
  // Equipment information
  if (lowerMessage.includes('peralatan') || lowerMessage.includes('equipment') || lowerMessage.includes('alat')) {
    let response = `Peralatan yang tersedia:\n\n`;
    knowledgeBase.equipment.forEach((item, index) => {
      response += `${index + 1}. **${item.name}**\n`;
      response += `   - Jumlah: ${item.quantity} unit\n`;
      response += `   - Tersedia: ${item.available} unit\n`;
      response += `   - Deskripsi: ${item.description}\n\n`;
    });
    return response;
  }
  
  // Booking procedures
  if (lowerMessage.includes('cara booking') || lowerMessage.includes('prosedur') || lowerMessage.includes('langkah')) {
    let response = `Cara melakukan booking di ${knowledgeBase.system_info.name}:\n\n`;
    knowledgeBase.booking_procedures.forEach((step) => {
      response += `**Langkah ${step.step}: ${step.title}**\n`;
      response += `${step.description}\n\n`;
    });
    return response;
  }
  
  // Booking status
  if (lowerMessage.includes('status') || lowerMessage.includes('cek booking')) {
    let response = `Status booking yang tersedia:\n\n`;
    knowledgeBase.booking_statuses.forEach((status) => {
      response += `**${status.status}**: ${status.description}\n`;
      response += `Tindakan: ${status.action}\n\n`;
    });
    return response;
  }
  
  // Payment information
  if (lowerMessage.includes('pembayaran') || lowerMessage.includes('bayar') || lowerMessage.includes('payment')) {
    let response = `Informasi pembayaran:\n\n`;
    knowledgeBase.payment_statuses.forEach((status) => {
      response += `**${status.status}**: ${status.description}\n`;
      response += `Tindakan: ${status.action}\n\n`;
    });
    return response;
  }
  
  // FAQ
  if (lowerMessage.includes('pertanyaan') || lowerMessage.includes('faq') || lowerMessage.includes('tanya')) {
    let response = `Pertanyaan yang sering diajukan:\n\n`;
    knowledgeBase.faq.forEach((faq, index) => {
      response += `**${index + 1}. ${faq.question}**\n`;
      response += `${faq.answer}\n\n`;
    });
    return response;
  }
  
  // Contact information
  if (lowerMessage.includes('kontak') || lowerMessage.includes('hubungi') || lowerMessage.includes('admin')) {
    return `Informasi kontak ${knowledgeBase.system_info.name}:\n\n` +
           `📧 Email: ${knowledgeBase.contact_info.email}\n` +
           `📞 Telepon: ${knowledgeBase.contact_info.phone}\n` +
           `📍 Alamat: ${knowledgeBase.contact_info.address}\n\n` +
           `Jam operasional:\n` +
           `Senin-Jumat: ${knowledgeBase.working_hours.monday_friday}\n` +
           `Sabtu: ${knowledgeBase.working_hours.saturday}\n` +
           `Minggu: ${knowledgeBase.working_hours.sunday}`;
  }
  
  // Working hours
  if (lowerMessage.includes('jam') || lowerMessage.includes('buka') || lowerMessage.includes('tutup')) {
    return `Jam operasional ${knowledgeBase.system_info.name}:\n\n` +
           `Senin-Jumat: ${knowledgeBase.working_hours.monday_friday}\n` +
           `Sabtu: ${knowledgeBase.working_hours.saturday}\n` +
           `Minggu: ${knowledgeBase.working_hours.sunday}`;
  }
  
  
  // Default response
  return `Terima kasih atas pertanyaan Anda! Saya Lily, asisten virtual untuk ${knowledgeBase.system_info.name}.\n\n` +
         `Saya bisa membantu dengan:\n` +
         `• Informasi fasilitas dan peralatan\n` +
         `• Prosedur booking\n` +
         `• Status booking dan pembayaran\n` +
         `• FAQ dan informasi kontak\n\n` +
         `Ada yang spesifik yang ingin Anda tanyakan?`;
}

// Helper function to remove think blocks (if any)
function removeThinkBlock(content: string): string {
  return content.replace(/<think>.*?<\/think>/gs, '').trim();
}
