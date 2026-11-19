import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const [link, setLink] = useState('');
  const [durasi, setDurasi] = useState('30 detik');
  const [picked, setPicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [paket, setPaket] = useState('GRATIS');
  const [kredit, setKredit] = useState(2);
  const [totalKredit, setTotalKredit] = useState(2);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [subtitleText, setSubtitleText] = useState('Mau bikin konten viral? Pakai AI aja!');
  const [subtitleOn, setSubtitleOn] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [playPos, setPlayPos] = useState(35);
  const [activeWord, setActiveWord] = useState(2);
  const [bannerError, setBannerError] = useState(false);
  const neon = '#00e5ff';
  const bg = '#050a1e';
  const solidCard = '#0a1226';

  // ===== LOGIN ADMIN BARU - JANGAN DISEBAR =====
  const ADMIN_EMAIL = 'tawitan144@gmail.com';
  const ADMIN_PASS = '1234567890';

  const clips = [
    { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18', score: 98, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500', video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-1584/1080p.mp4', transcript: ['Halo','guys','ini','tips','AI','2024','yang','wajib','kamu','tau'] },
    { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32', score: 96, img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500', video: 'https://cdn.coverr.co/videos/coverr-editing-video-on-a-laptop-1600/1080p.mp4', transcript: ['Cara','edit','video','pakai','AI','cepat','banget'] },
    { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10', score: 95, img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500', video: 'https://cdn.coverr.co/videos/coverr-using-a-smartphone-1579/1080p.mp4', transcript: ['Rahasia','FYP','TikTok','itu','ada','di','3','detik'] },
    { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27', score: 93, img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500', video: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1587/1080p.mp4', transcript: ['Prompt','AI','ini','bikin','konten','edukasi'] },
    { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45', score: 91, img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500', video: 'https://cdn.coverr.co/videos/coverr-a-woman-recording-a-video-1590/1080p.mp4', transcript: ['Storytelling','30','detik','itu','kuncinya'] },
  ];

  const search = () => { if (!link) return alert('Tempel link dulu!'); setLoading(true); setTimeout(() => { setLoading(false); setPage('clips'); }, 800); };
  const beliPaket = (nama, jumlah) => { setPaket(nama); setKredit(jumlah); setTotalKredit(jumlah); alert('Beli ' + nama + ' Berhasil! Kredit: ' + jumlah); setPage('clips'); };
  const downloadClip = () => {
    if (kredit <= 0 && paket !== 'UNLIMITED') { alert('Kredit habis!'); setPage('paket'); return; }
    if (paket !== 'UNLIMITED') setKredit(kredit - 1);
    alert('Download Berhasil! Sisa: ' + (paket === 'UNLIMITED' ? 'UNLIMITED' : kredit - 1));
  };
  const loginAdmin = () => {
    if (adminEmail.trim().toLowerCase() === ADMIN_EMAIL && adminPass === ADMIN_PASS) { setIsAdmin(true); setPage('admin'); alert('✅ Selamat datang, Admin Tawitan!'); }
    else alert('❌ Email / Password salah!');
  };

  const banner = (
    <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', border: '2px solid #00e5ff88', marginBottom: 18, background: 'linear-gradient(135deg, #050a1e, #0a1a3a)' }}>
      {!bannerError ? (
        <img src="/banner.jpg" alt="Banner" onError={() => setBannerError(true)} style={{ width: '100%', maxHeight: 280, objectFit: 'cover', display: 'block' }} />
      ) : (
        <div style={{ padding: '28px 20px', display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
          <div style={{ fontSize: 72 }}>🤖</div>
          <div><div style={{ fontWeight: 900, fontSize: 34 }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div><div style={{ color: '#9ab4d6', fontSize: 12, letterSpacing: 4 }}>CREATE • CLIP • GO VIRAL</div></div>
          <div style={{ fontSize: 36 }}>✂️🎬</div>
        </div>
      )}
    </div>
  );

  const walkingRobot = (
    <div style={{ position: 'fixed', bottom: 12, left: 0, zIndex: 9999, pointerEvents: 'none', width: '100%' }}>
      <style>{`@keyframes jalanKeliling { 0% { left: -80px; } 50% { left: 48%; } 100% { left: 110%; } } @keyframes lompatRobot { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }`}</style>
      <div style={{ position: 'absolute', bottom: 0, animation: 'jalanKeliling 22s linear infinite', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ background: 'white', color: 'black', fontSize: 11, fontWeight: 800, padding: '6px 10px', borderRadius: 14, marginBottom: 4, whiteSpace: 'nowrap' }}>Hai! Yuk bikin clip viral! 🎬✨</div>
        <div style={{ fontSize: 52, animation: 'lompatRobot 0.6s ease-in-out infinite' }}>🤖</div>
        <div style={{ fontSize: 10, background: '#00e5ff', color: 'black', padding: '2px 8px', borderRadius: 999, fontWeight: 800 }}>AINEWTECHCLIP</div>
      </div>
    </div>
  );

  const wrap = (children) => (
    <div style={{ background: bg, color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative' }}>
      {walkingRobot}
      <div style={{ maxWidth: 1150, margin: '0 auto', padding: '14px 16px', paddingBottom: 90 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #00e5ff66', borderRadius: 16, padding: '10px 14px', background: '#071022', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
          <div onClick={() => setPage('home')} style={{ fontWeight: 900, fontSize: 20, cursor: 'pointer' }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span> 🤖</div>
          <div style={{ display: 'flex', gap: 12, fontSize: 13, alignItems: 'center', flexWrap: 'wrap' }}>
            <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Beranda</span>
            <span onClick={() => setPage('clips')} style={{ cursor: 'pointer' }}>Fitur</span>
            <span onClick={() => setPage('paket')} style={{ cursor: 'pointer' }}>Harga</span>
            <span onClick={() => setPage(isAdmin ? 'admin' : 'login')} style={{ cursor: 'pointer', fontWeight: 700 }}>{isAdmin ? '👑 Admin Panel' : 'Masuk'}</span>
            <span style={{ background: '#00e5ff22', border: '1px solid #00e5ff', padding: '5px 10px', borderRadius: 999, color: neon, fontWeight: 800 }}>🎬 {paket === 'UNLIMITED' ? '♾️' : kredit} Kredit</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
          <div style={{ background: '#071022', border: '1px solid #00e5ff', borderRadius: 999, padding: '8px 14px', fontWeight: 800, fontSize: 13 }}>🎬 Paket: {paket} | Kredit: {paket === 'UNLIMITED' ? '♾️ UNLIMITED' : kredit + ' / ' + totalKredit + ' Clip'}</div>
          
