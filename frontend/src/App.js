import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const [link, setLink] = useState('');
  const [durasi, setDurasi] = useState('30 detik');
  const [picked, setPicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const [namaRef, setNamaRef] = useState('');
  const [waRef, setWaRef] = useState('');
  const [paket, setPaket] = useState('GRATIS');
  const [kredit, setKredit] = useState(2);
  const [totalKredit, setTotalKredit] = useState(2);
  const [riwayat, setRiwayat] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminTab, setAdminTab] = useState('dashboard');
  const [users, setUsers] = useState([
    { id: 1, nama: 'Budi Santoso', wa: '081234567890', paket: '10 CLIP', kredit: 8, total: 10, bayar: 'Rp 70.000', status: 'Lunas', download: 2, tanggal: '19 Nov 2026' },
    { id: 2, nama: 'Siti Rahma', wa: '081298765432', paket: 'UNLIMITED', kredit: 999, total: 999, bayar: 'Rp 149.000', status: 'Lunas', download: 15, tanggal: '18 Nov 2026' },
    { id: 3, nama: 'Andi Pratama', wa: '081355512345', paket: 'AMBASSADOR', kredit: 185, total: 200, bayar: 'Gratis', status: 'Aktif', download: 15, tanggal: '18 Nov 2026' },
    { id: 4, nama: 'Dewi Lestari', wa: '081377788899', paket: 'GRATIS', kredit: 1, total: 2, bayar: 'Gratis', status: 'Aktif', download: 1, tanggal: '19 Nov 2026' },
    { id: 5, nama: 'Rizky Fauzi', wa: '081211122233', paket: '10 CLIP', kredit: 0, total: 10, bayar: 'Rp 70.000', status: 'Habis', download: 10, tanggal: '17 Nov 2026' },
  ]);
  const [subtitleOn, setSubtitleOn] = useState(true);
  const [subtitleText, setSubtitleText] = useState('Mau bikin konten viral? Pakai AI aja!');
  const [speed, setSpeed] = useState(1);
  const [playPos, setPlayPos] = useState(35);
  const [activeWord, setActiveWord] = useState(2);
  const neon = '#00e5ff';
  const bg = '#050a1e';
  const solidCard = '#0a1226';

  const clips = [
    { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18', score: 98, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500', video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-1584/1080p.mp4', transcript: ['Halo','guys','ini','tips','AI','2024','yang','wajib','kamu','tau','jangan','di','skip','ya!'] },
    { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32', score: 96, img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500', video: 'https://cdn.coverr.co/videos/coverr-editing-video-on-a-laptop-1600/1080p.mp4', transcript: ['Cara','edit','video','pakai','AI','cepat','banget','cuma','30','detik','langsung','jadi','viral'] },
    { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10', score: 95, img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500', video: 'https://cdn.coverr.co/videos/coverr-using-a-smartphone-1579/1080p.mp4', transcript: ['Rahasia','FYP','TikTok','itu','ada','di','3','detik','pertama','hook','nya','harus','kuat'] },
    { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27', score: 93, img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500', video: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1587/1080p.mp4', transcript: ['Prompt','AI','ini','bikin','konten','edukasi','kamu','jadi','gampang','dan','ramai','ditonton'] },
    { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45', score: 91, img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500', video: 'https://cdn.coverr.co/videos/coverr-a-woman-recording-a-video-1590/1080p.mp4', transcript: ['Storytelling','30','detik','itu','kuncinya','cerita','yang','bikin','penonton','nggak','bisa','skip'] },
  ];

  const search = () => { if (!link) return alert('Tempel link dulu!'); setLoading(true); setTimeout(() => { setLoading(false); setPage('clips'); }, 800); };
  const beliPaket = (nama, jumlah) => { setPaket(nama); setKredit(jumlah); setTotalKredit(jumlah); setRiwayat([]); alert('✅ Beli ' + nama + '! Kredit: ' + (jumlah === 999 ? 'UNLIMITED' : jumlah)); setPage('clips'); };
  const downloadClip = () => {
    if (paket === 'UNLIMITED') { setRiwayat([{ title: picked.title, time: new Date().toLocaleTimeString('id-ID') }, ...riwayat]); alert('✅ Download! UNLIMITED - tidak berkurang'); return; }
    if (kredit <= 0) { alert('❌ Kredit habis! Beli lagi'); setPage('paket'); return; }
    const sisa = kredit - 1; setKredit(sisa); setRiwayat([{ title: picked.title, time: new Date().toLocaleTimeString('id-ID') }, ...riwayat]); alert('✅ Download! Sisa: ' + sisa + ' / ' + totalKredit);
  };
  const loginAdmin = () => {
    if (adminEmail === 'admin@ainewtechclip.com' && adminPass === 'admin123') { setIsAdmin(true); setPage('admin'); alert('✅ Login Admin Berhasil!'); }
    else alert('❌ Salah! Coba: admin@ainewtechclip.com / admin123');
  };
  const logoutAdmin = () => { setIsAdmin(false); setAdminEmail(''); setAdminPass(''); setPage('home'); };
  const tambahKreditUser = (id, jumlah) => { setUsers(users.map(u => u.id === id ? { ...u, kredit: u.kredit + jumlah, total: u.total + jumlah } : u)); alert('✅ Tambah ' + jumlah + ' kredit!'); };
  const resetKreditUser = (id) => { setUsers(users.map(u => u.id === id ? { ...u, kredit: 0 } : u)); alert('Kredit di-reset jadi 0'); };
  const totalRevenue = 70000 + 149000 + 70000;
  const totalDownload = users.reduce((a, b) => a + b.download, 0);

  // ===== BACKGROUND HIDUP - HANYA DI HALAMAN 1 =====
  const aliveBg = (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <style>{`@keyframes floaty { 0%,100%{ transform: translateY(0px) rotate(-3deg);} 50%{ transform: translateY(-18px) rotate(3deg);} } @keyframes floaty2 { 0%,100%{ transform: translateY(0px);} 50%{ transform: translateY(-28px);} } @keyframes glowPulse { 0%,100%{ opacity:0.5; transform:scale(1);} 50%{ opacity:0.9; transform:scale(1.15);} } @keyframes naik { 0%{ transform: translateY(100vh); opacity:0;} 10%{opacity:1;} 100%{ transform: translateY(-20vh); opacity:0;} } @keyframes kedip { 0%,90%,100%{ transform: scaleY(1);} 92%{ transform: scaleY(0.1);} } @keyframes jalan { 0%{ left:-10%;} 100%{ left:110%;} } @keyframes typing { 0%,60%,100%{ transform: translateY(0); opacity:0.4;} 30%{ transform: translateY(-4px); opacity:1;} }`}</style>
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, #00e5ff66, transparent 70%)', top: '-80px', left: '-80px', animation: 'glowPulse 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, #a78bfa66, transparent 70%)', top: '30%', right: '-100px', animation: 'glowPulse 5s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#00e5ff11 1px, transparent 1px), linear-gradient(90deg, #00e5ff11 1px, transparent 1px)', backgroundSize: '45px 45px' }} />
      {[...Array(10)].map((_, i) => (<div key={i} style={{ position: 'absolute', left: `${(i * 9 + 5) % 100}%`, bottom: 0, width: 6, height: 6, borderRadius: '50%', background: neon, animation: `naik ${4 + (i % 4)}s linear infinite`, animationDelay: `${i * 0.7}s` }}>✦</div>))}
      <div style={{ position: 'absolute', left: '3%', top: '18%', animation: 'floaty 3.5s ease-in-out infinite', fontSize: 56 }}><div style={{ animation: 'kedip 3s infinite' }}>🤖</div><div style={{ fontSize: 11, background: 'white', color: 'black', padding: '6px 10px', borderRadius: 14, marginTop: 4, fontWeight: 700, whiteSpace: 'nowrap' }}>Hai! Tempel link yuk! 👋</div></div>
      <div style={{ position: 'absolute', right: '3%', top: '55%', animation: 'floaty2 4s ease-in-out infinite', fontSize: 44 }}>🦾</div>
      <div style={{ position: 'absolute', top: '8%', animation: 'jalan 18s linear infinite', fontSize: 24 }}>🚀</div>
    </div>
  );

  // ===== ROBOT JALAN-JALAN HIDUP DI SEMUA HALAMAN =====
  const walkingRobot = (
    <div style={{ position: 'fixed', bottom: 12, left: 0, zIndex: 9999, pointerEvents: 'none', width: '100%' }}>
      <style>{`
        @keyframes jalanKeliling { 0% { left: -80px; transform: scaleX(1) translateY(0px); } 10% { transform: scaleX(1) translateY(-8px); } 20% { transform: scaleX(1) translateY(0px); } 45% { left: 45%; transform: scaleX(1) translateY(-6px); } 50% { left: 48%; transform: scaleX(1) translateY(0px); } 52% { left: 48%; transform: scaleX(-1) translateY(-10px); } 55% { left: 48%; transform: scaleX(-1) translateY(0px); } 90% { left: 95%; transform: scaleX(-1) translateY(-5px); } 100% { left: 110%; transform: scaleX(-1) translateY(0px); } }
        @keyframes lompatRobot { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes ngomongRobot { 0%,70%,100% { opacity: 0; transform: translateY(5px) scale(0.8); } 75%,95% { opacity: 1; transform: translateY(0px) scale(1); } }
        @keyframes kedipMata { 0%,92%,100% { transform: scaleY(1); } 94% { transform: scaleY(0.1); } }
      `}</style>
      <div style={{ position: 'absolute', bottom: 0, animation: 'jalanKeliling 22s linear infinite', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ background: 'white', color: 'black', fontSize: 11, fontWeight: 800, padding: '6px 10px', borderRadius: 14, marginBottom: 4, whiteSpace: 'nowrap', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', animation: 'ngomongRobot 22s ease-in-out infinite' }}>Hai! Yuk bikin clip viral! 🎬✨</div>
        <div style={{ fontSize: 52, animation: 'lompatRobot 0.6s ease-in-out infinite', filter: 'drop-shadow(0 0 15px #00e5ff88)', lineHeight: 1 }}><span style={{ display: 'inline-block', animation: 'kedipMata 3s infinite' }}>🤖</span></div>
        <div style={{ fontSize: 12, marginTop: -6 }}>👣 👣</div>
        <div style={{ fontSize: 10, background: '#00e5ff', color: 'black', padding: '2px 8px', borderRadius: 999, fontWeight: 800, marginTop: 2 }}>AINEWTECHCLIP</div>
      </div>
      <div style={{ position: 'fixed', top: 70, right: 12, fontSize: 32, animation: 'lompatRobot 2.5s ease-in-out infinite', filter: 'drop-shadow(0 0 10px #00ffa388)' }}>👀🤖</div>
    </div>
  );

  const kreditBar = (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
      <div style={{ background: '#071022', color: 'white', border: `1px solid ${neon}`, borderRadius: 999, padding: '8px 14px', fontWeight: 800, fontSize: 13 }}>🎬 Paket: {paket} | Kredit: {paket === 'UNLIMITED' ? '♾️ UNLIMITED' : `${kredit} / ${totalKredit} Clip`}</div>
      <div style={{ flex: 1, minWidth: 120, height: 10, background: '#1a2a4a', borderRadius: 999, overflow: 'hidden' }}><div style={{ width: paket === 'UNLIMITED' ? '100%' : `${totalKredit ? (kredit / totalKredit) * 100 : 0}%`, height: '100%', background: `linear-gradient(90deg, ${neon}, #00ffa3)` }} /></div>
      <button onClick={() => setPage('paket')} style={{ background: neon, color: 'black', border: 'none', padding: '8px 14px', borderRadius: 999, fontWeight: 800, cursor: 'pointer', fontSize: 12 }}>+ Tambah Kredit →</button>
    </div>
  );

  const header = (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${neon}66`, borderRadius: 16, padding: '10px 14px', background: '#071022', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
      <div onClick={() => setPage('home')} style={{ fontWeight: 900, fontSize: 20, cursor: 'pointer' }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span> 🤖</div>
      <div style={{ display: 'flex', gap: 12, fontSize: 13, color: '#aaccff', alignItems: 'center', flexWrap: 'wrap' }}>
        <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Beranda</span>
        <span onClick={() => setPage('clips')} style={{ cursor: 'pointer' }}>Fitur</span>
        <span onClick={() => setPage('paket')} style={{ cursor: 'pointer' }}>Harga</span>
        <span onClick={() => setPage('ambassador')} style={{ cursor: 'pointer' }}>Referral</span>
        {isAdmin ? <span onClick={() => setPage('admin')} style={{ background: '#ffaa00', color: 'black', padding: '5px 10px', borderRadius: 999, fontWeight: 800, cursor: 'pointer' }}>👑 Admin Panel</span> : <span onClick={() => setPage('login')} style={{ cursor: 'pointer', fontWeight: 700, color: 'white' }}>Masuk</span>}
        <span style={{ background: `${neon}22`, border: `1px solid ${neon}`, padding: '5px 10px', borderRadius: 999, color: neon, fontWeight: 800 }}>🎬 {paket === 'UNLIMITED' ? '♾️' : kredit} Kredit</span>
      </div>
    </div>
  );

  const wrap = (children, hideKredit = false) => (
    <div style={{ background: bg, color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
      {page === 'home' ? aliveBg : null}
      {walkingRobot}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1150, margin: '0 auto', padding: '14px 16px', paddingBottom: 90 }}>{header}{!hideKredit && kreditBar}{children}
        <div style={{ textAlign: 'center', fontSize: 11, color: '#7788aa', padding: '20px 0' }}>© 2024 AINEWTECHCLIP • PT AINEWTECH INDONESIA • Made for Creator Indonesia 🇮🇩</div>
      </div>
    </div>
  );

  if (page === 'login') {
    return wrap(
      <div style={{ maxWidth: 420, margin: '30px auto', background: solidCard, border: `1px solid ${neon}66`, borderRadius: 20, padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 48 }}>🔐</div>
        <h2 style={{ margin: '10px 0 4px' }}>Login Admin</h2>
        <p style={{ color: '#9ab4d6', fontSize: 13 }}>Hanya Admin yang bisa masuk ke Dashboard</p>
        <div style={{ textAlign: 'left', marginTop: 16 }}>
          <label style={{ fontSize: 12, color: '#9ab4d6' }}>Email Admin</label>
          <input value={adminEmail} onChange={e => setAdminEmail(e.target.value)} placeholder="admin@ainewtechclip.com" style={{ width: '100%', background: '#020617', color: 'white', border: `1px solid ${neon}55`, padding: 12, borderRadius: 12, marginTop: 4, boxSizing: 'border-box' }} />
          <label style={{ fontSize: 12, color: '#9ab4d6', display: 'block', marginTop: 12 }}>Password</label>
          <input type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} placeholder="••••••••" style={{ width: '100%', background: '#020617', color: 'white', border: `1px solid ${neon}55`, padding: 12, borderRadius: 12, marginTop: 4, boxSizing: 'border-box' }} onKeyDown={e => e.key === 'Enter' && loginAdmin()} />
        </div>
        <button onClick={loginAdmin} style={{ width: '100%', background: `linear-gradient(90deg, ${neon}, #00ffa3)`, color: 'black', border: 'none', padding: 13, borderRadius: 999, fontWeight: 900, cursor: 'pointer', marginTop: 16 }}>Masuk sebagai Admin →</button>
        <div style={{ background: '#020617', borderRadius: 10, padding: 10, marginTop: 12, fontSize: 12, color: '#9ab4d6' }}>Untuk coba:<br /><b style={{ color: 'white' }}>admin@ainewtechclip.com</b><br /><b style={{ color: 'white' }}>admin123</b></div>
      </div>
    , true);
  }

  if (page === 'admin') {
    if (!isAdmin) { setPage('login'); return wrap(<div>Harus login dulu...</div>, true); }
    return wrap(
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div><div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>👑 ADMIN PANEL</div><h2 style={{ fontSize: 26, margin: '4px 0' }}>Halo, Admin! 👋</h2><p style={{ color: '#9ab4d6', fontSize: 13, margin: 0 }}>Kelola semua pembeli, kredit, dan uang masuk dari sini.</p></div>
          <button onClick={logoutAdmin} style={{ background: '#ff2d55', color: 'white', border: 'none', padding: '9px 16px', borderRadius: 999, cursor: 'pointer', fontWeight: 800 }}>🚪 Logout Admin</button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap' }}>
          {['dashboard', 'pembeli', 'pesanan', 'pengaturan'].map(t => (
            <button key={t} onClick={() => setAdminTab(t)} style={{ background: adminTab === t ? neon : solidCard, color: adminTab === t ? 'black' : 'white', border: `1px solid ${neon}55`, padding: '8px 16px', borderRadius: 999, cursor: 'pointer', fontWeight: 700, textTransform: 'capitalize' }}>{t === 'dashboard' ? '📊 Dashboard' : t === 'pembeli' ? '👥 Pembeli' : t === 'pesanan' ? '🧾 Pesanan' : '⚙️ Pengaturan'}</button>
          ))}
        </div>
        {adminTab === 'dashboard' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 16 }}>
              <div style={{ background: `linear-gradient(135deg, ${neon}, #00ffa3)`, color: 'black', borderRadius: 16, padding: 16 }}><div style={{ fontSize: 12, fontWeight: 700 }}>💰 TOTAL UANG MASUK</div><div style={{ fontSize: 26, fontWeight: 900 }}>Rp {totalRevenue.toLocaleString('id-ID')}</div><div style={{ fontSize: 11 }}>Dari 3 pesanan lunas</div></div>
              <div style={{ background: solidCard, border: `1px solid ${neon}55`, borderRadius: 16, padding: 16 }}><div style={{ fontSize: 12, color: '#9ab4d6' }}>👥 TOTAL USER</div><div style={{ fontSize: 26, fontWeight: 900 }}>{users.length} Orang</div><div style={{ fontSize: 11, color: '#00ffa3' }}>+2 hari ini</div></div>
              <div style={{ background: solidCard, border: `1px solid ${neon}55`, borderRadius: 16, padding: 16 }}><div style={{ fontSize: 12, color: '#9ab4d6' }}>🎬 TOTAL DOWNLOAD</div><div style={{ fontSize: 26, fontWeight: 900 }}>{totalDownload} Clip</div><div style={{ fontSize: 11 }}>1 download = 1 kredit</div></div>
              <div style={{ background: solidCard, border: '1px solid #a78bfa', borderRadius: 16, padding: 16 }}><div style={{ fontSize: 12, color: '#9ab4d6' }}>⚠️ KREDIT HABIS</div><div style={{ fontSize: 26, fontWeight: 900 }}>{users.filter(u => u.kredit === 0).length} User</div><div style={{ fontSize: 11, color: '#ffaa00' }}>Perlu di-follow up beli lagi</div></div>
            </div>
            <div style={{ background: solidCard, border: `1px solid ${neon}55`, borderRadius: 16, padding: 16, marginTop: 14 }}>
              <b>📈 Pembeli Terbaru</b>
              {users.slice(0, 3).map(u => <div key={u.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ffffff11', fontSize: 13 }}><span>👤 {u.nama} - {u.paket}</span><span style={{ color: '#9ab4d6' }}>{u.bayar} • {u.tanggal}</span><span style={{ background: u.status === 'Lunas' ? '#00ffa3' : u.status === 'Habis' ? '#ff2d55' : neon, color: 'black', padding: '2px 8px', borderRadius: 999, fontSize: 11, fontWeight: 800 }}>{u.status}</span></div>)}
            </div>
          </div>
        )}
        {adminTab === 'pembeli' && (
          <div style={{ marginTop: 16 }}>
            <b>👥 Daftar Semua Pembeli ({users.length})</b>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
              {users.map(u => (
                <div key={u.id} style={{ background: solidCard, border: `1px solid ${neon}55`, borderRadius: 14, padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
                  <div><b>{u.nama}</b><div style={{ fontSize: 12, color: '#9ab4d6' }}>📱 {u.wa} • {u.tanggal}</div><div style={{ fontSize: 12, marginTop: 4 }}>Paket: <b style={{ color: neon }}>{u.paket}</b> • Kredit: <b style={{ color: u.kredit === 0 ? '#ff2d55' : '#00ffa3' }}>{u.kredit} / {u.total}</b> • Download: {u.download} • Bayar: {u.bayar}</div></div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <button onClick={() => tambahKreditUser(u.id, 10)} style={{ background: neon, color: 'black', border: 'none', padding: '8px 12px', borderRadius: 999, cursor: 'pointer', fontWeight: 800, fontSize: 12 }}>+10 Kredit</button>
                    <button onClick={() => tambahKreditUser(u.id, 1)} style={{ background: '#1a2a4a', color: 'white', border: `1px solid ${neon}`, padding: '8px 12px', borderRadius: 999, cursor: 'pointer', fontSize: 12 }}>+1</button>
                    <button onClick={() => resetKreditUser(u.id)} style={{ background: '#ff2d55', color: 'white', border: 'none', padding: '8px 12px', borderRadius: 999, cursor: 'pointer', fontSize: 12 }}>Reset 0</button>
                    <button onClick={() => alert('Chat WA ke ' + u.nama)} style={{ background: '#25D366', color: 'black', border: 'none', padding: '8px 12px', borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontSize: 12 }}>💬 WA</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {adminTab === 'pesanan' && (
          <div style={{ marginTop: 16, background: solidCard, borderRadius: 14, padding: 14 }}>
            <b>🧾 Semua Pesanan</b>
            {users.map(u => <div key={u.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #ffffff11', fontSize: 13, flexWrap: 'wrap', gap: 6 }}><span>#{u.id} - {u.nama} - {u.paket}</span><span>{u.bayar}</span><span>{u.tanggal}</span><span style={{ background: '#00ffa3', color: 'black', padding: '2px 8px', borderRadius: 999, fontSize: 11, fontWeight: 800 }}>{u.status}</span></div>)}
          </div>
        )}
        {adminTab === 'pengaturan' && (
          <div style={{ marginTop: 16, background: solidCard, borderRadius: 14, padding: 16 }}>
            <b>⚙️ Pengaturan Admin</b>
            <div style={{ marginTop: 12, fontSize: 13, lineHeight: 2 }}>
              <div>📧 Email Admin: <b>admin@ainewtechclip.com</b></div>
              <div>💰 Harga 10 Clip: <b>Rp 70.000</b> • Unlimited: <b>Rp 149.000</b> • Ambassador: <b>200 Gratis</b></div>
              <div>🎬 1 Download = 1 Kredit • Edit = Gratis</div>
            </div>
            <button onClick={() => alert('Pengaturan disimpan!')} style={{ background: neon, color: 'black', border: 'none', padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800, marginTop: 10 }}>Simpan Pengaturan</button>
          </div>
        )}
      </div>
    , true);
  }

  if (page === 'home') {
    return wrap(
      <div style={{ textAlign: 'center', padding: '10px 0 20px' }}>
        <div style={{ display: 'inline-block', background: '#071022', border: `1px solid ${neon}66`, padding: '6px 14px', borderRadius: 999, fontSize: 12, color: neon }}>✦ AI LAGI ONLINE • KREDIT KAMU: {paket === 'UNLIMITED' ? '♾️ UNLIMITED' : `${kredit} CLIP`}</div>
        <div style={{ fontWeight: 900, fontSize: 44, lineHeight: 1, marginTop: 14, textShadow: `0 0 30px ${neon}66` }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div>
        <div style={{ color: '#9ab4d6', fontSize: 13, marginTop: 8, letterSpacing: 2 }}>CREATE • CLIP • GO VIRAL</div>
        <h1 style={{ fontSize: 26, margin: '20px 0 8px' }}>Ubah Link Jadi Klip Viral Hanya dalam Hitungan Detik</h1>
        <p style={{ color: '#9ab4d6', fontSize: 14 }}>Paste link YouTube, TikTok, Instagram, atau podcast. AI akan potong jadi 5 clip terbaik.</p>
        <div style={{ maxWidth: 720, margin: '24px auto 0', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -38, left: 18, fontSize: 36, animation: 'floaty 3s ease-in-out infinite', zIndex: 3 }}>🤖</div>
          <div style={{ position: 'absolute', top: -28, left: 62, background: 'white', color: 'black', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 12, animation: 'floaty2 3.5s ease-in-out infinite' }}>{loading ? 'Lagi motong... ✂️' : 'Tempel di sini ya! 👇'}<span style={{ display: 'inline-flex', gap: 2, marginLeft: 4 }}>{[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: neon, display: 'inline-block', animation: 'typing 1s infinite', animationDelay: `${i * 0.2}s` }} />)}</span></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', background: focus ? 'rgba(255,255,255,0.12)' : '#0a1226', border: focus ? `2px solid ${neon}` : `1px solid ${neon}66`, borderRadius: 999, padding: '8px 8px 8px 18px', boxShadow: focus ? `0 0 35px ${neon}88` : `0 0 20px ${neon}33`, transform: focus ? 'scale(1.02)' : 'scale(1)', transition: 'all 0.25s' }}>
            <span style={{ fontSize: 22 }}>🔗</span>
            <input value={link} onChange={e => setLink(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder="Tempel link di sini... https://www.tiktok.com/..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: 15 }} onKeyDown={e => e.key === 'Enter' && search()} />
            <button onClick={search} style={{ background: `linear-gradient(90deg, ${neon}, #00ffa3)`, color: '#00222a', border: 'none', padding: '13px 24px', borderRadius: 999, fontWeight: 900, cursor: 'pointer', fontSize: 15, whiteSpace: 'nowrap' }}>{loading ? '✂️ Motong...' : '✦ Coba Gratis'}</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap' }}>{['15 detik', '30 detik', '45 detik', '1 menit', '1 menit 10 detik'].map(d => (<button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? neon : '#0a1226', color: durasi === d ? 'black' : 'white', border: `1px solid ${neon}55`, padding: '8px 15px', borderRadius: 999, fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>{d}</button>))}</div>
        <div style={{ color: '#9ab4d6', fontSize: 12, marginTop: 14 }}>Tanpa login ✓ &nbsp; Proses 30 detik ✓ &nbsp; Hasil siap edit</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
          <button onClick={() => setPage('paket')} style={{ background: '#0a1226', color: neon, border: `1px solid ${neon}`, padding: '11px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 700 }}>💰 Lihat Daftar Paket →</button>
          <button onClick={() => setPage('ambassador')} style={{ background: `linear-gradient(90deg, ${neon}, #00ffa3)`, color: 'black', border: 'none', padding: '11px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800 }}>🎁 Jadi Brand Ambassador - 200 Clip Gratis →</button>
          <button onClick={() => setPage('login')} style={{ background: '#0a1226', color: 'white', border: '1px solid #555', padding: '11px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 700 }}>🔐 Login Admin →</button>
        </div>
        <div style={{ marginTop: 30, textAlign: 'left' }}><b>🎬 Contoh Clip yang Sudah Jadi</b><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>{clips.slice(0, 
