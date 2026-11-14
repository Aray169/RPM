/* Penyimpanan RPM per akun. Dua pilihan:
   - awan: Firebase Auth (masuk dengan Google) + Firestore, dipakai jika firebase-config.js sudah diisi
     dan halaman dibuka lewat http(s), misalnya di GitHub Pages
   - lokal: localStorage di perangkat, dipakai di aplikasi desktop, saat dibuka dari berkas, atau saat
     konfigurasi belum diisi
   Data awan: users/{uid}/rpm/{id} berisi ringkasan untuk daftar, users/{uid}/rpmData/{id} berisi isi RPM,
   dan users/{uid}/profile/main berisi profil guru. */
const Repo = (() => {
  const FB = 'https://www.gstatic.com/firebasejs/10.14.1/';
  const LS_IDX = 'rpm_idx_v1', LS_DATA = 'rpm_data_', LS_PROF = 'rpm_profile_v1';
  const newId = () => 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  let impl = null;

  const local = () => {
    const idx = () => { try { return JSON.parse(localStorage.getItem(LS_IDX)) || {}; } catch (e) { return {}; } };
    return {
      kind: 'local',
      async init(onAuth) { onAuth({ uid: 'lokal', name: 'Mode lokal', local: true }); },
      async signIn() {}, async signOut() {},
      async list() { return Object.entries(idx()).map(([id, m]) => ({ id, ...m })).sort((a, b) => b.updatedAt - a.updatedAt); },
      async get(id) { const m = idx()[id], d = localStorage.getItem(LS_DATA + id); return m && d ? { meta: { id, ...m }, data: d } : null; },
      async put(id, meta, data) {
        localStorage.setItem(LS_DATA + id, data);
        const x = idx(); x[id] = meta; localStorage.setItem(LS_IDX, JSON.stringify(x));
        return {};
      },
      async del(id) { const x = idx(); delete x[id]; localStorage.setItem(LS_IDX, JSON.stringify(x)); localStorage.removeItem(LS_DATA + id); },
      async getProfile() { try { return JSON.parse(localStorage.getItem(LS_PROF)) || null; } catch (e) { return null; } },
      async setProfile(p) { localStorage.setItem(LS_PROF, JSON.stringify(p)); return {}; },
    };
  };

  const cloud = cfg => {
    let au, db, A, S, uid = null;
    const col = n => S.collection(db, 'users', uid, n), ref = (n, id) => S.doc(db, 'users', uid, n, id);
    const tunggu = (p, ms) => Promise.race([p, new Promise(r => setTimeout(() => r({ pending: true }), ms))]);
    return {
      kind: 'cloud',
      async init(onAuth) {
        const [app, auth, fs] = await Promise.all([import(FB + 'firebase-app.js'), import(FB + 'firebase-auth.js'), import(FB + 'firebase-firestore.js')]);
        A = auth; S = fs;
        const a = app.initializeApp(cfg);
        au = A.getAuth(a);
        try { db = S.initializeFirestore(a, { localCache: S.persistentLocalCache({ tabManager: S.persistentMultipleTabManager() }) }); }
        catch (e) { db = S.getFirestore(a); }
        A.onAuthStateChanged(au, u => {
          uid = u ? u.uid : null;
          onAuth(u ? { uid: u.uid, name: u.displayName || u.email || 'Pengguna', email: u.email || '', photo: u.photoURL || '' } : null);
        });
      },
      async signIn() {
        const p = new A.GoogleAuthProvider(); p.setCustomParameters({ prompt: 'select_account' });
        try { await A.signInWithPopup(au, p); }
        catch (e) { if (e && e.code === 'auth/popup-blocked') return A.signInWithRedirect(au, p); throw e; }
      },
      async signOut() { await A.signOut(au); },
      async list() {
        const s = await S.getDocs(S.query(col('rpm'), S.orderBy('updatedAt', 'desc')));
        return s.docs.map(d => ({ id: d.id, ...d.data() }));
      },
      async get(id) {
        const [m, d] = await Promise.all([S.getDoc(ref('rpm', id)), S.getDoc(ref('rpmData', id))]);
        return m.exists() && d.exists() ? { meta: { id, ...m.data() }, data: d.data().json } : null;
      },
      async put(id, meta, data) {
        const b = S.writeBatch(db); b.set(ref('rpm', id), meta); b.set(ref('rpmData', id), { json: data });
        const selesai = b.commit().then(() => ({}));
        selesai.catch(() => {});
        return tunggu(selesai, 4000); /* saat offline, tulisan antre di perangkat dan dikirim begitu terhubung */
      },
      async del(id) {
        const b = S.writeBatch(db); b.delete(ref('rpm', id)); b.delete(ref('rpmData', id));
        const selesai = b.commit(); selesai.catch(() => {});
        await tunggu(selesai, 4000);
      },
      async getProfile() { const d = await S.getDoc(ref('profile', 'main')); return d.exists() ? d.data() : null; },
      async setProfile(p) { const w = S.setDoc(ref('profile', 'main'), p); w.catch(() => {}); return tunggu(w.then(() => ({})), 4000); },
    };
  };

  const R = {
    kind: 'local', fallback: '', newId,
    async init(onAuth) {
      const cfg = typeof FIREBASE_CONFIG !== 'undefined' ? FIREBASE_CONFIG : null;
      const siap = cfg && cfg.apiKey && !/^ISI/i.test(cfg.apiKey) && /^https?:$/.test(location.protocol);
      impl = local();
      if (siap) {
        try { const c = cloud(cfg); await c.init(onAuth); impl = c; }
        catch (e) { console.error(e); R.fallback = 'Firebase gagal dimuat (periksa koneksi). Memakai mode lokal.'; impl = local(); await impl.init(onAuth); }
      } else { await impl.init(onAuth); }
      R.kind = impl.kind;
    },
    signIn: () => impl.signIn(), signOut: () => impl.signOut(),
    list: () => impl.list(), get: id => impl.get(id), put: (id, m, d) => impl.put(id, m, d), del: id => impl.del(id),
    getProfile: () => impl.getProfile(), setProfile: p => impl.setProfile(p),
  };
  return R;
})();
