Extend the Ovella app prototype with detailed screens for all AI-powered 
features. Use the same design system established in Prompt 1.

━━━━━━━━━━━━━━━━━━━━━━━
FLOW A: OVELLA AI CHAT
━━━━━━━━━━━━━━━━━━━━━━━
Screens A1–A4

A1. Chat Home / Entry
- Full screen chat interface, iOS Messages-inspired layout
- Top bar: "← Ovella AI" back arrow, gradient Ovella avatar (flower logo, 32px), 
  online status dot (green), info icon right
- Welcome message bubble (Ovella, left-aligned, gradient-bordered card):
  "Halo [Nama] 🌸 Aku Ovella AI. Kamu sedang di Fase Folikular hari ke-7. 
   Ada yang ingin kamu tanyakan tentang hormon, siklus, atau gejalamu hari ini?"
- Quick reply chips below welcome (horizontal scroll):
  "Kenapa aku lelah minggu ini?" | "Kapan ovulasiku?" | 
  "Jerawatku makin parah, kenapa?" | "Apa yang baik dimakan sekarang?"
- Text input bar (rounded, soft border): "Tanyakan Ovella AI..." 
  + send button (gradient circle, arrow icon)
- Keyboard shown/active

A2. Chat — Active Conversation
- Show a realistic 5-message conversation:
  * User: "Akhir-akhir ini aku sering sakit kepala 2 hari sebelum menstruasi. 
    Normal nggak ya?"
  * Ovella (loading state: 3-dot typing with gradient animation)
  * Ovella (response card, larger than normal bubble):
    "Berdasarkan data catatanmu selama 3 bulan terakhir, aku mendeteksi 
    bahwa sakit kepala pra-menstruasi kamu muncul konsisten di hari ke-26–27. 
    Ini bisa berkaitan dengan penurunan estrogen menjelang menstruasi 🩸
    
    Yang bisa kamu coba:
    • Jaga hidrasi extra 1–2 hari sebelumnya
    • Kurangi kafein di fase luteal akhir
    • Catat jika disertai gejala lain (mual, sensitif cahaya)
    
    Jika frekuensinya meningkat, pertimbangkan untuk dibawa ke konsultasi 
    dokter ya. Aku bisa buatkan ringkasan gejalamu. 📋"
  * Below response: 3 action chips: 
    "Buat catatan →" | "Lihat pola di laporan →" | "Hubungi dokter →"
  * User: "Bisa buatkan ringkasan buat dokter?"
  * Ovella: "Tentu! Aku sedang menyiapkan Laporan Klinik dari data 3 bulanmu..."
    → progress bar animation → "✅ Laporan siap! Buka di tab Laporan →"
- Input bar at bottom

A3. Chat — Symptom Deep Dive Mode
- User asks: "Jelaskan kondisi PCOS itu gimana?"
- Ovella responds with expanded "Education Card" (full-width card in chat):
  * Header: "📚 Tentang PCOS" with gradient top border
  * Content sections: Apa itu PCOS | Gejala umum | Hubungan dengan siklus kamu
  * Source tag: "Berdasarkan panduan HIFERI 2023"
  * Bottom of card: "Ada yang ingin kamu tanyakan lebih lanjut?"
- Related questions auto-appear as chips

A4. Chat — Contextual Phase Insight
- Show "Today's Insight Push" notification style at top (banner card):
  "🌸 Fase Folikular hari ke-7 — Ovella punya insight untukmu"
- Tapping opens chat with pre-loaded context message from Ovella:
  "Hari ini energimu diprediksi tinggi karena estrogen sedang meningkat. 
  Berdasarkan catatanmu, kamu biasanya lebih fokus dan kreatif di hari-hari ini.
  Rekomendasi: Jadwalkan tugas penting, olahraga, atau meeting besar hari ini 💪"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW B: HORMONAL FINGERPRINT™
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Screens B1–B3

B1. Fingerprint Overview
- Header: gradient background (full bleed, pink→lavender), 
  "Hormonal Fingerprint™" title white, subtitle: "Model AI khusus untukmu"
- Central radar/hexagon chart (large, centered):
  6 axes with gradient fill (semi-transparent pink-lavender):
  Akurasi Prediksi (82%) | Konsistensi Siklus (74%) | 
  Keseimbangan Hormon (68%) | Pola Mood (79%) | 
  Kualitas Tidur (71%) | Respons Gejala (65%)
- Below chart: "Terakhir diperbarui: 2 hari lalu • Data dari 4 siklus"
- 3 Insight cards (horizontal scroll):
  * "Fase lutealmu 1–2 hari lebih pendek dari rata-rata"
  * "Jerawat 73% lebih sering muncul di hari ke-24–26"  
  * "Energimu konsisten rendah di hari ke-1–2 menstruasi"
- "Bagaimana AI membangun model ini?" collapsible section
- "Perbarui Model" button (outline, bottom)

B2. Fingerprint — Single Insight Detail
- Back to fingerprint, header: "Pola Jerawat Hormonal"
- Timeline chart: 3-month view, dots indicate acne log days, 
  overlaid with cycle phase background colors
- AI Analysis box (gradient border):
  "Ovella mendeteksi korelasi 73% antara jerawat kamu dan fase luteal 
  hari ke-24 hingga ke-26. Ini konsisten dengan pola hiperandrogenisme ringan 
  yang umum terjadi pada perempuan dengan siklus 28–30 hari."
- Recommendation card: Diet, skincare routine, timing suggestions
- "Tambahkan ke Laporan Dokter" button

B3. Fingerprint — Model Accuracy Progress
- "Model Ovella-mu terus belajar" screen
- Progress visualization:
  * Siklus 1: data terbatas (grey bar, 30%)
  * Siklus 2: mulai mengenali pola (pink bar, 55%)
  * Siklus 3: prediksi meningkat (gradient bar, 72%)
  * Siklus 4 (sekarang): model stabil (full gradient bar, 82%)
- Illustration of AI "learning" (abstract wave/neural pattern in brand colors)
- "Semakin banyak data yang kamu catat, model makin akurat"
- Log reminder CTA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW C: HORMONAL WEATHER FORECAST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Screens C1–C2

C1. 7-Day Hormonal Forecast
- Header: "Hormonal Weather 🌤" + current date
- Hero: Today's card (large, gradient, phase color):
  Phase badge | Energy level bar | Mood prediction emoji | 
  Fertility indicator | Focus score
- 7-day horizontal strip (scrollable cards):
  Each mini card shows: day number, phase icon, energy dot (low/mid/high), 
  mood emoji, fertility level colored dot
- Tap any day → expands to detail overlay
- "Bagaimana prediksi ini dibuat?" info icon → tooltip

C2. Single Day Forecast Detail (overlay/sheet)
- Date: "Selasa, 9 Juni — Fase Folikular Hari ke-10"
- Prediction grid (2x3):
  * ⚡ Energi: Tinggi
  * 😊 Mood: Optimis
  * 🧠 Fokus: Sangat Baik
  * 💪 Olahraga Ideal: HIIT / Strength
  * 🥗 Nutrisi Focus: Protein & Antioksidan
  * 🌙 Kualitas Tidur Prediksi: Baik
- AI note: "Berdasarkan 4 siklus terakhir, ini adalah salah satu hari 
  terbaikmu untuk kerja kreatif dan aktivitas sosial."
- "Atur Pengingat untuk Hari Ini" button

━━━━━━━━━━━━━━━━━━━━━━━
FLOW D: DOCTOR REPORT GENERATION
━━━━━━━━━━━━━━━━━━━━━━━
Screens D1–D4

D1. Report Generation Start
- "Buat Laporan Dokter" full screen
- Header illustration: document with heart/medical cross, gradient accents
- Title: "Laporan Klinik Ovella"
- Description: "AI Ovella akan menyusun ringkasan gejala, pola hormonal, 
  dan anomali yang terdeteksi dari datamu — siap dibawa ke konsultasi."
- Form (card-based):
  * Periode data (date range picker): 1 Mar – 6 Jun 2026
  * Tujuan konsultasi (multi-select chips): 
    PCOS check | Siklus tidak teratur | Program hamil | 
    Nyeri haid | Jerawat hormonal | Infertilitas
  * Nama dokter/klinik (optional text field)
- "Buat Laporan" CTA (gradient, full width)

D2. Report Generating (Loading Screen)
- Centered Ovella logo with gradient pulse animation (describe as 3-frame static)
- Progress steps (vertical stepper, with check/active/pending states):
  ✅ Mengumpulkan data siklus (4 siklus)
  ✅ Menganalisis pola gejala
  ✅ Mendeteksi anomali hormonal
  🔄 Menyusun rekomendasi pertanyaan... (active, gradient spinner)
  ⏳ Memformat dokumen PDF
- Estimated time: "~10 detik"

D3. Report Preview (Document Style)
- Top bar: "Pratinjau Laporan" + Edit + Share icons
- Document preview (white card with subtle paper shadow):
  HEADER: Ovella logo + "Laporan Klinik — [Nama] — Juni 2026"
  
  SECTION 1 — Ringkasan Siklus (table style):
  Panjang Siklus | Rata-rata: 29 hari | Rentang: 27–32 hari
  Durasi Menstruasi | Rata-rata: 5 hari | 
  Skor Reguleritas | 78% (Cukup Teratur)
  
  SECTION 2 — Gejala Paling Sering (bar chart, compact):
  Kram: ████████ 85% siklus
  Kelelahan: ██████ 67% siklus
  Jerawat: █████ 58% siklus (terutama hari ke-24–26)
  Sakit kepala: ████ 42% siklus
  
  SECTION 3 — Anomali Terdeteksi AI (soft red/coral card):
  ⚠️ Fase luteal lebih pendek 1–2 hari dari normal
  ⚠️ Pola jerawat berkorelasi dengan fase hormonal tertentu
  
  SECTION 4 — Pertanyaan Saran untuk Dokter:
  1. Apakah pemendekan fase luteal saya perlu penanganan?
  2. Adakah pemeriksaan hormon yang direkomendasikan?
  3. Apa pilihan penanganan untuk jerawat hormonal saya?

- Bottom: "Ekspor PDF" (outline) | "Bagikan ke Dokter" (gradient)

D4. Share Options Sheet
- Bottom sheet: "Bagikan Laporan"
- Options (list with icons):
  📱 WhatsApp dokter
  📧 Email
  🔗 Salin tautan aman (expires in 7 days)
  📥 Unduh PDF
  🖨 Cetak
- Privacy note: "Laporan ini terenkripsi dan hanya bisa diakses oleh 
  penerima yang kamu pilih."

━━━━━━━━━━━━━━━━━━━━━━━
FLOW E: HORMONAL TWIN MATCHING
━━━━━━━━━━━━━━━━━━━━━━━
Screens E1–E2

E1. Twin Match Discovery
- Header: "Hormonal Twin™" + info icon
- Subtitle: "Temukan perempuan dengan profil hormonal serupa denganmu"
- Your profile card (gradient border, mini radar chart inside):
  Siklus: 29 hari | Kondisi: PCOS ringan | Profil: Hiperandrogenik moderat
- "AI sedang mencocokkan..." loading bar with match percentage climbing
- 3 Match cards (anonymized):
  * "Pengguna #A2891" — 94% cocok — Siklus 28 hari, PCOS, Jakarta
    Tip yang paling membantu: "Inositol supplement sangat membantu siklus aku"
  * "Pengguna #B4423" — 87% cocok — Siklus 30 hari, Akne hormonal
    Tip: "Kurangi gula di fase luteal, perbedaannya besar banget"
  * "Pengguna #C7751" — 81% cocok
- Each card: match % badge (gradient), anonymized avatar, 1 insight snippet
- Privacy banner: "Semua identitas disamarkan. Hanya pola hormonal yang dicocokkan."

E2. Twin Insight Detail
- Back to single Twin card expanded
- Shared symptoms comparison (side-by-side bars): Kamu vs Twin
- Tips yang dipelajari Twin (card list):
  * Diet adjustment yang membantu
  * Suplemen yang digunakan
  * Gaya hidup yang berpengaruh
- "Apa yang bisa kamu coba?" personalized recommendation from Ovella AI
- Anonymized community feeling, no direct messaging

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW F: LUTEAL PHASE INTELLIGENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Screens F1–F2

F1. Luteal Phase Dashboard
- Triggered when user enters luteal phase
- Hero card (lavender gradient, moon icon):
  "🌙 Fase Luteal — Hari ke-18"
  "Ovella mendeteksi potensi gejala PMS dalam 4–5 hari ke-depan 
  berdasarkan pola 3 siklus terakhirmu."
- Prediction cards (vertical list):
  * Kelelahan: Diprediksi meningkat hari ke-23–25 ⚡→📉
  * Mood: Diprediksi lebih sensitif hari ke-24–26 😊→😔
  * Jerawat: Kemungkinan 70% muncul hari ke-24–26 🧴
  * Kram: Diprediksi ringan–sedang, onset hari ke-27 🔴
- Proactive care suggestions:
  "Berdasarkan polamu, ini yang bisa kamu siapkan:"
  * 💊 Magnesium supplement (3 hari sebelum gejala)
  * 🥦 Perbanyak sayuran cruciferous
  * 😴 Tidur 15–30 menit lebih awal
  * 📅 Hindari jadwal padat di hari ke-24–26

F2. Luteal Symptom Tracker (Active PMS mode)
- Compact daily check-in bottom sheet
- Title: "PMS Check-in Hari Ini"
- Quick toggles (icons + labels): 
  Kram | Kembung | Mood ↓ | Sakit kepala | Jerawat | Lelah | Ngidam
- Intensity slider (1–5) per selected symptom
- Ovella tip of the day (auto-contextual):
  "Kamu mencatat kembung hari ini. Cobalah kurangi sodium dan 
  tambah air putih. Gejala ini biasanya membaik dalam 1–2 hari. 🌿"
- Save + close

━━━━━━━━━━━━━━━━━━━━━━━
SHARED UI NOTES
━━━━━━━━━━━━━━━━━━━━━━━
- All AI-generated content: show subtle gradient left border on cards 
  (1px, pink→lavender) to visually signal AI provenance
- All loading states: use Ovella logo pulse with soft gradient glow
- Transitions: use iOS-native slide + spring animation descriptions
- Empty states: soft illustrations with Ovella mascot 
  (simplified flower blob, eyes, friendly expression)
- Error states: warm pink tones, never harsh red
- Accessibility: sufficient contrast on all text, 
  minimum 44pt tap targets
- Connect all screens to prototype flow with tap interactions