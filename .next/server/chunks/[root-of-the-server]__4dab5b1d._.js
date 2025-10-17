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
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/data/chatbot-knowledge.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"system_info\":{\"name\":\"SMK Telkom Malang Booking System\",\"description\":\"Sistem booking fasilitas untuk SMK Telkom Malang\",\"version\":\"1.0.0\"},\"facilities\":[{\"name\":\"Aula\",\"description\":\"Aula besar untuk acara dengan kapasitas hingga 600 orang\",\"capacity\":600,\"features\":[\"Sound system\",\"Proyektor\",\"Kursi lipat\",\"Panggung\"],\"suitable_for\":[\"Wisuda\",\"Seminar\",\"Acara besar\",\"Presentasi\",\"Upacara\"]},{\"name\":\"Lab Cyber, Cloud & ITNSA (Lab 1)\",\"description\":\"Laboratorium untuk kegiatan cyber security dan cloud computing\",\"capacity\":40,\"features\":[\"Komputer\",\"Jaringan\",\"Software keamanan\",\"Internet\"],\"suitable_for\":[\"Praktikum cyber security\",\"Pelatihan IT\",\"Workshop\",\"Ujian online\"]},{\"name\":\"Lab Podcast dan Rapat (Lab 2)\",\"description\":\"Laboratorium dengan fasilitas podcast dan meeting\",\"capacity\":30,\"features\":[\"Microphone\",\"Recording equipment\",\"Meja rapat\",\"Soundproof\"],\"suitable_for\":[\"Podcast\",\"Rapat\",\"Interview\",\"Recording\",\"Meeting\"]},{\"name\":\"Lab Robotik (Lab 5)\",\"description\":\"Laboratorium robotik dengan peralatan lengkap\",\"capacity\":35,\"features\":[\"Robot kit\",\"Arduino\",\"Sensor\",\"Tools\",\"Workbench\"],\"suitable_for\":[\"Praktikum robotik\",\"Workshop\",\"Kompetisi\",\"Proyek\"]},{\"name\":\"Ruang Gabungan (34-36)\",\"description\":\"Ruang gabungan untuk berbagai keperluan\",\"capacity\":100,\"features\":[\"Fleksibel\",\"Kursi\",\"Meja\",\"Whiteboard\"],\"suitable_for\":[\"Kelas\",\"Workshop\",\"Pelatihan\",\"Presentasi\",\"Meeting\"]}],\"equipment\":[{\"name\":\"Microphone\",\"quantity\":16,\"available\":16,\"description\":\"Microphone untuk presentasi dan recording\"},{\"name\":\"Sound System\",\"quantity\":5,\"available\":5,\"description\":\"Sistem audio untuk acara besar\"},{\"name\":\"Kursi Lipat\",\"quantity\":200,\"available\":200,\"description\":\"Kursi lipat untuk acara dan presentasi\"},{\"name\":\"Proyektor\",\"quantity\":10,\"available\":10,\"description\":\"Proyektor untuk presentasi\"},{\"name\":\"Speaker\",\"quantity\":15,\"available\":15,\"description\":\"Speaker untuk audio\"}],\"booking_statuses\":[{\"status\":\"PENDING\",\"description\":\"Menunggu persetujuan admin\",\"color\":\"yellow\",\"action\":\"Tunggu konfirmasi dari admin\"},{\"status\":\"APPROVED\",\"description\":\"Booking disetujui\",\"color\":\"green\",\"action\":\"Booking Anda sudah disetujui, silakan datang sesuai jadwal\"},{\"status\":\"REJECTED\",\"description\":\"Booking ditolak\",\"color\":\"red\",\"action\":\"Booking ditolak, silakan cek alasan dan buat booking ulang\"},{\"status\":\"CANCELLED\",\"description\":\"Booking dibatalkan\",\"color\":\"gray\",\"action\":\"Booking telah dibatalkan\"}],\"payment_statuses\":[{\"status\":\"UNPAID\",\"description\":\"Belum dibayar\",\"action\":\"Silakan lakukan pembayaran\"},{\"status\":\"PAID\",\"description\":\"Sudah dibayar\",\"action\":\"Pembayaran berhasil\"},{\"status\":\"FAILED\",\"description\":\"Pembayaran gagal\",\"action\":\"Pembayaran gagal, silakan coba lagi\"},{\"status\":\"EXPIRED\",\"description\":\"Pembayaran expired\",\"action\":\"Pembayaran sudah expired, silakan buat booking ulang\"},{\"status\":\"REFUNDED\",\"description\":\"Sudah direfund\",\"action\":\"Pembayaran sudah dikembalikan\"}],\"booking_procedures\":[{\"step\":1,\"title\":\"Login/Register\",\"description\":\"Masuk ke sistem dengan akun Google atau daftar terlebih dahulu\"},{\"step\":2,\"title\":\"Pilih Fasilitas\",\"description\":\"Pilih fasilitas yang ingin dipinjam dari daftar yang tersedia\"},{\"step\":3,\"title\":\"Isi Detail Booking\",\"description\":\"Isi judul, deskripsi, tanggal mulai, dan tanggal selesai\"},{\"step\":4,\"title\":\"Pilih Equipment (Opsional)\",\"description\":\"Pilih peralatan tambahan yang dibutuhkan\"},{\"step\":5,\"title\":\"Submit Booking\",\"description\":\"Kirim permohonan booking untuk ditinjau admin\"},{\"step\":6,\"title\":\"Tunggu Persetujuan\",\"description\":\"Admin akan meninjau dan menyetujui/menolak booking\"},{\"step\":7,\"title\":\"Pembayaran (Jika Diperlukan)\",\"description\":\"Lakukan pembayaran jika ada biaya yang dikenakan\"}],\"faq\":[{\"question\":\"Berapa lama waktu persetujuan booking?\",\"answer\":\"Biasanya 1-2 hari kerja, tergantung ketersediaan admin\"},{\"question\":\"Apakah bisa membatalkan booking?\",\"answer\":\"Ya, bisa membatalkan booking sebelum tanggal acara\"},{\"question\":\"Apakah ada biaya untuk booking?\",\"answer\":\"Tergantung fasilitas dan durasi, silakan cek detail saat booking\"},{\"question\":\"Bagaimana cara cek status booking?\",\"answer\":\"Login ke dashboard dan lihat di bagian 'Booking Terbaru'\"},{\"question\":\"Apakah bisa booking untuk hari yang sama?\",\"answer\":\"Tergantung ketersediaan fasilitas, silakan cek jadwal terlebih dahulu\"}],\"contact_info\":{\"school\":\"SMK Telkom Malang\",\"email\":\"admin@smktelkom-mlg.sch.id\",\"phone\":\"0341-123456\",\"address\":\"Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang\"},\"working_hours\":{\"monday_friday\":\"07:00 - 17:00\",\"saturday\":\"07:00 - 12:00\",\"sunday\":\"Tutup\"}}"));}),
"[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/app/api/chatbot/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Documents/CodingProject/JHIC-2025/Booking-Infra_Competition/src/data/chatbot-knowledge.json (json)");
;
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
        // Process message and generate intelligent response
        const response = generateIntelligentResponse(message);
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
// Helper function to generate intelligent response based on knowledge base
function generateIntelligentResponse(message) {
    const lowerMessage = message.toLowerCase();
    // Greeting responses
    if (lowerMessage.includes('halo') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return `Halo! Saya Lily, asisten virtual untuk sistem booking ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].system_info.name}. Ada yang bisa saya bantu?`;
    }
    // Specific facility search (check this first)
    for (const facility of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].facilities){
        const facilityName = facility.name.toLowerCase();
        if (lowerMessage.includes(facilityName) || lowerMessage.includes('aula') && facilityName.includes('aula') || lowerMessage.includes('lab 1') && facilityName.includes('lab 1') || lowerMessage.includes('lab 2') && facilityName.includes('lab 2') || lowerMessage.includes('lab 5') && facilityName.includes('lab 5') || lowerMessage.includes('ruang gabungan') && facilityName.includes('ruang gabungan') || lowerMessage.includes('podcast') && facilityName.includes('podcast') || lowerMessage.includes('rapat') && facilityName.includes('rapat') || lowerMessage.includes('robotik') && facilityName.includes('robotik') || lowerMessage.includes('cyber') && facilityName.includes('cyber')) {
            return `**${facility.name}**\n\n` + `📝 Deskripsi: ${facility.description}\n` + `👥 Kapasitas: ${facility.capacity} orang\n` + `✨ Fitur: ${facility.features.join(', ')}\n` + `🎯 Cocok untuk: ${facility.suitable_for.join(', ')}\n\n` + `Untuk booking fasilitas ini, silakan klik tombol "Buat Booking" di dashboard.`;
        }
    }
    // Facility information
    if (lowerMessage.includes('fasilitas') || lowerMessage.includes('ruang') || lowerMessage.includes('lab') || lowerMessage.includes('aula')) {
        let response = `Fasilitas yang tersedia di ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].system_info.name}:\n\n`;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].facilities.forEach((facility, index)=>{
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
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].equipment.forEach((item, index)=>{
            response += `${index + 1}. **${item.name}**\n`;
            response += `   - Jumlah: ${item.quantity} unit\n`;
            response += `   - Tersedia: ${item.available} unit\n`;
            response += `   - Deskripsi: ${item.description}\n\n`;
        });
        return response;
    }
    // Booking procedures
    if (lowerMessage.includes('cara booking') || lowerMessage.includes('prosedur') || lowerMessage.includes('langkah')) {
        let response = `Cara melakukan booking di ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].system_info.name}:\n\n`;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].booking_procedures.forEach((step)=>{
            response += `**Langkah ${step.step}: ${step.title}**\n`;
            response += `${step.description}\n\n`;
        });
        return response;
    }
    // Booking status
    if (lowerMessage.includes('status') || lowerMessage.includes('cek booking')) {
        let response = `Status booking yang tersedia:\n\n`;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].booking_statuses.forEach((status)=>{
            response += `**${status.status}**: ${status.description}\n`;
            response += `Tindakan: ${status.action}\n\n`;
        });
        return response;
    }
    // Payment information
    if (lowerMessage.includes('pembayaran') || lowerMessage.includes('bayar') || lowerMessage.includes('payment')) {
        let response = `Informasi pembayaran:\n\n`;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].payment_statuses.forEach((status)=>{
            response += `**${status.status}**: ${status.description}\n`;
            response += `Tindakan: ${status.action}\n\n`;
        });
        return response;
    }
    // FAQ
    if (lowerMessage.includes('pertanyaan') || lowerMessage.includes('faq') || lowerMessage.includes('tanya')) {
        let response = `Pertanyaan yang sering diajukan:\n\n`;
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].faq.forEach((faq, index)=>{
            response += `**${index + 1}. ${faq.question}**\n`;
            response += `${faq.answer}\n\n`;
        });
        return response;
    }
    // Contact information
    if (lowerMessage.includes('kontak') || lowerMessage.includes('hubungi') || lowerMessage.includes('admin')) {
        return `Informasi kontak ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].system_info.name}:\n\n` + `📧 Email: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].contact_info.email}\n` + `📞 Telepon: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].contact_info.phone}\n` + `📍 Alamat: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].contact_info.address}\n\n` + `Jam operasional:\n` + `Senin-Jumat: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].working_hours.monday_friday}\n` + `Sabtu: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].working_hours.saturday}\n` + `Minggu: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].working_hours.sunday}`;
    }
    // Working hours
    if (lowerMessage.includes('jam') || lowerMessage.includes('buka') || lowerMessage.includes('tutup')) {
        return `Jam operasional ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].system_info.name}:\n\n` + `Senin-Jumat: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].working_hours.monday_friday}\n` + `Sabtu: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].working_hours.saturday}\n` + `Minggu: ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].working_hours.sunday}`;
    }
    // Default response
    return `Terima kasih atas pertanyaan Anda! Saya Lily, asisten virtual untuk ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$CodingProject$2f$JHIC$2d$2025$2f$Booking$2d$Infra_Competition$2f$src$2f$data$2f$chatbot$2d$knowledge$2e$json__$28$json$29$__["default"].system_info.name}.\n\n` + `Saya bisa membantu dengan:\n` + `• Informasi fasilitas dan peralatan\n` + `• Prosedur booking\n` + `• Status booking dan pembayaran\n` + `• FAQ dan informasi kontak\n\n` + `Ada yang spesifik yang ingin Anda tanyakan?`;
}
// Helper function to remove think blocks (if any)
function removeThinkBlock(content) {
    return content.replace(/<think>.*?<\/think>/gs, '').trim();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4dab5b1d._.js.map