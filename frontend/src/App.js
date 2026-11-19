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
    if (adminEmail === 'admin@ainewtechclip.com' && adminPass === 'admin123') { setIsAdmin(true); setPage('admin'); }
    else alert('Salah! admin@ainewtechclip.com / admin123');
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
      <style>{`@keyframes jalanKeliling { 0% { left: -80px; } 50% { left: 48%; } 100% { left: 110%; } } @keyframes lompatRobot { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } } @keyframes floaty { 0%,100%{ transform: translateY(0px);} 50%{ transform: translateY(-15px);} }`}</style>
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
          <button onClick={() => setPage('paket')} style={{ background: neon, color: 'black', border: 'none', padding: '8px 14px', borderRadius: 999, fontWeight: 800, cursor: 'pointer' }}>+ Tambah Kredit</button>
        </div>
        {children}
        <div style={{ textAlign: 'center', fontSize: 11, color: '#7788aa', padding: '20px 0' }}>© 2024 AINEWTECHCLIP • Made for Creator Indonesia 🇮🇩</div>
      </div>
    </div>
  );

  if (page === 'login') {
    return wrap(
      <div style={{ maxWidth: 420, margin: '30px auto', background: solidCard, border: '1px solid #00e5ff66', borderRadius: 20, padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 48 }}>🔐</div><h2>Login Admin</h2>
        <input value={adminEmail} onChange={e => setAdminEmail(e.target.value)} placeholder="admin@ainewtechclip.com" style={{ width: '100%', background: '#020617', color: 'white', border: '1px solid #00e5ff55', padding: 12, borderRadius: 12, boxSizing: 'border-box', marginTop: 12 }} />
        <input type="password" value={adminPass} onChange={e => setAdminPass(e.target.value)} placeholder="Password" style={{ width: '100%', background: '#020617', color: 'white', border: '1px solid #00e5ff55', padding: 12, borderRadius: 12, boxSizing: 'border-box', marginTop: 8 }} />
        <button onClick={loginAdmin} style={{ width: '100%', background: neon, color: 'black', border: 'none', padding: 13, borderRadius: 999, fontWeight: 900, cursor: 'pointer', marginTop: 14 }}>Masuk sebagai Admin</button>
        <div style={{ fontSize: 12, color: '#9ab4d6', marginTop: 10 }}>Coba: admin@ainewtechclip.com / admin123</div>
      </div>
    );
  }

  if (page === 'admin') {
    if (!isAdmin) {
      return wrap(<div style={{ textAlign: 'center', padding: 40 }}><h2>Harus Login Dulu</h2><button onClick={() => setPage('login')} style={{ background: neon, color: 'black', border: 'none', padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800 }}>Ke Login Admin →</button></div>);
    }
    return wrap(
      <div>
        <h2>👑 Admin Panel - Halo Admin!</h2>
        <p style={{ color: '#9ab4d6' }}>Total Uang Masuk: <b style={{ color: 'white' }}>Rp 289.000</b> • Total User: 5 Orang • Total Download: 43 Clip</p>
        <div style={{ background: solidCard, borderRadius: 14, padding: 14, marginTop: 12 }}>
          <b>👥 Pembeli Terbaru</b>
          <div style={{ marginTop: 8, fontSize: 13, lineHeight: 2 }}>👤 Budi Santoso - 10 CLIP - Rp 70.000 - Kredit 8/10<br />👤 Siti Rahma - UNLIMITED - Rp 149.000<br />👤 Rizky Fauzi - 10 CLIP - Kredit Habis (0/10) - Follow up!</div>
        </div>
        <button onClick={() => { setIsAdmin(false); setPage('home'); }} style={{ background: '#ff2d55', color: 'white', border: 'none', padding: '10px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800, marginTop: 14 }}>🚪 Logout Admin</button>
      </div>
    );
  }

  if (page === 'home') {
    return wrap(
      <div style={{ textAlign: 'center' }}>
        {banner}
        <h1 style={{ fontSize: 26 }}>Ubah Link Jadi Klip Viral Hanya dalam Hitungan Detik</h1>
        <p style={{ color: '#9ab4d6' }}>Paste link YouTube, TikTok, Instagram. AI akan potong jadi 5 clip terbaik.</p>
        <div style={{ maxWidth: 720, margin: '20px auto 0', display: 'flex', gap: 10, alignItems: 'center', background: '#0a1226', border: '1px solid #00e5ff66', borderRadius: 999, padding: '8px 8px 8px 18px' }}>
          <span style={{ fontSize: 22 }}>🔗</span>
          <input value={link} onChange={e => setLink(e.target.value)} placeholder="Tempel link di sini..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: 15 }} />
          <button onClick={search} style={{ background: 'linear-gradient(90deg,#00e5ff,#00ffa3)', color: 'black', border: 'none', padding: '13px 24px', borderRadius: 999, fontWeight: 900, cursor: 'pointer', whiteSpace: 'nowrap' }}>{loading ? 'Motong...' : '✦ Coba Gratis'}</button>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap' }}>{['15 detik', '30 detik', '45 detik', '1 menit'].map(d => (<button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? neon : '#0a1226', color: durasi === d ? 'black' : 'white', border: '1px solid #00e5ff55', padding: '8px 15px', borderRadius: 999, cursor: 'pointer' }}>{d}</button>))}</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 20, flexWrap: 'wrap' }}>
          <button onClick={() => setPage('paket')} style={{ background: '#0a1226', color: neon, border: '1px solid #00e5ff', padding: '11px 18px', borderRadius: 999, cursor: 'pointer' }}>💰 Lihat Paket →</button>
          <button onClick={() => setPage('login')} style={{ background: '#0a1226', color: 'white', border: '1px solid #555', padding: '11px 18px', borderRadius: 999, cursor: 'pointer' }}>🔐 Login Admin →</button>
        </div>
        <div style={{ marginTop: 26, textAlign: 'left' }}><b>🎬 Contoh Clip</b><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>{clips.slice(0, 3).map(c => (<div key={c.id} onClick={() => { setPicked(c); setPage('studio'); }} style={{ cursor: 'pointer', borderRadius: 14, overflow: 'hidden', border: '1px solid #00e5ff55', background: solidCard }}><img src={c.img} alt={c.title} style={{ width: '100%', height: 110, objectFit: 'cover' }} /><div style={{ padding: 10, fontSize: 12, textAlign: 'left' }}><b>{c.title}</b><div style={{ color: '#9ab4d6' }}>{c.label} • {c.time}</div></div></div>))}</div></div>
      </div>
    );
  }

  if (page === 'clips') {
    return wrap(
      <div>
        <button onClick={() => setPage('home')} style={{ background: solidCard, color: neon, border: '1px solid #00e5ff', padding: '7px 14px', borderRadius: 999, cursor: 'pointer' }}>← Cari Link Lain</button>
        <h2>AI Pilih 5 Clip Terbaik</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 12 }}>{clips.map(c => (
          <div key={c.id} onClick={() => { setPicked(c); setPage('studio'); }} style={{ background: solidCard, border: '1px solid #00e5ff55', borderRadius: 16, cursor: 'pointer', overflow: 'hidden' }}>
            <img src={c.img} alt={c.title} style={{ width: '100%', height: 110, objectFit: 'cover' }} />
            <div style={{ padding: 12 }}><div style={{ background: neon, color: 'black', display: 'inline-block', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 999 }}>{c.label}</div><div style={{ fontWeight: 700, fontSize: 13, marginTop: 8, minHeight: 38 }}>{c.title}</div><div style={{ fontSize: 11, color: '#9ab4d6' }}>Score: {c.score} • 1 Kredit</div><div style={{ marginTop: 10, background: neon, color: 'black', textAlign: 'center', padding: '8px', borderRadius: 999, fontWeight: 800, fontSize: 12 }}>Edit Clip →</div></div>
          </div>))}
        </div>
      </div>
    );
  }

  if (page === 'studio') {
    const words = picked?.transcript || [];
    return wrap(
      <div>
        <button onClick={() => setPage('clips')} style={{ background: solidCard, color: neon, border: '1px solid #00e5ff', padding: '7px 14px', borderRadius: 999, cursor: 'pointer' }}>← Kembali</button>
        <h2>Studio Edit — {picked?.title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr', gap: 12, marginTop: 10 }}>
          <div style={{ background: solidCard, border: '1px solid #00e5ff55', borderRadius: 16, padding: 14 }}><b>💬 Transcript</b><div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>{words.map((w, i) => (<span key={i} onClick={() => setActiveWord(i)} style={{ background: activeWord === i ? neon : '#1a2a4a', color: activeWord === i ? 'black' : 'white', padding: '5px 8px', borderRadius: 8, cursor: 'pointer' }}>{w}</span>))}</div></div>
          <div style={{ background: solidCard, border: '1px solid #00e5ff55', borderRadius: 16, overflow: 'hidden' }}><div style={{ position: 'relative', background: '#000', display: 'flex', justifyContent: 'center' }}><video key={picked?.id} src={picked?.video} poster={picked?.img} controls style={{ width: '100%', height: 300, objectFit: 'cover' }} />{subtitleOn && <div style={{ position: 'absolute', bottom: 44, left: '50%', transform: 'translateX(-50%)', width: '85%', background: '#00e5ff', color: 'black', fontSize: 12, fontWeight: 800, padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>{subtitleText}</div>}</div><div style={{ padding: 10 }}><input value={subtitleText} onChange={e => setSubtitleText(e.target.value)} style={{ background: '#020617', color: 'white', border: '1px solid #00e5ff55', width: '100%', padding: 8, borderRadius: 999, boxSizing: 'border-box' }} /></div></div>
          <div style={{ background: solidCard, border: '1px solid #00e5ff55', borderRadius: 16, padding: 14 }}><b style={{ color: neon }}>Panel Edit</b><div style={{ marginTop: 10 }}>Kredit: <b style={{ color: neon }}>{kredit} / {totalKredit}</b></div><label style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}><span>💬 Subtitle</span><input type="checkbox" checked={subtitleOn} onChange={() => setSubtitleOn(!subtitleOn)} /></label><div style={{ display: 'flex', gap: 6, marginTop: 10 }}>{[0.5, 1, 1.5, 2].map(s => <button key={s} onClick={() => setSpeed(s)} style={{ background: speed === s ? neon : '#1a2a4a', color: speed === s ? 'black' : 'white', border: 'none', padding: '5px 10px', borderRadius: 999, cursor: 'pointer' }}>{s}x</button>)}</div><button onClick={downloadClip} style={{ background: neon, color: 'black', border: 'none', padding: 12, borderRadius: 999, fontWeight: 900, cursor: 'pointer', width: '100%', marginTop: 12 }}>⬇ Download (-1 Kredit)</button></div>
        </div>
        <div style={{ background: solidCard, border: '1px solid #00e5ff55', borderRadius: 16, padding: 14, marginTop: 12 }}><b>⏱️ Timeline</b><input type="range" min="0" max="100" value={playPos} onChange={e => setPlayPos(Number(e.target.value))} style={{ width: '100%', accentColor: neon }} /><div style={{ marginTop: 8 }}><div style={{ display: 'flex', gap: 6, marginBottom: 6 }}><span style={{ width: 70, fontSize: 11 }}>🎬 VIDEO</span><div style={{ flex: 1, background: 'linear-gradient(90deg,#00e5ff,#00ffa3)', height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 10px', color: 'black', fontWeight: 700, fontSize: 12 }}>{picked?.title}</div></div><div style={{ display: 'flex', gap: 6 }}><span style={{ width: 70, fontSize: 11 }}>💬 TEXT</span><div style={{ flex: 1, background: '#a78bfa', height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 10px', color: 'black', fontSize: 11, fontWeight: 700 }}>{subtitleText}</div></div></div></div>
      </div>
    );
  }

  return wrap(
    <div>
      <h2>Pilih Paket</h2>
      <p style={{ color: '#9ab4d6' }}>Kredit kamu: {paket} - {kredit} / {totalKredit}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 12 }}>
        <div style={{ background: solidCard, border: '1px solid #00e5ff55', borderRadius: 16, padding: 18, textAlign: 'center' }}><b>GRATIS - 2 Kredit</b><button onClick={() => beliPaket('GRATIS', 2)} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 999, cursor: 'pointer', marginTop: 10 }}>Ambil Gratis →</button></div>
        <div style={{ background: 'linear-gradient(180deg,#00e5ff,#00ffa3)', color: 'black', borderRadius: 16, padding: 18, textAlign: 'center' }}><b>10 Clip - Rp 70.000</b><button onClick={() => beliPaket('10 CLIP', 10)} style={{ background: 'black', color: 'white', width: '100%', padding: 12, borderRadius: 999, cursor: 'pointer', marginTop: 10 }}>Bayar QRIS →</button></div>
        <div style={{ background: solidCard, border: '1px solid #a78bfa', borderRadius: 16, padding: 18, textAlign: 'center' }}><b>Unlimited - Rp 149.000</b><button onClick={() => beliPaket('UNLIMITED', 999)} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 999, cursor: 'pointer', marginTop: 10 }}>Ambil Unlimited →</button></div>
      </div>
    </div>
  );
}
