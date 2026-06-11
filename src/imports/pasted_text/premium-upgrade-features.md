Complete the Ovella prototype with the following additional flows 
that were not covered in Prompts 1 and 2. Maintain the same design 
system throughout.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW G: PREMIUM UPGRADE (3 Screens)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── SCREEN G-1: Premium Features Overview ─────────

Navigation: "← Kembali" (no title, let the hero speak)

Hero (full gradient bg, Gradient Sunset, 260px):
  "✨ Ovella Premium" — Display L, white
  "Buka potensi penuh model AI hormonalmu"
  Star decorations (3–4 small ✦ white icons floating around text)

Feature comparison (white bg, rounded top 32px, continuing full screen):

"Yang kamu dapatkan:" — Heading 3, 20px top margin

Feature list (each row: 60px tall, icon + content + free/premium indicator):

Feature                         | Gratis | Premium
Catat siklus & gejala           | ✅     | ✅
Kalender menstruasi             | ✅     | ✅
Hormonal Weather™ (3 hari)      | ✅     | —
Hormonal Weather™ (7 hari)      | —      | ✨
Hormonal Fingerprint™ (basic)   | —      | ✨
Hormonal Fingerprint™ (lengkap) | —      | ✨
Laporan Klinik (1/bulan)        | ✅     | —
Laporan Klinik (tak terbatas)   | —      | ✨
Tanya Ovella AI (20 pesan/hari) | ✅     | —
Tanya Ovella AI (tak terbatas)  | —      | ✨
Hormonal Twin™ Matching         | —      | ✨
Luteal Intelligence™            | —      | ✨
Anomaly Detection AI            | —      | ✨
Priority customer support       | —      | ✨

Rows: alternating #FAFAFA / white, gradient star for premium items

Pricing section:
  3 plan cards (horizontal scroll or 3-column):
  
  Card 1 — Bulanan:
  "Rp 29.000/bulan"
  Subtext: "Fleksibel, batal kapan saja"
  GradientButton outline: "Pilih Bulanan"
  
  Card 2 — Tahunan (BEST VALUE highlighted):
  Gradient bg, 24px radius, 4px gradient border outer
  "✦ PALING HEMAT" badge (small, white pill, #FF2D78 bg)
  "Rp 249.000/tahun"
  Subtext: "Rp 20.750/bulan · Hemat ~28%"
  GradientButton white text: "Pilih Tahunan"
  
  Card 3 — 3 Bulanan:
  "Rp 85.000/3 bulan"
  Subtext: "Rp 28.300/bulan"
  GradientButton outline: "Pilih 3 Bulan"

Trial CTA (fixed bottom, white bg, top shadow):
  "🎁 Coba 7 Hari Gratis" — Heading 3, gradient text, centered
  GradientButton full width: "Mulai Gratis Sekarang"
  Caption: "Tidak perlu kartu kredit untuk memulai. 
  Ditagih setelah masa coba berakhir." — #9B9BB0

── SCREEN G-2: Trial Activation Success ──────────

Full screen, white bg

Center content:
  Animated checkmark (gradient circle, white check, 80px)
  "🎉 Ovella Premium Aktif!" — Display L, gradient text
  "Masa coba gratis 7 hari dimulai hari ini" — Body M, #5A5A6B
  
  "Yang sekarang bisa kamu akses:" — Heading 3
  Unlocked features list (with gradient sparkle icons):
  ✨ Hormonal Fingerprint™ lengkap
  ✨ Hormonal Weather™ 7 hari penuh
  ✨ Tanya Ovella AI tanpa batas
  ✨ Laporan Klinik tak terbatas
  ✨ Hormonal Twin™ Matching
  
  Trial expiry card (#FFF0F7 bg, pink border):
  "📅 Masa coba berakhir: 13 Juni 2026"
  "Kami akan mengingatkanmu 2 hari sebelum berakhir."
  Toggle: "Aktifkan pengingat" (ON by default)

"Mulai Jelajahi Premium →" — GradientButton full width

── SCREEN G-3: Premium Expiry Reminder ──────────

Shown as full-screen modal when trial has 2 days left:

Gradient border card overlay (white bg card, gradient border 2px, 
shadow, 24px radius, centered on dimmed backdrop):

"⏰ Masa Coba Berakhir dalam 2 Hari" — Heading 2, gradient text
"13 Juni 2026 · 48 jam tersisa" — Body S, #9B9BB0

Your premium usage summary:
"Selama masa coba, kamu:" — Caption
- Membaca 4 Hormonal Weather™ prediction
- Menerima 12 AI insight dari Fingerprint™
- Membuat 1 Laporan Klinik
- Menemukan 3 Hormonal Twin

"Jangan putuskan perjalanan hormonal kamu." — Body M, #1A1A1A

Pricing reminder (compact):
  "Lanjutkan Premium: Rp 29.000/bulan"
  "atau Rp 249.000/tahun (hemat ~28%)"

"Berlangganan Sekarang" — GradientButton full width
"Ingatkan Lagi Besok" — ghost text link, centered

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW H: NOTIFICATIONS & REMINDERS (3 Screens)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── SCREEN H-1: Notification Center ──────────────

Navigation: "← Beranda" | "Notifikasi" | "Tandai semua dibaca" gradient text

Filter chips: Semua (active) | AI Insight | Pengingat | Siklus | Sistem

Notification list (each row, 80px):

UNREAD items (left gradient dot 8px, #F5F3FF bg):

🌙 [2 jam lalu] "Luteal Intelligence™ Aktif"
"Kamu memasuki fase luteal. Ovella mendeteksi 3 gejala yang 
diprediksi minggu ini. Buka untuk melihat plan-mu."
→ PhaseChip "Luteal" + "Buka →"

⚡ [5 jam lalu] "AI Insight Baru"
"Ovella mendeteksi pola baru: energimu konsisten tinggi 
di hari ke-7–12. Hormonal Fingerprint™ diperbarui."
→ "Lihat Fingerprint →"

📋 [Kemarin] "Pengingat Catat Hari Ini"
"Kamu belum mencatat hari ini. 2 menit cukup untuk 
menjaga model AI-mu tetap akurat!"
→ "+ Catat Sekarang" gradient small button

READ items (normal white bg, no dot):

🥚 [2 hari lalu] "Jendela Ovulasi Mendekat"
"Ovulasi diprediksi dalam 3 hari (hari ke-13)."

✅ [3 hari lalu] "Laporan Klinik Dibuat"
"Laporan bulan Juni telah berhasil dibuat dan disimpan."

── SCREEN H-2: Reminder Settings ────────────────

Navigation: "← Profil" | "Pengingat & Notifikasi"

Master toggle row (prominent, top):
"Aktifkan semua notifikasi" — large toggle, gradient when ON

Section: "Pengingat Harian"
  - Pengingat Catat Harian: toggle ON + "Setiap hari, 08:00" 
    (time picker chevron)
  - Pengingat Minum Air (luteal): toggle OFF + disabled subtitle

Section: "Notifikasi Siklus"
  - Prediksi Menstruasi (3 hari sebelum): toggle ON
  - Jendela Ovulasi: toggle ON
  - Transisi Fase: toggle ON + "Saat memasuki fase baru"
  - PMS Countdown: toggle ON + "7 hari sebelum menstruasi"

Section: "Notifikasi AI"
  - AI Insight Baru: toggle ON
  - Hormonal Fingerprint™ Update: toggle ON + "Setelah siklus baru"
  - Hormonal Weather™ Pagi: toggle ON + "Setiap pagi, 07:00"

Section: "Umum"
  - Email mingguan (summary): toggle OFF
  - Pengingat Premium (jika gratis): toggle ON
  - Update aplikasi: toggle ON

"Nonaktifkan Semua Notifikasi" — red ghost text link, bottom

── SCREEN H-3: Notification Permission Request ──

Shown on first launch if permission not yet granted:
(iOS-native style prompt)

Bottom sheet (60% height):
  Ovella logo (48px) centered
  "Izinkan Ovella Mengingatkanmu" — Heading 2
  
  "Ovella perlu izin notifikasi untuk:" — Body M
  
  3 reason rows (icon + text):
  📅 "Mengingatkan kamu mencatat setiap hari"
  🔮 "Memberitahu prediksi siklus penting"
  ✨ "Mengirimkan insight AI real-time"
  
  "Rata-rata pengguna yang mengaktifkan notifikasi mencatat 
  3× lebih sering dan mendapatkan prediksi 40% lebih akurat."
  — Body S, #5A5A6B

  GradientButton full width: "Izinkan Notifikasi"
  Ghost text: "Mungkin Nanti" — #9B9BB0, centered

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW I: DOCTOR HUB & CLINICAL CONNECTION (3 Screens)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── SCREEN I-1: Doctor Hub ────────────────────────

Navigation: "← Profil" | "Dokter & Klinik"

Header illustration (120px, #F5F3FF bg, rounded 24px):
  Abstract illustration: document with medical cross + phone connection 
  lines between patient and doctor silhouettes, in brand gradient

Connected Doctors section:
  Title: "Dokter Tersimpan" — SectionHeader
  
  Doctor card (white, 16px radius, shadow):
    Left: Doctor avatar (gradient circle bg, white stethoscope icon, 48px)
    Content:
      "Dr. Anita Wijaya, Sp.OG" — Heading 3
      "SpOG · RSIA Bunda Jakarta" — Body S, #5A5A6B
      "Konsultasi terakhir: 15 Mei 2026" — Caption, #9B9BB0
    Right: "Kirim Laporan →" gradient text button
  
  "+ Tambah Dokter" ghost button, dashed border

Recent Shares section:
  Title: "Laporan yang Dikirim" — SectionHeader + "Lihat semua →"
  
  List items (each 64px row):
  📋 "Laporan Klinik Jun 2026" — 2 hari lalu → Dr. Anita
      Status: "✅ Sudah dibaca" — Caption, #34C759
  
  📋 "Laporan Klinik Apr 2026" — 6 minggu lalu → Dr. Anita  
      Status: "📤 Terkirim" — Caption, #9B9BB0

Find a Doctor section:
  White card with: "Temukan dokter spesialis hormonal di Indonesia"
  Powered by partnership network
  "Cari Dokter →" gradient button
  Caption: "Fitur dalam pengembangan · Coming Soon"

── SCREEN I-2: Add Doctor ────────────────────────

Navigation: "← Doctor Hub" | "Tambah Dokter"

Form (card-based):
  Card 1: Doctor search
    Search input: "Nama dokter atau klinik..."
    OR manual entry below:
    - Nama lengkap (required)
    - Spesialisasi (dropdown: SpOG / Endokrinologi / Dermatologi / Umum)
    - Nama klinik/RS
    - Nomor WhatsApp (for report sharing)
    - Email dokter

  Card 2: Share settings:
    Label: "Izin berbagi laporan"
    Toggles:
    - Izinkan berbagi laporan otomatis: OFF (default)
    - Notifikasi ketika laporan dibaca: ON

"Simpan Dokter" — GradientButton full width

── SCREEN I-3: Report Sent Confirmation ──────────

Full screen success state:
  White bg
  Center: gradient circle checkmark (80px)
  "Laporan Berhasil Dikirim! 📋" — Display L, gradient text
  
  Summary card (white, 24px radius, shadow):
    "Laporan Klinik Juni 2026" — Heading 3
    "Dikirim ke: Dr. Anita Wijaya" — Body M
    "Melalui: WhatsApp" — Body S, #5A5A6B
    "Waktu: Sabtu, 6 Juni 2026 · 10:45" — Caption, #9B9BB0
    
    Divider
    
    "Tautan laporan aktif selama 7 hari."
    "Kadaluarsa: 13 Juni 2026"
    
    "Salin Tautan" — ghost button small

  "Apa selanjutnya?" — Heading 3
  3 action cards (compact, horizontal):
  📋 "Buat Laporan Baru" | 💬 "Tanya Ovella AI" | 🏠 "Ke Beranda"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOW J: ONBOARDING — ANOMALY DETECTION INTRO (2 Screens)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── SCREEN J-1: First Anomaly Detected (Milestone) ──

Full screen overlay shown after 2nd cycle completed:
(White bg card, centered, dimmed backdrop)

Gradient sparkle icon: ✦ (48px, gradient, animated glow described)
"Ovella Mendeteksi\nPola Pertama 🔍" — Display L, gradient text
"Setelah 2 siklus penuh, model AI-mu mulai bekerja."

Anomaly card (gradient border 2px, #F5F3FF bg, 16px radius):
  "Pola yang Baru Terdeteksi:"
  ⚠️ "Fase lutealmu tampak 1–2 hari lebih pendek dari normal (11 hari)"
  Caption: "Muncul di 2 dari 2 siklus · Perlu konfirmasi 1–2 siklus lagi"
  
  "Ini bukan diagnosis — ini observasi AI dari datamu."
  Caption, #9B9BB0, italic

Action row:
  "Lihat di Hormonal Fingerprint →" — gradient button
  "Tambahkan ke Laporan Dokter" — ghost button

── SCREEN J-2: Anomaly Detail Modal ─────────────

Bottom sheet (80% height):
  Title: "⚠️ Anomali: Luteal Phase Pendek"
  AI Confidence: "Konfiden: Sedang (2 siklus data)" — gradient pill

  "Apa artinya ini?" section:
  Body: "Fase luteal normal berlangsung 12–16 hari. Fase lutealmu 
  yang berulang di 11 hari bisa berkaitan dengan berbagai faktor 
  hormonal, termasuk kadar progesteron atau LH."
  
  "Apakah ini berbahaya?" section:
  "Fase luteal pendek bisa memengaruhi kesuburan dan regularitas 
  siklus, namun banyak perempuan hidup normal tanpa masalah. 
  Pemeriksaan hormonal oleh dokter dapat memberikan kejelasan."
  
  Action: "Tambahkan ke Laporan Klinik sebagai pertanyaan untuk dokter"
  GradientButton: "Tambahkan Sekarang"
  Ghost: "Pantau dulu di siklus berikutnya"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ADDITIONAL SYSTEM SCREENS (Essential Completions)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── SCREEN SYS-1: App Loading / Relaunch ──────────

Minimal, fast:
  White bg
  Ovella logo centered (60px), no gradient bg
  Subtitle: "Memuat profil hormonal..." — Caption, #9B9BB0
  Thin gradient progress bar at bottom (4px, full width)

── SCREEN SYS-2: Empty State — No Data Yet ──────

(Shown on Reports, Fingerprint, Twin when first-time user)
  EmptyState component:
  Illustration: friendly Ovella mascot (flower-blob with dot eyes, 
  soft smile, arms raised as if inviting — all in gradient)
  
  For Reports: "Belum ada data laporan"
  "Mulai mencatat selama 1 siklus penuh untuk melihat laporanmu."
  CTA: "+ Catat Hari Ini"
  
  For Fingerprint: "Model AI belum aktif"
  "Catat minimal 1 siklus penuh untuk mengaktifkan 
  Hormonal Fingerprint™ milikmu."
  CTA: "Pelajari Cara Kerjanya"

── SCREEN SYS-3: Network Error State ────────────

Light screen, centered content:
  Icon: wifi.slash (36px, #9B9BB0)
  "Tidak Ada Koneksi" — Heading 2
  "Beberapa fitur AI memerlukan internet. Data lokal 
  tetap bisa diakses." — Body S, #5A5A6B
  "Coba Lagi" — GradientButton outline

── SCREEN SYS-4: Data Privacy & Security ────────

Navigation: "← Pengaturan" | "Privasi & Keamanan"

Sections (card-based):

Section: "Keamanan Akun"
  - Email: sari@email.com | "Ubah" link
  - Kata Sandi: ••••••••• | "Ubah" link
  - Face ID / Touch ID: toggle ON
  - 2-Factor Auth: toggle OFF + "Aktifkan" gradient link

Section: "Data Kesehatanmu"
  - Penyimpanan data: "Lokal + cloud terenkripsi"
  - Enkripsi: "AES-256" with badge
  - "Ekspor Semua Dataku" — chevron
  - "Hapus Semua Data" — red text, chevron

Section: "Berbagi Data"
  - Kontribusi data anonim untuk penelitian: toggle OFF
  - Personalisasi AI dari dataku: toggle ON (cannot be disabled if using AI features)

Section: "Legal"
  - Kebijakan Privasi — chevron
  - Syarat & Ketentuan — chevron
  - Kebijakan Data Kesehatan — chevron

Privacy commitment box (#F5F3FF bg, gradient border, full width):
  "🔒 Komitmen Ovella"
  "Datamu tidak pernah dijual. Tidak dibagikan ke 
  pengiklan. Model AI dijalankan di perangkatmu jika memungkinkan."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL PROTOTYPE CONNECTIONS (Complete Map)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ONBOARDING:
OB-1 → OB-2 → OB-3 → OB-4 → OB-5 → OB-6 → OB-7 → H-1 (Home)

HOME (H-1) connections:
→ Hero card tap: C-1 (Hormonal Weather)
→ Quick log pills: CY-3 (Daily Log Sheet)
→ AI Insight card: B-1 (Fingerprint)
→ Upcoming event: CY-1 (Calendar, ovulasi day)
→ Twin tip: E-1 (Twin Match)
→ Floating AI button: A-2 (Chat)
→ Notification bell: H-1 (Notification Center)

AI HUB (A-1) connections:
→ Tanya Ovella AI: A-2 (Chat)
→ Hormonal Fingerprint: B-1 (Fingerprint) or B-5 (Upsell if free)
→ Hormonal Weather: C-1 (Weather)
→ Laporan Dokter: D-1 (Report Setup)
→ Luteal Intelligence: F-1 (Luteal Entry) or F-2 (Dashboard)
→ Hormonal Twin: E-1 (Twin Matching)

CYCLE (CY-1) connections:
→ Day tap: CY-2 (day detail expansion)
→ Catat Hari Ini: CY-3 (Daily Log Sheet)
→ Stats: RP-1 (Reports)

REPORTS (RP-1) connections:
→ Buat Laporan: D-1 (Report Setup)
→ Anomaly card: B-4 (All Insights)

PROFILE (PR-1) connections:
→ Premium card: G-1 (Premium Upgrade)
→ Dokter: I-1 (Doctor Hub)
→ Notifikasi: H-2 (Reminder Settings)
→ Privasi: SYS-4 (Privacy Screen)
→ Logout: OB-2 (Onboarding start)

AI CHAT (A-2/A-3) connections:
→ "Buka Laporan": D-3 (Report Preview)
→ "Lihat di Laporan": RP-1
→ "Hubungi Dokter": I-1

REPORT FLOW (D-1→D-2→D-3→D-4):
D-3 "Bagikan" → D-4 (Share Options)
D-4 WhatsApp/Email → I-3 (Sent Confirmation)

FINGERPRINT (B-1) connections:
→ Individual insight card: B-2 (Acne detail) or relevant detail screen
→ "Semua Insight": B-4
→ "Perkembangan Model": B-3
→ "Tambah ke Laporan": D-1

LUTEAL FLOW (F-1→F-2):
→ F-2 "Catat Check-in": F-3 (Active PMS Tracker)
→ F-2 "Lihat Analisis": F-4
→ Home phase entry: F-5 (Countdown if <7 days)

PREMIUM:
Any locked feature → G-1 (Premium Upgrade)
G-1 "Mulai Gratis": G-2 (Success)
G-2 → H-1 (Home, now premium)
G-3 "Berlangganan": G-1 payment flow

MILESTONES:
After cycle 2 complete → J-1 (First Anomaly Modal)
J-1 → J-2 (Anomaly Detail)
J-2 → D-1 (add to report) OR B-1 (fingerprint)