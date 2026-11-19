import React, { useState } from 'react';
export default function App() {
  const [page, setPage] = useState('home');
  const [link, setLink] = useState('');
  const [picked, setPicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paket, setPaket] = useState('GRATIS');
  const [kredit, setKredit] = useState(2);
  const [totalKredit, setTotalKredit] = useState(2);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [subtitleText, setSubtitleText] = useState('Mau bikin konten viral? Pakai AI aja!');
  const [bannerError, setBannerError] = useState(false);
  const neon = '#00e5ff';
  const bg = '#050a1e';
  const card = '#0a1226';
  const ADMIN_EMAIL = 'tawitan144@gmail.com';
  const ADMIN_PASS = '1234567890';
  const clips = [
    { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18', score: 98, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500', video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-1584/1080p.mp4', transcript: ['Halo', 'guys', 'ini', 'tips', 'AI', '2024'] },
    { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32', score: 96, img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500', video: 'https://cdn.coverr.co/videos/coverr-editing-video-on-a-laptop-1600/1080p.mp4', transcript: ['Cara', 'edit', 'video', 'pakai', 'AI'] },
    { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10', score: 95, img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500', video: 'https://cdn.coverr.co/videos/coverr-using-a-smartphone-1579/1080p.mp4', transcript: ['Rahasia', 'FYP', 'TikTok', 'itu', 'ada'] },
    { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27', score: 93, img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500', video: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1587/1080p.mp4', transcript: ['Prompt', 'AI', 'ini', 'bikin', 'konten'] },
    { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45', score: 91, img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500', video: 'https://cdn.coverr.co/videos/coverr-a-woman-recording-a-video-1590/1080p.mp4', transcript: ['Storytelling', '30', 'detik', 'itu', 'kuncinya'] },
  ];
  const search = () => { if (!link) return alert('Tempel link dulu!'); setLoading(true); setTimeout(() => { setLoading(false); setPage('clips'); }, 800); };
  const beli = (nama, jml) => { setPaket(nama); setKredit(jml); setTotalKredit(jml); alert('Beli ' + nama + ' Berhasil!'); setPage('clips'); };
  const download = () => { if (paket !== 'UNLIMITED' && kredit <= 0) { alert('Kredit habis!'); setPage('paket'); return; } if (paket !== 'UNLIMITED') setKredit(kredit - 1); alert('Download Berhasil!'); };
  const login = () => { if (adminEmail.trim().toLowerCase() === ADMIN_EMAIL && adminPass === ADMIN_PASS) { setIsAdmin(true); setPage('admin'); alert('Selamat datang, Tawitan!'); } else alert('Email / Password salah!'); };
  const banner = (
    <div style={{ borderRadius: 20, overflow: 'hidden', border: '2px solid #00e5ff88', marginBottom: 16, background: 'linear-gradient(135deg,#050a1e,#0a1a3a)' }}>
      {!bannerError ? <img src="/banner.jpg" alt="Banner" onError={() => setBannerError(true)} style={{ width: '100%', maxHeight: 260, objectFit: 'cover', display: 'block' }} /> : <div style={{ padding: '28px 20px', display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}><div style={{ fontSize: 72 }}>🤖</div><div><div style={{ fontWeight: 900, fontSize: 34 }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div><div style={{ color: '#9ab4d6', fontSize: 12, letterSpacing: 4 }}>CREATE • CLIP • GO VIRAL</div></div><div style={{ fontSize: 36 }}>✂️🎬</div></div>}
    </div>
  );
  const robot = (
    <div style={{ position: 'fixed', bottom: 12, left: 0, zIndex: 9999, pointerEvents: 'none', width: '100%' }}>
      <style>{`@keyframes jalan { 0% { left: -80px; } 50% { left: 48%; } 100% { left: 110%; } } @keyframes lompat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }`}</style>
      <div style={{ position: 'absolute', bottom: 0, animation: 'jalan 22s linear infinite', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ background: 'white', color: 'black', fontSize: 11, fontWeight: 800, padding: '6px 10px', borderRadius: 14, marginBottom: 4, whiteSpace: 'nowrap' }}>Hai! Yuk bikin clip viral! 🎬✨</div>
        <div style={{ fontSize: 52, animation: 'lompat 0.6s ease-in-out infinite' }}>🤖</div>
        <div style={{ fontSize: 10, background: '#00e5ff', color: 'black', padding: '2px 8px', borderRadius: 999, fontWeight: 800 }}>AINEWTECHCLIP</div>
      </div>
    </div>
  );
  const wrap = (children) => (
    <div style={{ background: bg, color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {robot}
      <div style={{ maxWidth: 1150, margin: '0 auto', padding: '14px 16px', paddingBottom: 90 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #00e5ff66', borderRadius: 16, padding: '10px 14px', background: '#071022', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
          <div onClick={() => setPage('home')} style={{ fontWeight: 900, fontSize: 20, cursor: 'pointer' }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span> 🤖</div>
          <div style={{ display: 'flex', gap: 12, fontSize: 13, alignItems: 'center', flexWrap: 'wrap' }}>
            <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Beranda</span>
            <span onClick={() => setPage('clips')} style={{ cursor: 'pointer' }}>Fitur</span>
            <span onClick={() => setPage('paket')} style={{ cursor: 'pointer' }}>Harga</span>
            <span onClick={() => setPage(isAdmin ? 'admin' : 'login')} style={{ cursor: 'pointer', fontWeight: 700 }}>{isAdmin ? '👑 Admin' : 'Masuk'}</span>
            <span style={{ background: '#00e5ff22', border: '1px solid #00e5ff', padding: '5px 10px', borderRadius: 999, color: neon, fontWeight: 800 }}>🎬 {paket === 'UNLIMITED' ? '♾️' : kredit} Kredit</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
          <div style={{ background: '#071022', border: '1px solid #00e5ff', borderRadius: 999, padding: '8px 14px', fontWeight: 800, fontSize: 13 }}>Paket: {paket} | Kredit: {paket === 'UNLIMITED' ? '♾️ UNLIMITED' : kredit + ' / ' + totalKredit}</div>
          <button onClick={() => setPage('paket')} style={{ background: neon, color: 'black', border: 'none', padding: '8px 14px', borderRadius: 999, fontWeight: 800, cursor: 'pointer' }}>+ Tambah Kredit</button>
        </div>
        {children}
        <div style={{ textAlign: 'center', fontSize: 11, color: '#7788aa', padding: '20px 0' }}>© 2024 AINEWTECHCLIP • Made for Creator Indonesia 🇮🇩</div>
      </div>
    </div>
  );
  if (page === 'login') {
    return wrap(<div style={{ maxWidth: 420, margin: '30px auto', background: card, border: '1px solid #00e5ff66', borderRadius: 20, padding: 24, textAlign: 'center' }}><div style={{ fontSize: 48 }}>🔐</div><h2>Login Admin</h2><p style={{ color: '#9ab4d6', fontSize: 13 }}>Hanya pemilik AINEWTECHCLIP</p><input value={adminEmail} onChange={e => setAdminEmail(e.target.value)} placeholder="tawitan144@gmail.com" style={{ width: '100%', background: '#020617', color: 'white', border: '1px solid #00e5ff55', padding: 12, borderRadius: 12, boxSizing: 'border-box', marginTop: 12 }} /><input type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} placeholder="Password Admin" onKeyDown={e => e.key === 'Enter' && login()} style={{ width: '100%', background: '#020617', color: 'white', border: '1px solid #00e5ff55', padding: 12, borderRadius: 12, boxSizing: 'border-box', marginTop: 8 }} /><button onClick={login} style={{ width: '100%', background: neon, color: 'black', border: 'none', padding: 13, borderRadius: 999, fontWeight: 900, cursor: 'pointer', marginTop: 14 }}>Masuk sebagai Admin →</button><div style={{ fontSize: 12, color: '#9ab4d6', marginTop: 12 }}>tawitan144@gmail.com<br />1234567890</div></div>);
  }
  if (page === 'admin') {
    if (!isAdmin) return wrap(<div style={{ textAlign: 'center', padding: 40 }}><h2>Harus Login Dulu</h2><button onClick={() => setPage('login')} style={{ background: neon, color: 'black', border: 'none', padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800 }}>Ke Login Admin →</button></div>);
    return wrap(<div><h2>👑 Admin Panel - Halo, Tawitan! 👋</h2><p>Login sebagai: <b>tawitan144@gmail.com</b></p><p>Total Uang Masuk: <b>Rp 289.000</b> • User: 5 Orang • Download: 43 Clip</p><div style={{ background: card, borderRadius: 14, padding: 14, marginTop: 12 }}>👤 Budi Santoso - 10 CLIP - Rp 70.000 - Kredit 8/10<br />👤 Siti Rahma - UNLIMITED - Rp 149.000<br />👤 Rizky Fauzi - Kredit Habis - Follow up!</div><button onClick={() => { setIsAdmin(false); setPage('home'); }} style={{ background: '#ff2d55', color: 'white', border: 'none', padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800, marginTop: 14 }}>🚪 Logout</button></div>);
  }
  if (page === 'home') {
    return wrap(<div style={{ textAlign: 'center' }}>{banner}<h1 style={{ fontSize: 26 }}>Ubah Link Jadi Klip Viral Hanya dalam Hitungan Detik</h1><p style={{ color: '#9ab4d6' }}>Paste link YouTube, TikTok, Instagram. AI akan potong jadi 5 clip terbaik.</p><div style={{ maxWidth: 720, margin: '20px auto 0', display: 'flex', gap: 10, alignItems: 'center', background: '#0a1226', border: '1px solid #00e5ff66', borderRadius: 999, padding: '8px 8px 8px 18px' }}><span style={{ fontSize: 22 }}>🔗</span><input value={link} onChange={e => setLink(e.target.value)} placeholder="Tempel link di sini..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: 15 }} /><button onClick={search} style={{ background: 'linear-gradient(90deg,#00e5ff,#00ffa3)', color: 'black', border: 'none', padding: '13px 24px', borderRadius: 999, fontWeight: 900, cursor: 'pointer', whiteSpace: 'nowrap' }}>{loading ? 'Motong...' : '✦ Coba Gratis'}</button></div><div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}><button onClick={() => setPage('paket')} style={{ background: '#0a1226', color: neon, border: '1px solid #00e5ff', padding: '11px 18px', borderRadius: 999, cursor: 'pointer' }}>💰 Lihat Paket →</button><button onClick={() => setPage('login')} style={{ background: '#0a1226', color: 'white', border: '1px solid #555', padding: '11px 18px', borderRadius: 999, cursor: 'pointer' }}>🔐 Login Admin →</button></div><div style={{ marginTop: 26, textAlign: 'left' }}><b>🎬 Contoh Clip</b><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>{clips.slice(0, 3).map(c => (<div key={c.id} onClick={() => { setPicked(c); setPage('studio'); }} style={{ cursor: 'pointer', borderRadius: 14, overflow: 'hidden', border: '1px solid #00e5ff55', background: card }}><img src={c.img} alt={c.title} style={{ width: '100%', height: 110, objectFit: 'cover' }} /><div style={{ padding: 10, fontSize: 12, textAlign: 'left' }}><b>{c.title}</b><div style={{ color: '#9ab4d6' }}>{c.label} • {c.time}</div></div></div>))}</div></div></div>);
  }
  if (page === 'clips') {
    return wrap(<div><button onClick={() => setPage('home')} style={{ background: card, color: neon, border: '1px solid #00e5ff', padding: '7px 14px', borderRadius: 999, cursor: 'pointer' }}>← Cari Link Lain</button><h2>AI Pilih 5 Clip Terbaik</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 12 }}>{clips.map(c => (<div key={c.id} onClick={() => { setPicked(c); setPage('studio'); }} style={{ background: card, border: '1px solid #00e5ff55', borderRadius: 16, cursor: 'pointer', overflow: 'hidden' }}><img src={c.img} alt={c.title} style={{ width: '100%', height: 110, objectFit: 'cover' }} /><div style={{ padding: 12 }}><div style={{ background: neon, color: 'black', display: 'inline-block', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 999 }}>{c.label}</div><div style={{ fontWeight: 700, fontSize: 13, marginTop: 8, minHeight: 38 }}>{c.title}</div><div style={{ marginTop: 10, background: neon, color: 'black', textAlign: 'center', padding: '8px', borderRadius: 999, fontWeight: 800, fontSize: 12 }}>Edit Clip →</div></div></div>))}</div></div>);
  }
  if (page === 'studio') {
    return wrap(<div><button onClick={() => setPage('clips')} style={{ background: card, color: neon, border: '1px solid #00e5ff', padding: '7px 14px', borderRadius: 999, cursor: 'pointer' }}>← Kembali</button><h2>Studio Edit — {picked?.title}</h2><div style={{ background: card, border: '1px solid #00e5ff55', borderRadius: 16, overflow: 'hidden', maxWidth: 500, marginTop: 12 }}><div style={{ position: 'relative', background: '#000', display: 'flex', justifyContent: 'center' }}><video key={picked?.id} src={picked?.video} poster={picked?.img} controls style={{ width: '100%', height: 320, objectFit: 'cover' }} /><div style={{ position: 'absolute', bottom: 44, left: '50%', transform: 'translateX(-50%)', width: '85%', background: '#00e5ff', color: 'black', fontSize: 12, fontWeight: 800, padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>{subtitleText}</div></div><div style={{ padding: 12 }}><input value={subtitleText} onChange={e => setSubtitleText(e.target.value)} style={{ background: '#020617', color: 'white', border: '1px solid #00e5ff55', width: '100%', padding: 8, borderRadius: 999, boxSizing: 'border-box' }} /><button onClick={download} style={{ background: neon, color: 'black', border: 'none', padding: 12, borderRadius: 999, fontWeight: 900, cursor: 'pointer', width: '100%', marginTop: 10 }}>⬇ Download (-1 Kredit) • Sisa {kredit}</button></div></div></div>);
  }
  return wrap(<div><h2>Pilih Paket</h2><p>Kredit kamu: {paket} - {kredit} / {totalKredit}</p><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 12 }}><div style={{ background: card, border: '1px solid #00e5ff55', borderRadius: 16, padding: 18, textAlign: 'center' }}><b>GRATIS - 2 Kredit</b><button onClick={() => beli('GRATIS', 2)} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 999, cursor: 'pointer', marginTop: 10 }}>Ambil Gratis →</button></div><div style={{ background: 'linear-gradient(180deg,#00e5ff,#00ffa3)', color: 'black', borderRadius: 16, padding: 18, textAlign: 'center' }}><b>10 Clip - Rp 70.000</b><button onClick={() => beli('10 CLIP', 10)} style={{ background: 'black', color: 'white', width: '100%', padding: 12, borderRadius: 999, cursor: 'pointer', marginTop: 10 }}>Bayar QRIS →</button></div><div style={{ background: card, border: '1px solid #a78bfa', borderRadius: 16, padding: 18, textAlign: 'center' }}><b>Unlimited - Rp 149.000</b><button onClick={() => beli('UNLIMITED', 999)} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 999, cursor: 'pointer', marginTop: 10 }}>Ambil Unlimited →</button></div></div></div>);
}
