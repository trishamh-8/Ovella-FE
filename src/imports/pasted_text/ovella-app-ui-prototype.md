Design a complete mobile app UI prototype for "Ovella" — an AI-powered women's 
hormonal health platform for the Indonesian market. The app helps women track 
menstrual cycles, hormonal symptoms, get AI-powered insights, and bridge 
self-monitoring with clinical consultation.

━━━━━━━━━━━━━━━━━━━━━━━━
BRAND & VISUAL IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━
App name: Ovella
Logo: A soft flower/blob shape with 5 petals, gradient fill from warm pink 
(#FF6B9D) top-left to soft lavender (#C4A8F5) bottom-right, with a dark circular 
center (#1A1A1A) containing a glossy hot-pink droplet icon (#FF2D78).

Color Palette (extract directly from logo):
- Primary Pink: #FF6B9D
- Primary Lavender: #C4A8F5
- Accent Hot Pink: #FF2D78
- Deep Blush: #F9A8C9
- Soft Lilac: #E5D4FF
- Background: #FAFAFA (light mode), #0F0F0F (dark mode)
- Surface cards: #FFFFFF with subtle shadow
- Text Primary: #1A1A1A
- Text Secondary: #6B6B6B
- Text Tertiary: #A8A8A8

Typography:
- Font: SF Pro Display (iOS-native feel) or Inter
- Heading: 28–34px Bold
- Subheading: 17–20px Semibold
- Body: 15–16px Regular
- Caption: 12–13px Regular, color #6B6B6B

Design Language:
- Style: iOS 17 native-inspired + Halodoc cleanliness
- Rounded corners: 16–24px on cards, 12px on buttons, 100px on pills/tags
- Gradient usage: Apply gradient accents on CTAs, progress rings, phase badges, 
  hero cards — NOT on every element (keep it minimal and elegant)
- Shadows: Soft, low-opacity (box-shadow: 0 4px 20px rgba(196,168,245,0.15))
- Spacing: 16px base grid, 24px section padding, 8px component gap
- Icons: SF Symbols style (stroke-based, 1.5px weight, rounded caps)
- Bottom navigation: 5 tabs with icon + label
- Status bar: iOS-style, light content on colored headers
- Safe area: Respect iPhone notch/dynamic island and home indicator

━━━━━━━━━━━━━━━━
SCREEN INVENTORY
━━━━━━━━━━━━━━━━
Create ALL of the following screens, connected as a navigable prototype:

── ONBOARDING (5 screens) ──────────────────────────────
1. Splash Screen
   - Ovella logo centered, gradient background (pink→lavender), app tagline 
     below: "Kenali tubuhmu, dari dalam."
   - Animated logo pulse (describe as static frame)

2. Onboarding Slide 1 — Track Your Cycle
   - Full-bleed illustration area (soft gradient background)
   - Headline: "Pantau Siklus Hormonalmu"
   - Body: "Catat menstruasi, gejala, dan pola harianmu dalam satu tempat."
   - Progress dots (3 total), Next button (gradient pill)

3. Onboarding Slide 2 — AI Hormonal Intelligence
   - Headline: "AI yang Belajar Darimu"
   - Body: "Model AI Ovella membangun profil hormonal unikmu sendiri, 
     bukan rata-rata orang lain."
   - Show mini illustration of AI brain/wave pattern with pink gradient

4. Onboarding Slide 3 — Bridge to Your Doctor
   - Headline: "Jembatan ke Doktermu"
   - Body: "Bawa laporan gejala terstruktur ke konsultasi berikutnya."
   - CTA: "Mulai Sekarang" (gradient button, full width)

5. Profile Setup Screen
   - Title: "Kenalkan dirimu ke Ovella"
   - Form fields (iOS-style, rounded, soft border):
     * Nama lengkap
     * Tanggal lahir (date picker)
     * Panjang siklus rata-rata (slider: 21–45 hari)
     * Kondisi yang pernah didiagnosis (multi-select chips: PCOS, Endometriosis, 
       Tiroid, Akne Hormonal, Tidak ada, Belum tahu)
     * Tujuan utama (single select: Memahami siklus, Program hamil, 
       Kelola gejala PCOS, Persiapan konsultasi dokter)
   - Progress bar top: Step 1 of 2
   - Continue button (gradient, fixed bottom)

── MAIN NAVIGATION (Bottom Tab Bar) ──────────────────
Tab 1: Beranda (Home icon)
Tab 2: Siklus (Cycle/calendar icon)  
Tab 3: Ovella AI (sparkle/AI icon — center, slightly elevated, gradient fill)
Tab 4: Laporan (chart icon)
Tab 5: Profil (person icon)

── HOME (Tab 1) ─────────────────────────────────────
6. Home Screen
   - Top bar: "Selamat pagi, [Nama] 👋" left, notification bell right
   - Hero Card (gradient pink→lavender, rounded 24px, shadow):
     * Phase badge: "🌸 Fase Folikular — Hari ke-7"
     * Headline: "Hormonal Weather: Energi Tinggi"
     * Subtext: "Estrogen sedang naik. Waktu terbaik untuk produktivitas 
       dan olahraga intensitas tinggi."
     * Mini 7-day forecast strip (icons for energy/mood/fertility per day)
   - Quick Log section (horizontal scroll of pills):
     * + Catat Gejala | + Suasana Hati | + Kulit Hari Ini | + Energi
   - Today's Insight card (white card, left accent bar gradient):
     * Small Ovella AI avatar (gradient circle with sparkle)
     * "Ovella mendeteksi pola luteal lebih pendek bulan lalu. 
       Cek insight lengkap →"
   - Upcoming section: "3 hari menuju ovulasi" with fertility window bar
   - Bottom: "Tanyakan Ovella AI" persistent floating button (gradient pill)

── CYCLE TRACKER (Tab 2) ────────────────────────────
7. Cycle Calendar Screen
   - Month view calendar (custom, iOS-inspired)
   - Color coding per day:
     * 🔴 Menstruasi (hot pink fill)
     * 🌸 Folikular (light pink)
     * ✨ Ovulasi (gradient sparkle ring)
     * 🌙 Luteal (soft lavender)
     * ⚪ Predicted (dashed outline)
   - Below calendar: Phase summary card for selected day
   - "Catat Hari Ini" button (gradient, bottom)

8. Daily Log Entry Screen (shown as bottom sheet / full screen)
   - Date header: "Sabtu, 6 Juni 2026"
   - Section 1 — Menstruasi: toggle + flow intensity (none/light/medium/heavy)
   - Section 2 — Gejala Fisik: symptom chips grid (kram, kembung, nyeri payudara, 
     sakit kepala, jerawat, mual, kelelahan)
   - Section 3 — Suasana Hati: emoji scale (5 emotions with labels)
   - Section 4 — Energi: horizontal slider with emoji endpoints
   - Section 5 — Kulit: condition selector (normal, berminyak, kering, berjerawat)
   - Section 6 — Tidur: hours + quality rating (1–5 stars)
   - Notes field (optional, placeholder: "Catatan bebas untuk harimu...")
   - Save button (gradient, full width)

── OVELLA AI HUB (Tab 3 — Center Featured Tab) ───────
9. AI Hub Screen
   - Header: gradient background, "Ovella AI" title + sparkle icon
   - Hormonal Fingerprint Card (premium feature, glassmorphism style):
     * Title: "Hormonal Fingerprint™ Kamu"
     * Radar/spider chart with 6 axes: Prediksi Akurasi, Konsistensi Siklus, 
       Keseimbangan Hormon, Pola Mood, Kualitas Tidur, Skor Gejala
     * "Diperbarui 3 hari lalu" caption
     * "Lihat Detail Lengkap →" link
   - Feature Cards Grid (2-column):
     * 🤖 Tanya Ovella AI (chat bubble icon, gradient card)
     * 📊 Analisis Pola Hormonal (chart icon)
     * 📋 Laporan untuk Dokter (document icon)
     * 🔮 Prediksi Siklus Berikutnya (calendar sparkle)
     * 🌙 Luteal Phase Intelligence (moon icon)
     * 💡 Hormonal Twin Match (people icon)
   - Banner: "Hormonal Fingerprint™ tersedia di Ovella Premium" 
     with upgrade CTA

── REPORTS (Tab 4) ──────────────────────────────────
10. Reports Dashboard Screen
    - Header: "Laporanmu" + date range selector (dropdown: 1 bulan/3 bulan/6 bulan)
    - Summary strip: 3 stat cards horizontal scroll
      * Panjang Siklus Rata-rata: 29 hari
      * Durasi Menstruasi: 5 hari
      * Skor Konsistensi: 78%
    - Charts section:
      * Cycle length trend (line chart, gradient fill under line)
      * Symptom frequency heatmap (calendar-style, pink intensity)
      * Mood pattern by phase (grouped bar chart)
    - "Buat Laporan Dokter" CTA card (gradient, with doctor icon)
      * "Ekspor PDF ringkasan 3 bulan terakhir, siap dibawa ke konsultasi"

11. Doctor Report Preview Screen
    - Header: "Laporan Klinik Ovella"
    - Subtitle: "Disiapkan untuk konsultasi — 1 Mar–6 Jun 2026"
    - Sections (card-based, clean document style):
      * Ringkasan Siklus (avg length, regularity score, anomalies detected)
      * Gejala yang Paling Sering Muncul (top 5 with frequency bar)
      * Pola Mood & Energi per Fase
      * Anomali yang Terdeteksi AI (highlighted box, soft red accent)
      * Pertanyaan yang Disarankan untuk Dokter (3 bullet points)
    - Footer: "Ekspor PDF" button (outline) + "Kirim ke Dokter" (gradient)

── PROFILE (Tab 5) ──────────────────────────────────
12. Profile Screen
    - Avatar (gradient circle with initials), name, member since
    - Health Profile card: conditions, cycle length, goals
    - Settings sections (grouped list, iOS-style):
      * Notifikasi & Pengingat
      * Privasi & Keamanan Data
      * Ovella Premium (with gradient badge)
      * Hubungkan Dokter
      * Bantuan & FAQ
      * Tentang Ovella
    - Logout (text button, subtle)

━━━━━━━━━━━━━━━━━━━━━━━━
PROTOTYPE CONNECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━
- Splash → Onboarding 1 → 2 → 3 → Profile Setup → Home
- Home floating button → AI Chat screen
- Tab bar navigates between all 5 main sections
- "Catat Hari Ini" → Daily Log Entry (bottom sheet overlay)
- "Buat Laporan Dokter" → Doctor Report Preview
- AI Hub feature cards each deep-link to respective feature flows

━━━━━━━━━━━━━━━━━━━━━━━━
COMPONENT LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━
Create reusable components:
- GradientButton (full-width + small variant)
- PhaseChip (color-coded per phase)
- SymptomPill (selected/unselected state)
- AIInsightCard (with Ovella sparkle avatar)
- ProgressRing (gradient stroke, cycle day indicator)
- BottomSheet (with drag handle, overlay)
- StatCard (number + label + trend indicator)
- SectionHeader (title + "Lihat semua" link)