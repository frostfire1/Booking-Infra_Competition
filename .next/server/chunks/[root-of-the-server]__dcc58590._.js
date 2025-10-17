module.exports = [
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/.next-internal/server/app/api/chatbot/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/api/chatbot/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
;
// Initialize Gemini AI
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API_KEY || '', {
    apiVersion: 'v1'
});
async function POST(request) {
    try {
        const { message } = await request.json();
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No message provided'
            }, {
                status: 400
            });
        }
        // Check if API key is available
        if (!process.env.GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY not found in environment variables');
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API key not configured'
            }, {
                status: 500
            });
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response: response,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Chatbot error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error',
            details: error.message
        }, {
            status: 500
        });
    }
}
// Helper function to get chat history from cookies
function getChatHistory(request) {
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
function saveChatHistory(request, chatHistory) {
    // Limit chat history to last 10 messages to avoid cookie size issues
    const limitedHistory = chatHistory.slice(-10);
    // This would typically be handled by setting cookies in the response
    // For now, we'll just return the limited history
    return limitedHistory;
}
// Helper function to remove think blocks (if any)
function removeThinkBlock(content) {
    return content.replace(/<think>.*?<\/think>/gs, '').trim();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dcc58590._.js.map