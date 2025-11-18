// ===== DATABASE LENSA (DIPERBARUI SESUAI GAMBAR PRODUK SHOPEE) =====
const lensesData = {
    "Clear": { 
        nama: "Clear Lens (Standar)", 
        deskripsi: "Lensa standar berkualitas optik tinggi yang jernih dan bening. Memberikan pandangan natural tanpa bias warna. Dilengkapi lapisan anti-gores dasar dan anti-pantul standar." 
    },
    "Blueray": { 
        nama: "Antiradiasi Blueray", 
        deskripsi: "Wajib untuk pengguna gadget! Lensa ini memblokir sinar biru berbahaya (Blue Light) dari layar HP, Laptop, dan TV LED. Membantu mengurangi mata lelah, sakit kepala, dan menjaga kualitas tidur." 
    },
    "Photochromic": { 
        nama: "Photochromic (Transisi)", 
        deskripsi: "Lensa pintar yang otomatis berubah menjadi gelap (seperti sunglasses) saat terkena sinar matahari (UV) dan kembali bening saat di dalam ruangan. Melindungi mata dari silau matahari." 
    },
    "Bluechromic": { 
        nama: "Bluechromic (2-in-1)", 
        deskripsi: "Lensa Paling Best Seller! Gabungan fitur 'Blueray' + 'Photochromic'. Melindungi mata dari radiasi gadget DI DALAM ruangan, sekaligus berubah gelap saat DI LUAR ruangan. Perlindungan total 24 jam." 
    },
    "Hi-Index": { 
        nama: "Lensa Tipis / Hi-Index (SPH/CYL)", 
        deskripsi: `
            <b>Solusi estetika untuk minus tinggi agar tidak tebal (botol).</b><br>
            Tersedia dalam opsi material:
            <ul class="list-disc list-inside mt-1 mb-1 pl-1 text-xs text-gray-500">
                <li><b>Clear:</b> Tipis Jernih</li>
                <li><b>Blueray:</b> Tipis + Antiradiasi Gadget</li>
                <li><b>Bluechromic:</b> Tipis + Antiradiasi + Berubah Gelap</li>
            </ul>
            <span class="text-xs text-indigo-600 font-bold">Tersedia opsi khusus Cylinder Tinggi (Max -2.00, -4.00, s/d -6.00). Index 1.60 & 1.67.</span>
        `
    },
    "Crizal Rock": { 
        nama: "Essilor Crizal Rock", 
        deskripsi: `
            <b>Lensa Paling Tahan Gores & Tangguh.</b><br>
            Teknologi High-Resistance, 3x lebih tahan gores dari lensa biasa dan sangat mudah dibersihkan dari noda/minyak.<br>
            <b>Opsi Material:</b> Blue Capture (Anti-Blueray) & Transitions Grey.<br>
            <b>Index Tersedia:</b> 1.50 & 1.56.
        `
    },
    "Crizal Sapphire": { 
        nama: "Essilor Crizal Sapphire", 
        deskripsi: `
            <b>Lensa "Invisible" (Hampir Tak Terlihat).</b><br>
            Teknologi anti-pantulan 360° terbaik. Lensa sangat jernih, tidak memantulkan cahaya saat difoto/video call.<br>
            <b>Opsi Material:</b> Blue UV Capture & Transitions Grey.<br>
            <b>Index Tersedia:</b> 1.59 (Polycarbonate) & 1.67 (Sangat Tipis).
        `
    },
    "Anti-Fatigue": { 
        nama: "Anti-Fatigue (Mata Lelah)", 
        deskripsi: `
            <b>Relaksasi untuk Mata Lelah / Pegal.</b><br>
            Desain khusus dengan 'boost zone' di bagian bawah lensa untuk mengistirahatkan otot mata saat fokus jarak dekat lama.<br>
            <b>Merk:</b> HKLens Eyecomfort & Stellify Digieye.<br>
            <b>Index Tersedia:</b> 1.56, 1.61, 1.67.
        `
    },
    "Drive": { 
        nama: "Drive Lenses (Night Vision)", 
        deskripsi: `
            <b>Anti-Silau Lampu Kendaraan (Malam Hari).</b><br>
            Coating khusus yang meminimalisir silau (glare) lampu jalan/mobil lawan. Menyetir malam jadi lebih aman & nyaman.<br>
            <b>Merk:</b> HKLens OptiDrive, Stellify Drive, Essilor Drive.<br>
            <b>Index Tersedia:</b> 1.5, 1.60, 1.67.
        `
    },
    "Optifog": { 
        nama: "Essilor Optifog", 
        deskripsi: `
            <b>Lensa Anti-Embun / Anti-Kabut Terbaik.</b><br>
            Lensa tetap jernih saat pakai masker, minum air panas, atau keluar masuk ruangan ber-AC/olahraga.<br>
            <b>Opsi:</b> Clear & Transitions (Grey/Brown/Green).<br>
            <b>Index Tersedia:</b> 1.5 & 1.59.
        `
    },
    "Progresif": { 
        nama: "Lensa Progresif", 
        deskripsi: "Lensa tanpa batas garis untuk penglihatan 3 zona sekaligus: Jauh (menyetir/jalan), Menengah (komputer), dan Dekat (membaca HP). Solusi estetis pengganti kacamata baca/bifokal tua." 
    },
    "PurePlus": { 
        nama: "Lensa Pure Plus", 
        deskripsi: "Lensa dengan kejernihan ekstra yang meminimalkan distorsi visual. Memberikan ketajaman warna dan kontras yang lebih baik dibandingkan lensa standar." 
    },
    "Sunglasses": { 
        nama: "Sunglasses (Hitam/Warna)", 
        deskripsi: "Lensa dengan warna permanen (Hitam/Coklat/Hijau) yang dilengkapi UV400 Protection. Khusus untuk aktivitas outdoor, liburan, atau fashion statement. Bisa request ukuran minus." 
    }
};

// DATABASE FRAME (LENGKAP)
const glassesData = {
    // === BASIC SERIES ===
    "Kyosi": { nama: "Kyosi", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Full Plastik", bahanGagang: "Full Plastik", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", rekomendasi: "Konan, Tamura" },
    "Kaizu": { nama: "Kaizu", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kyosi, Tamura" },
    "Tamura": { nama: "Tamura", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kyosi" },
    "Konan": { nama: "Konan", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kyosi, Tamura, Hiro" },
    "Hiro": { nama: "Hiro", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Konan, Yoka" },
    "Yoka": { nama: "Yoka", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hiro, Haruna" },
    "Akika": { nama: "Akika", koleksi: "Basic Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Akame, Anya" },
    "Akame": { nama: "Akame", koleksi: "Basic Series", bentuk: "Cat Eye Square", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Akika" },
    "Hitto": { nama: "Hitto", koleksi: "Basic Series", bentuk: "Oval geometric", bahanDepan: "Full Plastik", bahanGagang: "Full Plastik", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Kotak, Lonjong, Hati, Diamond", catatanWajah: "Wajah Bulat lebar tidak disarankan.", rekomendasi: "Himee" },
    "Sanmu": { nama: "Sanmu", koleksi: "Basic Series", bentuk: "Oval semi cat eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Sesuaikan lagi dengan lebar wajah.", rekomendasi: "Miyu, Shika" },
    "Noze": { nama: "Noze", koleksi: "Basic Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Shuji, Akika, Shika" },
    "Shuji": { nama: "Shuji", koleksi: "Basic Series", bentuk: "Oval semi Cat Eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Cocok hidung pesek.", rekomendasi: "Sora, Noze" },
    "Sora": { nama: "Sora", koleksi: "Basic Series", bentuk: "Oval semi cat eye", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah tirus/kecil tidak direkomendasikan.", rekomendasi: "Odate, Siyo, Shuji, Chita" },
    "Siyo": { nama: "Siyo", koleksi: "Basic Series", bentuk: "Oval semi Cat Eye", bahanDepan: "Full Plastik", bahanGagang: "Full Plastik", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Pipi chubby kurang disarankan.", rekomendasi: "Sora, Sanmu, Kaori" },
    "Tamada": { nama: "Tamada", koleksi: "Basic Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Akame" },
    "Chita": { nama: "Chita", koleksi: "Basic Series", bentuk: "Oval", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Najio, Hajime, Kinsei" },
    "Miyu": { nama: "Miyu", koleksi: "Basic Series", info: "Info detail tidak ada.", bentuk: "Oval", ukuranWajah: "Medium" },
    "Odate": { nama: "Odate", koleksi: "Basic Series", bentuk: "Oval", bahanDepan: "Plastik", bahanGagang: "Plastik + Metal", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Sora, Akashi" },
    "Miki": { nama: "Miki", koleksi: "Metal Series", bentuk: "Oval semi Cat Eye", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Tidak disarankan wajah big size.", rekomendasi: "Mine, Mizu, Misawa" },
    "Mine": { nama: "Mine", koleksi: "Metal Series", bentuk: "Cat Eye", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Miki" },
    "Himee": { nama: "Himee", koleksi: "Metal Series", bentuk: "Geometric", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hitto" },
    "Arao": { nama: "Arao", koleksi: "Metal Series", bentuk: "Round", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Kotak, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Misawa, Inabe" },
    "Misawa": { nama: "Misawa", koleksi: "Metal Series", bentuk: "Bulat", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Najio, Hajime, Kinsei" },
    "Osaka": { nama: "Osaka", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Hiromi" },
    "Akita": { nama: "Akita", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", rekomendasi: "Hatsu, Aisai" },
    "Inabe": { nama: "Inabe", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", rekomendasi: "Akita" },
    "Hatsu": { nama: "Hatsu", koleksi: "Metal Series", bentuk: "Square", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", rekomendasi: "Najio, Hajime, Kinsei" },
    "Aisai": { nama: "Aisai", koleksi: "Metal Series", bentuk: "Rectangle", bahanDepan: "Full Metal", bahanGagang: "Full Metal", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah Kotak rahang tajam kurang disarankan.", rekomendasi: "Hatsu, Akita" },
    "Hankai": { nama: "Hankai", koleksi: "Metal Series", bentuk: "Oval", bahanDepan: "Plastik", bahanGagang: "Metal", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Bulat chubby tidak disarankan.", rekomendasi: "Akashi" },
    "Mizu": { nama: "Mizu", koleksi: "Metal Series", info: "Info detail tidak ada.", bentuk: "Oval semi Cat Eye", ukuranWajah: "Medium" },
    "Karia": { nama: "Karia", koleksi: "Double Rim Series", bentuk: "Rectangle", bahanDepan: "Plastik", bahanGagang: "Plastik", per: "Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Konan, Kyosi, Hiro" },
    "Miso": { nama: "Miso", koleksi: "Double Rim Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kaori" },
    "Anya": { nama: "Anya", koleksi: "Double Rim Series", bentuk: "Cat Eye semi kotak", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Akika" },
    "Okimi": { nama: "Okimi", koleksi: "Double Rim Series", bentuk: "Oval semi cat eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kaori, Anya, Haruna, Hiromi" },
    "Hiromi": { nama: "Hiromi", koleksi: "Double Rim Series", bentuk: "Square", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Haruna" },
    "Akashi": { nama: "Akashi", koleksi: "Double Rim Series", bentuk: "Oval", bahanDepan: "Double Rim", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Airi" },
    "Yuji": { nama: "Yuji", koleksi: "Double Rim Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kaori, Miso" },
    "Ayumi": { nama: "Ayumi", koleksi: "Double Rim Series", bentuk: "Cat Eye", bahanDepan: "Plastik", bahanGagang: "Besi", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Shuji, Noze, Hana" },
    "Kaori": { nama: "Kaori", koleksi: "Double Rim Series", info: "Info detail tidak ada.", bentuk: "Cat Eye", ukuranWajah: "Medium" },
    "Shika": { nama: "Shika", koleksi: "TR90 Series", bentuk: "Cat Eye", bahanDepan: "Plastik (TR90)", bahanGagang: "Plastik (TR90)", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "Wajah tirus kurang disarankan.", rekomendasi: "Ayumi, Noze, Shuji" },
    "Inari": { nama: "Inari", koleksi: "TR90 Series", bentuk: "Square", bahanDepan: "TR90", bahanGagang: "TR90", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Untuk wajah lebar", rekomendasiWajah: "Bulat, Oval, Lonjong, Segitiga terbalik/Hati, Diamond", catatanWajah: "-", rekomendasi: "Shizu" },
    "Shizu": { nama: "Shizu", koleksi: "TR90 Series", bentuk: "Square", bahanDepan: "TR90", bahanGagang: "TR90", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Bulat, Oval, Lonjong, Segitiga terbalik/Hati, Diamond", catatanWajah: "-", rekomendasi: "Inari" },
    "Amiko": { nama: "Amiko", koleksi: "TR90 Series", bentuk: "Round", bahanDepan: "TR90 + Metal", bahanGagang: "TR90 + Metal", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Kotak, Oval, Lonjong, Segitiga terbalik/Hati, Diamond", catatanWajah: "-", rekomendasi: "Bomi, Hankai" },
    "Yukai": { nama: "Yukai", koleksi: "Active Progress", bentuk: "Round/Geometris", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kaiho, Kaitou" },
    "Chowa": { nama: "Chowa", koleksi: "Active Progress", bentuk: "Round", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "-", rekomendasi: "Jine, Hiromi" },
    "Ima": { nama: "Ima", koleksi: "Active Progress", bentuk: "Round/Oval (Bayonetta)", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Belum ada" },
    "Hajime": { nama: "Hajime", koleksi: "Active Progress", bentuk: "Rectangle/Square", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hiro, Hoshi" },
    "Kaiho": { nama: "Kaiho", koleksi: "Active Progress", bentuk: "Rectangle/Geometris", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Ada Nosepad", ukuranWajah: "Untuk wajah lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kaitou" },
    "Najio": { nama: "Najio", koleksi: "Sunyata", bentuk: "Square", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hoshi, Hajime" },
    "Kaitou": { nama: "Kaitou", koleksi: "Sunyata", bentuk: "Geometris", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar / Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kaiho, Hitto" },
    "Jine": { nama: "Jine", koleksi: "Sunyata", bentuk: "Round", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "-", rekomendasi: "Chowa, Hanami" },
    "Riyuki": { nama: "Riyuki", koleksi: "Sunyata", bentuk: "Round", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "-", rekomendasi: "Jine, Hanami" },
    "Kinsei": { nama: "Kinsei", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hoshi, Hajime, Najio" },
    "Hoshi": { nama: "Hoshi", koleksi: "Beyond the Shades", bentuk: "Square", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Najio, Hajime, Kinsei" },
    "Hanami": { nama: "Hanami", koleksi: "Beyond the Shades", bentuk: "Bulat", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Oval, Lonjong, Kotak, Hati, Diamond", catatanWajah: "-", rekomendasi: "Jine, Riyuki, Chowa" },
    "Aozora": { nama: "Aozora", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Kecil", rekomendasiWajah: "Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Kinsei" },
    "Meiro": { nama: "Meiro", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke lebar/kecil", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Kasumi" },
    "Yume": { nama: "Yume", koleksi: "Beyond the Shades", bentuk: "Oval (pipih)", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Ukiyo" },
    "Kasumi": { nama: "Kasumi", koleksi: "Beyond the Shades", bentuk: "Square", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Meiro" },
    "Ukiyo": { nama: "Ukiyo", koleksi: "Beyond the Shades", bentuk: "Oval (pipih)", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Yume" },
    "Kizuna": { nama: "Kizuna", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Meiro" },
    "Hika": { nama: "Hika", koleksi: "Beyond the Shades", bentuk: "Cat Eye", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Shika, Noze" },
    "Miura": { nama: "Miura", koleksi: "Beyond the Shades", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Acetate", per: "Tidak Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hoshi, Najio" },
    "Yuna": { nama: "Yuna", koleksi: "Clair", bentuk: "Oval Semi Cat Eye", bahanDepan: "Acetate", bahanGagang: "Besi", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Rona, Shuji" },
    "Jiyo": { nama: "Jiyo", koleksi: "Clair", bentuk: "Square - Clubmaster", bahanDepan: "Acetate + Besi", bahanGagang: "Besi", per: "Sedikit Elastis", nosepad: "Menyatu", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Inabe, Luna" },
    "Luna": { nama: "Luna", koleksi: "Clair", bentuk: "Square semi cat eye", bahanDepan: "Full Besi", bahanGagang: "Full Besi", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Jiyo, Inabe" },
    "Rumi": { nama: "Rumi", koleksi: "Clair", bentuk: "Square", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hoshi" },
    "Rona": { nama: "Rona", koleksi: "Clair", bentuk: "Oval", bahanDepan: "Acetate", bahanGagang: "Besi", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Sora, Amiko" },
    "Rikona": { nama: "Rikona", koleksi: "Refine", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Besi", per: "Tidak Ada Per", nosepad: "Menyatu", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "-" },
    "Meiso": { nama: "Meiso", koleksi: "Refine", bentuk: "Round", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Kotak, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Bomi, Airi" },
    "Naoya": { nama: "Naoya", koleksi: "Refine", bentuk: "Rectangle", bahanDepan: "Acetate", bahanGagang: "Metal", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Yoka, Hajime" },
    "Niji": { nama: "Niji", koleksi: "Refine", bentuk: "Square", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Bulat, Oval, Lonjong, Hati, Diamond", catatanWajah: "-", rekomendasi: "Najio, Hoshi" },
    "Reika": { nama: "Reika", koleksi: "Refine", bentuk: "Cat Eye", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium ke Lebar", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Noze, Shika" },
    "Rune": { nama: "Rune", koleksi: "Refine", bentuk: "Round", bahanDepan: "Full Acetate", bahanGagang: "Full Acetate", per: "Sedikit Elastis", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Hankai, Najio, Kinsei" },
    "Piyo": { nama: "Piyo", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90", bahanGagang: "TR90", per: "Tidak Ada Per", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Miyu" },
    "Geumi": { nama: "Geumi", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "Metal", bahanGagang: "Metal", per: "Tidak Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Yuki" },
    "Yuki": { nama: "Yuki", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90 + Metal", bahanGagang: "TR90 + Metal", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Geumi" },
    "Doci": { nama: "Doci", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90", bahanGagang: "TR90", per: "Ada Per", nosepad: "Tanam", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Shuji" },
    "Nalla": { nama: "Nalla", koleksi: "Feline", bentuk: "Cat Eye", bahanDepan: "TR90 + Metal", bahanGagang: "TR90 + Metal", per: "Ada Per", nosepad: "Ada Nosepad", ukuranWajah: "Medium", rekomendasiWajah: "Semua bentuk wajah", catatanWajah: "-", rekomendasi: "Anya, Akika, Geumi, Yuki" },
    "Kira": { nama: "Kira", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Oval", ukuranWajah: "Medium" },
    "Mori": { nama: "Mori", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Oval", ukuranWajah: "Medium" },
    "Sena": { nama: "Sena", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Oval semi Cat Eye", ukuranWajah: "Medium" },
    "Hana": { nama: "Hana", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Cat Eye", ukuranWajah: "Medium" },
    "Suwa": { nama: "Suwa", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Square", ukuranWajah: "Medium" },
    "Chami": { nama: "Chami", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Oval", ukuranWajah: "Medium" },
    "Airi": { nama: "Airi", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Round", ukuranWajah: "Medium" },
    "Haruna": { nama: "Haruna", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Square", ukuranWajah: "Medium" },
    "Bomi": { nama: "Bomi", koleksi: "General Series", info: "Info detail tidak ada.", bentuk: "Round", ukuranWajah: "Medium" }
};


const allGlasses = [
    { name: 'Shuji', type: 'table', area: 'A1' }, { name: 'Noze', type: 'table', area: 'A1' }, { name: 'Hajime', type: 'table', area: 'B1' }, { name: 'Kaiho', type: 'table', area: 'B1' }, { name: 'Najio', type: 'table', area: 'C1' }, { name: 'Kinsei', type: 'table', area: 'D1' }, { name: 'Hanami', type: 'table', area: 'D1' }, { name: 'Aozora', type: 'table', area: 'D1' }, { name: 'Chowa', type: 'table', area: 'E1' }, { name: 'Ima', type: 'table', area: 'E1' }, { name: 'Kaori', type: 'table', area: 'F1' }, { name: 'Okimi', type: 'table', area: 'F1' }, { name: 'Shika', type: 'table', area: 'G1' }, { name: 'Mizu', type: 'table', area: 'G1' }, { name: 'Hiromi', type: 'table', area: 'G1' }, { name: 'Ayumi', type: 'table', area: 'H1' }, { name: 'Yuji', type: 'table', area: 'H1' }, { name: 'Haruna', type: 'table', area: 'I1' }, { name: 'Airi', type: 'table', area: 'I1' }, { name: 'Naoya', type: 'table', area: 'A2' }, { name: 'Bomi', type: 'table', area: 'C2' }, { name: 'Sora', type: 'table', area: 'F2' }, { name: 'Siyo', type: 'table', area: 'F2' }, { name: 'Najio', type: 'table', area: 'G2' }, { name: 'Kaitou', type: 'table', area: 'G2' }, { name: 'Jine', type: 'table', area: 'G2' }, { name: 'Riyuki', type: 'table', area: 'G2' }, { name: 'Akika', type: 'table', area: 'H2' }, { name: 'Akame', type: 'table', area: 'H2' }, { name: 'Hankai', type: 'table', area: 'I2' }, { name: 'Tamada', type: 'table', area: 'I2' }, { name: 'Rikona', type: 'table', area: 'A3' }, { name: 'Meiso', type: 'table', area: 'A3' }, { name: 'Rune', type: 'table', area: 'A3' }, { name: 'Sanmu', type: 'table', area: 'C3' }, { name: 'Piyo', type: 'stacked', area: 'F3' }, { name: 'Hoshi', type: 'table', area: 'G3' }, { name: 'Miura', type: 'table', area: 'G3' }, { name: 'Yoka', type: 'table', area: 'G3' }, { name: 'Chita', type: 'table', area: 'H3' }, { name: 'Hiro', type: 'table', area: 'H3' }, { name: 'Arao', type: 'table', area: 'I3' }, { name: 'Misawa', type: 'table', area: 'I3' }, { name: 'Osaka', type: 'table', area: 'I3' }, { name: 'Kira', type: 'table', area: 'A4' }, { name: 'Mori', type: 'table', area: 'A4' }, { name: 'Chami', type: 'table', area: 'C4' }, { name: 'Suwa', type: 'table', area: 'C4' }, { name: 'Doci', type: 'stacked', area: 'F4' }, { name: 'Yuki', type: 'stacked', area: 'F4' }, { name: 'Yukai', type: 'stacked', area: 'G4' }, { name: 'Sora', type: 'stacked', area: 'G4' }, { name: 'Tamura', type: 'table', area: 'H4' }, { name: 'Karia', type: 'table', area: 'H4' }, { name: 'Inabe', type: 'table', area: 'I4' }, { name: 'Akita', type: 'table', area: 'I4' }, { name: 'Hatsu', type: 'table', area: 'I4' }, { name: 'Aisai', type: 'table', area: 'I4' }, { name: 'Miyu', type: 'table', area: 'A5' }, { name: 'Miso', type: 'stacked', area: 'C5' }, { name: 'Anya', type: 'stacked', area: 'C5' }, { name: 'Geumi', type: 'stacked', area: 'F5' }, { name: 'Nalla', type: 'stacked', area: 'F5' }, { name: 'Miki', type: 'stacked', area: 'G5' }, { name: 'Hana', type: 'table', area: 'H5' }, { name: 'Sena', type: 'table', area: 'H5' }, { name: 'Hiro', type: 'table', area: 'I5' }, { name: 'Himee', type: 'table', area: 'I5' }, { name: 'Yuna', type: 'table', area: 'A6' }, { name: 'Rona', type: 'table', area: 'A6' }, { name: 'Rumi', type: 'table', area: 'C6' }, { name: 'Jiyo', type: 'table', area: 'D6' }, { name: 'Luna', type: 'table', area: 'D6' }, { name: 'Amiko', type: 'table', area: 'H6' }, { name: 'Inari', type: 'table', area: 'H6' }, { name: 'Shizu', type: 'table', area: 'H6' }, { name: 'Meiro', type: 'table', area: 'H7' }, { name: 'Kizuna', type: 'table', area: 'H7' }, { name: 'Kasumi', type: 'table', area: 'H7' }, { name: 'Yume', type: 'table', area: 'I7' }, { name: 'Ukiyo', type: 'table', area: 'I7' }, { name: 'Hika', type: 'table', area: 'I7' }
];

// === AMBIL SEMUA ELEMEN ===
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const resultCount = document.getElementById('resultCount');
const resultList = document.getElementById('resultList');
const cells = document.querySelectorAll('.cell');

// Elemen Filter
const filterShape = document.getElementById('filterShape');
const filterSize = document.getElementById('filterSize');
const filterCollection = document.getElementById('filterCollection');
const filterFrameShape = document.getElementById('filterFrameShape');
const applyFilterBtn = document.getElementById('applyFilterBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');

// Elemen Popup & Detail
const selectedInfo = document.getElementById('selectedInfo');
const selectedArea = document.getElementById('selectedType');
const selectedType = document.getElementById('selectedArea'); // Dibalik karena di HTML salah penempatan ID
const detailsContainer = document.getElementById('detailsContainer'); 
const closeBtn = document.getElementById('closeBtn');
const modalLensOverlay = document.getElementById('modal-lens-overlay');
const lensInfoBtn = document.getElementById('lensInfoBtn'); 
const modalLensCloseBtn = document.getElementById('modal-lens-close-btn');

// --- FUNGSI HELPER POPUP ---
function openLensModal(title, type) {
    document.getElementById('modal-lens-title').textContent = title;
    document.getElementById('modal-lens-type').textContent = type;
    modalLensOverlay.classList.remove('hidden');
    modalLensOverlay.classList.add('flex');
}
function closeLensModal() {
    modalLensOverlay.classList.add('hidden');
    modalLensOverlay.classList.remove('flex');
    document.getElementById('modal-lens-details').innerHTML = '';
}


// === EVENT LISTENER TOMBOL LENSA (Buka Popup) ===
lensInfoBtn.addEventListener('click', () => {
    cells.forEach(c => c.classList.remove('selected')); 
    document.getElementById('selectedInfo').classList.add('hidden'); 
    document.getElementById('modal-lens-details').innerHTML = ''; 
    
    const modalContent = document.getElementById('modal-lens-details');
    
    const howToOrderHtml = `
        <div class="space-y-4 mb-6">
            
            <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r shadow-sm">
                <div class="flex gap-3">
                    <span class="text-2xl">🎯</span>
                    <div class="w-full">
                        <h3 class="font-bold text-green-800 mb-2 text-base">Bingung Pilih Lensa? Cek di sini!</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                            <div class="bg-white p-2 rounded border border-green-200 hover:shadow-md transition"><div class="font-bold text-gray-700 mb-1">💻 Sering Depan Laptop/HP</div><ul class="list-disc list-inside text-gray-600 ml-1"><li><b>Blueray:</b> (Paling Hemat)</li><li><b>Bluechromic:</b> (Best Seller - 2 in 1)</li><li><b>Anti-Fatigue:</b> (Jika mata cepat lelah)</li></ul></div>
                            <div class="bg-white p-2 rounded border border-green-200 hover:shadow-md transition"><div class="font-bold text-gray-700 mb-1">☀️ Sering Aktivitas Outdoor</div><ul class="list-disc list-inside text-gray-600 ml-1"><li><b>Bluechromic:</b> (Berubah gelap otomatis)</li><li><b>Photochromic:</b> (Berubah gelap, standard)</li><li><b>Sunglasses:</b> (Hitam Permanen/Liburan)</li></ul></div>
                            <div class="bg-white p-2 rounded border border-green-200 hover:shadow-md transition"><div class="font-bold text-gray-700 mb-1">🚗 Sering Nyetir (Malam/Siang)</div><ul class="list-disc list-inside text-gray-600 ml-1"><li><b>Drive Lens:</b> (Anti silau lampu mobil lawan)</li><li><b>Crizal Sapphire:</b> (Pandangan jernih maksimal)</li></ul></div>
                            <div class="bg-white p-2 rounded border border-green-200 hover:shadow-md transition"><div class="font-bold text-gray-700 mb-1">🛡️ Ingin Awet & Tahan Gores</div><ul class="list-disc list-inside text-gray-600 ml-1"><li><b>Crizal Rock:</b> (Tahan gores 3x lipat)</li><li><b>Crizal Sapphire:</b> (Mudah dibersihkan)</li></ul></div>
                            <div class="bg-white p-2 rounded border border-green-200 hover:shadow-md transition col-span-1 sm:col-span-2"><div class="font-bold text-gray-700 mb-1">👓 Minus Tinggi (Di atas -4.00)</div><p class="text-gray-600 ml-1">Wajib pilih opsi <b>Hi-Index 1.67</b> di jenis lensa apapun agar kacamata tidak tebal & berat.</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r shadow-sm text-xs sm:text-sm">
                <div class="flex gap-3">
                    <span class="text-xl">📝</span>
                    <div>
                        <h3 class="font-bold text-yellow-800 mb-1">Cara Tulis Resep (Di Catatan/Chat)</h3>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                            <div class="bg-white p-2 rounded border border-yellow-200">
                                <span class="font-bold text-gray-700 block">Mata Normal:</span>
                                <span class="text-gray-500">Cukup tulis "Normal / Plano"</span>
                            </div>
                            <div class="bg-white p-2 rounded border border-yellow-200">
                                <span class="font-bold text-gray-700 block">Ada Minus/Silinder:</span>
                                <span class="text-gray-500">R: -2.00 Cyl -1.00 Ax 90<br>L: -1.50</span>
                                <div class="mt-1 text-[10px] text-red-500 font-bold">*Wajib sertakan AXIS (Ax) jika Silinder!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r shadow-sm text-xs sm:text-sm">
                <div class="flex gap-3">
                    <span class="text-xl">🔍</span>
                    <div>
                        <h3 class="font-bold text-blue-800 mb-2">Kamus "Index" (Penipisan Lensa)</h3>
                        <p class="text-gray-600 mb-3 leading-relaxed">Bayangkan index itu seperti <b>"Kepadatan"</b>. Semakin tinggi angkanya, lensa semakin padat, tipis, dan ringan.</p>
                        <div class="grid grid-cols-1 gap-2">
                            <div class="flex items-center bg-white p-2 rounded border border-blue-100">
                                <div class="w-14 font-bold text-blue-600 text-center border-r border-gray-200 pr-2 mr-2 text-xs">Index<br>1.50 / 1.56</div>
                                <div><span class="font-bold text-gray-700">Lensa Standar</span><p class="text-gray-500 text-[11px]">Paling hemat. Aman & bagus untuk minus kecil (0 s/d -2.00).</p></div>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded border border-blue-100">
                                <div class="w-14 font-bold text-blue-600 text-center border-r border-gray-200 pr-2 mr-2 text-xs">Index<br>1.59 / 1.60</div>
                                <div><span class="font-bold text-gray-700">Lensa Tipis (High Index)</span><p class="text-gray-500 text-[11px]">Lebih tipis ~20% dari standar. <span class="text-blue-600 font-semibold">Wajib buat frame Besi/Metal</span> biar lensa gak nongol (offside).</p></div>
                            </div>
                            <div class="flex items-center bg-white p-2 rounded border border-blue-100">
                                <div class="w-14 font-bold text-blue-600 text-center border-r border-gray-200 pr-2 mr-2 text-xs">Index<br>1.67</div>
                                <div><span class="font-bold text-gray-700">Lensa Super Tipis</span><p class="text-gray-500 text-[11px]">Paling tipis & ringan (~40% lebih tipis). Solusi "anti pantat botol" buat minus tinggi (-4.00 ke atas).</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        <div class="border-b-2 border-gray-200 pb-2 mb-4 mt-8">
            <h3 class="font-bold text-xl text-gray-800">📖 Katalog Fitur Lensa</h3>
        </div>
    `;
    
    modalContent.innerHTML += howToOrderHtml;

    // 2. LOOP DATABASE LENSA
    for (const key in lensesData) {
        const data = lensesData[key];
        const detailHtml = `
            <div class="p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3 hover:border-blue-400 transition group">
                <h3 class="font-bold text-base text-blue-700 mb-1 group-hover:text-blue-800">${data.nama}</h3>
                <div class="text-sm text-gray-600 leading-relaxed">${data.deskripsi}</div>
            </div>
        `;
        modalContent.innerHTML += detailHtml;
    }
    
    openLensModal("💁‍♀️ Panduan & Rekomendasi Lensa", "Pilih lensa yang pas dengan aktivitasmu");
});

// === EVENT LISTENER DENAH (Buka Panel Biru) ===
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const names = cell.dataset.names;
        if (!names) return;

        const isStacked = cell.classList.contains('yellow'); // Cek class 'yellow' untuk stacked
        const namesList = names.split(',');
        
        document.querySelectorAll('.cell').forEach(c => c.classList.remove('selected'));
        cell.classList.add('selected');
        
        document.getElementById('modal-lens-overlay').classList.add('hidden'); 
        document.getElementById('modal-lens-overlay').classList.remove('flex');

        document.getElementById('selectedArea').textContent = isStacked ? '🟨 Display Ditumpuk' : (cell.classList.contains('brown') ? '🟫 Clip-On / Premium' : '⬜ Display di Meja');
        document.getElementById('selectedType').textContent = `📍 Area: ${names.replace(/,/g, ', ').replace(/<br\/>/g, ' ')}`;
        
        document.getElementById('detailsContainer').innerHTML = ''; 

        namesList.forEach(nameStr => {
            let name = nameStr.trim().replace('(Nosepad)', '');
            if (name === 'Kosong') {
                document.getElementById('detailsContainer').innerHTML += '<p class="text-gray-600">Box ini kosong.</p>';
                return;
            }
            const data = glassesData[name]; 
            
            if (data) {
                let detailHtml = '';
                const koleksiBadge = data.koleksi ? 
                    `<span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full mb-1 inline-block border border-indigo-200 font-semibold">${data.koleksi}</span>` : '';

                if (data.info) {
                    detailHtml = `<div class="p-2 bg-gray-100 rounded">${koleksiBadge}<h3 class="font-bold text-base text-gray-900">${data.nama}</h3><p class="text-gray-600">${data.info}</p></div>`;
                } else {
                    detailHtml = `
                        <div class="p-2 bg-blue-100 rounded">
                            <div class="flex justify-between items-start">
                                <div>
                                    ${koleksiBadge}
                                    <h3 class="font-bold text-base text-gray-900">${data.nama}</h3>
                                </div>
                            </div>
                            <div class="mt-1">
                                <h4 class="font-semibold text-gray-800 mb-1 underline decoration-blue-300">Spesifikasi Fisik:</h4>
                                <dl class="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <dt class="font-semibold text-gray-700">Bentuk:</dt><dd class="text-gray-800">${data.bentuk}</dd>
                                    <dt class="font-semibold text-gray-700">Per:</dt><dd class="text-gray-800">${data.per}</dd>
                                    <dt class="font-semibold text-gray-700">Depan:</dt><dd class="text-gray-800">${data.bahanDepan}</dd>
                                    <dt class="font-semibold text-gray-700">Nosepad:</dt><dd class="text-gray-800">${data.nosepad}</dd>
                                    <dt class="font-semibold text-gray-700">Gagang:</dt><dd class="text-gray-800">${data.bahanGagang}</dd>
                                </dl>
                            </div>
                            <div class="mt-2 pt-2 border-t border-blue-200">
                                <h4 class="font-semibold text-gray-800 mb-1 underline decoration-blue-300">Rekomendasi Wajah:</h4>
                                <dl class="grid grid-cols-2 gap-x-4 gap-y-1">
                                    <dt class="font-semibold text-gray-700">Ukuran Wajah:</dt><dd class="text-gray-800 font-bold">${data.ukuranWajah}</dd>
                                    <dt class="font-semibold text-gray-700 col-span-2 mt-1">Cocok Untuk:</dt><dd class="text-gray-800 col-span-2">${data.rekomendasiWajah}</dd>
                                    <dt class="font-semibold text-gray-700 col-span-2 mt-1">Catatan:</dt><dd class="text-gray-800 col-span-2">${data.catatanWajah}</dd>
                                </dl>
                            </div>
                            <div class="mt-2 pt-2 border-t border-blue-200">
                                <h4 class="font-semibold text-gray-800 mb-1 underline decoration-blue-300">Rekomendasi Frame Mirip:</h4>
                                <p class="text-gray-800">${data.rekomendasi}</p>
                            </div>
                        </div>
                    `;
                }
                document.getElementById('detailsContainer').innerHTML += detailHtml;
            } else {
                document.getElementById('detailsContainer').innerHTML += `<div class="p-2 bg-gray-100 rounded"><h3 class="font-bold text-base text-gray-900">${name}</h3><p class="text-gray-600">Info detail untuk item ini tidak tersedia.</p></div>`;
            }
        });
        
        document.getElementById('selectedInfo').classList.remove('hidden'); 
    });
});
document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('selectedInfo').classList.add('hidden');
    document.querySelectorAll('.cell').forEach(c => c.classList.remove('selected'));
    document.getElementById('detailsContainer').innerHTML = ''; 
});
document.getElementById('modal-lens-close-btn').addEventListener('click', closeLensModal);
document.getElementById('modal-lens-overlay').addEventListener('click', (e) => { if (e.target === document.getElementById('modal-lens-overlay')) { closeLensModal(); } });

// === EVENT LISTENER SEARCH ===
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.cell').forEach(cell => { cell.classList.remove('highlighted'); });

    if (term) {
        const filteredNames = Object.keys(glassesData).filter(name => name.toLowerCase().includes(term));
        const filtered = filteredNames.map(name => {
            const glassInLayout = document.getElementById('detailsContainer').innerHTML.includes(name); // Cari di layout
            return { name: name, type: glassInLayout ? 'table' : 'database', area: 'N/A' };
        });

        if (filtered.length > 0) {
            document.getElementById('searchResults').classList.remove('hidden');
            document.getElementById('resultCount').textContent = `📍 Ditemukan: ${filtered.length} item`;
            let html = '';
            filtered.slice(0, 5).forEach(item => { html += `<div class="text-sm flex items-center gap-2"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span>${item.name}</span><span class="text-xs text-gray-600">- ${item.type === 'database' ? 'ℹ️ Database' : '✅ Di Denah'}</span></div>`; });
            if (filtered.length > 5) { html += `<div class="text-xs text-gray-500 mt-1">+${filtered.length - 5} lainnya...</div>`; }
            document.getElementById('resultList').innerHTML = html;

            document.querySelectorAll('.cell').forEach(cell => {
                const names = cell.dataset.names?.split(',') || [];
                if (names.some(name => name.toLowerCase().includes(term))) { cell.classList.add('highlighted'); }
            });
        } else {
            document.getElementById('searchResults').classList.add('hidden');
        }
    } else {
        document.getElementById('searchResults').classList.add('hidden');
    }
});

// ===== LOGIKA FILTER KATEGORI (FUZZY LOGIC) =====
document.getElementById('filterCollection').addEventListener('change', populateCollectionDropdown); // Untuk menghindari error saat load

function populateCollectionDropdown() {
    const collections = new Set();
    Object.values(glassesData).forEach(data => { if (data.koleksi) collections.add(data.koleksi); });
    const sortedCollections = Array.from(collections).sort();
    document.getElementById('filterCollection').innerHTML = '<option value="">Semua Koleksi</option>';
    sortedCollections.forEach(col => {
        const option = document.createElement('option');
        option.value = col;
        option.textContent = col;
        document.getElementById('filterCollection').appendChild(option);
    });
}

function populateFrameShapeDropdown() {
    const shapes = new Set();
    Object.values(glassesData).forEach(data => {
        if (data.bentuk) {
            const complexShapes = data.bentuk.split('/').map(s => s.trim().replace('(pipih)', '').replace('(Bayonetta)', '').trim());
            complexShapes.forEach(shape => {
                if (shape.includes("Cat Eye")) shapes.add("Cat Eye");
                else if (shape.includes("Square")) shapes.add("Square");
                else if (shape.includes("Round") || shape.includes("Bulat")) shapes.add("Round");
                else if (shape.includes("Rectangle")) shapes.add("Rectangle");
                else if (shape.includes("Oval")) shapes.add("Oval");
                else if (shape.includes("Geometric")) shapes.add("Geometric");
                else if (shape.includes("Clubmaster")) shapes.add("Clubmaster");
                else shapes.add(shape);
            });
        }
    });
    const sortedShapes = Array.from(shapes).sort();
    document.getElementById('filterFrameShape').innerHTML = '<option value="">Semua Model</option>';
    sortedShapes.forEach(shape => {
        const option = document.createElement('option');
        option.value = shape;
        option.textContent = shape;
        document.getElementById('filterFrameShape').appendChild(option);
    });
}
populateCollectionDropdown();
populateFrameShapeDropdown();


// --- LOGIKA FILTER UTAMA (DIPERBAIKI) ---
document.getElementById('applyFilterBtn').addEventListener('click', () => {
    const selectedShape = filterShape.value.toLowerCase();
    const selectedSize = filterSize.value.toLowerCase();
    const selectedCollection = filterCollection.value;
    const selectedFrameShape = filterFrameShape.value;

    document.querySelectorAll('.cell').forEach(c => c.classList.remove('highlighted'));
    searchInput.value = '';

    if (!selectedShape && !selectedSize && !selectedCollection && !selectedFrameShape) {
        alert("Silakan pilih minimal satu filter!");
        return;
    }

    const matches = [];

    for (const [key, data] of Object.entries(glassesData)) {
        if (!data.rekomendasiWajah && !data.ukuranWajah && !data.koleksi && !data.bentuk) continue;

        let shapeMatch = true;
        let sizeMatch = true;
        let collectionMatch = true;
        let frameShapeMatch = true;

        const dataFrameBentuk = data.bentuk ? data.bentuk.toLowerCase() : "";

        // 1. Cek Kecocokan BENTUK WAJAH (Tetap strict untuk bentuk wajah user)
        if (selectedShape) {
            const recWajah = data.rekomendasiWajah ? data.rekomendasiWajah.toLowerCase() : "";
            const isUniversal = recWajah.includes('semua bentuk wajah');
            const isSpecific = recWajah.includes(selectedShape);
            if (!isUniversal && !isSpecific) { shapeMatch = false; }
        }

        // 2. Cek Kecocokan UKURAN WAJAH (Fleksibel: menggunakan .includes)
        if (selectedSize) {
            const ukWajah = data.ukuranWajah ? data.ukuranWajah.toLowerCase() : "";
            if (!ukWajah.includes(selectedSize)) { sizeMatch = false; }
        }

        // 3. Cek Kecocokan KOLEKSI (Strict: harus sama persis)
        if (selectedCollection && data.koleksi !== selectedCollection) {
            collectionMatch = false;
        }

        // 4. Cek Kecocokan MODEL FRAME (FUZZY: Menggunakan .includes untuk variasi bentuk)
        if (selectedFrameShape) {
            const selectedShapeLower = selectedFrameShape.toLowerCase();
            // Jika memilih bentuk dasar (Round/Square/Oval/Rect/Cat Eye), cek apakah kata kunci ada di deskripsi bentuk.
            if (!dataFrameBentuk.includes(selectedShapeLower.split(' ')[0].toLowerCase()) && !dataFrameBentuk.includes(selectedShapeLower.split('/')[0].toLowerCase())) {
                 frameShapeMatch = false;
            }
        }

        if (shapeMatch && sizeMatch && collectionMatch && frameShapeMatch) {
            matches.push(key);
        }
    }

    // Tampilkan Hasil
    if (matches.length > 0) {
        document.querySelectorAll('.cell').forEach(cell => {
            const names = cell.dataset.names?.split(',') || [];
            if (names.some(name => matches.includes(name.trim()))) { cell.classList.add('highlighted'); }
        });

        document.getElementById('searchResults').classList.remove('hidden');
        document.getElementById('resultCount').textContent = `🎯 Rekomendasi: ${matches.length} Frame Cocok`;
        
        const listHtml = matches.map(name => 
            `<span class="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-1 mb-1 border border-indigo-200">${name}</span>`
        ).join('');
        
        document.getElementById('resultList').innerHTML = `<div class="flex flex-wrap">${listHtml}</div>`;
        
    } else {
        document.getElementById('searchResults').classList.remove('hidden');
        document.getElementById('resultCount').textContent = "❌ Tidak ditemukan";
        document.getElementById('resultList').innerHTML = "<p class='text-sm text-gray-600'>Tidak ada frame yang pas dengan kombinasi filter ini.</p>";
    }
});

// --- LOGIKA RESET ---
document.getElementById('resetFilterBtn').addEventListener('click', () => {
    filterShape.value = "";
    filterSize.value = "";
    filterCollection.value = ""; 
    filterFrameShape.value = ""; 
    searchInput.value = ""; 
    
    document.querySelectorAll('.cell').forEach(c => {
        c.classList.remove('highlighted');
        c.classList.remove('selected'); 
    });
    
    document.getElementById('searchResults').classList.add('hidden');
    document.getElementById('selectedInfo').classList.add('hidden'); 
    document.getElementById('detailsContainer').innerHTML = ''; 
});