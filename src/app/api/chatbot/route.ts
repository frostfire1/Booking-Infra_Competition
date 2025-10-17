import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 }
      );
    }

    // Get or create chat history from session/cookie
    const chatHistory = getChatHistory(request);
    
    // Add user message to history
    chatHistory.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // System prompt for booking assistant
    const systemPrompt = `You are a helpful customer service assistant for SMK Telkom Malang Booking System. 
Your name is Lily and you're here to assist students and staff with their inquiries about facility bookings, scheduling, and account issues.

Be professional, friendly, and helpful. You can help with:
- Facility booking procedures
- Available facilities and their features
- Booking status and history
- Scheduling conflicts
- Account management
- Technical support for the booking system

If you don't know something, politely let the user know and offer to escalate to a human administrator.

Always respond in Indonesian language.`;

    // Prepare messages for Gemini
    const messages = [
      {
        role: 'user',
        parts: [{ text: systemPrompt }]
      },
      ...chatHistory
    ];

    // Get Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Generate response
    const result = await model.generateContent(messages);
    const response = await result.response;
    const text = response.text();

    // Add assistant response to history
    chatHistory.push({
      role: 'model',
      parts: [{ text }]
    });

    // Save updated chat history
    saveChatHistory(request, chatHistory);

    return NextResponse.json({ 
      response: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
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
