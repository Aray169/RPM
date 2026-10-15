const KEY = 'rpm_v3';
const LV = ['Perlu bimbingan', 'Berkembang', 'Cakap', 'Mahir'];
const SEL = ['Kesadaran diri', 'Manajemen diri', 'Kesadaran sosial', 'Keterampilan relasi', 'Pengambilan keputusan yang bertanggung jawab'];
const DPL = ['DPL1 Keimanan & Ketakwaan', 'DPL2 Kewargaan', 'DPL3 Penalaran Kritis', 'DPL4 Kreativitas', 'DPL5 Kolaborasi', 'DPL6 Kemandirian', 'DPL7 Kesehatan', 'DPL8 Komunikasi'];
const DUP = {
  ket: { t: 'Keterlibatan', q: 'Mengapa murid mau belajar? Beri pilihan dan bangkitkan minat.', o: ['Pilihan tingkat tantangan', 'Pilihan kerja mandiri atau kelompok', 'Konteks dekat dengan kehidupan murid', 'Umpan balik yang membangun', 'Pilihan alat atau bola'] },
  rep: { t: 'Representasi', q: 'Apa yang murid terima? Sajikan materi lewat banyak cara.', o: ['Demonstrasi guru', 'Kartu gambar', 'Video gerak lambat', 'Penjelasan lisan', 'Petunjuk tertulis sederhana'] },
  aks: { t: 'Aksi dan Ekspresi', q: 'Bagaimana murid menunjukkan hasil belajarnya? Beri lebih dari satu cara.', o: ['Unjuk kerja langsung', 'Rekaman video', 'Demonstrasi bertahap', 'Penjelasan lisan', 'Produk atau poster'] }
};
const FASE = { I: 'A', II: 'A', III: 'B', IV: 'B', V: 'C', VI: 'C', VII: 'D', VIII: 'D', IX: 'D', X: 'E', XI: 'F', XII: 'F' };
const WAKTU = ['Awal (diagnostik)', 'Selama proses (formatif)', 'Akhir (sumatif)'];
const JENISW = {
  'Awal (diagnostik)': ['Pertanyaan Pemantik', 'Observasi', 'Diskusi', 'Kuis', ['Lainnya', 'Lainnya...']],
  'Selama proses (formatif)': ['Tanya Jawab', 'Observasi', 'Diskusi', ['Keterampilan', 'Penilaian Keterampilan'], 'Produk', 'Presentasi', 'Latihan Soal', 'Kuis', ['Lainnya', 'Lainnya...']],
  'Akhir (sumatif)': ['Praktik', 'Kuis', 'Tes Tertulis', 'Produk', 'Presentasi', ['Lainnya', 'Lainnya...']]
};
const kv = o => Array.isArray(o) ? o[0] : o;
const CARA = ['Unjuk kerja langsung', 'Rekaman video', 'Demonstrasi bertahap', 'Penjelasan lisan', 'Tulisan'];
const NILAI = ['Observasi', 'Refleksi diri', 'Penilaian teman'];
const JP = ['1 JP', '2 JP', '3 JP', '4 JP', '5 JP', '6 JP'];
const SDG = ['1. Tanpa Kemiskinan', '2. Tanpa Kelaparan', '3. Kehidupan Sehat dan Sejahtera', '4. Pendidikan Berkualitas', '5. Kesetaraan Gender', '6. Air Bersih dan Sanitasi Layak', '7. Energi Bersih dan Terjangkau', '8. Pekerjaan Layak dan Pertumbuhan Ekonomi', '9. Industri, Inovasi dan Infrastruktur', '10. Berkurangnya Kesenjangan', '11. Kota dan Pemukiman yang Berkelanjutan', '12. Konsumsi dan Produksi yang Bertanggung Jawab', '13. Penanganan Perubahan Iklim', '14. Ekosistem Laut', '15. Ekosistem Darat', '16. Perdamaian, Keadilan dan Kelembagaan yang Tangguh', '17. Kemitraan untuk Mencapai Tujuan'];
const KB = [['', '-- Pilih Kebutuhan Belajar --'], ['Visual', 'Visual (Gambar & Grafik)'], ['Auditori', 'Auditori (Suara & Diskusi)'], ['Kinestetik', 'Kinestetik (Gerak & Praktik)'], ['Linguistik', 'Linguistik (Teks & Tulisan)'], ['Logis', 'Logis-Matematis (Pola & Logika)'], ['Sosial', 'Interpersonal (Kelompok/Sosial)'], ['Mandiri', 'Intrapersonal (Mandiri/Refleksi)'], ['Lainnya', 'Lainnya...']];
const TPK = [['', '-- Pilih Alat --'], 'YouTube', 'Quizizz', 'Canva', ['Lainnya', 'Lainnya...']];
const KEG = {
  awal: ['Orientasi', 'Apersepsi', 'Motivasi', ['Tujuan', 'Penyampaian Tujuan'], 'Pemanasan', ['Pemantik', 'Pertanyaan Pemantik'], 'Ice Breaking', ['Lainnya', 'Lainnya...']],
  inti: [['Stimulus', 'Pemberian Stimulus'], 'Berpikir Kritis', 'Kolaborasi', 'Produksi', 'Mengamati', 'Menanya', 'Mencoba', 'Diferensiasi', 'Aplikasi', 'Presentasi', 'Informasi', 'Analisis', 'Simpulan', ['Lainnya', 'Lainnya...']],
  penutup: ['Refleksi', 'Rangkuman', 'Tindak Lanjut', 'Penutup', 'Umpan Balik', ['Lainnya', 'Lainnya...']]
};
const KEGT = { awal: ['A. Kegiatan Awal', 'wAwal'], inti: ['B. Kegiatan Inti', 'wInti'], penutup: ['C. Kegiatan Penutup', 'wPenutup'] };

const blankK = k => ({ tipe: kv(KEG[k][0]), manual: '', detail: '' });
const blankP = n => ({ ke: n, jp: '2 JP', total: '', wAwal: '', wInti: '', wPenutup: '', awal: [blankK('awal')], inti: [blankK('inti')], penutup: [blankK('penutup')], tp: [], ket: [], rep: [], aks: [], dupCat: '', sel: [], selAkt: '', selInd: '', selNilai: 'Observasi' });
const blankL = () => ({ waktu: WAKTU[0], jenis: 'Pertanyaan Pemantik', manual: '', detail: '', tp: [], cara: CARA[0] });
const blankR = () => ({ k: '', l: ['', '', '', ''] });
const blank = () => ({
  cover: null,
  id: { sekolah: '', penyusun: [''], mapel: '', topik: '', kelas: 'VII', semester: 'Ganjil', tahun: '', jp: '2 JP' },
  kenal: { awal: '', minat: '', kebutuhan: [{ tipe: '', manual: '', ket: '' }], materi: '', hambatan: '', dpl: [] },
  tuj: { cp: [''], tp: [''], lintas: [{ mapel: '', ket: '' }], sdgs: [{ sdg: SDG[0], ket: '' }], abadi: '', esensial: [''], kunci: '' },
  bukti: { tugas: { nama: '', desk: '', tp: [], rubrik: [blankR()] }, lain: [blankL()] },
  pend: { model: [''], mindful: '', meaningful: '', joyful: '', metode: [''], fisik: [{ nama: '', suasana: '' }], budaya: [''], tpack: [{ alat: '', manual: '', ket: '' }] },
  ped: [blankP(1)],
  ttd: { kota: '', tgl: '', kepsek: '', nipk: '', guru: '', nipg: '' }
});
const ADD = {
  'kenal.kebutuhan': () => ({ tipe: '', manual: '', ket: '' }), 'tuj.lintas': () => ({ mapel: '', ket: '' }), 'tuj.sdgs': () => ({ sdg: SDG[0], ket: '' }),
  'pend.fisik': () => ({ nama: '', suasana: '' }), 'pend.tpack': () => ({ alat: '', manual: '', ket: '' }),
  'bukti.tugas.rubrik': blankR, 'bukti.lain': blankL, ped: () => blankP(D.ped.length + 1)
};
const mk = p => { const m = p.match(/^ped\.\d+\.(awal|inti|penutup)$/); return m ? blankK(m[1]) : (ADD[p] ? ADD[p]() : ''); };

const $ = id => document.getElementById(id);
const g = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const st = (o, p, v) => { const k = p.split('.'), l = k.pop(); k.reduce((a, x) => a[x], o)[l] = v; };
const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

let D, cur = 0;
try { D = JSON.parse(localStorage.getItem(KEY)); } catch (e) { D = null; }
if (!D || !D.ped) D = blank();
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(D)); } catch (e) { $('saved').textContent = 'Penyimpanan penuh (gambar terlalu besar?)'; return; }
  $('saved').textContent = 'Tersimpan ' + new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

/* ---------- komponen formulir ---------- */
const F = (label, p, o = {}) => `<label class="f"><span>${label}${o.hint ? `<i title="${esc(o.hint)}">ⓘ</i>` : ''}</span>${o.area ? `<textarea rows="${o.area}" data-p="${p}" placeholder="${esc(o.ph || '')}">${esc(g(D, p))}</textarea>` : `<input ${o.type ? `type="${o.type}"` : ''} data-p="${p}" value="${esc(g(D, p))}" placeholder="${esc(o.ph || '')}">`}</label>`;
const SO = (p, opts, rr) => `<select data-p="${p}" ${rr ? 'data-r="1"' : ''}>${opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(v)}" ${g(D, p) === v ? 'selected' : ''}>${esc(l)}</option>`; }).join('')}</select>`;
const S = (label, p, opts, rr) => `<label class="f"><span>${label}</span>${SO(p, opts, rr)}</label>`;
const MAN = (p, ph) => g(D, p + '.tipe') === 'Lainnya' ? `<input style="margin-top:6px" data-p="${p}.manual" value="${esc(g(D, p + '.manual'))}" placeholder="${esc(ph || 'Tulis manual...')}">` : '';
const CHK = (p, opts) => opts.length ? `<div class="chips">${opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<label><input type="checkbox" data-c="${p}" value="${esc(v)}" ${g(D, p).includes(v) ? 'checked' : ''}><span>${esc(l)}</span></label>`; }).join('')}</div>` : '<p class="hint">Isi Tujuan Pembelajaran di Langkah 3 terlebih dahulu.</p>';
const LIST = (label, p, ph, hint) => `<div class="f"><span>${label}${hint ? `<i title="${esc(hint)}">ⓘ</i>` : ''}</span>${g(D, p).map((v, i) => `<div class="row"><input data-p="${p}.${i}" value="${esc(v)}" placeholder="${esc(ph)}"><button class="x" data-del="${p}:${i}">×</button></div>`).join('')}<button class="add" data-add="${p}">+ Tambah</button></div>`;
const TA = (p, ph, rows) => `<textarea rows="${rows || 2}" data-p="${p}" placeholder="${esc(ph)}">${esc(g(D, p))}</textarea>`;
const DEL = (p, i) => `<button class="x" data-del="${p}:${i}">×</button>`;
const ADDB = (p, t) => `<button class="add" data-add="${p}">${t}</button>`;
const tpOpts = () => D.tuj.tp.map((t, i) => t.trim() ? ['TP' + (i + 1), 'TP ' + (i + 1) + ': ' + t.slice(0, 34)] : null).filter(Boolean);
const head = (t, s) => `<h2>${t}</h2><p class="sub">${s}</p>`;

/* ---------- langkah ---------- */
const STEPS = [
  ['Identitas', () => `<div class="card">${head('Identitas Modul', 'Sampul dan data dasar rancangan pembelajaran.')}
    <div class="f"><span>Gambar sampul</span>${D.cover ? `<img src="${D.cover.u}" style="max-width:220px;border-radius:10px;display:block;margin-bottom:8px"><button class="x" data-act="rmcover">Hapus sampul</button>` : '<input type="file" id="cover" accept="image/*">'}</div>
    <div class="g2">${F('Nama sekolah', 'id.sekolah')}${F('Mata pelajaran', 'id.mapel', { ph: 'Contoh: Pendidikan Jasmani (PJOK)' })}${F('Topik utama', 'id.topik', { ph: 'Contoh: Permainan Kasti' })}${F('Tahun pelajaran', 'id.tahun', { ph: '2026/2027' })}
    ${S('Kelas', 'id.kelas', Object.keys(FASE))}<label class="f"><span>Fase</span><input readonly value="Fase ${FASE[D.id.kelas]}"></label>${S('Semester', 'id.semester', ['Ganjil', 'Genap'])}${S('Alokasi JP', 'id.jp', JP)}</div>
    ${LIST('Penyusun', 'id.penyusun', 'Nama lengkap penyusun')}</div>`],
  ['Kenali Murid', () => `<div class="card">${head('Kenali Murid', 'Mulailah dari murid: apa yang sudah mereka bawa dan apa yang mungkin menghambat.')}
    ${F('Pengetahuan awal', 'kenal.awal', { area: 3, ph: 'Kemampuan dasar peserta didik...' })}${F('Minat belajar', 'kenal.minat', { area: 2, ph: 'Preferensi dan minat siswa...' })}
    <div class="f"><span>Kebutuhan belajar</span>${D.kenal.kebutuhan.map((x, i) => `<div class="blk" style="--c:var(--pri)"><div class="row">${SO(`kenal.kebutuhan.${i}.tipe`, KB, 1)}${DEL('kenal.kebutuhan', i)}</div>${MAN(`kenal.kebutuhan.${i}`, 'Kategori manual...')}${TA(`kenal.kebutuhan.${i}.ket`, 'Keterangan...')}</div>`).join('')}${ADDB('kenal.kebutuhan', '+ Kebutuhan')}</div>
    ${F('Perkiraan hambatan belajar', 'kenal.hambatan', { area: 2, hint: 'Dasar DUP: hambatan diperkirakan sejak awal, lalu dijawab dengan beberapa jalur belajar.' })}
    ${F('Materi pembelajaran', 'kenal.materi', { area: 3, ph: 'Rincian cakupan materi...' })}
    <h3>Dimensi Profil Lulusan (DPL)</h3>${CHK('kenal.dpl', DPL)}</div>`],
  ['Tahap 1: Tujuan Akhir', () => `<div class="card"><span class="tag t-ubd">UbD · Tahap 1</span>${head('Tujuan Akhir', 'Apa yang harus murid pahami dan mampu lakukan di akhir?')}
    ${LIST('Capaian Pembelajaran (CP)', 'tuj.cp', 'Elemen atau deskripsi CP...')}${LIST('Tujuan Pembelajaran (TP)', 'tuj.tp', 'Tulis satu TP, awali dengan kata kerja')}
    ${F('Pemahaman abadi', 'tuj.abadi', { area: 2, hint: 'Gagasan besar yang tetap diingat murid. Contoh: Arah dan kontrol bola ditentukan oleh posisi tubuh, bukan kerasnya pukulan.' })}
    ${LIST('Pertanyaan esensial', 'tuj.esensial', 'Pertanyaan terbuka', 'Tidak punya satu jawaban pendek. Contoh: Apa yang membuat bola pergi ke arah yang kita inginkan?')}
    ${F('Pengetahuan dan keterampilan kunci', 'tuj.kunci', { area: 2 })}
    <div class="f"><span>Koneksi lintas disiplin ilmu</span>${D.tuj.lintas.map((x, i) => `<div class="row"><input data-p="tuj.lintas.${i}.mapel" value="${esc(x.mapel)}" placeholder="Mata pelajaran"><input data-p="tuj.lintas.${i}.ket" value="${esc(x.ket)}" placeholder="Keterangan integrasi">${DEL('tuj.lintas', i)}</div>`).join('')}${ADDB('tuj.lintas', '+ Tambah')}</div>
    <div class="f"><span>Integrasi SDGs</span>${D.tuj.sdgs.map((x, i) => `<div class="row">${SO(`tuj.sdgs.${i}.sdg`, SDG)}<input data-p="tuj.sdgs.${i}.ket" value="${esc(x.ket)}" placeholder="Deskripsi...">${DEL('tuj.sdgs', i)}</div>`).join('')}${ADDB('tuj.sdgs', '+ Tambah')}</div></div>`],
  ['Tahap 2: Bukti Asesmen', () => { const t = D.bukti.tugas; return `<div class="card"><span class="tag t-ubd">UbD · Tahap 2</span>${head('Bukti Asesmen', 'Tentukan bukti keberhasilan sebelum merancang kegiatan.')}
    <h3>A. Tugas kinerja (bukti utama)</h3>${F('Nama tugas', 'bukti.tugas.nama')}${F('Deskripsi tugas', 'bukti.tugas.desk', { area: 3 })}
    <label class="f"><span>TP yang diukur</span></label>${CHK('bukti.tugas.tp', tpOpts())}
    <div class="scroll"><table class="rb"><tr><th>Kriteria</th>${LV.map(l => `<th>${l}</th>`).join('')}<th></th></tr>
    ${t.rubrik.map((r, i) => `<tr><td><input data-p="bukti.tugas.rubrik.${i}.k" value="${esc(r.k)}"></td>${r.l.map((v, j) => `<td><textarea rows="3" data-p="bukti.tugas.rubrik.${i}.l.${j}">${esc(v)}</textarea></td>`).join('')}<td>${DEL('bukti.tugas.rubrik', i)}</td></tr>`).join('')}</table></div>${ADDB('bukti.tugas.rubrik', '+ Tambah kriteria')}
    <h3>B. Asesmen lain (awal, formatif, sumatif)</h3>
    ${D.bukti.lain.map((x, i) => `<div class="blk" style="--c:var(--ubd)"><div class="g3">${S('Waktu', `bukti.lain.${i}.waktu`, WAKTU, 1)}<label class="f"><span>Jenis</span>${SO(`bukti.lain.${i}.jenis`, JENISW[x.waktu] || JENISW[WAKTU[0]], 1)}${x.jenis === 'Lainnya' ? `<input style="margin-top:6px" data-p="bukti.lain.${i}.manual" value="${esc(x.manual)}" placeholder="Tulis manual...">` : ''}</label>${S('Cara murid menunjukkan hasil (DUP)', `bukti.lain.${i}.cara`, CARA)}</div>
    ${F('Instrumen atau teknik', `bukti.lain.${i}.detail`, { area: 2 })}<label class="f"><span>TP terkait</span></label>${CHK(`bukti.lain.${i}.tp`, tpOpts())}<button class="x" data-del="bukti.lain:${i}">Hapus bukti ini</button></div>`).join('')}
    ${ADDB('bukti.lain', '+ Tambah asesmen')}</div>`; }],
  ['Tahap 3: Pengalaman Belajar', () => `<div class="card"><span class="tag t-ubd">UbD · Tahap 3</span>${head('Pengalaman Belajar', 'Rancang kegiatan yang mengantar murid ke bukti di Tahap 2, sambil menyisipkan DUP dan CASEL.')}</div>
    ${D.ped.map((p, i) => `<div class="card"><h3 style="margin-top:0">Pertemuan ${i + 1}</h3>
    <div class="g3">${S('Pertemuan ke-', `ped.${i}.ke`, [1, 2, 3, 4, 5, 6, 7, 8].map(String))}${S('Alokasi JP', `ped.${i}.jp`, JP)}${F('Total waktu', `ped.${i}.total`, { ph: 'Contoh: 2x35 menit' })}</div>
    <label class="f"><span>TP yang dituju</span></label>${CHK(`ped.${i}.tp`, tpOpts())}
    ${Object.keys(KEGT).map(k => `<div class="blk" style="--c:var(--ubd)"><div class="row"><h4 style="flex:1">${KEGT[k][0]}</h4><input style="max-width:150px" data-p="ped.${i}.${KEGT[k][1]}" value="${esc(g(D, `ped.${i}.${KEGT[k][1]}`))}" placeholder="Durasi (menit)"></div>
      ${p[k].map((x, j) => `<div class="row" style="align-items:flex-start"><div style="flex:1">${SO(`ped.${i}.${k}.${j}.tipe`, KEG[k], 1)}${MAN(`ped.${i}.${k}.${j}`)}</div><div style="flex:3"><textarea rows="2" data-p="ped.${i}.${k}.${j}.detail" placeholder="Detail langkah...">${esc(x.detail)}</textarea></div>${DEL(`ped.${i}.${k}`, j)}</div>`).join('')}${ADDB(`ped.${i}.${k}`, '+ Sub-kegiatan')}</div>`).join('')}
    ${Object.keys(DUP).map(k => `<div class="blk" style="--c:var(--dup)"><span class="tag t-dup">DUP</span><h4>${DUP[k].t}</h4><p>${DUP[k].q}</p>${CHK(`ped.${i}.${k}`, DUP[k].o)}</div>`).join('')}
    ${F('Catatan strategi DUP lain', `ped.${i}.dupCat`, { area: 2 })}
    <div class="blk" style="--c:var(--sel)"><span class="tag t-sel">CASEL</span><h4>Integrasi sosial emosional</h4><p>Pilih satu atau dua kompetensi yang dilatih lewat kegiatan pertemuan ini.</p>${CHK(`ped.${i}.sel`, SEL)}
    ${F('Aktivitas sosial emosional', `ped.${i}.selAkt`, { area: 2, ph: 'Contoh: check-in di pembuka, kerja kelompok bergilir, refleksi penutup' })}${F('Indikator perilaku yang diamati', `ped.${i}.selInd`, { area: 2, ph: 'Contoh: murid memberi semangat pada rekan yang gagal' })}${S('Cara menilai', `ped.${i}.selNilai`, NILAI)}</div>
    ${D.ped.length > 1 ? `<button class="x" data-del="ped:${i}">Hapus pertemuan ini</button>` : ''}</div>`).join('')}
    ${ADDB('ped', '+ Tambah pertemuan')}`],
  ['Pendekatan dan Lingkungan', () => `<div class="card">${head('Pendekatan dan Lingkungan', 'Model, metode, dan lingkungan belajar yang mendukung rancangan.')}
    ${LIST('Model pembelajaran', 'pend.model', 'Contoh: Problem Based Learning')}
    <h3>Prinsip Deep Learning</h3><div class="g3">${F('Mindful learning', 'pend.mindful')}${F('Meaningful learning', 'pend.meaningful')}${F('Joyful learning', 'pend.joyful')}</div>
    ${LIST('Metode pembelajaran', 'pend.metode', 'Contoh: Diskusi, Tanya Jawab')}
    <div class="f"><span>Ruang fisik</span>${D.pend.fisik.map((x, i) => `<div class="row"><input data-p="pend.fisik.${i}.nama" value="${esc(x.nama)}" placeholder="Nama ruangan"><input data-p="pend.fisik.${i}.suasana" value="${esc(x.suasana)}" placeholder="Suasana atau kondisi">${DEL('pend.fisik', i)}</div>`).join('')}${ADDB('pend.fisik', '+ Ruang fisik')}</div>
    ${LIST('Budaya belajar', 'pend.budaya', 'Contoh: Budaya saling menghormati')}
    <div class="f"><span>Integrasi TPACK / digital</span>${D.pend.tpack.map((x, i) => `<div class="blk" style="--c:var(--pri)"><div class="row">${SO(`pend.tpack.${i}.alat`, TPK, 1)}${DEL('pend.tpack', i)}</div>${x.alat === 'Lainnya' ? `<input style="margin-bottom:6px" data-p="pend.tpack.${i}.manual" value="${esc(x.manual)}" placeholder="Tulis alat manual...">` : ''}${TA(`pend.tpack.${i}.ket`, 'Keterangan...')}</div>`).join('')}${ADDB('pend.tpack', '+ Alat digital')}</div></div>`],
  ['Pengesahan', () => `<div class="card">${head('Pengesahan', 'Data untuk blok tanda tangan.')}<div class="g2">${F('Kota atau kabupaten', 'ttd.kota', { ph: 'Semarang' })}${F('Tanggal dokumen', 'ttd.tgl', { type: 'date' })}${F('Kepala sekolah', 'ttd.kepsek')}${F('NIP kepala sekolah', 'ttd.nipk', { ph: 'Nomor NIP saja' })}${F('Guru mata pelajaran', 'ttd.guru')}${F('NIP guru', 'ttd.nipg', { ph: 'Nomor NIP saja' })}</div></div>`],
  ['Lampiran', () => `<div class="card">${head('Lampiran (.docx)', 'Berkas yang diunggah di sini digabungkan di akhir dokumen saat diunduh.')}
    ${`<div class="g2"><label class="f"><span>Judul lampiran</span><input id="judulLamp" placeholder="Contoh: LKPD 1"></label><label class="f"><span>Berkas .docx</span><input type="file" id="fileLamp" accept=".docx" multiple></label></div>`}
    <button class="add" data-act="addlamp">+ Tambahkan ke daftar</button><div id="lamp" style="margin-top:14px"></div></div>`],
  ['Ringkasan dan Unduh', () => `<div class="card">${head('Ringkasan dan Unduh', 'Periksa keterpaduan UbD, DUP, dan CASEL sebelum mengunduh.')}
    <ul style="list-style:none;padding:0">${checks().map(([k, ok, m]) => `<li style="padding:6px 0"><span class="${ok ? 'ok' : 'warn'}">${ok ? '✔' : '⚠'}</span> <b>${k}</b> · ${esc(m)}</li>`).join('')}</ul>
    <button class="big" data-act="dl">Unduh RPM (.docx)</button></div>`]
];

/* ---------- cek keterpaduan ---------- */
function checks() {
  const L = [], add = (k, ok, m) => L.push([k, ok, m]);
  const tp = D.tuj.tp.map((t, i) => [t, 'TP' + (i + 1)]).filter(x => x[0].trim());
  const cov = n => D.bukti.tugas.tp.includes(n) || D.bukti.lain.some(x => x.tp.includes(n));
  add('UbD', !!D.tuj.abadi.trim(), 'Pemahaman abadi terisi');
  add('UbD', D.tuj.esensial.some(x => x.trim()), 'Pertanyaan esensial terisi');
  add('UbD', tp.length > 0, 'Tujuan pembelajaran terisi');
  tp.forEach(([t, n]) => { add('UbD', cov(n), n + ' punya bukti asesmen'); add('UbD', D.ped.some(x => x.tp.includes(n)), n + ' dilatih di suatu pertemuan'); });
  D.ped.forEach((p, i) => { Object.keys(DUP).forEach(x => add('DUP', p[x].length > 0, 'Pertemuan ' + (i + 1) + ': ' + DUP[x].t)); add('CASEL', p.sel.length > 0 && p.selAkt.trim() !== '', 'Pertemuan ' + (i + 1) + ': kompetensi dan aktivitas sosial emosional'); });
  return L;
}
function cek() {
  const c = checks();
  $('cek').innerHTML = ['UbD', 'DUP', 'CASEL'].map(k => { const a = c.filter(x => x[0] === k), n = a.filter(x => x[1]).length; return `<li><span>${k}</span><span class="${n === a.length ? 'ok' : 'warn'}">${n}/${a.length}</span></li>`; }).join('');
}

/* ---------- lampiran (IndexedDB) ---------- */
let db;
const rq = indexedDB.open('DB_RPM', 1);
rq.onupgradeneeded = e => { const d = e.target.result; if (!d.objectStoreNames.contains('lampiran')) d.createObjectStore('lampiran', { keyPath: 'id', autoIncrement: true }); };
rq.onsuccess = e => { db = e.target.result; listLamp(); };
const lampAll = () => new Promise(r => { if (!db) return r([]); const q = db.transaction('lampiran', 'readonly').objectStore('lampiran').getAll(); q.onsuccess = () => r(q.result); q.onerror = () => r([]); });
async function listLamp() {
  const el = $('lamp'); if (!el) return; const a = await lampAll();
  el.innerHTML = a.length ? `<table class="rb"><tr><th>Judul</th><th>Berkas</th><th></th></tr>${a.map(x => `<tr><td>${esc(x.judul || '-')}</td><td>${esc(x.nama)}</td><td><button class="x" data-act="dellamp" data-id="${x.id}">Hapus</button></td></tr>`).join('')}</table>` : '<p class="hint">Belum ada lampiran.</p>';
}
async function addLamp() {
  const fs = [...$('fileLamp').files], j = $('judulLamp').value.trim();
  if (!fs.length) return alert('Pilih berkas .docx terlebih dahulu.');
  if (!db) return alert('Penyimpanan belum siap, coba lagi sebentar.');
  for (const f of fs) {
    if (!/\.docx$/i.test(f.name)) { alert(f.name + ' bukan .docx dan dilewati.'); continue; }
    const buf = await f.arrayBuffer();
    await new Promise(r => { const q = db.transaction('lampiran', 'readwrite').objectStore('lampiran').add({ judul: j || f.name, nama: f.name, konten: buf }); q.onsuccess = q.onerror = r; });
  }
  $('judulLamp').value = ''; $('fileLamp').value = ''; listLamp();
}
async function gabung(blob) {
  const ok = (await lampAll()).filter(x => x.konten && x.konten.byteLength > 0);
  if (!ok.length || typeof DocxMerger === 'undefined') return blob;
  const files = [await blob.arrayBuffer(), ...ok.map(x => x.konten)];
  const merged = await new Promise(res => { try { new DocxMerger({}, files).save('blob', res); } catch (e) { console.error(e); res(blob); } });
  return bersihkan(merged);
}
/* Penggabung bawaan meninggalkan relasi yang menunjuk berkas hilang, relasi ganda, dan gambar JPEG berekstensi .png.
   Fungsi ini merapikannya agar dokumen terbuka normal di Word maupun LibreOffice. */
async function bersihkan(blob) {
  if (typeof PizZip === 'undefined') return blob;
  try {
    const z = new PizZip(await blob.arrayBuffer());
    const rf = z.file('word/_rels/document.xml.rels'), df = z.file('word/document.xml');
    if (!rf || !df) return blob;
    const doc = df.asText(); let rels = rf.asText();
    const attr = (m, k) => (m.match(new RegExp(k + '="([^"]*)"')) || [])[1];
    const seen = {}, ren = {};
    Object.keys(z.files).filter(n => /^word\/media\/[^/]+$/.test(n)).forEach(n => {
      const h = Array.from(new Uint8Array(z.file(n).asArrayBuffer().slice(0, 4))).map(b => b.toString(16).padStart(2, '0')).join('');
      const ext = h.startsWith('ffd8ff') ? 'jpeg' : h.startsWith('89504e47') ? 'png' : h.startsWith('47494638') ? 'gif' : null;
      if (ext && !n.toLowerCase().endsWith('.' + ext)) { const nn = n.replace(/\.[^.]+$/, '') + '.' + ext; z.file(nn, z.file(n).asUint8Array()); z.remove(n); ren[n.slice(5)] = nn.slice(5); }
    });
    rels = rels.replace(/<Relationship\b[^>]*\/>/g, m => {
      let t = attr(m, 'Target'), id = attr(m, 'Id'); if (!t || attr(m, 'TargetMode') === 'External') return m;
      if (ren[t]) { m = m.replace(t, ren[t]); t = ren[t]; }
      if (!z.file(t.startsWith('/') ? t.slice(1) : 'word/' + t)) return '';
      const key = attr(m, 'Type') + '|' + t;
      if (seen[key] && !doc.includes('"' + id + '"')) return '';
      seen[key] = 1; return m;
    });
    z.file('word/_rels/document.xml.rels', rels);
    return z.generate({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', compression: 'DEFLATE' });
  } catch (e) { console.error(e); return blob; }
}

/* ---------- sampul ---------- */
function bacaSampul(file) {
  const r = new FileReader();
  r.onload = () => { const im = new Image(); im.onload = () => {
    const w = Math.min(700, im.width), h = Math.round(im.height * w / im.width), c = document.createElement('canvas'); c.width = w; c.height = h;
    c.getContext('2d').drawImage(im, 0, 0, w, h); D.cover = { u: c.toDataURL('image/jpeg', 0.8), w, h }; save(); render();
  }; im.src = r.result; };
  r.readAsDataURL(file);
}

/* ---------- render dan navigasi ---------- */
function render(top) {
  $('view').innerHTML = STEPS[cur][1]();
  $('steps').innerHTML = STEPS.map((s, i) => `<li data-s="${i}" class="${i === cur ? 'on' : ''}">${i + 1}. ${s[0]}</li>`).join('');
  $('pos').textContent = 'Langkah ' + (cur + 1) + ' dari ' + STEPS.length;
  $('prev').disabled = cur === 0; $('next').disabled = cur === STEPS.length - 1;
  cek(); if (top) window.scrollTo(0, 0); if (STEPS[cur][0] === 'Lampiran') listLamp();
}
function del(p, i) {
  const a = g(D, p);
  if (a.length > 1) a.splice(i, 1); else if (typeof a[0] === 'string') a[0] = '';
  if (p === 'tuj.tp') {
    const fix = x => { for (let j = x.length - 1; j >= 0; j--) { const n = +x[j].slice(2); if (n === i + 1) x.splice(j, 1); else if (n > i + 1) x[j] = 'TP' + (n - 1); } };
    fix(D.bukti.tugas.tp); D.bukti.lain.forEach(x => fix(x.tp)); D.ped.forEach(x => fix(x.tp));
  }
}
$('view').oninput = e => {
  const t = e.target; if (!t.dataset.p) return;
  st(D, t.dataset.p, t.value);
  if (/^bukti\.lain\.\d+\.waktu$/.test(t.dataset.p)) st(D, t.dataset.p.replace('.waktu', '.jenis'), kv(JENISW[t.value][0]));
  save();
  if (t.dataset.r || t.dataset.p === 'id.kelas') render(); else cek();
};
$('view').onchange = e => {
  const t = e.target;
  if (t.id === 'cover' && t.files[0]) return bacaSampul(t.files[0]);
  if (!t.dataset.c) return;
  const a = g(D, t.dataset.c);
  if (t.checked) a.push(t.value); else a.splice(a.indexOf(t.value), 1);
  save(); cek();
};
$('view').onclick = async e => {
  const b = e.target.closest('button'); if (!b) return;
  const a = b.dataset.act;
  if (a === 'dl') return unduh(b);
  if (a === 'rmcover') { D.cover = null; save(); return render(); }
  if (a === 'addlamp') return addLamp();
  if (a === 'dellamp') { db.transaction('lampiran', 'readwrite').objectStore('lampiran').delete(+b.dataset.id).onsuccess = listLamp; return; }
  if (b.dataset.add) { g(D, b.dataset.add).push(mk(b.dataset.add)); save(); render(); }
  if (b.dataset.del) { const [p, i] = b.dataset.del.split(':'); del(p, +i); save(); render(); }
};
$('steps').onclick = e => { const li = e.target.closest('li'); if (li) { cur = +li.dataset.s; render(true); } };
$('prev').onclick = () => { cur--; render(true); };
$('next').onclick = () => { cur++; render(true); };
$('reset').onclick = () => {
  if (!confirm('Mulai rancangan baru? Data yang sekarang dan semua lampiran akan dihapus.')) return;
  D = blank(); cur = 0; save();
  if (db) db.transaction('lampiran', 'readwrite').objectStore('lampiran').clear();
  render(true);
};

/* ---------- ekspor .docx (format mengikuti aplikasi asli) ---------- */
async function unduh(btn) {
  btn.disabled = true; btn.textContent = 'Menyusun dokumen...';
  try {
    const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ImageRun, AlignmentType, PageBreak, TableBorders, TableLayoutType, BorderStyle } = docx;
    const FN = 'Times New Roman', SH = 'F2F2F2';
    const R = (t, o = {}) => new TextRun({ text: t, font: FN, size: o.size || 24, bold: o.bold, underline: o.u ? {} : undefined });
    const runs = (t, o) => { const ls = String(t == null ? '' : t).split('\n'), out = []; ls.forEach((l, i) => { out.push(R(l, o)); if (i < ls.length - 1) out.push(new TextRun({ text: '', break: 1 })); }); return out; };
    const std = (t, b) => new Paragraph({ children: [R(t || '-', { bold: b })] });
    const ctr = (t, o) => new Paragraph({ alignment: AlignmentType.CENTER, children: [R(t, o)] });
    const IND = { left: 650, hanging: 300 };
    const bl = (label, val) => new Paragraph({ children: [R('● ' + label + ': ', { bold: true }), ...runs(val)], indent: IND, spacing: { after: 120 } });
    const b1 = t => new Paragraph({ children: [R('● ' + t)], indent: IND, spacing: { after: 120 } });
    const num = t => new Paragraph({ children: runs(t), numbering: { reference: 'num', level: 0 }, spacing: { after: 120 } });
    const W = (n, c) => ({ size: n, type: WidthType.PERCENTAGE });
    const body = v => Array.isArray(v) ? v : [new Paragraph({ children: runs(v) })];
    const row2 = (label, v) => new TableRow({ children: [new TableCell({ width: W(35), shading: { fill: SH }, children: [std(label, true)] }), new TableCell({ width: W(65), children: body(v || '-') })] });
    const full = (label, v) => { const r = [new TableRow({ children: [new TableCell({ width: W(100), shading: { fill: SH }, children: [std(label, true)] })] })]; if (v) r.push(new TableRow({ children: [new TableCell({ width: W(100), margins: { top: 100, bottom: 100, left: 100, right: 100 }, children: body(v) })] })); return r; };
    const LN = { style: BorderStyle.SINGLE, size: 4, color: '7F8FA6' };
    const T = (rows, cw) => new Table({ width: W(100), columnWidths: cw || [9026], layout: TableLayoutType.FIXED, margins: { top: 70, bottom: 70, left: 130, right: 130 },
      borders: { top: LN, bottom: LN, left: LN, right: LN, insideHorizontal: LN, insideVertical: LN }, rows });
    const H = (t, before) => new Paragraph({ children: [R(t, { bold: true, size: 28 })], spacing: { before: before || 400, after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: '1F3A5F', space: 3 } } });
    const ls = a => a.length ? a : '● -';
    const ne = a => a.filter(x => String(x).trim());
    const nm = x => x.tipe === 'Lainnya' ? (x.manual || 'Lainnya') : x.tipe;
    const tgl = s => s ? new Date(s + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '..........................';
    const I = D.id, K = D.kenal, U = D.tuj, B = D.bukti, tg = B.tugas, Z = D.ttd, PD = D.pend;
    const nip = x => String(x || '').replace(/^\s*NIP\.?\s*/i, '');
    const v = (x, d) => (x && String(x).trim()) ? x : (d || '..........................');
    const content = [];

    // Sampul
    if (D.cover) {
      const u8 = Uint8Array.from(atob(D.cover.u.split(',')[1]), c => c.charCodeAt(0)), sc = Math.min(500 / D.cover.w, 700 / D.cover.h);
      content.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new ImageRun({ type: 'jpg', data: u8, transformation: { width: Math.round(D.cover.w * sc), height: Math.round(D.cover.h * sc) } })] }), new Paragraph({ children: [new PageBreak()] }));
    }
    content.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [R('RENCANA PEMBELAJARAN MENDALAM', { bold: true, size: 32 })], spacing: { after: 500 }, border: { bottom: { style: BorderStyle.DOUBLE, size: 6, color: '1F3A5F', space: 8 } } }));

    // 1. Identitas
    const pn = ne(I.penyusun), pen = pn.length > 1 ? pn.map(num) : pn.map(x => new Paragraph({ children: runs(x) }));
    content.push(H('1. IDENTITAS MODUL', 0), T([row2('Sekolah', I.sekolah), row2('Penyusun', pen.length ? pen : '-'), row2('Mata Pelajaran', I.mapel), row2('Topik', I.topik), row2('Kelas/Fase/Sem', I.kelas + ' / Fase ' + FASE[I.kelas] + ' / ' + I.semester), row2('Alokasi Waktu', I.jp + ' (' + D.ped.length + 'x Pertemuan)'), row2('Tahun Pelajaran', I.tahun)], [3160, 5866]));

    // 2. Identifikasi
    const kb = K.kebutuhan.filter(x => x.tipe).map(x => bl(nm(x) || 'Kebutuhan', x.ket));
    const dpl = K.dpl.map(b1);
    content.push(H('2. IDENTIFIKASI PEMBELAJARAN'), T([
      ...full('1. Peserta Didik', ''), ...full('   A Pengetahuan Awal', K.awal || '-'), ...full('   B Minat', K.minat || '-'), ...full('   C. Kebutuhan Belajar', ls(kb)), ...full('   D. Perkiraan Hambatan Belajar (DUP)', K.hambatan || '-'),
      ...full('2. Materi Pembelajaran', K.materi || '-'), ...full('3. Dimensi Profil Lulusan', ls(dpl))]));

    // 3. Desain (UbD tahap 1 + praktik pedagogis + lingkungan)
    const tpL = U.tp.map((t, i) => t.trim() ? b1('TP' + (i + 1) + ': ' + t) : null).filter(Boolean);
    const sd = U.sdgs.map(x => bl(x.sdg.replace(/^\d+\.\s*/, ''), x.ket));
    const li = U.lintas.filter(x => x.mapel.trim()).map(x => bl(x.mapel, x.ket));
    const fs = PD.fisik.filter(x => x.nama.trim()).map(x => new Paragraph({ children: [R('● ' + x.nama + ' ('), ...runs(x.suasana), R(')')], indent: IND, spacing: { after: 120 } }));
    const tp = PD.tpack.filter(x => x.alat && x.ket).map(x => bl(x.alat === 'Lainnya' ? x.manual : x.alat, x.ket));
    content.push(H('3. DESAIN PEMBELAJARAN'), T([
      ...full('1. Capaian Pembelajaran', ls(ne(U.cp).map(b1))), ...full('2. Tujuan Pembelajaran', ls(tpL)),
      ...full('3. Pemahaman Abadi (UbD)', U.abadi || '-'), ...full('4. Pertanyaan Esensial (UbD)', ls(ne(U.esensial).map(b1))), ...full('5. Pengetahuan dan Keterampilan Kunci', U.kunci || '-'),
      ...full('6. Lintas Disiplin Ilmu', ls(li)), ...full('7. SDGs', ls(sd)),
      ...full('8. Praktik Pedagogis', ''), ...full('    A. Model Pembelajaran:', ls(ne(PD.model).map(b1))), ...full('    B. Pendekatan (Deep Learning):', ''),
      ...full('        ● Mindful', PD.mindful || '-'), ...full('        ● Meaningful', PD.meaningful || '-'), ...full('        ● Joyful', PD.joyful || '-'),
      ...full('    C. Metode Pembelajaran:', ls(ne(PD.metode).map(b1))),
      ...full('9. Lingkungan Belajar (Fisik & Budaya)', ''), ...full('    A. Ruang Fisik:', ls(fs)), ...full('    B. Budaya Belajar:', ls(ne(PD.budaya).map(b1))), ...full('    C. Pemanfaatan Digital:', ls(tp))]));

    // 4. Pengalaman belajar (UbD tahap 3) + DUP + CASEL
    content.push(H('4. PENGALAMAN BELAJAR'));
    D.ped.forEach(p => {
      const keg = (k, title, w) => [new TableRow({ children: [new TableCell({ children: [std('● ' + title.toUpperCase() + ' (' + (w || '0') + ' MENIT)', true)], columnSpan: 2, shading: { fill: SH } })] }),
        ...p[k].map(x => new TableRow({ children: [new TableCell({ width: W(5), children: [ctr('○')] }), new TableCell({ width: W(95), children: [new Paragraph({ children: [R(nm(x) + ': ', { bold: true }), ...runs(x.detail)], spacing: { before: 80, after: 80 } })] })] }))];
      const sec = (title, items) => [new TableRow({ children: [new TableCell({ children: [std('● ' + title, true)], columnSpan: 2, shading: { fill: SH } })] }),
        ...items.map(([l, t]) => new TableRow({ children: [new TableCell({ width: W(5), children: [ctr('○')] }), new TableCell({ width: W(95), children: [new Paragraph({ children: [R(l + ': ', { bold: true }), ...runs(t)], spacing: { before: 80, after: 80 } })] })] }))];
      content.push(ctr('PERTEMUAN ' + p.ke + ' (' + p.jp + ' : ' + (p.total || '-') + ')', { bold: true }), new Paragraph({ children: [R('Tujuan Pembelajaran yang dituju: ', { bold: true }), R(p.tp.join(', ') || '-')], spacing: { before: 100, after: 160 } }),
        T([...keg('awal', 'Kegiatan Awal', p.wAwal), ...keg('inti', 'Kegiatan Inti', p.wInti), ...keg('penutup', 'Kegiatan Penutup', p.wPenutup),
          ...sec('INTEGRASI DUP (DESAIN UNIVERSAL UNTUK PEMBELAJARAN)', [['Keterlibatan', p.ket.join(', ') || '-'], ['Representasi', p.rep.join(', ') || '-'], ['Aksi dan Ekspresi', p.aks.join(', ') || '-'], ...(p.dupCat.trim() ? [['Catatan', p.dupCat]] : [])]),
          ...sec('INTEGRASI SOSIAL EMOSIONAL (CASEL)', [['Kompetensi', p.sel.join(', ') || '-'], ['Aktivitas', p.selAkt || '-'], ['Indikator', p.selInd || '-'], ['Cara menilai', p.selNilai]])], [450, 8576]),
        new Paragraph({ children: [R('')], spacing: { after: 300 } }));
    });

    // 5. Asesmen (UbD tahap 2: bukti)
    const as = (title, items) => [...full(title, ''), ...(items.length ? items : [bl('-', '')]).map(p => new TableRow({ children: [new TableCell({ width: W(100), children: [p] })] }))];
    const lain = pref => B.lain.filter(x => x.waktu.startsWith(pref) && (x.detail.trim() || x.manual.trim())).map(x => new Paragraph({ children: [R('   ● ' + (x.jenis === 'Lainnya' ? x.manual || 'Lainnya' : x.jenis) + ': ', { bold: true }), ...runs(x.detail), new TextRun({ text: '', break: 1 }), R('      TP terkait: ' + (x.tp.join(', ') || '-') + '. Cara murid menunjukkan hasil: ' + x.cara + '.')], indent: { left: 450, hanging: 300 }, spacing: { before: 80, after: 80 } }));
    const tugas = tg.nama.trim() ? [new Paragraph({ children: [R('   ● ' + tg.nama + ': ', { bold: true }), ...runs(tg.desk), new TextRun({ text: '', break: 1 }), R('      TP yang diukur: ' + (tg.tp.join(', ') || '-') + '.')], indent: { left: 450, hanging: 300 }, spacing: { before: 80, after: 80 } })] : [];
    content.push(H('5. ASESMEN PEMBELAJARAN'), T([...as('A. Asesmen Awal Pembelajaran', lain('Awal')), ...as('B. Asesmen Formatif', lain('Selama')), ...as('C. Asesmen Sumatif', lain('Akhir'))]));
    if (tugas.length) content.push(new Paragraph({ children: [R('Tugas Kinerja (Bukti Utama UbD)', { bold: true })], spacing: { before: 300, after: 120 } }), ...tugas);
    const rb = tg.rubrik.filter(r => r.k.trim());
    if (rb.length) {
      const cell = (t, b, w) => new TableCell({ width: W(w), shading: b ? { fill: SH } : undefined, children: [std(t, b)] });
      content.push(new Paragraph({ children: [R('Rubrik Penilaian Tugas Kinerja', { bold: true })], spacing: { before: 300, after: 120 } }),
        T([new TableRow({ children: [cell('Kriteria', true, 20), ...LV.map(l => cell(l, true, 20))] }), ...rb.map(r => new TableRow({ children: [cell(r.k, true, 20), ...r.l.map(x => cell(x, false, 20))] }))], [1805, 1805, 1805, 1805, 1806]));
    }

    // 6. Peta keterpaduan
    const pc = (t, b, w) => new TableCell({ width: W(w), shading: b ? { fill: SH } : undefined, children: [std(t, b)] });
    content.push(H('6. PETA KETERPADUAN UbD, DUP, DAN CASEL'), T([new TableRow({ children: [pc('Pertemuan', true, 15), pc('TP', true, 13), pc('DUP', true, 34), pc('CASEL', true, 24), pc('Penilaian SEL', true, 14)] }),
      ...D.ped.map(p => new TableRow({ children: [pc('' + p.ke, false, 12), pc(p.tp.join(', ') || '-', false, 14), pc([...p.ket, ...p.rep, ...p.aks].join('; ') || '-', false, 34), pc(p.sel.join(', ') || '-', false, 24), pc(p.selNilai, false, 16)] }))], [1350, 1150, 3100, 2200, 1226]));

    // Pengesahan
    const jabK = 'Kepala ' + v(I.sekolah), jabG = 'Guru Mata Pelajaran ' + v(I.mapel);
    const cc = (...ps) => new TableCell({ children: ps });
    content.push(new Paragraph({ text: '', spacing: { before: 400 } }), new Table({ width: W(100), columnWidths: [4513, 4513], borders: TableBorders.NONE, rows: [
      new TableRow({ children: [cc(), cc(ctr(v(Z.kota, 'Semarang') + ', ' + tgl(Z.tgl)))] }),
      new TableRow({ children: [cc(ctr('Mengetahui,'), ctr(jabK)), cc(ctr(jabG))] }),
      new TableRow({ children: [cc(new Paragraph({ text: '', spacing: { before: 1000 } })), cc(new Paragraph({ text: '', spacing: { before: 1000 } }))] }),
      new TableRow({ children: [cc(ctr(v(Z.kepsek), { bold: true, u: true }), ctr('NIP. ' + v(nip(Z.nipk)))), cc(ctr(v(Z.guru), { bold: true, u: true }), ctr('NIP. ' + v(nip(Z.nipg))))] })] }));

    const doc = new Document({ numbering: { config: [{ reference: 'num', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START, style: { run: { size: 24, font: FN }, paragraph: { indent: { left: 450, hanging: 450 } } } }] }] }, sections: [{ children: content }] });
    const blob = await gabung(await Packer.toBlob(doc));
    const nama = ('RPM_' + v(I.mapel, 'Mapel') + '_' + v(I.topik, 'Topik') + '_Kelas' + I.kelas + '_' + v(I.tahun, 'Tahun')).replace(/[/\\?%*:|"<>]/g, '-');
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nama + '.docx'; a.click();
  } catch (err) { console.error(err); alert('Gagal menyusun dokumen: ' + err.message); }
  btn.disabled = false; btn.textContent = 'Unduh RPM (.docx)';
}

render(true);
