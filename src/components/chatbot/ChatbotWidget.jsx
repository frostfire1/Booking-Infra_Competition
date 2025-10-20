"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Halo! Saya Agent Moklet, asisten virtual untuk sistem booking SMK Telkom Malang. Ada yang bisa saya bantu?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ws, setWs] = useState(null);
  const [wsStatus, setWsStatus] = useState("offline");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Only scroll to bottom if the last message is from assistant
    if (messages.length > 0 && messages[messages.length - 1].role === "assistant") {
      scrollToBottom();
    }
  }, [messages]);

  useEffect(() => {
    // Connect to WebSocket on mount
  const wsHost = process.env.NEXT_PUBLIC_WS_HOST || window.location.hostname;
  const socket = new window.WebSocket(`ws://${wsHost}`);
    setWs(socket);
    socket.onopen = () => {
      setWsStatus("online");
      console.log("WebSocket connected");
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "status") {
        if (data.status === "thinking") setIsLoading(true);
        if (data.status === "done" || data.status === "error") setIsLoading(false);
        setWsStatus(data.status === "connected" ? "online" : wsStatus);
      }
      if (data.type === "answer") {
        setMessages((prev) => [...prev, { role: "assistant", content: data.text }]);
        setIsLoading(false);
      }
      if (data.type === "error") {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Maaf, terjadi kesalahan. Silakan coba lagi nanti." },
        ]);
        setIsLoading(false);
      }
    };
    socket.onclose = () => {
      setWs(null);
      setIsLoading(false);
      setWsStatus("offline");
    };
    socket.onerror = () => {
      setWsStatus("offline");
    };
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (!inputMessage.trim() || isLoading || !ws) return;
    const userMessage = inputMessage.trim();
    setInputMessage("");
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
  ws.send(userMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col items-center self-stretch py-12 px-4">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl py-6 md:py-12 gap-8 lg:gap-[84px]">
        <div className="flex flex-col items-start bg-white py-[26px] gap-6 rounded-[20px] border border-solid border-[#D5D5D5] w-full lg:flex-1 order-2 lg:order-1">
          <div className="flex items-center ml-[22px] gap-[9px]">
            <span className="text-[#1F1F1F] text-lg">{"Powered by"}</span>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img src="/logo.png" alt="Agent Moklet" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-[#1F1F1F] text-sm">{"Agent Moklet - Asisten Booking"}</span>
            <span
              className={`ml-4 px-2 py-1 rounded text-xs font-semibold ${
                wsStatus === "online" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {wsStatus === "online" ? "Online" : "Offline"}
            </span>
          </div>
          <div className="flex flex-col items-start self-stretch mx-[22px]">
            <div className="flex flex-col mb-4 gap-3">
              <div className="flex flex-col gap-2">
                <div className="flex-1 max-h-[360px] overflow-y-auto p-4 bg-gray-50 rounded-xl">
                  {messages.map((message, index) => (
                    <div key={index} className={`mb-3 ${message.role === "user" ? "text-right" : "text-left"}`}>
                      <div
                        className={`inline-block px-3 py-2 rounded-2xl ${
                          message.role === "user"
                            ? "bg-[#E04E4E] text-white"
                            : "bg-white text-[#1F1F1F] border border-solid border-[#EAEAEA]"
                        }`}
                      >
                        {message.role === "assistant" ? (
                          <div className="text-sm">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                          </div>
                        ) : (
                          <p className="text-sm">{message.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="mb-3 text-left">
                      <div className="inline-block px-3 py-2 rounded-2xl bg-gray-200 text-gray-600 animate-pulse">
                        <p className="text-sm">Agent sedang mengetik...</p>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              <div className="flex items-start self-stretch gap-2.5 mt-4">
                <input
                  placeholder={"Ketik pesan..."}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 self-stretch text-[#B6B6B6] bg-transparent text-base py-[15px] pl-4 pr-8 rounded-xl border border-solid border-[#D5D5D5]"
                />
                <button
                  className="w-[52px] h-[52px] bg-[#E04E4E] rounded-xl flex items-center justify-center hover:bg-[#c93e3e] transition-colors"
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2.5 w-full lg:w-auto order-1 lg:order-2">
          <span className="text-[#1F1F1F] text-2xl md:text-[42px] font-bold text-center lg:text-left w-full">
            {"Mau Tanya-Tanya?"}
          </span>
          <span className="text-[#7A7A7A] text-sm md:text-base text-center lg:text-right w-full lg:w-[456px]">
            {"Dari cara booking hingga fitur-fitur baru, semua pertanyaan kalian akan dijawab dengan lengkap dan mudah dipahami."}
          </span>
        </div>
      </div>
    </div>
  );
}
