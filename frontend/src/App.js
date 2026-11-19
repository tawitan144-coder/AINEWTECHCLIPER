import React, { useState, useRef } from 'react';

export default function App() {
  const [page, setPage] = useState('home');
  const [link, setLink] = useState('');
  const [durasi, setDurasi] = useState('30 detik');
  const [picked, setPicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [focus, setFocus] = useState(false);
  const [namaRef, setNamaRef] = useState('');
  const [waRef, setWaRef] = useState('');

  // ===== SISTEM KREDIT =====
  const [paket, setPaket] = useState('GRATIS');
  const [kredit, setKredit] = useState(2);
  const [totalKredit, setTotalKredit] = useState(2);
  const [riwayat, setRiwayat] = useState([]);

  // ===== STUDIO CAPCUT STYLE =====
  const [subtitleOn, setSubtitleOn] = useState(true);
  const [subtitleText, setSubtitleText] = useState('Mau bikin konten viral? Pakai AI aja!');
  const [speed, setSpeed] = useState(1);
  const [playPos, setPlayPos] = useState(35); // posisi playhead 0-100
  const [activeWord, setActiveWord] = useState(2);
  const videoRef = useRef(null);

  const neon = '#00e5ff';
  const bg = '#050a1e';

  const clips = [
    { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18', score: 98, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500', video: 'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-1584/1080p.mp4', transcript: ['Halo','guys','ini','tips','AI','2024','yang','wajib','kamu','tau','jangan','di','skip','ya!'] },
    { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32', score: 96, img: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500', video: 'https://cdn.coverr.co/videos/coverr-editing-video-on-a-laptop-1600/1080p.mp4', transcript: ['Cara','edit','video','pakai','AI','cepat','banget','cuma','30','detik','langsung','jadi','viral'] },
    { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10', score: 95, img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500', video: 'https://cdn.coverr.co/videos/coverr-using-a-smartphone-1579/1080p.mp4', transcript: ['Rahasia','FYP','TikTok','itu','ada','di','3','detik','pertama','hook','nya','harus','kuat'] },
    { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27', score: 93, img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500', video: 'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1587/1080p.mp4', transcript: ['Prompt','AI','ini','bikin','konten','edukasi','kamu','jadi','gampang','dan','ramai','ditonton'] },
    { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45', score: 91, img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500', video: 'https://cdn.coverr.co/videos/coverr-a-woman-recording-a-video-1590/1080p.mp4', transcript: ['Storytelling','30','detik','itu','kuncinya','cerita','yang','bikin','penonton','nggak','bisa','skip'] },
  ];

  const search = () => {
    if (!link) return alert('Tempel link YouTube / TikTok / Instagram dulu ya!');
    setLoading(true);
    setTimeout(() => { setLoading(false); setPage('clips'); }, 800);
  };

  const beliPaket = (nama, jumlah) => {
    setPaket(nama); setKredit(jumlah); setTotalKredit(jumlah); setRiwayat([]);
    alert(`✅ Berhasil beli ${nama}! Kredit: ${jumlah === 999 ? 'UNLIMITED ♾️' : jumlah + ' Clip'} - Muncul di semua halaman!`);
    setPage('clips');
  };

  const downloadClip = () => {
    if (paket === 'UNLIMITED') { setRiwayat([{ title: picked.title, time: new Date().toLocaleTimeString('id-ID') }, ...riwayat]); alert('✅ Download berhasil! UNLIMITED - Kredit tidak berkurang ♾️'); return; }
    if (kredit <= 0) { alert('❌ Kredit habis! Beli lagi di Halaman 5'); setPage('paket'); return; }
    const sisa = kredit - 1; setKredit(sisa);
    setRiwayat([{ title: picked.title, time: new Date().toLocaleTimeString('id-ID') }, ...riwayat]);
    alert(`✅ Download berhasil! -1 Kredit\nSisa Kredit: ${sisa} / ${totalKredit} Clip\nPaket: ${paket}\nCek bar atas, sudah berkurang!`);
  };

  const aliveBg = (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <style>{`
        @keyframes floaty { 0%,100%{ transform: translateY(0px) rotate(-3deg);} 50%{ transform: translateY(-18px) rotate(3deg);} }
        @keyframes floaty2 { 0%,100%{ transform: translateY(0px);} 50%{ transform: translateY(-28px);} }
        @keyframes glowPulse { 0%,100%{ opacity:0.5; transform:scale(1);} 50%{ opacity:0.9; transform:scale(1.15);} }
        @keyframes naik { 0%{ transform: translateY(100vh); opacity:0;} 10%{opacity:1;} 100%{ transform: translateY(-20vh); opacity:0;} }
        @keyframes kedip { 0%,90%,100%{ transform: scaleY(1);} 92%{ transform: scaleY(0.1);} }
        @keyframes jalan { 0%{ left:-10%;} 100%{ left:110%;} }
        @keyframes typing { 0%,60%,100%{ transform: translateY(0); opacity:0.4;} 30%{ transform: translateY(-4px); opacity:1;} }
      `}</style>
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, #00e5ff66, transparent 70%)', top: '-80px', left: '-80px', animation: 'glowPulse 4s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', background: 'radial-gradient(circle, #a78bfa66, transparent 70%)', top: '30%', right: '-100px', animation: 'glowPulse 5s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, #00ffa355, transparent 70%)', bottom: '-60px', left: '35%', animation: 'glowPulse 6s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#00e5ff11 1px, transparent 1px), linear-gradient(90deg, #00e5ff11 1px, transparent 1px)', backgroundSize: '45px 45px' }} />
      {[...Array(14)].map((_, i) => (<div key={i} style={{ position: 'absolute', left: `${(i * 7 + 5) % 100}%`, bottom: 0, width: 6, height: 6, borderRadius: '50%', background: i % 3 === 0 ? neon : i % 3 === 1 ? '#00ffa3' : '#a78bfa', animation: `naik ${4 + (i % 4)}s linear infinite`, animationDelay: `${i * 0.7}s` }}>✦</div>))}
      <div style={{ position: 'absolute', left: '3%', top: '18%', animation: 'floaty 3.5s ease-in-out infinite', fontSize: 60, filter: 'drop-shadow(0 0 20px #00e5ff88)' }}><div style={{ animation: 'kedip 3s infinite' }}>🤖</div><div style={{ fontSize: 11, background: 'white', color: 'black', padding: '6px 10px', borderRadius: 14, marginTop: 4, fontWeight: 700, whiteSpace: 'nowrap' }}>Hai! Tempel link yuk! 👋</div></div>
      <div style={{ position: 'absolute', right: '3%', top: '55%', animation: 'floaty2 4s ease-in-out infinite', fontSize: 46 }}>🦾</div>
      <div style={{ position: 'absolute', right: '6%', top: '22%', animation: 'floaty 5s ease-in-out infinite', fontSize: 34 }}>✂️</div>
      <div style={{ position: 'absolute', left: '6%', bottom: '10%', animation: 'floaty2 4.5s ease-in-out infinite', fontSize: 30 }}>🎬</div>
      <div style={{ position: 'absolute', top: '8%', animation: 'jalan 18s linear infinite', fontSize: 24 }}>🚀</div>
    </div>
  );

  const kreditBar = (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', marginBottom: 14 }}>
      <div style={{ background: paket === 'UNLIMITED' ? 'linear-gradient(90deg,#a78bfa,#00e5ff)' : '#071022', color: paket === 'UNLIMITED' ? 'black' : 'white', border: `1px solid ${neon}`, borderRadius: 999, padding: '8px 14px', fontWeight: 800, fontSize: 13 }}>🎬 Paket: {paket} &nbsp;|&nbsp; Kredit: {paket === 'UNLIMITED' ? '♾️ UNLIMITED' : `${kredit} / ${totalKredit} Clip`}</div>
      <div style={{ flex: 1, minWidth: 120, height: 10, background: '#1a2a4a', borderRadius: 999, overflow: 'hidden' }}><div style={{ width: paket === 'UNLIMITED' ? '100%' : `${totalKredit ? (kredit / totalKredit) * 100 : 0}%`, height: '100%', background: `linear-gradient(90deg, ${neon}, #00ffa3)`, transition: 'width 0.5s' }} /></div>
      <button onClick={() => setPage('paket')} style={{ background: neon, color: 'black', border: 'none', padding: '8px 14px', borderRadius: 999, fontWeight: 800, cursor: 'pointer', fontSize: 12 }}>+ Tambah Kredit →</button>
      {kredit <= 0 && paket !== 'UNLIMITED' && <span style={{ background: '#ff2d55', color: 'white', padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800 }}>⚠️ Kredit Habis!</span>}
    </div>
  );

  const header = (
    <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${neon}66`, borderRadius: 16, padding: '10px 14px', background: '#071022dd', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
      <div onClick={() => setPage('home')} style={{ fontWeight: 900, fontSize: 20, cursor: 'pointer' }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span> 🤖</div>
      <div style={{ display: 'flex', gap: 12, fontSize: 13, color: '#aaccff', alignItems: 'center', flexWrap: 'wrap' }}>
        <span onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Beranda</span>
        <span onClick={() => setPage('clips')} style={{ cursor: 'pointer' }}>Fitur</span>
        <span onClick={() => setPage('paket')} style={{ cursor: 'pointer' }}>Harga</span>
        <span onClick={() => setPage('ambassador')} style={{ cursor: 'pointer' }}>Referral</span>
        <span>Masuk</span>
        <span style={{ background: `${neon}22`, border: `1px solid ${neon}`, padding: '5px 10px', borderRadius: 999, color: neon, fontWeight: 800 }}>🎬 {paket === 'UNLIMITED' ? '♾️' : kredit} Kredit</span>
      </div>
    </div>
  );

  const wrap = (children) => (
    <div style={{ background: bg, color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', position: 'relative' }}>{aliveBg}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1150, margin: '0 auto', padding: '14px 16px' }}>{header}{kreditBar}{children}
        <div style={{ textAlign: 'center', fontSize: 11, color: '#7788aa', padding: '20px 0' }}>© 2024 AINEWTECHCLIP • PT AINEWTECH INDONESIA • Made for Creator Indonesia 🇮🇩</div>
      </div>
    </div>
  );

  // ===== HALAMAN 1 =====
  if (page === 'home') {
    return wrap(
      <div style={{ textAlign: 'center', padding: '10px 0 20px' }}>
        <div style={{ display: 'inline-block', background: '#071022cc', border: `1px solid ${neon}66`, padding: '6px 14px', borderRadius: 999, fontSize: 12, color: neon }}>✦ AI LAGI ONLINE • KREDIT KAMU: {paket === 'UNLIMITED' ? '♾️ UNLIMITED' : `${kredit} CLIP`}</div>
        <div style={{ fontWeight: 900, fontSize: 44, lineHeight: 1, marginTop: 14, textShadow: `0 0 30px ${neon}66` }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div>
        <div style={{ color: '#9ab4d6', fontSize: 13, marginTop: 8, letterSpacing: 2 }}>CREATE • CLIP • GO VIRAL</div>
        <h1 style={{ fontSize: 26, margin: '20px 0 8px' }}>Ubah Link Jadi Klip Viral Hanya dalam Hitungan Detik</h1>
        <p style={{ color: '#9ab4d6', fontSize: 14 }}>Paste link YouTube, TikTok, Instagram, atau podcast. AI akan potong jadi 5 clip terbaik.</p>
        <div style={{ maxWidth: 720, margin: '24px auto 0', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -38, left: 18, fontSize: 36, animation: 'floaty 3s ease-in-out infinite', zIndex: 3 }}>🤖</div>
          <div style={{ position: 'absolute', top: -28, left: 62, background: 'white', color: 'black', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 12, animation: 'floaty2 3.5s ease-in-out infinite' }}>{loading ? 'Lagi motong... ✂️' : 'Tempel di sini ya! 👇'}<span style={{ display: 'inline-flex', gap: 2, marginLeft: 4 }}>{[0, 1, 2].map(i => <span key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: neon, display: 'inline-block', animation: 'typing 1s infinite', animationDelay: `${i * 0.2}s` }} />)}</span></div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', background: focus ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)', border: focus ? `2px solid ${neon}` : `1px solid ${neon}66`, borderRadius: 999, padding: '8px 8px 8px 18px', backdropFilter: 'blur(14px)', boxShadow: focus ? `0 0 35px ${neon}88` : `0 0 20px ${neon}33`, transform: focus ? 'scale(1.02)' : 'scale(1)', transition: 'all 0.25s' }}>
            <span style={{ fontSize: 22 }}>🔗</span>
            <input value={link} onChange={e => setLink(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} placeholder="Tempel link di sini... https://www.tiktok.com/..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: 15 }} onKeyDown={e => e.key === 'Enter' && search()} />
            <button onClick={search} style={{ background: `linear-gradient(90deg, ${neon}, #00ffa3)`, color: '#00222a', border: 'none', padding: '13px 24px', borderRadius: 999, fontWeight: 900, cursor: 'pointer', fontSize: 15, whiteSpace: 'nowrap' }}>{loading ? '✂️ Motong...' : '✦ Coba Gratis'}</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap' }}>{['15 detik', '30 detik', '45 detik', '1 menit', '1 menit 10 detik'].map(d => (<button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? neon : 'rgba(255,255,255,0.08)', color: durasi === d ? 'black' : 'white', border: `1px solid ${neon}55`, padding: '8px 15px', borderRadius: 999, fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>{d}</button>))}</div>
        <div style={{ color: '#9ab4d6', fontSize: 12, marginTop: 14 }}>Tanpa login ✓ &nbsp; Proses 30 detik ✓ &nbsp; Hasil siap edit</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
          <button onClick={() => setPage('paket')} style={{ background: 'rgba(255,255,255,0.08)', color: neon, border: `1px solid ${neon}`, padding: '11px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 700 }}>💰 Lihat Daftar Paket →</button>
          <button onClick={() => setPage('ambassador')} style={{ background: `linear-gradient(90deg, ${neon}, #00ffa3)`, color: 'black', border: 'none', padding: '11px 18px', borderRadius: 999, cursor: 'pointer', fontWeight: 800 }}>🎁 Jadi Brand Ambassador - 200 Clip Gratis →</button>
        </div>
        <div style={{ marginTop: 30, textAlign: 'left' }}><b>🎬 Contoh Clip yang Sudah Jadi - Klik untuk Preview</b>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 12 }}>{clips.slice(0, 3).map(c => (<div key={c.id} onClick={() => { setPicked(c); setPage('studio'); }} style={{ cursor: 'pointer', borderRadius: 14, overflow: 'hidden', border: `1px solid ${neon}55`, background: '#071022' }}><div style={{ position: 'relative' }}><img src={c.img} alt={c.title} style={{ width: '100%', height: 110, objectFit: 'cover', display: 'block' }} /><div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 42, height: 42, borderRadius: '50%', background: `${neon}dd`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'black' }}>▶</div></div><div style={{ padding: 10, fontSize: 12, textAlign: 'left' }}><b>{c.title}</b><div style={{ color: '#9ab4d6' }}>{c.label} • {c.time} • ▶️ Play</div></div></div>))}</div>
        </div>
      </div>
    );
  }

  // ===== HALAMAN 2 =====
  if (page === 'clips') {
    return wrap(
      <div>
        <button onClick={() => setPage('home')} style={{ background: 'rgba(255,255,255,0.08)', color: neon, border: `1px solid ${neon}`, padding: '7px 14px', borderRadius: 999, cursor: 'pointer', marginBottom: 12 }}>← Cari Link Lain</button>
        <div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>🤖 HASIL PENCARIAN AI • Durasi: {durasi} • Sisa Kredit: {kredit}</div>
        <h2 style={{ fontSize: 24, margin: '8px 0 4px' }}>AI Pilih 5 Clip Terbaik untuk Kamu</h2>
        <p style={{ color: '#9ab4d6', fontSize: 13 }}>Link: <span style={{ color: 'white' }}>{link}</span> • 1x Download = 1 Kredit berkurang</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginTop: 16 }}>{clips.map(c => (
          <div key={c.id} onClick={() => { setPicked(c); setSubtitleText('Mau bikin konten viral? Pakai AI aja!'); setPage('studio'); }} style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 0, cursor: 'pointer', overflow: 'hidden' }}>
            <div style={{ position: 'relative' }}><img src={c.img} alt={c.title} style={{ width: '100%', height: 110, objectFit: 'cover', display: 'block' }} /><div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 42, height: 42, borderRadius: '50%', background: `${neon}dd`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'black' }}>▶</div><span style={{ position: 'absolute', top: 8, right: 8, background: '#a3e635', color: 'black', fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 999 }}>{c.time}</span><span style={{ position: 'absolute', bottom: 8, left: 8, background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: 10, padding: '2px 6px', borderRadius: 999 }}>🎬 VIDEO CLIP</span></div>
            <div style={{ padding: 12 }}><div style={{ display: 'inline-block', background: neon, color: 'black', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 999 }}>{c.label}</div><div style={{ fontWeight: 700, fontSize: 13, marginTop: 8, lineHeight: 1.3, minHeight: 38 }}>{c.title}</div><div style={{ fontSize: 11, color: '#9ab4d6' }}>Score AI: {c.score}/100 • Biaya: 1 Kredit</div><div style={{ marginTop: 10, background: neon, color: 'black', textAlign: 'center', padding: '8px', borderRadius: 999, fontWeight: 800, fontSize: 12 }}>Edit Clip →</div></div>
          </div>))}
        </div>
        {riwayat.length > 0 && <div style={{ marginTop: 16, background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 12 }}><b>📥 Riwayat Download ({riwayat.length})</b>{riwayat.map((r, i) => <div key={i} style={{ fontSize: 12, color: '#9ab4d6', marginTop: 4 }}>✅ {r.title} - {r.time} - 1 Kredit terpakai</div>)}</div>}
      </div>
    );
  }

  // ===== HALAMAN 3 - STUDIO CAPCUT / OPUS STYLE =====
  if (page === 'studio') {
    const words = picked?.transcript || [];
    return wrap(
      <div>
        <button onClick={() => setPage('clips')} style={{ background: 'rgba(255,255,255,0.08)', color: neon, border: `1px solid ${neon}`, padding: '7px 14px', borderRadius: 999, cursor: 'pointer', marginBottom: 10 }}>← Kembali ke 5 Clip</button>
        {/* Toolbar atas ala CapCut */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
          {[['🎬', 'Media'], ['🎵', 'Audio'], ['✏️', 'Text'], ['😀', 'Sticker'], ['✨', 'Effect'], ['🔀', 'Transisi'], ['💬', 'Caption'], ['🎨', 'Filter']].map((t, i) => (
            <span key={i} style={{ background: i === 2 ? neon : 'rgba(255,255,255,0.08)', color: i === 2 ? 'black' : 'white', padding: '7px 13px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>{t[0]} {t[1]}</span>
          ))}
          <span style={{ marginLeft: 'auto', background: '#071022', border: `1px solid ${neon}`, padding: '7px 12px', borderRadius: 999, fontSize: 12 }}>🎬 Kredit: <b style={{ color: neon }}>{paket === 'UNLIMITED' ? '♾️' : `${kredit}/${totalKredit}`}</b></span>
        </div>
        <h2 style={{ fontSize: 20, margin: '4px 0' }}>Studio Edit — {picked?.title}</h2>
        <p style={{ color: '#9ab4d6', fontSize: 13 }}>Kamu lagi edit: <b style={{ color: 'white' }}>{picked?.label} • {picked?.time}</b> • Klik kata di Transcript untuk lompat • Edit gratis, Download = -1 Kredit</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr 1fr', gap: 12, marginTop: 10 }}>
          {/* KIRI - TRANSCRIPT ala Opus */}
          <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 14 }}>
            <b>💬 Transcript - Klik Kata untuk Edit</b>
            <div style={{ fontSize: 11, color: '#9ab4d6', marginTop: 4 }}>Hapus kata = Video otomatis kepotong (ala Opus Clip)</div>
            <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: 6 }}>{words.map((w, i) => (
              <span key={i} onClick={() => setActiveWord(i)} style={{ background: activeWord === i ? neon : 'rgba(255,255,255,0.1)', color: activeWord === i ? 'black' : 'white', padding: '5px 8px', borderRadius: 8, fontSize: 13, cursor: 'pointer', fontWeight: activeWord === i ? 800 : 400, textDecoration: i === 3 ? 'line-through' : 'none' }}>{w} {i === 3 ? '✕' : ''}</span>
            ))}</div>
            <div style={{ marginTop: 12, fontSize: 12, background: '#020617', borderRadius: 10, padding: 10 }}>Kata aktif: <b style={{ color: neon }}>{words[activeWord]}</b><br /><span style={{ color: '#9ab4d6' }}>Klik kata lain untuk pindah playhead. Kata yang dicoret tidak akan muncul di video.</span></div>
            <div style={{ display: 'flex', gap: 6, marginTop: 10 }}><button onClick={() => alert('Kata dihapus! Video otomatis kepotong')} style={{ flex: 1, background: '#ff2d55', color: 'white', border: 'none', padding: 9, borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontSize: 12 }}>🗑 Hapus Kata</button><button onClick={() => alert('Kata dipulihkan!')} style={{ flex: 1, background: 'rgba(255,255,255,0.1)', color: 'white', border: `1px solid ${neon}`, padding: 9, borderRadius: 999, cursor: 'pointer', fontWeight: 700, fontSize: 12 }}>↩ Pulihkan</button></div>
          </div>

          {/* TENGAH - PREVIEW 9:16 */}
          <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ position: 'relative', background: '#000', display: 'flex', justifyContent: 'center' }}>
              <video ref={videoRef} key={picked?.id} src={picked?.video} poster={picked?.img} controls style={{ width: '100%', maxWidth: 340, height: 300, objectFit: 'cover', display: 'block' }} />
              {subtitleOn && <div style={{ position: 'absolute', bottom: 44, left: '50%', transform: 'translateX(-50%)', width: '85%', background: '#00e5ff', color: 'black', fontSize: 12, fontWeight: 800, padding: '6px 8px', borderRadius: 8, textAlign: 'center' }}>{subtitleText}</div>}
              <div style={{ position: 'absolute', top: 10, right: 10, background: '#ff2d55', color: 'white', fontSize: 10, padding: '3px 8px', borderRadius: 999 }}>● PREVIEW 9:16</div>
            </div>
            <div style={{ padding: '10px 12px', fontSize: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>▶ ⏮ ⏭</span><span>00:12 / {picked?.time} • Speed {speed}x</span><span>⛶</span></div>
              <div style={{ marginTop: 8 }}>Subtitle yang tampil:</div>
              <input value={subtitleText} onChange={e => setSubtitleText(e.target.value)} style={{ background: '#020617', color: 'white', border: `1px solid ${neon}55`, width: '100%', padding: 8, borderRadius: 999, marginTop: 4, boxSizing: 'border-box' }} />
            </div>
          </div>

          {/* KANAN - PANEL EDIT */}
          <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 14 }}>
            <b style={{ color: neon, fontSize: 16 }}>Panel Edit 🤖</b>
            <div style={{ marginTop: 10, background: '#020617', borderRadius: 10, padding: 10, fontSize: 13 }}>🎬 Kredit: <b style={{ color: neon }}>{paket === 'UNLIMITED' ? '♾️ UNLIMITED' : `${kredit} / ${totalKredit}`}</b><br /><span style={{ fontSize: 11, color: '#9ab4d6' }}>Edit gratis • Download = -1 Kredit</span></div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
              <label style={{ display: 'flex', justifyContent: 'space-between' }}><span>✏️ Text</span><input type="checkbox" checked={true} readOnly /></label>
              <label style={{ display: 'flex', justifyContent: 'space-between' }}><span>💬 Auto Subtitle Indonesia</span><input type="checkbox" checked={subtitleOn} onChange={() => setSubtitleOn(!subtitleOn)} /></label>
              <div><span>🔑 Keyframe</span><div style={{ display: 'flex', gap: 6, marginTop: 6 }}>{['Zoom In', 'Zoom Out', 'Geser'].map(k => <span key={k} style={{ background: 'rgba(255,255,255,0.1)', padding: '5px 10px', borderRadius: 999, fontSize: 11 }}>{k}</span>)}</div></div>
              <div><span>⚡ Speed</span><div style={{ display: 'flex', gap: 6, marginTop: 6 }}>{[0.5, 1, 1.5, 2].map(s => <button key={s} onClick={() => setSpeed(s)} style={{ background: speed === s ? neon : 'rgba(255,255,255,0.1)', color: speed === s ? 'black' : 'white', border: 'none', padding: '5px 10px', borderRadius: 999, cursor: 'pointer', fontSize: 12, fontWeight: 700 }}>{s}x</button>)}</div></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🖼️ Overlay</span><span>›</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🎭 Mask</span><span>›</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🎨 Warna / Filter</span><span>›</span></div>
              <button onClick={downloadClip} style={{ background: kredit <= 0 && paket !== 'UNLIMITED' ? '#555' : neon, color: 'black', border: 'none', padding: 12, borderRadius: 999, fontWeight: 900, cursor: 'pointer' }}>{kredit <= 0 && paket !== 'UNLIMITED' ? '❌ Kredit Habis - Beli Lagi' : `⬇ Download MP4 (-1 Kredit) • Sisa ${paket === 'UNLIMITED' ? '♾️' : kredit}`}</button>
              <button onClick={() => setPage('paket')} style={{ background: 'transparent', color: neon, border: `1px solid ${neon}`, padding: 10, borderRadius: 999, cursor: 'pointer', fontWeight: 700 }}>+ Tambah Kredit →</button>
            </div>
          </div>
        </div>

        {/* BAWAH - TIMELINE 3 TRACK ALA CAPCUT */}
        <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 14, marginTop: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
            <b>⏱️ Timeline - Geser Playhead (Garis Neon)</b>
            <div style={{ display: 'flex', gap: 6 }}>{['✂️ Split', '✂️ Trim', '📋 Copy', '🗑 Hapus', '🔊 Musik'].map(t => <button key={t} onClick={() => alert(t + ' berhasil! Timeline berubah.')} style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: `1px solid ${neon}55`, padding: '6px 11px', borderRadius: 999, cursor: 'pointer', fontSize: 12 }}>{t}</button>)}</div>
          </div>
          <div style={{ fontSize: 11, color: '#9ab4d6', marginTop: 6 }}>Geser slider di bawah untuk pindah posisi video. 00:00 ———— 00:{picked?.time}</div>
          <input type="range" min="0" max="100" value={playPos} onChange={e => setPlayPos(Number(e.target.value))} style={{ width: '100%', marginTop: 8, accentColor: neon }} />
          <div style={{ position: 'relative', marginTop: 8 }}>
            <div style={{ position: 'absolute', left: `${playPos}%`, top: 0, bottom: 0, width: 3, background: neon, zIndex: 2, boxShadow: `0 0 10px ${neon}` }} />
            <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}><span style={{ width: 70, fontSize: 11, color: '#9ab4d6' }}>🎬 VIDEO</span><div style={{ flex: 1, background: `linear-gradient(90deg, ${neon}, #00ffa3)`, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 12, fontWeight: 700, color: 'black', overflow: 'hidden', whiteSpace: 'nowrap' }}>{picked?.title} • {picked?.time} • {speed}x</div></div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}><span style={{ width: 70, fontSize: 11, color: '#9ab4d6' }}>💬 TEXT</span><div style={{ flex: 1, background: '#a78bfa', height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: 11, fontWeight: 700, color: 'black', overflow: 'hidden', whiteSpace: 'nowrap' }}>{subtitleText}</div></div>
            <div style={{ display: 'flex', gap: 6 }}><span style={{ width: 70, fontSize: 11, color: '#9ab4d6' }}>🎵 MUSIK</span><div style={{ flex: 1, background: '#1a2a4a', height: 28, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 2, padding: '0 10px', overflow: 'hidden' }}>{[...Array(40)].map((_, i) => <span key={i} style={{ width: 4, height: 8 + (i * 7 % 16), background: neon, borderRadius: 2, display: 'inline-block' }} />)}<span style={{ fontSize: 11, marginLeft: 6 }}>Trending Sound - Viral</span></div></div>
          </div>
          {riwayat.length > 0 && <div style={{ marginTop: 10, fontSize: 12, color: '#9ab4d6' }}><b style={{ color: 'white' }}>📥 Terakhir di-download:</b> {riwayat.slice(0, 3).map((r, i) => <div key={i}>✅ {r.title} - {r.time} (-1 Kredit)</div>)}</div>}
        </div>
      </div>
    );
  }

  // ===== HALAMAN 4 =====
  if (page === 'ambassador') {
    return wrap(
      <div>
        <div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>04 • BRAND AMBASSADOR 🤖</div>
        <h2 style={{ fontSize: 26, margin: '8px 0 4px' }}>Jadi Brand Ambassador & Dapatkan <span style={{ color: neon }}>200 Clip Gratis</span> Per Bulan</h2>
        <p style={{ color: '#9ab4d6', fontSize: 14 }}>Kredit kamu sekarang: <b style={{ color: 'white' }}>{kredit} / {totalKredit}</b> • Daftar langsung dapat 200!</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14, marginTop: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}88`, borderRadius: 16, padding: 16 }}>
            <b style={{ color: neon }}>🎁 Link Referral Kamu</b>
            <div style={{ background: '#020617', border: `1px solid ${neon}55`, borderRadius: 999, padding: '12px', marginTop: 10, fontSize: 14, display: 'flex', justifyContent: 'space-between' }}>ainewtechclip.com/r/AMBASSADOR-2024 <span>📋 Salin</span></div>
            <div style={{ fontSize: 13, color: '#9ab4d6', marginTop: 12 }}>1. Daftar (Gratis) • 2. Bagikan link • 3. Teman beli • 4. Kamu dapat <b style={{ color: neon }}>Komisi 5%</b></div>
            <input value={namaRef} onChange={e => setNamaRef(e.target.value)} placeholder="Nama Lengkap Kamu" style={{ background: '#071022', color: 'white', border: `1px solid ${neon}55`, padding: 11, borderRadius: 999, width: '100%', boxSizing: 'border-box', marginTop: 10 }} />
            <input value={waRef} onChange={e => setWaRef(e.target.value)} placeholder="Nomor WhatsApp (0812...)" style={{ background: '#071022', color: 'white', border: `1px solid ${neon}55`, padding: 11, borderRadius: 999, width: '100%', boxSizing: 'border-box', marginTop: 8 }} />
            <button onClick={() => { setPaket('AMBASSADOR'); setKredit(200); setTotalKredit(200); setRiwayat([]); alert('🎉 Berhasil! Kredit langsung jadi 200 Clip!'); setPage('clips'); }} style={{ background: neon, color: 'black', border: 'none', width: '100%', padding: 12, borderRadius: 999, fontWeight: 900, cursor: 'pointer', marginTop: 10 }}>Daftar Ambassador - Dapat 200 Kredit →</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: `linear-gradient(135deg, ${neon}, #00ffa3)`, color: 'black', borderRadius: 16, padding: 16, textAlign: 'center' }}><div style={{ fontSize: 32, fontWeight: 900 }}>200 Clip</div><div style={{ fontWeight: 700 }}>Gratis / Bulan 🤖</div></div>
            <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 14, fontSize: 13, lineHeight: 1.8 }}>✅ Komisi 5% tanpa batas<br />✅ Dashboard Tracking Real-time<br />✅ Bonus Extra tiap 10 teman join<br />✅ Template promosi siap posting</div>
          </div>
        </div>
      </div>
    );
  }

  // ===== HALAMAN 5 =====
  return wrap(
    <div>
      <div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>05 • DAFTAR PAKET KITA</div>
      <h2 style={{ fontSize: 26, margin: '8px 0 4px' }}>Pilih Paket Sesuai Kebutuhan Kamu</h2>
      <p style={{ color: '#9ab4d6', fontSize: 14 }}>Kredit kamu sekarang: <b style={{ color: 'white' }}>{paket} - {paket === 'UNLIMITED' ? '♾️' : `${kredit} / ${totalKredit} Clip`}</b> • Beli baru = Kredit langsung nambah di semua halaman</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 16 }}>
        <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 18, textAlign: 'center' }}>
          <span style={{ background: neon, color: 'black', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 999 }}>GRATIS</span>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 12 }}>Gratis<br />2 Video</div><div style={{ fontSize: 26, fontWeight: 900, color: neon, marginTop: 6 }}>🎬 2 Kredit</div>
          <div style={{ fontSize: 13, textAlign: 'left', marginTop: 10, lineHeight: 1.9 }}>✓ 5 Clip AI / bulan<br />✓ Auto Subtitle Indonesia<br />✓ Export 720p<br />✓ Watermark</div>
          <button onClick={() => beliPaket('GRATIS', 2)} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 999, cursor: 'pointer', fontWeight: 700, marginTop: 14 }}>Ambil 2 Kredit Gratis →</button>
        </div>
        <div style={{ background: `linear-gradient(180deg, ${neon}, #00ffa3)`, color: 'black', borderRadius: 16, padding: 18, textAlign: 'center', transform: 'scale(1.03)', boxShadow: `0 0 30px ${neon}55` }}>
          <span style={{ background: '#ffaa00', color: 'black', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 999 }}>⭐ PALING LARIS</span>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 12 }}>10 Clip<br />Rp 70.000 <span style={{ fontSize: 12, fontWeight: 400 }}>/bulan</span></div><div style={{ fontSize: 26, fontWeight: 900, marginTop: 6 }}>🎬 10 Kredit</div>
          <div style={{ fontSize: 13, textAlign: 'left', marginTop: 10, lineHeight: 1.9, fontWeight: 600 }}>✓ Export 1080p / 4K<br />✓ Tanpa Watermark<br />✓ Keyframe + Overlay + Mask<br />✓ Auto Subtitle + Voiceover AI</div>
          <button onClick={() => beliPaket('10 CLIP', 10)} style={{ background: 'black', color: 'white', width: '100%', padding: 12, borderRadius: 999, cursor: 'pointer', fontWeight: 800, marginTop: 14 }}>Bayar QRIS - Dapat 10 Kredit →</button>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid #a78bfa', borderRadius: 16, padding: 18, textAlign: 'center' }}>
          <span style={{ background: '#a78bfa', color: 'black', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 999 }}>BISNIS / TIM</span>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 12 }}>Unlimited<br />Rp 149.000 <span style={{ fontSize: 12, fontWeight: 400 }}>/bulan</span></div><div style={{ fontSize: 26, fontWeight: 900, color: '#a78bfa', marginTop: 6 }}>🎬 ♾️ Kredit</div>
          <div style={{ fontSize: 13, textAlign: 'left', marginTop: 10, lineHeight: 1.9 }}>✓ Unlimited Clip<br />✓ 3 Akun Tim<br />✓ Brand Kit<br />✓ Export 4K + Prioritas</div>
          <button onClick={() => beliPaket('UNLIMITED', 999)} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 999, cursor: 'pointer', fontWeight: 700, marginTop: 14 }}>Ambil Unlimited →</button>
        </div>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.07)', border: `1px solid ${neon}55`, borderRadius: 16, padding: 16, marginTop: 16, textAlign: 'center' }}>
        <b style={{ color: neon }}>Metode Pembayaran</b>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 10, flexWrap: 'wrap', fontWeight: 800, fontSize: 14 }}><span>⬛ QRIS</span><span>● gopay</span><span>🟣 OVO</span><span>● DANA</span><span>🏦 Transfer Bank</span></div>
        <div style={{ fontSize: 11, color: '#9ab4d6', marginTop: 6 }}>Bayar sekali, kredit langsung masuk • 1 Download = 1 Kredit berkurang</div>
      </div>
    </div>
  );
}
