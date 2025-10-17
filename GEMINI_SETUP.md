# Setup Gemini AI Chatbot

## 1. Dapatkan API Key Gemini

1. Kunjungi [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Login dengan akun Google Anda
3. Klik "Create API Key"
4. Copy API key yang dihasilkan

## 2. Setup Environment Variables

Tambahkan ke file `.env.local`:

```env
GEMINI_API_KEY="your-gemini-api-key-here"
```

## 3. Features Chatbot

- **Nama**: Lily
- **Fungsi**: Asisten virtual untuk sistem booking SMK Telkom Malang
- **Bahasa**: Indonesia
- **Kemampuan**:
  - Bantuan booking fasilitas
  - Informasi fasilitas yang tersedia
  - Status booking dan riwayat
  - Konflik jadwal
  - Manajemen akun
  - Support teknis

## 4. Endpoint API

```
POST /api/chatbot
Content-Type: application/json

{
  "message": "Halo, bagaimana cara booking ruangan?"
}
```

**Response:**
```json
{
  "response": "Halo! Untuk booking ruangan, Anda bisa...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 5. Widget Chatbot

- **Posisi**: Fixed bottom-right corner
- **Toggle**: Klik tombol chat untuk buka/tutup
- **Design**: Modern dengan warna brand (#E04E4E)
- **Responsive**: Mobile-friendly

## 6. Testing

1. Start server: `npm run dev`
2. Buka dashboard: `http://localhost:3000/dashboard`
3. Klik tombol chat di pojok kanan bawah
4. Test dengan pesan: "Halo Lily"

## 7. Troubleshooting

- **Error 500**: Pastikan GEMINI_API_KEY sudah di-set
- **Chat tidak muncul**: Check console untuk error
- **Response kosong**: Cek koneksi internet dan API key
