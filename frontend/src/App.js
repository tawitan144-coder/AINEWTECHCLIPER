import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home'); // home | clips | studio | ambassador | paket
  const [link, setLink] = useState('');
  const [durasi, setDurasi] = useState('30 detik');
  const [picked, setPicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [namaRef, setNamaRef] = useState('');
  const [waRef, setWaRef] = useState('');

  const neon = '#00e5ff';
  const bg = '#050a1e';

  const clips = [
    { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18', score: 98 },
    { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32', score: 96 },
    { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10', score: 95 },
    { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27', score: 93 },
    { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45', score: 91 },
  ];

  const search = () => {
    if (!link) return alert('Tempel link YouTube / TikTok / Instagram dulu ya!');
    setLoading(true);
    setTimeout(() => { setLoading(false); setPage('clips'); }, 1000);
  };

  const header = (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${neon}66`, borderRadius: 14, padding: '10px 14px', background: '#071022cc', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
      <div onClick={() => setPage('home')} style={{ fontWeight: 900, fontSize: 20, cursor: 'pointer' }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div>
      <div style={{ display: 'flex', gap: 14, fontSize: 13, color: '#aaccff', alignItems: 'center', flexWrap: 'wrap' }}>
        <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Beranda</span>
        <span onClick={() => setPage('clips')} style={{ cursor: 'pointer' }}>Fitur</span>
        <span onClick={() => setPage('paket')} style={{ cursor: 'pointer', color: page === 'paket' ? neon : '#aaccff', fontWeight: page === 'paket' ? 800 : 400 }}>Harga</span>
        <span onClick={() => setPage('ambassador')} style={{ cursor: 'pointer', color: page === 'ambassador' ? neon : '#aaccff', fontWeight: page === 'ambassador' ? 800 : 400 }}>Referral</span>
        <span>Masuk</span>
        <span style={{ border: `1px solid ${neon}`, padding: '6px 12px', borderRadius: 20, color: neon }}>👤 Dashboard</span>
      </div>
    </div>
  );

  const wrap = (children) => (
    <div style={{ background: bg, color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 16px' }}>{header}{children}
        <div style={{ textAlign: 'center', fontSize: 11, color: '#7788aa', padding: '20px 0' }}>© 2024 AINEWTECHCLIP • PT AINEWTECH INDONESIA • Made for Creator Indonesia 🇮🇩</div>
      </div>
    </div>
  );

  // ===== HALAMAN 1 - BERANDA ALA GOOGLE =====
  if (page === 'home') {
    return wrap(
      <div style={{ textAlign: 'center', padding: '30px 0 20px' }}>
        <div style={{ fontWeight: 900, fontSize: 42, lineHeight: 1 }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div>
        <div style={{ color: '#9ab4d6', fontSize: 13, marginTop: 8, letterSpacing: 1 }}>CREATE • CLIP • GO VIRAL</div>
        <h1 style={{ fontSize: 26, margin: '24px 0 8px' }}>Ubah Link Jadi Klip Viral Hanya dalam Hitungan Detik</h1>
        <p style={{ color: '#9ab4d6', fontSize: 14 }}>Paste link YouTube, TikTok, Instagram, atau podcast. AI akan potong jadi 5 clip terbaik.</p>
        <div style={{ display: 'flex', gap: 10, marginTop: 22, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, background: '#020617', border: `1px solid ${neon}88`, borderRadius: 30, padding: '10px 18px' }}>
            <span style={{ fontSize: 20 }}>🔗</span>
            <input value={link} onChange={e => setLink(e.target.value)} placeholder="Tempel link di sini... https://www.tiktok.com/..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: 15 }} onKeyDown={e => e.key === 'Enter' && search()} />
          </div>
          <button onClick={search} style={{ background: neon, color: '#00222a', border: 'none', padding: '12px 24px', borderRadius: 30, fontWeight: 900, cursor: 'pointer', boxShadow: `0 0 20px ${neon}55`, fontSize: 15 }}>{loading ? 'Mencari... ⏳' : '✦ Coba Gratis'}</button>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>
          {['15 detik', '30 detik', '45 detik', '1 menit', '1 menit 10 detik'].map(d => (
            <button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? neon : '#0a1230', color: durasi === d ? 'black' : 'white', border: `1px solid ${neon}55`, padding: '7px 14px', borderRadius: 20, fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>{d}</button>
          ))}
        </div>
        <div style={{ color: '#9ab4d6', fontSize: 12, marginTop: 14 }}>Tanpa login ✓ &nbsp; Proses 30 detik ✓ &nbsp; Hasil siap edit</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
          <button onClick={() => setPage('paket')} style={{ background: 'transparent', color: neon, border: `1px solid ${neon}`, padding: '10px 18px', borderRadius: 20, cursor: 'pointer', fontWeight: 700 }}>💰 Lihat Daftar Paket →</button>
          <button onClick={() => setPage('ambassador')} style={{ background: neon, color: 'black', border: 'none', padding: '10px 18px', borderRadius: 20, cursor: 'pointer', fontWeight: 800 }}>🎁 Jadi Brand Ambassador - 200 Clip Gratis →</button>
        </div>
      </div>
    );
  }

  // ===== HALAMAN 2 - 5 CLIP =====
  if (page === 'clips') {
    return wrap(
      <div>
        <button onClick={() => setPage('home')} style={{ background: 'transparent', color: neon, border: `1px solid ${neon}`, padding: '7px 14px', borderRadius: 20, cursor: 'pointer', marginBottom: 12 }}>← Cari Link Lain</button>
        <div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>HASIL PENCARIAN AI • Durasi: {durasi}</div>
        <h2 style={{ fontSize: 24, margin: '8px 0 4px' }}>AI Pilih 5 Clip Terbaik untuk Kamu</h2>
        <p style={{ color: '#9ab4d6', fontSize: 13 }}>Link: <span style={{ color: 'white' }}>{link}</span> • Klik 1 clip untuk masuk Studio Edit</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 16 }}>
          {clips.map(c => (
            <div key={c.id} onClick={() => { setPicked(c); setPage('studio'); }} style={{ background: 'linear-gradient(180deg,#0a1230,#071022)', border: `1px solid ${neon}55`, borderRadius: 14, padding: 12, cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#0a2a4a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${neon}` }}>▶️</div>
                <span style={{ background: '#a3e635', color: 'black', fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 8, height: 18 }}>{c.time}</span>
              </div>
              <div style={{ marginTop: 28, display: 'inline-block', background: neon, color: 'black', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 6 }}>{c.label}</div>
              <div style={{ fontWeight: 700, fontSize: 13, marginTop: 8, lineHeight: 1.3, minHeight: 38 }}>{c.title}</div>
              <div style={{ fontSize: 11, color: '#9ab4d6' }}>Score AI: {c.score}/100</div>
              <div style={{ marginTop: 10, background: neon, color: 'black', textAlign: 'center', padding: '8px', borderRadius: 10, fontWeight: 800, fontSize: 12 }}>Edit Clip →</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== HALAMAN 3 -
