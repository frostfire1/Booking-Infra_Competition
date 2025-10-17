import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

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

    // For now, return a simple response to test the endpoint
    const responses = {
      'halo': 'Halo! Saya Lily, asisten virtual untuk sistem booking SMK Telkom Malang. Ada yang bisa saya bantu?',
      'hello': 'Halo! Saya Lily, asisten virtual untuk sistem booking SMK Telkom Malang. Ada yang bisa saya bantu?',
      'booking': 'Untuk melakukan booking, silakan klik tombol "Buat Booking" di dashboard atau akses menu booking. Saya bisa membantu menjelaskan prosedur booking jika diperlukan.',
      'fasilitas': 'Fasilitas yang tersedia meliputi ruang kelas, laboratorium, aula, lapangan olahraga, dan ruang meeting. Silakan pilih fasilitas yang sesuai dengan kebutuhan Anda.',
      'default': 'Terima kasih atas pertanyaan Anda. Saya Lily, asisten virtual untuk sistem booking SMK Telkom Malang. Saya bisa membantu dengan informasi tentang booking fasilitas, jadwal, dan prosedur administrasi. Ada yang spesifik yang ingin Anda tanyakan?'
    };

    const lowerMessage = message.toLowerCase();
    let response = responses.default;

    if (lowerMessage.includes('halo') || lowerMessage.includes('hello')) {
      response = responses.halo;
    } else if (lowerMessage.includes('booking')) {
      response = responses.booking;
    } else if (lowerMessage.includes('fasilitas') || lowerMessage.includes('ruang')) {
      response = responses.fasilitas;
    }

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

// Helper function to remove think blocks (if any)
function removeThinkBlock(content: string): string {
  return content.replace(/<think>.*?<\/think>/gs, '').trim();
}
