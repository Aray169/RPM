const KEY = 'rpm_v4';
const LV = ['Perlu bimbingan', 'Berkembang', 'Cakap', 'Mahir'];
const SEL = ['Kesadaran diri', 'Manajemen diri', 'Kesadaran sosial', 'Keterampilan relasi', 'Pengambilan keputusan yang bertanggung jawab'];
const DPL = ['DPL1 Keimanan & Ketakwaan', 'DPL2 Kewargaan', 'DPL3 Penalaran Kritis', 'DPL4 Kreativitas', 'DPL5 Kolaborasi', 'DPL6 Kemandirian', 'DPL7 Kesehatan', 'DPL8 Komunikasi'];
const DUP = {
  ket: { t: 'Keterlibatan', q: 'Mengapa murid mau belajar? Beri pilihan dan bangkitkan minat.', o: ['Pilihan tingkat tantangan', 'Pilihan kerja mandiri atau kelompok', 'Konteks dekat dengan kehidupan murid', 'Umpan balik yang membangun', 'Pilihan topik atau alat'] },
  rep: { t: 'Representasi', q: 'Apa yang murid terima? Sajikan materi lewat banyak cara.', o: ['Demonstrasi atau contoh langsung', 'Gambar atau diagram', 'Video atau media audio-visual', 'Penjelasan lisan', 'Petunjuk tertulis sederhana'] },
  aks: { t: 'Aksi dan Ekspresi', q: 'Bagaimana murid menunjukkan hasil belajarnya? Beri lebih dari satu cara.', o: ['Unjuk kerja langsung', 'Rekaman video', 'Penjelasan lisan', 'Tulisan', 'Produk atau poster'] }
};
const FASE = { I: 'A', II: 'A', III: 'B', IV: 'B', V: 'C', VI: 'C', VII: 'D', VIII: 'D', IX: 'D', X: 'E', XI: 'F', XII: 'F' };
const WAKTU = ['Awal (diagnostik)', 'Selama proses (formatif)', 'Akhir (sumatif)'];
const JENISW = {
  'Awal (diagnostik)': ['Pertanyaan Pemantik', 'Observasi', 'Diskusi', 'Kuis', ['Lainnya', 'Lainnya...']],
  'Selama proses (formatif)': ['Tanya Jawab', 'Observasi', 'Diskusi', ['Keterampilan', 'Penilaian Keterampilan'], 'Produk', 'Presentasi', 'Latihan Soal', 'Kuis', ['Lainnya', 'Lainnya...']],
  'Akhir (sumatif)': ['Praktik', 'Kuis', 'Tes Tertulis', 'Produk', 'Presentasi', ['Lainnya', 'Lainnya...']]
};
const kv = o => Array.isArray(o) ? o[0] : o;
const CARA = ['Unjuk kerja langsung', 'Rekaman video', 'Penjelasan lisan', 'Tulisan', 'Produk atau poster'];
const NILAI = ['Observasi', 'Refleksi diri', 'Penilaian teman'];
const JP = ['1 JP', '2 JP', '3 JP', '4 JP', '5 JP', '6 JP'];
const SDG = ['1. Tanpa Kemiskinan', '2. Tanpa Kelaparan', '3. Kehidupan Sehat dan Sejahtera', '4. Pendidikan Berkualitas', '5. Kesetaraan Gender', '6. Air Bersih dan Sanitasi Layak', '7. Energi Bersih dan Terjangkau', '8. Pekerjaan Layak dan Pertumbuhan Ekonomi', '9. Industri, Inovasi dan Infrastruktur', '10. Berkurangnya Kesenjangan', '11. Kota dan Pemukiman yang Berkelanjutan', '12. Konsumsi dan Produksi yang Bertanggung Jawab', '13. Penanganan Perubahan Iklim', '14. Ekosistem Laut', '15. Ekosistem Darat', '16. Perdamaian, Keadilan dan Kelembagaan yang Tangguh', '17. Kemitraan untuk Mencapai Tujuan'];
const KB = [['', '-- Pilih Kebutuhan Belajar --'], ['Visual', 'Visual (Gambar & Grafik)'], ['Auditori', 'Auditori (Suara & Diskusi)'], ['Kinestetik', 'Kinestetik (Gerak & Praktik)'], ['Linguistik', 'Linguistik (Teks & Tulisan)'], ['Logis', 'Logis-Matematis (Pola & Logika)'], ['Sosial', 'Interpersonal (Kelompok/Sosial)'], ['Mandiri', 'Intrapersonal (Mandiri/Refleksi)'], ['Lainnya', 'Lainnya...']];
const TPK = [['', '-- Pilih Alat --'], 'YouTube', 'Quizizz', 'Canva', ['Lainnya', 'Lainnya...']];
const MIT = [['', '-- Pilih jenis mitra --'], 'Guru atau rekan sejawat', 'Orang tua', 'Masyarakat atau komunitas', 'Pakar atau narasumber', 'Lembaga atau dunia usaha', ['Lainnya', 'Lainnya...']];
const KEG = {
  awal: ['Orientasi', 'Apersepsi', 'Motivasi', ['Tujuan', 'Penyampaian Tujuan'], 'Pemanasan', ['Pemantik', 'Pertanyaan Pemantik'], 'Ice Breaking', ['Lainnya', 'Lainnya...']],
  inti: [['Stimulus', 'Pemberian Stimulus'], 'Berpikir Kritis', 'Kolaborasi', 'Produksi', 'Mengamati', 'Menanya', 'Mencoba', 'Diferensiasi', 'Aplikasi', 'Presentasi', 'Informasi', 'Analisis', 'Simpulan', ['Lainnya', 'Lainnya...']],
  penutup: ['Refleksi', 'Rangkuman', 'Tindak Lanjut', 'Penutup', 'Umpan Balik', ['Lainnya', 'Lainnya...']]
};
const KEGT = { awal: ['A. Kegiatan Awal', 'wAwal'], inti: ['B. Kegiatan Inti', 'wInti'], penutup: ['C. Kegiatan Penutup', 'wPenutup'] };

const blankK = k => ({ tipe: kv(KEG[k][0]), manual: '', detail: '' });
const blankC = () => ({ k: '', akt: '' });
const blankP = n => ({ ke: String(n), model: '', mver: '', letak: 'inti', jp: '2 JP', mJP: '40', wAwal: '', wInti: '', wPenutup: '', awal: [blankK('awal')], inti: [blankK('inti')], penutup: [blankK('penutup')], tp: [], ket: [], ketL: [''], rep: [], repL: [''], aks: [], aksL: [''], dupCat: '', casel: [blankC()] });
const blankL = () => ({ waktu: WAKTU[0], jenis: 'Pertanyaan Pemantik', manual: '', detail: '', tp: [], cara: [], caraL: [''] });
const blankR = () => ({ tp: '', k: '', l: ['', '', '', ''] });
const blankS = () => ({ k: '', ind: '', nilai: 'Observasi' });
const blankM = () => ({ jenis: '', manual: '', nama: '', peran: '' });
const blank = () => ({
  mode: '',
  cover: null,
  id: { sekolah: '', penyusun: [''], mapel: '', topik: '', kelas: 'VII', semester: 'Ganjil', tahun: '', jp: '2 JP' },
  kenal: { awal: '', minat: '', emosi: '', kebutuhan: [{ tipe: '', manual: '', ket: '' }], materi: '', hambatan: '', dpl: [] },
  tuj: { cp: [''], tp: [''], abadi: '', esensial: [''], kunciP: '', kunciK: '', selTuju: [], lintas: [{ mapel: '', ket: '' }], sdgs: [{ sdg: SDG[0], ket: '' }] },
  bukti: { tugas: { nama: '', desk: '', rubrik: [blankR()] }, lain: [blankL()], sel: [blankS()] },
  pend: { model: [], modelL: [''], pendukung: [], pendukungL: [''], mindful: '', meaningful: '', joyful: '', metode: [''], mitra: [blankM()], fisik: [{ nama: '', suasana: '' }], budaya: [''], tpack: [{ alat: '', manual: '', ket: '' }] },
  ped: [blankP(1)],
  ttd: { kota: '', tgl: '', kepsek: '', nipk: '', guru: '', nipg: '' }
});
const ADD = {
  'kenal.kebutuhan': () => ({ tipe: '', manual: '', ket: '' }), 'tuj.lintas': () => ({ mapel: '', ket: '' }), 'tuj.sdgs': () => ({ sdg: SDG[0], ket: '' }),
  'pend.fisik': () => ({ nama: '', suasana: '' }), 'pend.tpack': () => ({ alat: '', manual: '', ket: '' }), 'pend.mitra': blankM,
  'bukti.tugas.rubrik': blankR, 'bukti.lain': blankL, 'bukti.sel': blankS, ped: () => blankP(D.ped.length + 1)
};
const mk = p => { let m = p.match(/^ped\.\d+\.(awal|inti|penutup)$/); if (m) return blankK(m[1]); if (/^ped\.\d+\.casel$/.test(p)) return blankC(); return ADD[p] ? ADD[p]() : ''; };

const $ = id => document.getElementById(id);
const g = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
const st = (o, p, v) => { const k = p.split('.'), l = k.pop(); k.reduce((a, x) => a[x], o)[l] = v; };
const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const APP_INFO = { versi: '3.4.0', pengembang: 'Ariesta Vandera', kontak: '' }; /* isi kontak (misalnya nomor WhatsApp atau tautan formulir) agar tampil di halaman Tentang */
let D, cur = 0, curId = null, curStatus = 'draft', curCreated = 0, dirty = false, syncT = null, USER = null, DAFTAR = [], listFilter = 'semua', PR = {}, curPersisted = false, baseSnap = null, fotoBaru;
/* ---------- katalog model dan sintaks ---------- */
const PENDUKUNG = ['Berpusat pada murid', 'Kontekstual', 'Berdiferensiasi', 'Pengajaran sesuai tingkat capaian (TaRL)', 'Saintifik', 'Kolaboratif', 'Pembelajaran sosial emosional'];
const MODELS = () => [...KATALOG, ...((PR && PR.modelku) || []).map(m => ({ id: 'u:' + m.id, nama: m.nama, grup: 'Model saya', versi: [{ id: 'v1', acuan: 'dibuat oleh guru', label: 'Versi saya', fase: m.fase.map(f => ({ ...f, k: f.k || f.n })) }] }))];
const findModel = id => (id ? MODELS().find(m => m.id === id) || null : null);
const versiOf = (m, id) => m.versi.find(x => x.id === id) || m.versi[0];
const BAGIAN = ['awal', 'inti', 'penutup'];
/* seberapa banyak fase sintaks yang sudah ada sebagai blok kegiatan; hanya informasi, bukan penilaian */
function covOf(p, v) {
  const ada = new Set(BAGIAN.flatMap(k => p[k].filter(x => x.fase).map(x => x.fase)));
  const hilang = v.fase.filter(f => !ada.has(f.k)).map(f => f.k);
  return { total: v.fase.length, ada: v.fase.length - hilang.length, hilang, terpasang: ada.size > 0 };
}
const modelGrup = () => { const gr = {}; MODELS().forEach(m => { (gr[m.grup] = gr[m.grup] || []).push(m.nama); }); return Object.entries(gr); };
const mselLabel = (pilih, kosong) => (pilih.length ? pilih.length + ' dipilih' : kosong);
const mselTags = (path, pilih) => pilih.map(v => `<span class="mtag">${esc(v)}<button type="button" data-mseldel="${esc(path)}" data-v="${esc(v)}" aria-label="Hapus ${esc(v)}">×</button></span>`).join('');
/* pilihan ganda berbentuk dropdown: hanya pilihan yang terpilih tampil sebagai label kecil */
const MSEL = (path, grup, kosong) => {
  const pilih = g(D, path);
  return `<div class="msel" data-msel="${esc(path)}" data-kosong="${esc(kosong)}"><div class="msel-wrap"><button type="button" class="msel-btn" data-mselbtn="1"><span class="msel-lbl">${esc(mselLabel(pilih, kosong))}</span><span class="car">▾</span></button><div class="msel-panel" hidden>${grup.map(([jdl, arr]) => `${jdl ? `<p class="msel-g">${esc(jdl)}</p>` : ''}${arr.map(o => `<label class="msel-i"><input type="checkbox" data-c="${esc(path)}" value="${esc(o)}" ${pilih.includes(o) ? 'checked' : ''}><span>${esc(o)}</span></label>`).join('')}`).join('')}</div></div><div class="msel-tags">${mselTags(path, pilih)}</div></div>`;
};
function refreshMsel(ms) { const path = ms.dataset.msel, pilih = g(D, path); ms.querySelector('.msel-lbl').textContent = mselLabel(pilih, ms.dataset.kosong); ms.querySelector('.msel-tags').innerHTML = mselTags(path, pilih); }
const grupChips = path => {
  const gr = {}; MODELS().forEach(m => { (gr[m.grup] = gr[m.grup] || []).push(m.nama); });
  return Object.entries(gr).map(([k, v]) => `<p class="hint" style="margin:10px 0 4px"><b>${esc(k)}</b></p>${CHK(path, v)}`).join('');
};
function modelBlok(p, i) {
  const m = findModel(p.model), v = m ? versiOf(m, p.mver) : null, dipilih = new Set(D.pend.model || []);
  const grup = {}; MODELS().forEach(x => { (grup[x.grup] = grup[x.grup] || []).push(x); });
  const opsi = `<option value="">Bebas (tanpa sintaks)</option>` + Object.entries(grup).map(([k, arr]) => `<optgroup label="${esc(k)}">${arr.map(x => `<option value="${esc(x.id)}" ${p.model === x.id ? 'selected' : ''}>${dipilih.has(x.nama) ? '✓ ' : ''}${esc(x.nama)}</option>`).join('')}</optgroup>`).join('');
  const cov = m ? covOf(p, v) : null;
  return `<div class="blk" style="--c:var(--pri)"><h4>Model pembelajaran pertemuan ini</h4>
    <div class="row"><select data-p="ped.${i}.model" data-r="1">${opsi}</select></div>
    ${m && m.versi.length > 1 ? `<div class="row"><select data-p="ped.${i}.mver" data-r="1">${m.versi.map(x => `<option value="${esc(x.id)}" ${v.id === x.id ? 'selected' : ''}>${esc(x.label || 'Acuan: ' + x.acuan)}</option>`).join('')}</select></div>` : ''}
    ${m ? `<label class="f" style="margin:8px 0 6px"><span>Letak blok sintaks</span><select data-p="ped.${i}.letak"><option value="inti" ${p.letak !== 'sebar' ? 'selected' : ''}>Semua di Kegiatan Inti</option><option value="sebar" ${p.letak === 'sebar' ? 'selected' : ''}>Menyebar sesuai fase (awal, inti, penutup)</option></select></label><p class="hint">Acuan sintaks: ${esc(v.acuan)}. ${esc(m.catatan || '')} Blok sintaks hanyalah kerangka: ubah, tambah, atau hapus sesuai kebutuhan Anda.</p>
      <div class="row" style="align-items:center"><button class="add" data-act="pasang" data-i="${i}" type="button">Pasang sintaks</button><span class="hint">${cov.terpasang ? `Fase terpetakan ${cov.ada}/${cov.total}${cov.hilang.length ? ' · belum ada: ' + esc(cov.hilang.join(', ')) : ''}` : 'Belum dipasang.'}</span></div>` : '<p class="hint">Pilih model untuk melihat sintaks acuannya, atau biarkan bebas. Model yang dipilih ✓ berasal dari langkah Pendekatan.</p>'}
  </div>`;
}
/* memasang fase sintaks sebagai blok kegiatan; blok yang sudah ditulis guru tidak disentuh */
function pasangSintaks(i) {
  const p = D.ped[i], m = findModel(p.model); if (!m) return;
  const v = versiOf(m, p.mver); p.mver = v.id;
  const sebar = p.letak === 'sebar', nama = new Set(v.fase.map(f => f.k));
  BAGIAN.forEach(k => {
    p[k] = p[k].filter(x => !(x.fase && !String(x.detail).trim()));
    p[k].forEach(x => { if (x.fase && !nama.has(x.fase)) { delete x.fase; delete x.hint; } });
  });
  const ada = new Set(BAGIAN.flatMap(k => p[k].filter(x => x.fase).map(x => x.fase)));
  const baru = { awal: [], inti: [], penutup: [] };
  v.fase.forEach(f => { if (!ada.has(f.k)) baru[sebar ? f.b : 'inti'].push({ tipe: 'Lainnya', manual: f.k, detail: '', fase: f.k, hint: (f.n !== f.k ? f.n + '. ' : '') + (f.p || '') }); });
  BAGIAN.forEach(k => {
    if (!baru[k].length) { if (!p[k].length) p[k] = [blankK(k)]; return; }
    const polos = p[k].length === 1 && !p[k][0].fase && p[k][0].tipe === kv(KEG[k][0]) && !String(p[k][0].manual).trim() && !String(p[k][0].detail).trim();
    p[k] = (polos ? [] : p[k]).concat(baru[k]);
  });
  save(); render(); toast('Sintaks "' + m.nama + '" dipasang. Isi detail tiap blok sesuai kebutuhan.');
}

/* merapikan data RPM, termasuk data versi lama */
function normalize(d) {
  if (!d || !d.ped || !d.tuj || d.tuj.kunciP === undefined) d = blank();
  if (d.mode === undefined) d.mode = 'terpadu'; /* data lama tetap memakai mode lengkap */
  d.bukti.lain.forEach(x => { if (!Array.isArray(x.caraL)) x.caraL = [String(x.caraLain || '')]; });
  d.ped.forEach(q => [['ket', 'ketLain'], ['rep', 'repLain'], ['aks', 'aksLain']].forEach(([k, o]) => { if (!Array.isArray(q[k + 'L'])) q[k + 'L'] = [String(q[o] || '')]; }));
  if (!Array.isArray(d.pend.modelL)) {
    const baku = new Set(MODELS().map(m => m.nama)), semua = d.pend.model.filter(x => String(x).trim());
    d.pend.model = semua.filter(x => baku.has(x)); d.pend.modelL = semua.filter(x => !baku.has(x)); if (!d.pend.modelL.length) d.pend.modelL = [''];
  }
  if (!Array.isArray(d.pend.pendukung)) d.pend.pendukung = [];
  if (!Array.isArray(d.pend.pendukungL)) d.pend.pendukungL = [''];
  d.ped.forEach(q => {
    q.ke = String(q.ke); if (q.model === undefined) q.model = ''; if (q.mver === undefined) q.mver = ''; if (q.letak === undefined) q.letak = 'inti';
    const mm = findModel(q.model); /* blok sintaks versi sebelumnya yang masih berlabel nama lengkap diganti nama singkat */
    if (mm) { const vv = versiOf(mm, q.mver); BAGIAN.forEach(k => q[k].forEach(x => { const f = x.fase && vv.fase.find(y => y.n === x.fase && y.k !== x.fase); if (f) { if (x.manual === f.n) x.manual = f.k; x.fase = f.k; } })); }
  });
  return d;
}
D = normalize(null);
const um = () => D.mode === 'umum';
const NAMA_UMUM = [null, null, 'Tujuan Pembelajaran', 'Asesmen', null, 'Kegiatan Pembelajaran'];
let lampN = 0; /* jumlah lampiran tersimpan, ditampilkan pada nama langkah */
const sn = i => { const b = (um() && NAMA_UMUM[i]) || STEPS[i][0]; return b === 'Lampiran' && lampN ? b + ' (' + lampN + ')' : b; };
const jam = () => new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
const setSaved = t => { const e = $('saved'); if (e) e.textContent = t; };
function save() { dirty = true; setSaved('Menyimpan...'); const t = $('edTitle'); if (t) t.textContent = judulRpm(D); clearTimeout(syncT); syncT = setTimeout(sync, 900); }
const judulRpm = d => [d.id.mapel, d.id.topik].map(x => String(x || '').trim()).filter(Boolean).join(' - ') || 'RPM tanpa judul';
function lengkapOf(d) { const p = D; D = d; try { const c = checks(); return Math.round(100 * c.filter(x => x[1]).length / (c.length || 1)); } finally { D = p; } }
const metaOf = (d, status, created) => ({ judul: judulRpm(d), mapel: String(d.id.mapel || ''), kelas: String(d.id.kelas || ''), mode: d.mode, status, lengkap: lengkapOf(d), createdAt: created, updatedAt: Date.now() });
async function sync() {
  clearTimeout(syncT);
  if (typeof Repo === 'undefined' || !curId || !D.mode) return;
  if (!curPersisted && JSON.stringify(D) === baseSnap) { dirty = false; setSaved(''); return; }
  dirty = false; setSaved('Menyimpan...');
  try { const r = await Repo.put(curId, metaOf(D, curStatus, curCreated), JSON.stringify(D)); curPersisted = true; setSaved(r && r.pending ? 'Tersimpan di perangkat, menunggu koneksi' : 'Tersimpan ' + jam()); }
  catch (e) { dirty = true; console.error(e); setSaved('Gagal menyimpan'); }
}

/* ---------- komponen formulir ---------- */
const F = (label, p, o = {}) => `<label class="f"><span>${label}${o.hint ? `<i title="${esc(o.hint)}">ⓘ</i>` : ''}</span>${o.area ? `<textarea rows="${o.area}" data-p="${p}" placeholder="${esc(o.ph || '')}">${esc(g(D, p))}</textarea>` : `<input ${o.type ? `type="${o.type}"` : ''} ${o.min ? `min="${o.min}"` : ''} data-p="${p}" value="${esc(g(D, p))}" placeholder="${esc(o.ph || '')}">`}</label>`;
const SO = (p, opts, rr) => `<select data-p="${p}" ${rr ? 'data-r="1"' : ''}>${opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<option value="${esc(v)}" ${g(D, p) === v ? 'selected' : ''}>${esc(l)}</option>`; }).join('')}</select>`;
const S = (label, p, opts, rr) => `<label class="f"><span>${label}</span>${SO(p, opts, rr)}</label>`;
const MAN = (p, ph) => g(D, p + '.tipe') === 'Lainnya' ? `<input style="margin-top:6px" data-p="${p}.manual" value="${esc(g(D, p + '.manual'))}" placeholder="${esc(ph || 'Tulis manual...')}">` : '';
const CHK = (p, opts) => opts.length ? `<div class="chips">${opts.map(o => { const [v, l] = Array.isArray(o) ? o : [o, o]; return `<label><input type="checkbox" data-c="${p}" value="${esc(v)}" ${g(D, p).includes(v) ? 'checked' : ''}><span title="${esc(l)}">${esc(l)}</span></label>`; }).join('')}</div>` : '<p class="hint">Isi Tujuan Pembelajaran di Langkah 3 terlebih dahulu.</p>';
const LIST = (label, p, ph, hint, ta) => `<div class="f"><span>${label}${hint ? `<i title="${esc(hint)}">ⓘ</i>` : ''}</span>${g(D, p).map((v, i) => `<div class="row" style="align-items:flex-start">${ta ? `<textarea rows="2" data-p="${p}.${i}" placeholder="${esc(ph)}">${esc(v)}</textarea>` : `<input data-p="${p}.${i}" value="${esc(v)}" placeholder="${esc(ph)}">`}<button class="x" data-del="${p}:${i}">×</button></div>`).join('')}<button class="add" data-add="${p}">+ Tambah</button></div>`;
const TA = (p, ph, rows) => `<textarea rows="${rows || 2}" data-p="${p}" placeholder="${esc(ph)}">${esc(g(D, p))}</textarea>`;
const LAINL = (p, ph) => `<div class="f" style="margin:10px 0 6px">${g(D, p).map((v, i) => `<div class="row"><input data-p="${p}.${i}" value="${esc(v)}" placeholder="${esc(ph)}"><button class="x" data-del="${p}:${i}">×</button></div>`).join('')}<button class="add" data-add="${p}">+ Tambah lainnya</button></div>`;
const DEL = (p, i) => `<button class="x" data-del="${p}:${i}">×</button>`;
const ADDB = (p, t) => `<button class="add" data-add="${p}">${t}</button>`;
const tpOpts = () => D.tuj.tp.map((t, i) => t.trim() ? ['TP' + (i + 1), 'TP ' + (i + 1) + ': ' + t.trim().slice(0, 110)] : null).filter(Boolean);
const tpShort = () => [['', '-- TP --'], ...D.tuj.tp.map((t, i) => t.trim() ? ['TP' + (i + 1), 'TP ' + (i + 1)] : null).filter(Boolean)];
const head = (t, s) => `<h2>${t}</h2><p class="sub">${s}</p>`;
const tugasTP = () => [...new Set(D.bukti.tugas.rubrik.map(r => r.tp).filter(Boolean))];

/* waktu pertemuan: total otomatis dan pemeriksa jumlah kegiatan */
function wInfo(p) {
  const n = parseInt(p.jp) || 0, m = +p.mJP || 0, tot = n * m, s = (+p.wAwal || 0) + (+p.wInti || 0) + (+p.wPenutup || 0);
  const msg = s === 0 ? '' : s === tot ? '✔ Jumlah kegiatan ' + s + ' menit sesuai total.' : '⚠ Jumlah kegiatan ' + s + ' menit, ' + (s < tot ? 'kurang ' + (tot - s) : 'lebih ' + (s - tot)) + ' menit dari total ' + tot + ' menit.';
  return { tot: 'Total waktu: ' + n + ' JP × ' + m + ' menit = ' + tot + ' menit', msg, cls: 'wmsg ' + (s === tot ? 'ok' : 'warn') };
}
function updWaktu(i) {
  const w = wInfo(D.ped[i]), a = $('tot' + i), b = $('wm' + i);
  if (a) a.textContent = w.tot; if (b) { b.textContent = w.msg; b.className = w.cls; }
}

/* ---------- langkah ---------- */
const STEPS = [
  ['Identitas', () => `<div class="card">${head('Identitas Modul', 'Sampul dan data dasar rancangan pembelajaran.')}
    <h3>Sampul</h3><div class="f"><span>Gambar sampul</span>${D.cover ? `<img src="${D.cover.u}" style="max-width:220px;border-radius:10px;display:block;margin-bottom:8px"><button class="x" data-act="rmcover">Hapus sampul</button>` : '<input type="file" id="cover" accept="image/*">'}</div>
    <h3>Data modul</h3><div class="g2">${F('Nama sekolah', 'id.sekolah')}${F('Mata pelajaran', 'id.mapel', { ph: 'Contoh: Matematika' })}${F('Topik utama', 'id.topik', { ph: 'Contoh: Pecahan senilai' })}${F('Tahun pelajaran', 'id.tahun', { ph: '2026/2027' })}
    ${S('Kelas', 'id.kelas', Object.keys(FASE))}<label class="f"><span>Fase</span><input readonly value="Fase ${FASE[D.id.kelas]}"></label>${S('Semester', 'id.semester', ['Ganjil', 'Genap'])}${S('Alokasi JP', 'id.jp', JP)}</div>
    <h3>Penyusun</h3>${LIST('Nama penyusun', 'id.penyusun', 'Nama lengkap penyusun')}</div>`],
  ['Kenali Murid', () => `<div class="card">${head('Kenali Murid', 'Mulailah dari murid: apa yang sudah mereka bawa dan apa yang mungkin menghambat.')}
    <h3>Kondisi murid</h3>${F('Pengetahuan awal', 'kenal.awal', { area: 3, ph: 'Contoh: Murid sudah mampu ..., tetapi belum mengenal ...' })}${F('Minat belajar', 'kenal.minat', { area: 2, ph: 'Contoh: Murid menyukai kerja kelompok dan permainan' })}
    ${um() ? '' : F('Kondisi emosional dan latar belakang murid', 'kenal.emosi', { area: 2, ph: 'Contoh: Sebagian murid cemas saat tampil di depan kelas; ada murid yang baru pindah sekolah', hint: 'Dasar penerapan CASEL: guru mengenali kondisi emosional dan latar belakang murid, bukan hanya kemampuannya.' })}
    <h3>Kebutuhan dan hambatan belajar</h3><div class="f"><span>Kebutuhan belajar</span>${D.kenal.kebutuhan.map((x, i) => `<div class="blk" style="--c:var(--pri)"><div class="row">${SO(`kenal.kebutuhan.${i}.tipe`, KB, 1)}${DEL('kenal.kebutuhan', i)}</div>${MAN(`kenal.kebutuhan.${i}`, 'Kategori manual...')}${TA(`kenal.kebutuhan.${i}.ket`, 'Keterangan...')}</div>`).join('')}${ADDB('kenal.kebutuhan', '+ Kebutuhan')}</div>
    ${um() ? '' : F('Perkiraan hambatan belajar', 'kenal.hambatan', { area: 2, ph: 'Contoh: Sebagian murid takut salah dan enggan mencoba', hint: 'Dasar DUP: hambatan diperkirakan sejak awal, lalu jalurnya disiapkan sejak awal.' })}
    <h3>Materi</h3>${F('Materi pembelajaran', 'kenal.materi', { area: 3, ph: 'Rincian cakupan materi...' })}
    <h3>Dimensi Profil Lulusan (DPL)</h3>${CHK('kenal.dpl', DPL)}</div>`],
  ['Tahap 1: Tujuan Akhir', () => `<div class="card">${um() ? '' : '<span class="tag t-ubd">UbD · Tahap 1</span>'}${um() ? head('Tujuan Pembelajaran', 'Capaian dan tujuan pembelajaran yang ingin dicapai murid.') : head('Tujuan Akhir', 'Apa yang harus murid pahami dan mampu lakukan di akhir?')}
    <h3>Capaian dan tujuan pembelajaran</h3>${LIST('Capaian Pembelajaran (CP)', 'tuj.cp', 'Salin elemen atau deskripsi CP sesuai fase', '', 1)}${LIST('Tujuan Pembelajaran (TP)', 'tuj.tp', 'Contoh: Murid mampu menjelaskan ...', 'Awali dengan "Murid mampu" diikuti kata kerja yang bisa diamati, seperti menjelaskan atau mendemonstrasikan.', 1)}
    ${um() ? '' : `<h3>Pemahaman dan keterampilan kunci</h3>${F('Pemahaman abadi', 'tuj.abadi', { area: 2, ph: 'Contoh: gagasan besar yang tetap diingat murid, ditulis sebagai kalimat lengkap', hint: 'Gagasan besar yang tetap diingat murid lama setelah pelajaran. Bukan judul topik.' })}
    ${LIST('Pertanyaan esensial', 'tuj.esensial', 'Contoh: Apa yang membuat ... ?', 'Pertanyaan terbuka yang tidak punya satu jawaban pendek.', 1)}
    <div class="g2">${F('Pengetahuan kunci', 'tuj.kunciP', { area: 3, ph: 'Apa yang harus murid tahu? Contoh: istilah, konsep, aturan', hint: 'Fakta, istilah, konsep, atau aturan yang perlu diketahui murid agar tujuan tercapai.' })}${F('Keterampilan kunci', 'tuj.kunciK', { area: 3, ph: 'Apa yang harus murid bisa lakukan? Contoh: langkah, teknik', hint: 'Kemampuan yang perlu dipraktikkan murid agar tujuan tercapai.' })}</div>
    <h3>Tujuan sosial emosional (CASEL)</h3><p class="hint">Pilih satu atau dua kompetensi yang dituju modul ini.</p>${CHK('tuj.selTuju', SEL)}`}
    <h3>Koneksi dan SDGs</h3><div class="f"><span>Koneksi lintas disiplin ilmu</span>${D.tuj.lintas.map((x, i) => `<div class="row"><input data-p="tuj.lintas.${i}.mapel" value="${esc(x.mapel)}" placeholder="Mata pelajaran"><input data-p="tuj.lintas.${i}.ket" value="${esc(x.ket)}" placeholder="Keterangan integrasi">${DEL('tuj.lintas', i)}</div>`).join('')}${ADDB('tuj.lintas', '+ Tambah')}</div>
    <div class="f"><span>Integrasi SDGs</span>${D.tuj.sdgs.map((x, i) => `<div class="row">${SO(`tuj.sdgs.${i}.sdg`, SDG)}<input data-p="tuj.sdgs.${i}.ket" value="${esc(x.ket)}" placeholder="Deskripsi...">${DEL('tuj.sdgs', i)}</div>`).join('')}${ADDB('tuj.sdgs', '+ Tambah')}</div></div>`],
  ['Tahap 2: Bukti Asesmen', () => { const t = D.bukti.tugas; return `<div class="card">${um() ? '' : '<span class="tag t-ubd">UbD · Tahap 2</span>'}${um() ? head('Asesmen', 'Rencanakan asesmen awal, formatif, dan sumatif.') : head('Bukti Asesmen', 'Tentukan bukti keberhasilan sebelum merancang kegiatan.')}
    ${um() ? '' : `<h3>A. Asesmen utama (tugas kinerja)</h3>${F('Nama tugas', 'bukti.tugas.nama', { ph: 'Contoh: Presentasi hasil investigasi' })}${F('Deskripsi tugas', 'bukti.tugas.desk', { area: 3, ph: 'Contoh: Murid melakukan ..., lalu menjelaskan ...' })}
    <div class="scroll"><table class="rb rbm"><tr><th>TP</th><th>Kriteria</th>${LV.map(l => `<th>${l}</th>`).join('')}<th></th></tr>
    ${t.rubrik.map((r, i) => `<tr><td data-l="TP" style="min-width:90px">${SO(`bukti.tugas.rubrik.${i}.tp`, tpShort())}</td><td data-l="Kriteria"><input data-p="bukti.tugas.rubrik.${i}.k" value="${esc(r.k)}" placeholder="Contoh: Ketepatan"></td>${r.l.map((v, j) => `<td data-l="${LV[j]}"><textarea rows="3" data-p="bukti.tugas.rubrik.${i}.l.${j}">${esc(v)}</textarea></td>`).join('')}<td>${DEL('bukti.tugas.rubrik', i)}</td></tr>`).join('')}</table></div>${ADDB('bukti.tugas.rubrik', '+ Tambah kriteria')}`}
    <h3>${um() ? 'Asesmen awal, formatif, dan sumatif' : 'B. Asesmen pendukung (awal, formatif, sumatif)'}</h3>
    ${D.bukti.lain.map((x, i) => `<div class="blk" style="--c:var(--ubd)"><div class="g2">${S('Waktu', `bukti.lain.${i}.waktu`, WAKTU, 1)}<label class="f"><span>Jenis</span>${SO(`bukti.lain.${i}.jenis`, JENISW[x.waktu] || JENISW[WAKTU[0]], 1)}${x.jenis === 'Lainnya' ? `<input style="margin-top:6px" data-p="bukti.lain.${i}.manual" value="${esc(x.manual)}" placeholder="Tulis manual...">` : ''}</label></div>
    ${F('Instrumen atau teknik', `bukti.lain.${i}.detail`, { area: 2, ph: 'Contoh: Guru mengamati ... memakai daftar cek berisi ... aspek' })}<label class="f"><span>TP terkait</span></label>${CHK(`bukti.lain.${i}.tp`, tpOpts())}
    ${um() ? '' : `<label class="f"><span>Cara murid menunjukkan hasil (DUP)</span></label>${CHK(`bukti.lain.${i}.cara`, CARA)}${LAINL(`bukti.lain.${i}.caraL`, 'Lainnya: tulis cara sendiri (opsional)')}`}<button class="x" data-del="bukti.lain:${i}">Hapus bukti ini</button></div>`).join('')}
    ${ADDB('bukti.lain', '+ Tambah asesmen')}
    ${um() ? '' : `<h3>C. Penilaian sosial emosional (CASEL)</h3><p class="hint">Tiap kompetensi yang dituju perlu punya indikator dan cara menilai.</p>
    ${D.bukti.sel.map((x, i) => `<div class="blk" style="--c:var(--sel)"><div class="row">${SO(`bukti.sel.${i}.k`, [['', '-- Pilih kompetensi --'], ...SEL])}${DEL('bukti.sel', i)}</div>${TA(`bukti.sel.${i}.ind`, 'Indikator perilaku yang diamati. Contoh: murid memberi semangat pada rekan yang belum berhasil')}${S('Cara menilai', `bukti.sel.${i}.nilai`, NILAI)}</div>`).join('')}${ADDB('bukti.sel', '+ Tambah penilaian CASEL')}`}</div>`; }],
  ['Pendekatan dan Lingkungan', () => `<div class="card">${head('Pendekatan dan Lingkungan', 'Model, metode, kemitraan, dan lingkungan belajar yang mendukung rancangan.')}
    <h3>Model pembelajaran</h3><p class="hint">Pilih model yang akan dipakai. Sintaksnya dipasang di langkah Kegiatan, per pertemuan, dan bisa Anda ubah. Model buatan sendiri ditambahkan di halaman Profil.</p>
    ${MSEL('pend.model', modelGrup(), 'Pilih model pembelajaran')}${LAINL('pend.modelL', 'Model lain: tulis nama (opsional)')}
    <h3>Pendekatan pembelajaran</h3><p class="hint">Pendekatan utama adalah Pembelajaran Mendalam (berkesadaran, bermakna, menggembirakan). Tambahkan pendekatan pendukung bila ada.</p>
    ${MSEL('pend.pendukung', [['', PENDUKUNG]], 'Pilih pendekatan pendukung')}${LAINL('pend.pendukungL', 'Pendekatan lain: tulis nama (opsional)')}
    <h3>Prinsip Deep Learning</h3><div class="g3">${F('Mindful learning', 'pend.mindful', { area: 3, ph: 'Contoh: Murid fokus dan sadar pada proses belajarnya' })}${F('Meaningful learning', 'pend.meaningful', { area: 3, ph: 'Contoh: Materi dikaitkan dengan kehidupan sehari-hari murid' })}${F('Joyful learning', 'pend.joyful', { area: 3, ph: 'Contoh: Kegiatan berupa permainan atau tantangan yang menyenangkan' })}</div>
    <h3>Metode pembelajaran</h3>${LIST('Daftar metode', 'pend.metode', 'Contoh: Diskusi, Tanya Jawab')}
    <h3>Kemitraan pembelajaran</h3><div class="f"><span>Mitra<i title="Pihak di luar guru dan murid yang diajak ikut mendukung pembelajaran, misalnya orang tua, komunitas, pakar, atau lembaga.">ⓘ</i></span>${D.pend.mitra.map((x, i) => `<div class="blk" style="--c:var(--pri)"><div class="row">${SO(`pend.mitra.${i}.jenis`, MIT, 1)}${DEL('pend.mitra', i)}</div>${x.jenis === 'Lainnya' ? `<input style="margin-bottom:6px" data-p="pend.mitra.${i}.manual" value="${esc(x.manual)}" placeholder="Tulis jenis mitra...">` : ''}<input style="margin-bottom:6px" data-p="pend.mitra.${i}.nama" value="${esc(x.nama)}" placeholder="Nama atau keterangan mitra">${TA(`pend.mitra.${i}.peran`, 'Peran mitra dalam pembelajaran...')}</div>`).join('')}${ADDB('pend.mitra', '+ Mitra')}</div>
    <h3>Lingkungan belajar</h3><div class="f"><span>Ruang fisik</span>${D.pend.fisik.map((x, i) => `<div class="row"><input data-p="pend.fisik.${i}.nama" value="${esc(x.nama)}" placeholder="Nama ruangan"><input data-p="pend.fisik.${i}.suasana" value="${esc(x.suasana)}" placeholder="Suasana atau kondisi">${DEL('pend.fisik', i)}</div>`).join('')}${ADDB('pend.fisik', '+ Ruang fisik')}</div>
    ${LIST('Budaya belajar', 'pend.budaya', 'Contoh: Budaya saling menghormati')}
    <h3>Integrasi digital (TPACK)</h3><div class="f"><span>Alat atau media digital</span>${D.pend.tpack.map((x, i) => `<div class="blk" style="--c:var(--pri)"><div class="row">${SO(`pend.tpack.${i}.alat`, TPK, 1)}${DEL('pend.tpack', i)}</div>${x.alat === 'Lainnya' ? `<input style="margin-bottom:6px" data-p="pend.tpack.${i}.manual" value="${esc(x.manual)}" placeholder="Tulis alat manual...">` : ''}${TA(`pend.tpack.${i}.ket`, 'Keterangan...')}</div>`).join('')}${ADDB('pend.tpack', '+ Alat digital')}</div></div>`],
  ['Tahap 3: Pengalaman Belajar', () => `<div class="card">${um() ? '' : '<span class="tag t-ubd">UbD · Tahap 3</span>'}${um() ? head('Kegiatan Pembelajaran', 'Rancang kegiatan belajar untuk tiap pertemuan.') : head('Pengalaman Belajar', 'Rancang kegiatan yang mengantar murid ke bukti di Tahap 2, sambil menyisipkan DUP dan CASEL.')}</div>
    ${D.ped.map((p, i) => { const w = wInfo(p); return `<div class="card"><h3 style="margin-top:0">Pertemuan ${i + 1}</h3>
    <div class="g3 tri">${S('Pertemuan ke-', `ped.${i}.ke`, [1, 2, 3, 4, 5, 6, 7, 8].map(String))}${S('Alokasi JP', `ped.${i}.jp`, JP, 1)}${F('Menit per JP', `ped.${i}.mJP`, { type: 'number', min: 1 })}</div>
    <p class="hint" id="tot${i}" style="margin-top:-6px">${w.tot}</p>
    <label class="f"><span>TP yang dituju</span></label>${CHK(`ped.${i}.tp`, tpOpts())}
    ${modelBlok(p, i)}
    ${Object.keys(KEGT).map(k => `<div class="blk" style="--c:var(--ubd)"><div class="row"><h4 style="flex:1">${KEGT[k][0]}</h4><input type="number" min="0" style="max-width:110px" data-p="ped.${i}.${KEGT[k][1]}" value="${esc(g(D, `ped.${i}.${KEGT[k][1]}`))}" placeholder="0"><span class="unit">menit</span></div>
      ${p[k].map((x, j) => `<div class="row" style="align-items:flex-start"><div style="flex:1">${x.fase ? '<span class="fasebadge">Sintaks</span>' : ''}${SO(`ped.${i}.${k}.${j}.tipe`, KEG[k], 1)}${MAN(`ped.${i}.${k}.${j}`)}</div><div style="flex:3"><textarea rows="2" data-p="ped.${i}.${k}.${j}.detail" placeholder="${esc(x.hint || 'Detail langkah...')}">${esc(x.detail)}</textarea></div>${DEL(`ped.${i}.${k}`, j)}</div>`).join('')}${ADDB(`ped.${i}.${k}`, '+ Sub-kegiatan')}</div>`).join('')}
    <p class="${w.cls}" id="wm${i}">${w.msg}</p>
    ${um() ? '' : `${Object.keys(DUP).map(k => `<div class="blk" style="--c:var(--dup)"><span class="tag t-dup">DUP</span><h4>${DUP[k].t}</h4><p>${DUP[k].q}</p>${CHK(`ped.${i}.${k}`, DUP[k].o)}${LAINL(`ped.${i}.${k}L`, 'Lainnya: tulis strategi sendiri (opsional)')}</div>`).join('')}
    ${F('Catatan strategi DUP lain', `ped.${i}.dupCat`, { area: 2, ph: 'Rincian pelaksanaan strategi DUP yang dipilih' })}
    <div class="blk" style="--c:var(--sel)"><span class="tag t-sel">CASEL</span><h4>Integrasi sosial emosional</h4><p>Tambahkan satu entri untuk tiap kompetensi yang dilatih pada pertemuan ini.</p>
    ${p.casel.map((c, j) => `<div class="blk" style="--c:var(--sel);background:var(--card)"><div class="row">${SO(`ped.${i}.casel.${j}.k`, [['', '-- Pilih kompetensi --'], ...SEL])}${DEL(`ped.${i}.casel`, j)}</div>${TA(`ped.${i}.casel.${j}.akt`, 'Aktivitas. Contoh: check-in perasaan di pembuka, kerja kelompok bergilir, refleksi penutup')}</div>`).join('')}${ADDB(`ped.${i}.casel`, '+ CASEL')}</div>`}
    ${D.ped.length > 1 ? `<button class="x" data-del="ped:${i}">Hapus pertemuan ini</button>` : ''}</div>`; }).join('')}
    ${ADDB('ped', '+ Tambah pertemuan')}`],
  ['Pengesahan', () => `<div class="card">${head('Pengesahan', 'Data untuk blok tanda tangan.')}<div class="g2">${F('Kota atau kabupaten', 'ttd.kota', { ph: 'Semarang' })}${F('Tanggal dokumen', 'ttd.tgl', { type: 'date' })}${F('Kepala sekolah', 'ttd.kepsek')}${F('NIP kepala sekolah', 'ttd.nipk', { ph: 'Nomor NIP saja' })}${F('Guru mata pelajaran', 'ttd.guru')}${F('NIP guru', 'ttd.nipg', { ph: 'Nomor NIP saja' })}</div></div>`],
  ['Lampiran', () => `<div class="card">${head('Lampiran (.docx)', 'Berkas yang diunggah di sini digabungkan di akhir dokumen saat diunduh.')}
    <label class="f"><span>Judul lampiran (opsional, isi sebelum memilih berkas)</span><input id="judulLamp" placeholder="Contoh: LKPD 1"></label>
    <label class="add filebtn">+ Pilih berkas .docx<input type="file" id="fileLamp" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple hidden></label>
    <p class="hint" id="lampMsg">Berkas langsung tersimpan begitu dipilih dan tetap ada saat Anda berpindah langkah.</p>${typeof Repo !== 'undefined' && Repo.kind === 'cloud' ? '<p class="hint">Catatan: lampiran disimpan di perangkat ini saja. Jika RPM dibuka dari perangkat lain, unggah ulang lampirannya.</p>' : ''}<div id="lamp" style="margin-top:14px"></div></div>`],
  ['Ringkasan dan Unduh', () => `<div class="card">${head('Ringkasan dan Unduh', um() ? 'Periksa kelengkapan sebelum mengunduh.' : 'Periksa keterpaduan UbD, DUP, dan CASEL sebelum mengunduh.')}
    <ul style="list-style:none;padding:0">${checks().map(([k, ok, m]) => `<li style="padding:6px 0"><span class="${ok ? 'ok' : 'warn'}">${ok ? '✔' : '⚠'}</span> <b>${k}</b> · ${esc(m)}</li>`).join('')}</ul>
    <button class="big" data-act="dl">Unduh RPM (.docx)</button></div>`]
];

/* ---------- cek keterpaduan ---------- */
function checks() {
  const L = [], add = (k, ok, m) => L.push([k, ok, m]);
  const tp = D.tuj.tp.map((t, i) => [t, 'TP' + (i + 1)]).filter(x => x[0].trim());
  const cov = n => tugasTP().includes(n) || D.bukti.lain.some(x => x.tp.includes(n));
  if (um()) {
    add('Kelengkapan', tp.length > 0, 'Tujuan pembelajaran terisi');
    tp.forEach(([t, n]) => { add('Kelengkapan', D.bukti.lain.some(x => x.tp.includes(n)), n + ' punya asesmen'); add('Kelengkapan', D.ped.some(x => x.tp.includes(n)), n + ' dilatih di suatu pertemuan'); });
    return L;
  }
  add('UbD', !!D.tuj.abadi.trim(), 'Pemahaman abadi terisi');
  add('UbD', D.tuj.esensial.some(x => x.trim()), 'Pertanyaan esensial terisi');
  add('UbD', tp.length > 0, 'Tujuan pembelajaran terisi');
  tp.forEach(([t, n]) => { add('UbD', cov(n), n + ' punya bukti asesmen'); add('UbD', D.ped.some(x => x.tp.includes(n)), n + ' dilatih di suatu pertemuan'); });
  D.ped.forEach((p, i) => Object.keys(DUP).forEach(x => add('DUP', p[x].length > 0 || (p[x + 'L'] || []).some(v => String(v).trim() !== ''), 'Pertemuan ' + (i + 1) + ': ' + DUP[x].t)));
  add('CASEL', D.tuj.selTuju.length > 0, 'Tujuan sosial emosional dipilih');
  D.tuj.selTuju.forEach(k => {
    add('CASEL', D.ped.some(p => p.casel.some(c => c.k === k && c.akt.trim())), k + ' dilatih di suatu pertemuan');
    add('CASEL', D.bukti.sel.some(s => s.k === k && s.ind.trim()), k + ' punya penilaian di Tahap 2');
  });
  D.ped.forEach((p, i) => add('CASEL', p.casel.some(c => c.k && c.akt.trim()), 'Pertemuan ' + (i + 1) + ': kompetensi dan aktivitas sosial emosional'));
  return L;
}
function cek() {
  const c = checks();
  $('cek').innerHTML = (um() ? ['Kelengkapan'] : ['UbD', 'DUP', 'CASEL']).map(k => { const a = c.filter(x => x[0] === k), n = a.filter(x => x[1]).length; return `<li><span>${k}</span><span class="${n === a.length ? 'ok' : 'warn'}">${n}/${a.length}</span></li>`; }).join('');
}

/* ---------- lampiran (IndexedDB) ---------- */
let db, dbErr = false;
try { if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {}
const dbReady = new Promise(res => {
  let rq; try { rq = indexedDB.open('DB_RPM', 1); } catch (e) { dbErr = true; return res(); }
  rq.onupgradeneeded = e => { const d = e.target.result; if (!d.objectStoreNames.contains('lampiran')) d.createObjectStore('lampiran', { keyPath: 'id', autoIncrement: true }); };
  rq.onsuccess = e => { db = e.target.result; res(); listLamp(); };
  rq.onerror = rq.onblocked = () => { dbErr = true; res(); };
});
const dbWait = () => Promise.race([dbReady, new Promise(r => setTimeout(r, 4000))]);
const lampRaw = async () => {
  await dbWait(); if (!db) return [];
  return new Promise(r => { try { const q = db.transaction('lampiran', 'readonly').objectStore('lampiran').getAll(); q.onsuccess = () => r(q.result); q.onerror = () => r([]); } catch (e) { r([]); } });
};
/* lampiran disimpan per RPM (kolom rid) */
const lampAll = async rid => (await lampRaw()).filter(x => x.rid === (rid === undefined ? curId : rid));
const lampTx = () => db.transaction('lampiran', 'readwrite').objectStore('lampiran');
const lampDone = q => new Promise(r => { q.onsuccess = q.onerror = () => r(); });
async function lampDelFor(rid) { await dbWait(); if (!db) return; for (const x of await lampAll(rid)) await lampDone(lampTx().delete(x.id)); }
async function lampCopy(from, to) { await dbWait(); if (!db) return; for (const x of await lampAll(from)) { const { id, ...sisa } = x; await lampDone(lampTx().add({ ...sisa, rid: to })); } }
async function lampAdopt(rid) { await dbWait(); if (!db) return; for (const x of (await lampRaw()).filter(y => !y.rid)) await lampDone(lampTx().put({ ...x, rid })); }
async function listLamp() {
  const a = await lampAll(); lampN = a.length; drawSteps();
  const el = $('lamp'); if (!el) return;
  if (dbErr) { el.innerHTML = '<p class="warn">Penyimpanan lampiran tidak tersedia di peramban ini, jadi berkas tidak bisa disimpan. Gunakan aplikasi desktop atau peramban lain.</p>'; return; }
  el.innerHTML = a.length ? `<table class="rb"><tr><th>Judul</th><th>Berkas</th><th></th></tr>${a.map(x => `<tr><td>${esc(x.judul || '-')}</td><td>${esc(x.nama)}</td><td><button class="x" data-act="dellamp" data-id="${x.id}">Hapus</button></td></tr>`).join('')}</table>` : '<p class="hint">Belum ada lampiran.</p>';
}
async function addLamp() {
  const inp = $('fileLamp'), fs = [...inp.files], j = $('judulLamp').value.trim();
  if (!fs.length) return;
  await dbWait();
  if (!db) { inp.value = ''; return alert('Penyimpanan lampiran tidak tersedia, berkas tidak tersimpan.'); }
  let n = 0;
  for (const f of fs) {
    if (!/\.docx$/i.test(f.name)) { alert(f.name + ' bukan .docx dan dilewati.'); continue; }
    try {
      const buf = await f.arrayBuffer();
      await new Promise((res, rej) => { const q = db.transaction('lampiran', 'readwrite').objectStore('lampiran').add({ judul: j || f.name, nama: f.name, konten: buf, rid: curId }); q.onsuccess = () => res(); q.onerror = () => rej(q.error); });
      n++;
    } catch (e) { alert(f.name + ' gagal disimpan (' + ((e && e.name) || 'kesalahan') + ').'); }
  }
  $('judulLamp').value = ''; inp.value = '';
  await listLamp();
  const m = $('lampMsg'); if (m && n) m.textContent = '✔ ' + n + ' berkas tersimpan.';
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

/* ---------- pilihan mode ---------- */
const chooser = () => `<div class="card">${head('Pilih jenis rancangan', 'Anda bisa berpindah mode kapan saja lewat pilihan di pojok kanan atas. Isian yang sudah ditulis tidak hilang.')}
  <div class="g2">
    <div class="blk" style="--c:var(--pri)"><h4>Mode Umum</h4><p>Komponen RPM yang sudah umum dikenal: identitas, tujuan pembelajaran, kegiatan awal, inti, dan penutup, serta asesmen. Cocok untuk memulai.</p><button data-act="mode" data-m="umum">Pakai mode Umum</button></div>
    <div class="blk" style="--c:var(--dup)"><h4>Mode Terintegrasi (UbD, DUP, CASEL)</h4><p>Menambahkan pemahaman abadi, bukti asesmen bertahap, pilihan DUP, dan integrasi sosial emosional.</p><button data-act="mode" data-m="terpadu">Pakai mode Terintegrasi</button></div>
  </div></div>`;

/* tiap halaman: judul halaman, lalu satu kartu untuk setiap kelompok isian (dipisah oleh judul h3) */
function kelompokkan(root) {
  if (!root || !root.children) return;
  [...root.children].filter(c => c.classList && c.classList.contains('card')).forEach(card => {
    const els = [...card.children];
    if (!els.some(e => e.tagName === 'H2')) return;
    const kepala = document.createElement('div'); kepala.className = 'pagehead';
    let i = 0;
    while (i < els.length && (els[i].classList.contains('tag') || els[i].tagName === 'H2' || (els[i].tagName === 'P' && els[i].classList.contains('sub')))) kepala.appendChild(els[i++]);
    const grup = []; let cur = null;
    els.slice(i).forEach(e => { if (e.tagName === 'H3') { cur = [e]; grup.push(cur); } else { if (!cur) { cur = []; grup.push(cur); } cur.push(e); } });
    const frag = document.createDocumentFragment(); frag.appendChild(kepala);
    grup.forEach(gr => { const c = document.createElement('div'); c.className = 'card sec'; gr.forEach(e => c.appendChild(e)); frag.appendChild(c); });
    card.replaceWith(frag);
  });
}
function drawSteps() {
  if (!D.mode) return;
  const el = $('steps');
  el.innerHTML = STEPS.map((s, i) => `<li data-s="${i}" class="${i === cur ? 'on' : ''}">${i + 1}. ${sn(i)}</li>`).join('');
  const on = el.querySelector && el.querySelector('li.on');
  if (on) el.scrollLeft = on.offsetLeft - (el.clientWidth - on.offsetWidth) / 2;
}

/* ---------- render dan navigasi ---------- */
function render(top) {
  $('modeSw').value = D.mode || '';
  if (!D.mode) {
    $('view').innerHTML = chooser(); $('steps').innerHTML = ''; $('cek').innerHTML = ''; $('pos').textContent = '';
    $('prev').disabled = true; $('next').disabled = true; const pt0 = $('posTop'); if (pt0) pt0.textContent = ''; if (top) window.scrollTo(0, 0); return;
  }
  $('view').innerHTML = STEPS[cur][1](); kelompokkan($('view'));
  drawSteps();
  $('pos').textContent = 'Langkah ' + (cur + 1) + ' dari ' + STEPS.length; $('pos').dataset.s = (cur + 1) + '/' + STEPS.length;
  const pt = $('posTop'); if (pt) pt.textContent = 'Langkah ' + (cur + 1) + '/' + STEPS.length;
  $('prev').disabled = cur === 0; $('next').disabled = cur === STEPS.length - 1;
  $('cekH').textContent = um() ? 'Cek kelengkapan' : 'Cek keterpaduan';
  saveNav(); cek(); if (top) window.scrollTo(0, 0); if (STEPS[cur][0] === 'Lampiran') listLamp();
}
function del(p, i) {
  const a = g(D, p);
  if (a.length > 1) a.splice(i, 1); else if (typeof a[0] === 'string') a[0] = '';
  if (p === 'tuj.tp') {
    const fix = x => { for (let j = x.length - 1; j >= 0; j--) { const n = +x[j].slice(2); if (n === i + 1) x.splice(j, 1); else if (n > i + 1) x[j] = 'TP' + (n - 1); } };
    D.bukti.lain.forEach(x => fix(x.tp)); D.ped.forEach(x => fix(x.tp));
    D.bukti.tugas.rubrik.forEach(r => { const n = +String(r.tp).slice(2); if (!n) return; if (n === i + 1) r.tp = ''; else if (n > i + 1) r.tp = 'TP' + (n - 1); });
  }
}
$('view').oninput = e => {
  const t = e.target; if (!t.dataset.p) return;
  st(D, t.dataset.p, t.value);
  if (/^bukti\.lain\.\d+\.waktu$/.test(t.dataset.p)) st(D, t.dataset.p.replace('.waktu', '.jenis'), kv(JENISW[t.value][0]));
  if (/^ped\.\d+\.model$/.test(t.dataset.p)) st(D, t.dataset.p.replace('.model', '.mver'), '');
  save();
  const m = t.dataset.p.match(/^ped\.(\d+)\.(mJP|wAwal|wInti|wPenutup)$/); if (m) updWaktu(+m[1]);
  if (t.dataset.r || t.dataset.p === 'id.kelas') render(); else cek();
};
$('view').onchange = e => {
  const t = e.target;
  if (t.id === 'cover' && t.files[0]) return bacaSampul(t.files[0]);
  if (t.id === 'fileLamp') return addLamp();
  if (!t.dataset.c) return;
  const a = g(D, t.dataset.c);
  if (t.checked) a.push(t.value); else a.splice(a.indexOf(t.value), 1);
  save(); cek();
  const ms = t.closest && t.closest('.msel'); if (ms) refreshMsel(ms);
};
$('view').onclick = async e => {
  const b = e.target.closest('button'); if (!b) return;
  const a = b.dataset.act;
  if (b.dataset.mselbtn) { const pn = b.parentElement.querySelector('.msel-panel'), buka = pn.hidden; document.querySelectorAll('.msel-panel').forEach(x => { x.hidden = true; }); pn.hidden = !buka; return; }
  if (b.dataset.mseldel) {
    const path = b.dataset.mseldel, v = b.dataset.v, arr = g(D, path), k = arr.indexOf(v); if (k >= 0) arr.splice(k, 1);
    save(); cek(); const ms = b.closest('.msel'); ms.querySelectorAll('input[data-c]').forEach(x => { if (x.value === v) x.checked = false; }); refreshMsel(ms); return;
  }
  if (a === 'mode') { D.mode = b.dataset.m; if (!curPersisted) baseSnap = JSON.stringify(D); save(); return render(true); }
  if (a === 'dl') return unduh(b);
  if (a === 'rmcover') { D.cover = null; save(); return render(); }
  if (a === 'addlamp') return addLamp();
  if (a === 'dellamp') { if (!db) return; db.transaction('lampiran', 'readwrite').objectStore('lampiran').delete(+b.dataset.id).onsuccess = listLamp; return; }
  if (a === 'pasang') return pasangSintaks(+b.dataset.i);
  if (b.dataset.add) { g(D, b.dataset.add).push(mk(b.dataset.add)); save(); render(); }
  if (b.dataset.del) { const [p, i] = b.dataset.del.split(':'); del(p, +i); save(); render(); }
};
$('modeSw').onchange = e => { const kosong = !curPersisted && JSON.stringify(D) === baseSnap; D.mode = e.target.value; if (kosong) baseSnap = JSON.stringify(D); save(); render(true); };
$('steps').onclick = e => { const li = e.target.closest('li'); if (li) { cur = +li.dataset.s; render(true); } };
$('prev').onclick = () => { cur--; render(true); };
$('next').onclick = () => { cur++; render(true); };
/* ---------- layar: masuk, daftar RPM, editor ---------- */
/* halaman terakhir diingat agar muat ulang atau tab tertutup tidak mengembalikan ke daftar */
const NAVKEY = 'rpm_nav_v1';
function saveNav() {
  if (!USER) return;
  const v = document.body.dataset.v;
  if (v !== 'editor' && v !== 'list' && v !== 'profil') return;
  try { localStorage.setItem(NAVKEY, JSON.stringify({ uid: USER.uid, v, id: v === 'editor' ? curId : null, cur, tab: listFilter })); } catch (e) {}
}
function bacaNav(uid) { try { const n = JSON.parse(localStorage.getItem(NAVKEY)); return n && n.uid === uid ? n : null; } catch (e) { return null; } }
function closeMenu() { const m = $('acctMenu'); if (m) m.hidden = true; }
function setView(v) {
  document.body.dataset.v = v; document.body.classList.toggle('anon', !USER);
  $('login').hidden = v !== 'login';
  $('splash').hidden = v !== 'boot';
  $('listv').hidden = v !== 'list';
  $('profilv').hidden = v !== 'profil';
  $('tentangv').hidden = v !== 'tentang';
  $('edbar').hidden = v !== 'editor';
  $('editor').hidden = v !== 'editor';
  const aktif = v === 'list' ? 'list' : v === 'profil' ? 'profil' : '';
  document.querySelectorAll('[data-go]').forEach(x => x.classList.toggle('on', x.dataset.go === aktif));
  closeMenu(); saveNav(); window.scrollTo(0, 0);
}
let toastT;
function toast(m) { const t = $('toast'); if (!t || !t.classList) return; t.textContent = m; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2800); }
const tglJam = ms => ms ? new Date(ms).toLocaleString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '-';
const labelSimpan = () => curStatus === 'selesai' ? 'Perbarui' : 'Simpan';

function pesanLogin(e) {
  const c = (e && e.code) || '';
  if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return '';
  if (c === 'auth/unauthorized-domain') return 'Domain ini belum didaftarkan di Firebase. Tambahkan di Authentication > Settings > Authorized domains.';
  if (c === 'auth/operation-not-allowed') return 'Login Google belum diaktifkan di Firebase (Authentication > Sign-in method).';
  if (c === 'auth/network-request-failed') return 'Tidak ada koneksi internet.';
  return 'Gagal masuk' + (c ? ' (' + c + ')' : '') + '.';
}

async function onAuth(u) {
  if (!u) {
    USER = null; PR = {}; D = normalize(null); curId = null; DAFTAR = [];
    $('loginMsg').textContent = '';
    return setView('login');
  }
  USER = u;
  try { PR = (await Repo.getProfile()) || {}; } catch (e) { PR = {}; }
  applyHeader();
  $('logout').hidden = !!u.local;
  const ln = $('localNote'); ln.hidden = !u.local;
  ln.textContent = Repo.fallback || 'Mode lokal: RPM tersimpan di perangkat ini saja. Untuk masuk dengan Google dan menyimpan ke akun, buka versi web aplikasi.';
  try { await migrateLegacy(); } catch (e) { console.error(e); }
  const nav = bacaNav(u.uid);
  if (nav) {
    listFilter = ['semua', 'draft', 'selesai'].includes(nav.tab) ? nav.tab : 'semua';
    if (nav.v === 'editor' && nav.id && await openRpm(nav.id, nav.cur, true)) return;
    if (nav.v === 'profil') return showProfil();
  }
  showList();
}

/* RPM tunggal dari versi lama (disimpan di perangkat) dipindahkan menjadi draft pertama */
async function migrateLegacy() {
  const flag = 'rpm_v4_migrated_' + USER.uid;
  if (localStorage.getItem(flag)) return;
  let old = null; try { old = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
  if (old && old.ped && old.tuj && old.tuj.kunciP !== undefined) {
    const d = normalize(old), isi = d.id.mapel || d.id.topik || d.id.sekolah || d.tuj.cp.join('') || d.tuj.tp.join('');
    if (d.mode && isi) {
      const id = Repo.newId();
      await Repo.put(id, metaOf(d, 'draft', Date.now()), JSON.stringify(d));
      await lampAdopt(id);
      toast('RPM dari perangkat ini dipindahkan ke daftar sebagai draft.');
    }
  }
  localStorage.setItem(flag, '1');
}

async function showList(msg) {
  curId = null; setView('list'); $('profNote').hidden = !!(PR.nama || PR.sekolah || PR.mapel);
  $('tabs').innerHTML = ''; $('listBody').innerHTML = '<p class="hint">Memuat daftar...</p>';
  try { DAFTAR = await Repo.list(); }
  catch (e) {
    console.error(e); DAFTAR = [];
    $('listBody').innerHTML = `<p class="warn">Gagal memuat daftar (${esc((e && (e.code || e.message)) || 'kesalahan')}). ${e && e.code === 'permission-denied' ? 'Periksa aturan Firestore.' : 'Periksa koneksi internet.'}</p>`;
    return;
  }
  drawList(); if (msg) toast(msg);
}
const rcard = x => `<div class="rcard"><div class="rtop"><div class="rtitle">${esc(x.judul || 'RPM tanpa judul')}</div><span class="badge ${x.status === 'selesai' ? 'b-ok' : 'b-draft'}">${x.status === 'selesai' ? 'Selesai' : 'Draft'}</span></div>
  <div class="rmeta">${esc([x.mapel, x.kelas ? 'Kelas ' + x.kelas : '', x.mode === 'umum' ? 'Mode Umum' : 'Mode Terintegrasi'].filter(Boolean).join(' · '))}</div>
  <div class="rmeta">Diubah ${tglJam(x.updatedAt)} · Kelengkapan ${x.lengkap == null ? '-' : x.lengkap + '%'}</div>
  <div class="ract"><button data-act="open" data-id="${esc(x.id)}">${x.status === 'selesai' ? 'Edit' : 'Lanjutkan'}</button><button class="ghost" data-act="dlrpm" data-id="${esc(x.id)}">Unduh</button><button class="ghost" data-act="duprpm" data-id="${esc(x.id)}">Salin</button><button class="x" data-act="delrpm" data-id="${esc(x.id)}">Hapus</button></div></div>`;
function drawList() {
  const sel = x => x.status === 'selesai';
  const tabs = [['semua', 'Semua', DAFTAR.length], ['draft', 'Draft', DAFTAR.filter(x => !sel(x)).length], ['selesai', 'Selesai', DAFTAR.filter(sel).length]];
  $('tabs').innerHTML = tabs.map(([k, l, c]) => `<button class="tab ${listFilter === k ? 'on' : ''}" data-tab="${k}">${l} (${c})</button>`).join('');
  const items = DAFTAR.filter(x => listFilter === 'semua' || (listFilter === 'selesai') === sel(x));
  $('listBody').innerHTML = items.length ? items.map(rcard).join('') : `<p class="hint">${DAFTAR.length ? 'Tidak ada RPM pada tab ini.' : 'Belum ada RPM. Tekan "+ RPM baru" untuk mulai.'}</p>`;
}

function showEditor() { setView('editor'); const et = $('edTitle'); if (et) et.textContent = judulRpm(D); const nl = $('navSimpanLbl'); if (nl) nl.textContent = labelSimpan(); setSaved(''); render(true); listLamp(); }
/* RPM baru langsung berisi data dari profil guru */
function prefillProfil(d) {
  const p = PR || {};
  if (p.sekolah) d.id.sekolah = p.sekolah;
  if (p.mapel) d.id.mapel = p.mapel;
  if (p.nama) { d.id.penyusun = [p.nama]; d.ttd.guru = p.nama; }
  if (p.nip) d.ttd.nipg = p.nip;
  if (p.kota) d.ttd.kota = p.kota;
  if (p.kepsek) d.ttd.kepsek = p.kepsek;
  if (p.nipk) d.ttd.nipk = p.nipk;
}
function newRpm() { D = blank(); prefillProfil(D); curId = Repo.newId(); curStatus = 'draft'; curCreated = Date.now(); curPersisted = false; baseSnap = null; cur = 0; dirty = false; showEditor(); }
async function openRpm(id, step, diam) {
  try {
    const r = await Repo.get(id); if (!r) { if (!diam) toast('RPM tidak ditemukan.'); return false; }
    D = normalize(JSON.parse(r.data)); curId = id; curStatus = r.meta.status === 'selesai' ? 'selesai' : 'draft';
    curCreated = r.meta.createdAt || Date.now(); curPersisted = true; baseSnap = null; dirty = false;
    cur = step >= 0 && step < STEPS.length ? step : 0; showEditor(); return true;
  } catch (e) { console.error(e); if (!diam) toast('Gagal membuka RPM.'); return false; }
}
async function dupRpm(id) {
  try {
    const r = await Repo.get(id); if (!r) return toast('RPM tidak ditemukan.');
    const d = normalize(JSON.parse(r.data)); d.id.topik = (d.id.topik ? d.id.topik + ' ' : '') + '(salinan)';
    const nid = Repo.newId();
    await Repo.put(nid, metaOf(d, 'draft', Date.now()), JSON.stringify(d));
    await lampCopy(id, nid);
    await showList('Disalin sebagai draft baru.');
  } catch (e) { console.error(e); toast('Gagal menyalin RPM.'); }
}
async function delRpm(id) {
  const x = DAFTAR.find(i => i.id === id);
  if (!confirm('Hapus "' + ((x && x.judul) || 'RPM ini') + '" beserta lampirannya? Tindakan ini tidak bisa dibatalkan.')) return;
  try { await Repo.del(id); await lampDelFor(id); DAFTAR = DAFTAR.filter(i => i.id !== id); drawList(); toast('RPM dihapus.'); }
  catch (e) { console.error(e); toast('Gagal menghapus RPM.'); }
}
async function dlRpm(id, btn) {
  const t = btn.textContent; btn.disabled = true; btn.textContent = 'Memuat...';
  try { const r = await Repo.get(id); if (!r) throw new Error('kosong'); D = normalize(JSON.parse(r.data)); curId = id; curStatus = 'draft'; curCreated = r.meta.createdAt || Date.now(); curPersisted = true; if (r.meta.status === 'selesai') curStatus = 'selesai'; }
  catch (e) { console.error(e); btn.disabled = false; btn.textContent = t; return toast('Gagal memuat RPM.'); }
  await unduh(btn);
  btn.textContent = t; await showList();
}
/* setelah unduh, RPM otomatis berstatus selesai */
async function afterDownload() {
  try {
    if (typeof Repo === 'undefined' || !curId) return;
    curStatus = 'selesai'; await sync();
    const sb = $('navSimpanLbl'); if (sb) sb.textContent = labelSimpan();
    toast('RPM diunduh dan ditandai selesai.');
  } catch (e) { console.error(e); }
}
/* pindah layar; pekerjaan di editor disimpan otomatis dulu */
async function go(w) {
  if (document.body.dataset.v === 'editor') { await sync(); if (dirty) return toast('Belum tersimpan. Periksa koneksi lalu coba lagi.'); }
  if (w === 'list') return showList();
  if (w === 'profil') return showProfil();
  if (w === 'tentang') return showTentang();
  if (w === 'new') return newRpm();
}
const keDaftar = () => go('list');

/* ---------- profil guru ---------- */
/* ---------- Tentang dan Bantuan ---------- */
function showTentang() {
  setView('tentang');
  $('tentangVer').textContent = 'versi ' + APP_INFO.versi;
  $('tentangDev').innerHTML = 'Dikembangkan oleh <b>' + esc(APP_INFO.pengembang) + '</b>.' + (APP_INFO.kontak ? ' Masukan dan laporan masalah: ' + esc(APP_INFO.kontak) + '.' : ' Saat melaporkan masalah, sebutkan nomor versi di atas.');
  $('katTabel').innerHTML = KATALOG.map(m => { const v = m.versi[0]; return `<details><summary>${esc(m.nama)} <span class="kacuan">· acuan: ${esc(v.acuan)} · ${v.fase.length} fase</span></summary><ol>${v.fase.map(f => `<li><b>${esc(f.k)}</b>${f.n !== f.k ? ' <span class="kacuan">· ' + esc(f.n) + '</span>' : ''}</li>`).join('')}</ol>${m.catatan ? `<p class="hint">${esc(m.catatan)}</p>` : ''}</details>`; }).join('');
}
$('tentangBack').onclick = () => { if (USER) showList(); else setView('login'); };

/* ---------- model buatan guru (halaman Profil) ---------- */
let MK = [];
function drawMK() {
  $('mkList').innerHTML = MK.length ? MK.map((m, i) => `<div class="blk" style="--c:var(--pri)">
    <div class="row"><input data-mk="${i}.nama" value="${esc(m.nama)}" placeholder="Nama model, misalnya Model Saya"><button class="x" type="button" data-mkdel="${i}">Hapus model</button></div>
    ${m.fase.map((f, j) => `<div class="row"><select data-mk="${i}.fase.${j}.b">${[['awal', 'Kegiatan awal'], ['inti', 'Kegiatan inti'], ['penutup', 'Kegiatan penutup']].map(([v, l]) => `<option value="${v}" ${f.b === v ? 'selected' : ''}>${l}</option>`).join('')}</select><input data-mk="${i}.fase.${j}.n" value="${esc(f.n)}" placeholder="Nama fase ${j + 1}"><button class="x" type="button" data-mkfdel="${i}.${j}">×</button></div>`).join('')}
    <button class="add" type="button" data-mkfadd="${i}">+ Fase</button></div>`).join('') : '<p class="hint">Belum ada model buatan Anda.</p>';
}
function bersihkanMK() {
  const baku = new Set(KATALOG.map(k => k.nama.toLowerCase()));
  return MK.map((m, i) => {
    let nama = String(m.nama || '').trim(); if (nama && baku.has(nama.toLowerCase())) nama += ' (saya)';
    return { id: m.id || ('m' + Date.now().toString(36) + i), nama, fase: m.fase.map(f => ({ n: String(f.n || '').trim(), b: BAGIAN.includes(f.b) ? f.b : 'inti', p: String(f.p || '').trim() })).filter(f => f.n) };
  }).filter(m => m.nama && m.fase.length);
}
$('mkAdd').onclick = () => { MK.push({ id: 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), nama: '', fase: [{ n: '', b: 'inti' }] }); drawMK(); };
const mkIn = e => { const t = e.target; if (t.dataset && t.dataset.mk) st(MK, t.dataset.mk, t.value); };
$('mkList').oninput = mkIn; $('mkList').onchange = mkIn;
$('mkList').onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.mkdel) { MK.splice(+b.dataset.mkdel, 1); drawMK(); }
  else if (b.dataset.mkfadd) { MK[+b.dataset.mkfadd].fase.push({ n: '', b: 'inti' }); drawMK(); }
  else if (b.dataset.mkfdel) { const [i, j] = b.dataset.mkfdel.split('.').map(Number); if (MK[i].fase.length > 1) MK[i].fase.splice(j, 1); drawMK(); }
};
const PF = ['nama', 'nip', 'mapel', 'sekolah', 'kota', 'kepsek', 'nipk'];
function drawAvatar(el, foto, nama) { el.innerHTML = foto ? `<img alt="" src="${esc(foto)}">` : esc(((nama || '?').trim().charAt(0) || '?').toUpperCase()); }
function applyHeader() {
  const nm = PR.nama || (USER && USER.name) || '';
  $('whoName').textContent = nm;
  $('whoMail').textContent = USER && USER.local ? 'Data tersimpan di perangkat ini' : ((USER && USER.email) || nm);
  drawAvatar($('avTop'), PR.foto || (USER && USER.photo) || '', nm);
}
function showProfil() {
  setView('profil'); fotoBaru = undefined; MK = JSON.parse(JSON.stringify(PR.modelku || [])); drawMK();
  PF.forEach(k => { $('pf-' + k).value = PR[k] || ''; });
  drawAvatar($('avBig'), PR.foto || (USER && USER.photo) || '', PR.nama || (USER && USER.name) || '');
  $('profMsg').textContent = '';
}
async function saveProfil() {
  const p = {}; PF.forEach(k => { p[k] = $('pf-' + k).value.trim(); });
  p.foto = fotoBaru !== undefined ? fotoBaru : (PR.foto || '');
  p.modelku = bersihkanMK();
  const b = $('profSave'); b.disabled = true;
  try { await Repo.setProfile(p); PR = p; fotoBaru = undefined; MK = JSON.parse(JSON.stringify(PR.modelku)); drawMK(); applyHeader(); $('profMsg').textContent = '✔ Profil tersimpan.'; toast('Profil tersimpan.'); }
  catch (e) { console.error(e); $('profMsg').textContent = 'Gagal menyimpan profil. Coba lagi.'; }
  b.disabled = false;
}
function bacaFoto(f) {
  const r = new FileReader();
  r.onload = () => {
    const im = new Image();
    im.onload = () => {
      const c = document.createElement('canvas'); c.width = c.height = 160;
      const m = Math.min(im.width, im.height);
      c.getContext('2d').drawImage(im, (im.width - m) / 2, (im.height - m) / 2, m, m, 0, 0, 160, 160);
      fotoBaru = c.toDataURL('image/jpeg', 0.85); drawAvatar($('avBig'), fotoBaru, '');
    };
    im.src = r.result;
  };
  r.readAsDataURL(f);
}

$('gLogin').onclick = async () => { $('loginMsg').textContent = ''; localStorage.removeItem(NAVKEY); try { await Repo.signIn(); } catch (e) { console.error(e); $('loginMsg').textContent = pesanLogin(e); } };
$('logout').onclick = async () => { await sync(); localStorage.removeItem(NAVKEY); try { await Repo.signOut(); } catch (e) { console.error(e); toast('Gagal keluar.'); } };
$('acctBtn').onclick = e => { e.stopPropagation(); const m = $('acctMenu'); m.hidden = !m.hidden; };
document.addEventListener('click', e => {
  if (!e.target.closest('.acct')) closeMenu();
  if (!e.target.closest('.msel')) document.querySelectorAll('.msel-panel').forEach(x => { x.hidden = true; });
  const g = e.target.closest('[data-go]'); if (g) { closeMenu(); go(g.dataset.go); }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); document.querySelectorAll('.msel-panel').forEach(x => { x.hidden = true; }); } });
/* tema terang atau gelap; pilihan disimpan di perangkat */
function temaSekarang() { return document.documentElement.getAttribute('data-theme') || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }
function gantiTema() { const t = temaSekarang() === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', t); try { localStorage.setItem('rpm_theme', t); } catch (e) {} }
$('themeBtn').onclick = gantiTema; $('themeBtn2').onclick = gantiTema;
$('fotoIn').onchange = e => { const f = e.target.files[0]; if (f) bacaFoto(f); e.target.value = ''; };
$('fotoDel').onclick = () => { fotoBaru = ''; drawAvatar($('avBig'), (USER && USER.photo) || '', $('pf-nama').value || (USER && USER.name) || ''); };
$('profSave').onclick = saveProfil;
const simpanDraft = async () => {
  if (!D.mode) return showList('RPM masih kosong, tidak ada yang disimpan.');
  await sync();
  if (dirty) return toast('Gagal menyimpan. Periksa koneksi lalu coba lagi.');
  if (!curPersisted) return showList('RPM masih kosong, tidak ada yang disimpan.');
  await showList(curStatus === 'selesai' ? 'Perubahan tersimpan.' : 'Draft tersimpan.');
};
$('navSimpan').onclick = simpanDraft;
$('listv').onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  if (b.dataset.tab) { listFilter = b.dataset.tab; saveNav(); return drawList(); }
  const id = b.dataset.id, a = b.dataset.act;
  if (a === 'open') return openRpm(id);
  if (a === 'dlrpm') return dlRpm(id, b);
  if (a === 'duprpm') return dupRpm(id);
  if (a === 'delrpm') return delRpm(id);
};
window.addEventListener('pagehide', () => { if (dirty) sync(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && dirty) sync(); });
async function boot() {
  setView('boot');
  try { await Repo.init(onAuth); } catch (e) { console.error(e); $('bootMsg').textContent = 'Gagal memulai aplikasi: ' + ((e && e.message) || e); }
}

/* ---------- ekspor .docx (format mengikuti aplikasi asli) ---------- */
async function unduh(btn) {
  const t0 = btn.textContent; btn.disabled = true; btn.textContent = 'Menyusun dokumen...';
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
    const W = n => ({ size: n, type: WidthType.PERCENTAGE });
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
    const nip = x => String(x || '').replace(/^\s*NIP\.?\s*/i, '');
    const v = (x, d) => (x && String(x).trim()) ? x : (d || '..........................');
    const tgl = s => s ? new Date(s + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : '..........................';
    const gab = (arr, lain) => [...arr, ...(String(lain || '').trim() ? [String(lain).trim()] : [])].join(', ') || '-';
    const lainL = a => (a || []).map(x => String(x).trim()).filter(Boolean).join(', ');
    const I = D.id, K = D.kenal, U = D.tuj, B = D.bukti, tg = B.tugas, Z = D.ttd, PD = D.pend;
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
    content.push(H('2. IDENTIFIKASI PEMBELAJARAN'), T([
      ...full('1. Peserta Didik', ''), ...full('   A Pengetahuan Awal', K.awal || '-'), ...full('   B Minat', K.minat || '-'), ...full('   C. Kebutuhan Belajar', ls(kb)),
      ...(um() ? [] : [...full('   D. Kondisi Emosional dan Latar Belakang', K.emosi || '-'), ...full('   E. Perkiraan Hambatan Belajar (DUP)', K.hambatan || '-')]),
      ...full('2. Materi Pembelajaran', K.materi || '-'), ...full('3. Dimensi Profil Lulusan', ls(K.dpl.map(b1)))]));

    // 3. Desain (UbD tahap 1, praktik pedagogis, kemitraan, lingkungan)
    const tpL = U.tp.map((t, i) => t.trim() ? b1('TP' + (i + 1) + ': ' + t) : null).filter(Boolean);
    const sd = U.sdgs.map(x => bl(x.sdg.replace(/^\d+\.\s*/, ''), x.ket));
    const li = U.lintas.filter(x => x.mapel.trim()).map(x => bl(x.mapel, x.ket));
    const mit = PD.mitra.filter(x => x.jenis).map(x => bl((x.jenis === 'Lainnya' ? x.manual || 'Lainnya' : x.jenis) + (x.nama.trim() ? ' (' + x.nama + ')' : ''), x.peran));
    const fs = PD.fisik.filter(x => x.nama.trim()).map(x => new Paragraph({ children: [R('● ' + x.nama + ' ('), ...runs(x.suasana), R(')')], indent: IND, spacing: { after: 120 } }));
    const tp = PD.tpack.filter(x => x.alat && x.ket).map(x => bl(x.alat === 'Lainnya' ? x.manual : x.alat, x.ket));
    let nn = 0; const nl = t => (++nn) + '. ' + t;
    const modelAll = [...new Set([...PD.model, ...(PD.modelL || []), ...D.ped.map(q => (findModel(q.model) || {}).nama)].filter(x => String(x || '').trim()))];
    const pk = [...(PD.pendukung || []), ...(PD.pendukungL || [])].map(x => String(x).trim()).filter(Boolean).join(', ');
    content.push(H('3. DESAIN PEMBELAJARAN'), T([
      ...full(nl('Capaian Pembelajaran'), ls(ne(U.cp).map(b1))), ...full(nl('Tujuan Pembelajaran'), ls(tpL)),
      ...(um() ? [] : [...full(nl('Pemahaman Abadi (UbD)'), U.abadi || '-'), ...full(nl('Pertanyaan Esensial (UbD)'), ls(ne(U.esensial).map(b1))),
        ...full(nl('Pengetahuan Kunci'), U.kunciP || '-'), ...full(nl('Keterampilan Kunci'), U.kunciK || '-'),
        ...full(nl('Tujuan Sosial Emosional (CASEL)'), ls(U.selTuju.map(b1)))]),
      ...full(nl('Lintas Disiplin Ilmu'), ls(li)), ...full(nl('SDGs'), ls(sd)),
      ...full(nl('Praktik Pedagogis'), ''), ...full('    A. Model Pembelajaran:', ls(modelAll.map(b1))), ...full('    B. Pendekatan (Deep Learning):', ''),
      ...full('        ● Mindful', PD.mindful || '-'), ...full('        ● Meaningful', PD.meaningful || '-'), ...full('        ● Joyful', PD.joyful || '-'),
      ...(pk ? full('    Pendekatan pendukung:', pk) : []),
      ...full('    C. Metode Pembelajaran:', ls(ne(PD.metode).map(b1))),
      ...full(nl('Kemitraan Pembelajaran'), ls(mit)),
      ...full(nl('Lingkungan Belajar (Fisik & Budaya)'), ''), ...full('    A. Ruang Fisik:', ls(fs)), ...full('    B. Budaya Belajar:', ls(ne(PD.budaya).map(b1))), ...full('    C. Pemanfaatan Digital:', ls(tp))]));

    // 4. Pengalaman belajar (UbD tahap 3) + DUP + CASEL
    content.push(H(um() ? '4. KEGIATAN PEMBELAJARAN' : '4. PENGALAMAN BELAJAR'));
    D.ped.forEach(p => {
      const n = parseInt(p.jp) || 0, m = +p.mJP || 0;
      const keg = (k, title, w) => [new TableRow({ children: [new TableCell({ children: [std('● ' + title.toUpperCase() + ' (' + (w || '0') + ' MENIT)', true)], columnSpan: 2, shading: { fill: SH } })] }),
        ...p[k].map(x => new TableRow({ children: [new TableCell({ width: W(5), children: [ctr('○')] }), new TableCell({ width: W(95), children: [new Paragraph({ children: [R(nm(x) + ': ', { bold: true }), ...runs(x.detail)], spacing: { before: 80, after: 80 } })] })] }))];
      const sec = (title, items) => [new TableRow({ children: [new TableCell({ children: [std('● ' + title, true)], columnSpan: 2, shading: { fill: SH } })] }),
        ...items.map(([l, t]) => new TableRow({ children: [new TableCell({ width: W(5), children: [ctr('○')] }), new TableCell({ width: W(95), children: [new Paragraph({ children: [R(l + ': ', { bold: true }), ...runs(t)], spacing: { before: 80, after: 80 } })] })] }))];
      const cs = p.casel.filter(c => c.k).map(c => [c.k, c.akt || '-']);
      const mm = findModel(p.model), pm = mm ? mm.nama + ' (acuan sintaks: ' + versiOf(mm, p.mver).acuan + '; disesuaikan oleh guru)' : '';
      content.push(ctr('PERTEMUAN ' + p.ke + ' (' + p.jp + ' : ' + n + ' x ' + m + ' menit)', { bold: true }), new Paragraph({ children: [R('Tujuan Pembelajaran yang dituju: ', { bold: true }), R(p.tp.join(', ') || '-')], spacing: { before: 100, after: 160 } }),
        ...(pm ? [new Paragraph({ children: [R('Model pembelajaran: ', { bold: true }), R(pm)], spacing: { after: 160 } })] : []),
        T([...keg('awal', 'Kegiatan Awal', p.wAwal), ...keg('inti', 'Kegiatan Inti', p.wInti), ...keg('penutup', 'Kegiatan Penutup', p.wPenutup),
          ...(um() ? [] : [...sec('INTEGRASI DUP (DESAIN UNIVERSAL UNTUK PEMBELAJARAN)', [['Keterlibatan', gab(p.ket, lainL(p.ketL))], ['Representasi', gab(p.rep, lainL(p.repL))], ['Aksi dan Ekspresi', gab(p.aks, lainL(p.aksL))], ...(p.dupCat.trim() ? [['Catatan', p.dupCat]] : [])]),
          ...sec('INTEGRASI SOSIAL EMOSIONAL (CASEL)', cs.length ? cs : [['Kompetensi', '-']])])], [450, 8576]),
        new Paragraph({ children: [R('')], spacing: { after: 300 } }));
    });

    // 5. Asesmen (UbD tahap 2: bukti)
    const as = (title, items) => [...full(title, ''), ...(items.length ? items : [b1('-')]).map(p => new TableRow({ children: [new TableCell({ width: W(100), children: [p] })] }))];
    const lain = pref => B.lain.filter(x => x.waktu.startsWith(pref) && (x.detail.trim() || x.manual.trim())).map(x => new Paragraph({ children: [R('   ● ' + (x.jenis === 'Lainnya' ? x.manual || 'Lainnya' : x.jenis) + ': ', { bold: true }), ...runs(x.detail), new TextRun({ text: '', break: 1 }), R('      TP terkait: ' + (x.tp.join(', ') || '-') + (um() ? '.' : '. Cara murid menunjukkan hasil: ' + gab(x.cara, lainL(x.caraL)) + '.'))], indent: { left: 450, hanging: 300 }, spacing: { before: 80, after: 80 } }));
    const sl = B.sel.filter(s => s.k).map(s => new Paragraph({ children: [R('   ● ' + s.k + ': ', { bold: true }), ...runs(s.ind || '-'), R(' (Cara menilai: ' + s.nilai + ')')], indent: { left: 450, hanging: 300 }, spacing: { before: 80, after: 80 } }));
    content.push(H('5. ASESMEN PEMBELAJARAN'), ...(um() ? [] : [new Paragraph({ children: [R('Asesmen Pendukung', { bold: true })], spacing: { after: 120 } })]),
      T([...as('A. Asesmen Awal Pembelajaran', lain('Awal')), ...as('B. Asesmen Formatif', lain('Selama')), ...as('C. Asesmen Sumatif', lain('Akhir')), ...(um() ? [] : as('D. Penilaian Sosial Emosional (CASEL)', sl))]));
    if (!um() && (tg.nama.trim() || tg.desk.trim())) content.push(new Paragraph({ children: [R('Asesmen Utama (Tugas Kinerja)', { bold: true })], spacing: { before: 300, after: 120 } }),
      new Paragraph({ children: [R(tg.nama || '-', { bold: true }), new TextRun({ text: '', break: 1 }), ...runs(tg.desk || '-'), new TextRun({ text: '', break: 1 }), R('TP yang diukur: ' + (tugasTP().join(', ') || '-') + '.')], spacing: { after: 160 } }));
    const rb = um() ? [] : tg.rubrik.filter(r => r.k.trim());
    if (rb.length) {
      const cell = (t, b, w) => new TableCell({ width: W(w), shading: b ? { fill: SH } : undefined, children: [std(t, b)] });
      content.push(new Paragraph({ children: [R('Rubrik Penilaian Tugas Kinerja', { bold: true })], spacing: { before: 200, after: 120 } }),
        T([new TableRow({ children: [cell('TP', true, 9), cell('Kriteria', true, 20, 1), ...LV.map(l => cell(l, true, 17.75))] }), ...rb.map(r => new TableRow({ children: [cell(r.tp || '-', true, 9), cell(r.k, true, 20), ...r.l.map(x => cell(x, false, 17.75))] }))], [800, 1800, 1606, 1606, 1606, 1606]));
    }

    // 6. Peta keterpaduan
    const pc = (t, b, w) => new TableCell({ width: W(w), shading: b ? { fill: SH } : undefined, children: [std(t, b)] });
    if (!um()) content.push(H('6. PETA KETERPADUAN UbD, DUP, DAN CASEL'), T([new TableRow({ children: [pc('Pertemuan', true, 17), pc('TP', true, 13), pc('DUP', true, 40), pc('CASEL', true, 30)] }),
      ...D.ped.map(p => new TableRow({ children: [pc('' + p.ke, false, 17), pc(p.tp.join(', ') || '-', false, 13), pc([gab(p.ket, lainL(p.ketL)), gab(p.rep, lainL(p.repL)), gab(p.aks, lainL(p.aksL))].filter(x => x !== '-').join('; ') || '-', false, 40), pc(p.casel.filter(c => c.k).map(c => c.k).join(', ') || '-', false, 30)] }))], [1550, 1200, 3550, 2726]));

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
    await afterDownload();
  } catch (err) { console.error(err); alert('Gagal menyusun dokumen: ' + err.message); }
  btn.disabled = false; btn.textContent = t0;
}

if (typeof Repo !== 'undefined') boot();
