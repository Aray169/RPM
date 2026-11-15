/* Katalog model pembelajaran dan sintaks acuan.
   Sintaks di sini adalah ACUAN dari literatur, bukan aturan. Guru bebas mengubah, menambah, atau menghapus
   blok kegiatan, dan bisa membuat model sendiri di halaman Profil.
   Format: { id, nama, grup, catatan?, versi: [{ id, acuan, label?, fase: [{ n: nama fase, b: awal|inti|penutup, p: pemandu }] }] }
   Untuk menambah versi lain dari model yang sama, tambahkan objek baru pada daftar "versi". */
const KATALOG = [
  { id: 'langsung', nama: 'Pembelajaran Langsung (Direct Instruction)', grup: 'Model umum', versi: [{ id: 'v1', acuan: 'Arends', fase: [
    { n: 'Menyampaikan tujuan dan mempersiapkan murid', b: 'awal', p: 'Sampaikan tujuan, kaitkan dengan pengetahuan awal, dan siapkan murid untuk belajar.' },
    { n: 'Mendemonstrasikan pengetahuan atau keterampilan', b: 'inti', p: 'Peragakan atau jelaskan langkah demi langkah dengan jelas.' },
    { n: 'Membimbing pelatihan', b: 'inti', p: 'Murid berlatih dengan bimbingan dan koreksi awal dari guru.' },
    { n: 'Mengecek pemahaman dan memberi umpan balik', b: 'inti', p: 'Periksa apakah murid sudah benar, lalu beri umpan balik yang spesifik.' },
    { n: 'Memberi kesempatan pelatihan lanjutan dan penerapan', b: 'penutup', p: 'Beri latihan mandiri atau penerapan pada situasi yang lebih kompleks.' }] }] },

  { id: 'inkuiri', nama: 'Inkuiri', grup: 'Model umum', catatan: 'Ada penulis yang merumuskan 5 langkah; versi ini 6 langkah.', versi: [{ id: 'v1', acuan: 'Sanjaya', fase: [
    { n: 'Orientasi', b: 'awal', p: 'Bangun suasana belajar yang responsif dan jelaskan topik serta tujuan.' },
    { n: 'Merumuskan masalah', b: 'inti', p: 'Bawa murid pada persoalan yang menantang untuk dipecahkan.' },
    { n: 'Merumuskan hipotesis', b: 'inti', p: 'Murid mengajukan jawaban sementara atas masalah.' },
    { n: 'Mengumpulkan data', b: 'inti', p: 'Murid menjaring informasi untuk menguji hipotesis.' },
    { n: 'Menguji hipotesis', b: 'inti', p: 'Murid menentukan jawaban yang didukung data.' },
    { n: 'Merumuskan kesimpulan', b: 'penutup', p: 'Murid menyimpulkan temuan berdasarkan hasil pengujian.' }] }] },

  { id: 'discovery', nama: 'Penemuan (Discovery Learning)', grup: 'Model umum', versi: [{ id: 'v1', acuan: 'Bruner; sintaks menurut Syah', fase: [
    { n: 'Stimulation (pemberian rangsangan)', b: 'awal', p: 'Beri pertanyaan, gambar, cerita, atau fenomena yang memancing rasa ingin tahu.' },
    { n: 'Problem statement (identifikasi masalah)', b: 'inti', p: 'Murid mengidentifikasi masalah dan merumuskan hipotesis.' },
    { n: 'Data collection (pengumpulan data)', b: 'inti', p: 'Murid mengumpulkan informasi lewat membaca, mengamati, atau mencoba.' },
    { n: 'Data processing (pengolahan data)', b: 'inti', p: 'Murid mengolah data, misalnya lewat diskusi.' },
    { n: 'Verification (pembuktian)', b: 'inti', p: 'Murid membuktikan hipotesis dengan data atau praktik langsung.' },
    { n: 'Generalization (menarik kesimpulan)', b: 'penutup', p: 'Murid menarik kesimpulan yang berlaku umum.' }] }] },

  { id: 'pbl', nama: 'Pembelajaran Berbasis Masalah (PBL)', grup: 'Model umum', catatan: 'Ada penulis yang merumuskan versi lain (misalnya 7 langkah). Pada pembelajaran beberapa pertemuan, hapus fase yang tidak dipakai di pertemuan ini.', versi: [{ id: 'v1', acuan: 'Arends', fase: [
    { n: 'Orientasi murid pada masalah', b: 'awal', p: 'Jelaskan tujuan, ajukan masalah atau fenomena, dan motivasi murid terlibat.' },
    { n: 'Mengorganisasikan murid untuk belajar', b: 'inti', p: 'Bantu murid mendefinisikan dan membagi tugas belajar terkait masalah.' },
    { n: 'Membimbing penyelidikan individu maupun kelompok', b: 'inti', p: 'Dorong murid mengumpulkan informasi, bereksperimen, dan mencari solusi.' },
    { n: 'Mengembangkan dan menyajikan hasil karya', b: 'inti', p: 'Murid menyiapkan dan menyajikan hasil seperti laporan, model, atau presentasi.' },
    { n: 'Menganalisis dan mengevaluasi proses pemecahan masalah', b: 'penutup', p: 'Murid merefleksikan penyelidikan dan proses yang dipakai.' }] }] },

  { id: 'pjbl', nama: 'Pembelajaran Berbasis Proyek (PjBL)', grup: 'Model umum', catatan: 'Proyek biasanya berlangsung beberapa pertemuan. Hapus fase yang tidak dipakai di pertemuan ini.', versi: [{ id: 'v1', acuan: 'George Lucas Educational Foundation (Lucas)', fase: [
    { n: 'Penentuan pertanyaan mendasar', b: 'awal', p: 'Ajukan pertanyaan esensial yang menantang dan relevan dengan kehidupan murid.' },
    { n: 'Mendesain perencanaan proyek', b: 'inti', p: 'Guru dan murid merancang proyek: tujuan, alat, bahan, dan langkah kerja.' },
    { n: 'Menyusun jadwal', b: 'inti', p: 'Susun jadwal dan batas waktu kegiatan proyek bersama murid.' },
    { n: 'Memonitor murid dan kemajuan proyek', b: 'inti', p: 'Pantau dan dampingi murid selama mengerjakan proyek.' },
    { n: 'Menguji hasil', b: 'inti', p: 'Nilai hasil proyek berdasarkan kriteria yang disepakati.' },
    { n: 'Mengevaluasi pengalaman', b: 'penutup', p: 'Murid dan guru merefleksikan proses dan hasil proyek.' }] }] },

  { id: '5e', nama: 'Siklus Belajar 5E (Learning Cycle)', grup: 'Model umum', versi: [{ id: 'v1', acuan: 'Bybee (BSCS 5E)', fase: [
    { n: 'Engagement (melibatkan)', b: 'awal', p: 'Pancing minat dan pertanyaan awal murid tentang topik.' },
    { n: 'Exploration (menjelajah)', b: 'inti', p: 'Murid menjelajahi konsep lewat kegiatan langsung sebelum dijelaskan.' },
    { n: 'Explanation (menjelaskan)', b: 'inti', p: 'Murid dan guru menjelaskan konsep dari hasil penjelajahan.' },
    { n: 'Elaboration (memperluas)', b: 'inti', p: 'Murid menerapkan konsep pada situasi baru.' },
    { n: 'Evaluation (menilai)', b: 'penutup', p: 'Periksa pemahaman murid dan refleksikan proses belajar.' }] }] },

  { id: 'kooperatif', nama: 'Pembelajaran Kooperatif (umum)', grup: 'Kooperatif', versi: [{ id: 'v1', acuan: 'Arends', fase: [
    { n: 'Menyampaikan tujuan dan memotivasi murid', b: 'awal', p: 'Sampaikan tujuan pembelajaran dan bangkitkan motivasi murid.' },
    { n: 'Menyajikan informasi', b: 'inti', p: 'Sajikan informasi lewat demonstrasi atau bahan bacaan.' },
    { n: 'Mengorganisasikan murid ke dalam kelompok belajar', b: 'inti', p: 'Jelaskan cara membentuk kelompok dan bantu perpindahan yang efisien.' },
    { n: 'Membimbing kelompok bekerja dan belajar', b: 'inti', p: 'Dampingi kelompok saat mengerjakan tugas.' },
    { n: 'Evaluasi', b: 'penutup', p: 'Evaluasi materi, atau kelompok mempresentasikan hasil kerjanya.' },
    { n: 'Memberikan penghargaan', b: 'penutup', p: 'Hargai upaya dan hasil belajar individu maupun kelompok.' }] }] },

  { id: 'stad', nama: 'Kooperatif tipe STAD', grup: 'Kooperatif', versi: [{ id: 'v1', acuan: 'Slavin', fase: [
    { n: 'Penyajian materi', b: 'inti', p: 'Guru menyajikan materi kepada seluruh kelas.' },
    { n: 'Kerja kelompok (tim)', b: 'inti', p: 'Tim heterogen belajar bersama memakai lembar kerja.' },
    { n: 'Tes atau kuis individu', b: 'penutup', p: 'Murid mengerjakan kuis secara individu tanpa bantuan teman.' },
    { n: 'Penghitungan skor perkembangan individu', b: 'penutup', p: 'Hitung peningkatan skor tiap murid dibanding skor dasarnya.' },
    { n: 'Penghargaan kelompok', b: 'penutup', p: 'Beri penghargaan kepada tim berdasarkan skor perkembangan.' }] }] },

  { id: 'tgt', nama: 'Kooperatif tipe TGT', grup: 'Kooperatif', versi: [{ id: 'v1', acuan: 'Slavin', fase: [
    { n: 'Penyajian kelas', b: 'inti', p: 'Guru menyajikan materi kepada seluruh kelas.' },
    { n: 'Belajar dalam kelompok (tim)', b: 'inti', p: 'Tim mempelajari materi dan mempersiapkan anggotanya untuk permainan.' },
    { n: 'Permainan (games)', b: 'inti', p: 'Murid memainkan permainan akademik di meja turnamen.' },
    { n: 'Pertandingan (turnamen)', b: 'inti', p: 'Murid bertanding mewakili tim dengan lawan yang kemampuannya setara.' },
    { n: 'Penghargaan kelompok', b: 'penutup', p: 'Beri penghargaan kepada tim berdasarkan skor turnamen.' }] }] },

  { id: 'jigsaw', nama: 'Kooperatif tipe Jigsaw', grup: 'Kooperatif', versi: [{ id: 'v1', acuan: 'Aronson; langkah menurut Arends', fase: [
    { n: 'Membentuk kelompok asal dan membagi topik', b: 'inti', p: 'Bentuk kelompok heterogen 4 sampai 6 anggota; tiap anggota mendapat satu bagian topik.' },
    { n: 'Kelompok ahli membahas topik', b: 'inti', p: 'Wakil dari tiap kelompok dengan topik sama berkumpul dan saling membantu menguasai topik.' },
    { n: 'Ahli kembali ke kelompok asal dan mengajarkan topiknya', b: 'inti', p: 'Setiap ahli menjelaskan topiknya kepada anggota kelompok asal.' },
    { n: 'Kuis atau tes individu', b: 'penutup', p: 'Murid mengerjakan kuis tentang seluruh topik.' },
    { n: 'Penghargaan', b: 'penutup', p: 'Hargai upaya dan hasil belajar murid maupun kelompok.' }] }] },

  { id: 'nht', nama: 'Kooperatif tipe NHT (Numbered Heads Together)', grup: 'Kooperatif', versi: [{ id: 'v1', acuan: 'Kagan', fase: [
    { n: 'Penomoran', b: 'inti', p: 'Bagi murid ke dalam kelompok dan beri tiap anggota nomor.' },
    { n: 'Mengajukan pertanyaan', b: 'inti', p: 'Guru mengajukan pertanyaan kepada seluruh kelompok.' },
    { n: 'Berpikir bersama', b: 'inti', p: 'Kelompok berdiskusi dan memastikan semua anggota bisa menjawab.' },
    { n: 'Menjawab', b: 'inti', p: 'Guru memanggil satu nomor; murid bernomor itu menjawab mewakili kelompoknya.' }] }] },

  { id: 'tps', nama: 'Kooperatif tipe TPS (Think Pair Share)', grup: 'Kooperatif', versi: [{ id: 'v1', acuan: 'Lyman', fase: [
    { n: 'Berpikir (think)', b: 'inti', p: 'Murid berpikir sendiri tentang pertanyaan atau masalah dari guru.' },
    { n: 'Berpasangan (pair)', b: 'inti', p: 'Murid mendiskusikan pemikirannya dengan satu teman.' },
    { n: 'Berbagi (share)', b: 'inti', p: 'Pasangan membagikan hasil diskusi kepada kelas.' }] }] }
];
