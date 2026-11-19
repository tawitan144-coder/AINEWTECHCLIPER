import React, { useState } from 'react';

export default function App() {
  const [view, setView] = useState('landing'); // landing | dashboard
  const [link, setLink] = useState('');
  const [clips, setClips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [durasi, setDurasi] = useState('30 detik');
  const [selectedClip, setSelectedClip] = useState(null);

  const templates = [
    { nama: 'Affiliate Shopee', tag: 'JUALAN', warna: '#00e5a0', desc: 'Review produk + CTA beli' },
    { nama: 'TikTok Shop Viral', tag: 'JUALAN', warna: '#ff2d55', desc: 'Hook 3 detik + spill harga' },
    { nama: 'Podcast Clip', tag: 'PODCAST', warna: '#00c2ff', desc: 'Potong momen lucu / daging' },
    { nama: 'Berita / Info', tag: 'INFO', warna: '#ffaa00', desc: 'Subtitle besar + breaking' },
    { nama: 'Live Replay', tag: 'LIVE', warna: '#a78bfa', desc: 'Replay live jadi 5 clip' },
    { nama: 'Konten Toko', tag: 'BISNIS', warna: '#00e5a0', desc: 'Promosi toko + alamat' },
  ];

  const projects = [
    { judul: 'Review Skincare Viral - Part 1', tgl: 'Hari ini', status: 'Siap Export', dur: '0:32' },
    { judul: 'Podcast Deddy - Momen Lucu', tgl: 'Kemarin', status: 'Draft', dur: '0:58' },
    { judul: 'Live Jualan Baju - Replay', tgl: '2 hari lalu', status: 'Siap Export', dur: '1:05' },
  ];

  const handleClip = () => {
    if (!link) return alert('Tempel link YouTube dulu ya!');
    setLoading(true);
    setTimeout(() => {
      setClips([
        { id: 1, judul: 'Hook Paling Kuat - Opening', dur: durasi, score: 98, views: 'Potensi 1,2 Jt views' },
        { id: 2, judul: 'Momen Lucu / Punchline', dur: durasi, score: 95, views: 'Potensi 890rb views' },
        { id: 3, judul: 'Penjelasan Produk / Daging', dur: durasi, score: 92, views: 'Potensi 750rb views' },
        { id: 4, judul: 'Testimoni / Bukti', dur: durasi, score: 89, views: 'Potensi 620rb views' },
        { id: 5, judul: 'Closing + CTA Beli', dur: durasi, score: 87, views: 'Potensi 540rb views' },
      ]);
      setLoading(false);
      setView('dashboard');
    }, 1500);
  };

  // ===== LANDING PAGE - ALA WAYIN AI =====
  if (view === 'landing') {
    return (
      <div style={{ background: '#050807', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        {/* NAVBAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #1a2a22' }}>
          <div style={{ fontWeight: 900, fontSize: 18 }}><span style={{ color: '#00e5a0' }}>●</span> AINEWTECH <span style={{ color: '#00e5a0' }}>CLIPER</span></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setView('dashboard')} style={{ background: 'transparent', color: 'white', border: '1px solid #333', padding: '8px 14px', borderRadius: 20, cursor: 'pointer' }}>Masuk</button>
            <button onClick={() => setView('dashboard')} style={{ background: '#00e5a0', color: 'black', border: 'none', padding: '8px 16px', borderRadius: 20, fontWeight: 800, cursor: 'pointer' }}>Coba Gratis →</button>
          </div>
        </div>

        {/* HERO */}
        <div style={{ padding: '40px 20px', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#0a2a1f', color: '#00e5a0', padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700 }}>⚡ AI VIDEO CLIPPER TERBAIK DI INDONESIA</div>
          <h1 style={{ fontSize: 36, lineHeight: 1.2, margin: '18px 0 10px' }}>Paste Link → Jadi Clip Viral<br />Dalam <span style={{ color: '#00e5a0' }}>30 Detik</span></h1>
          <p style={{ color: '#aaa', fontSize: 15 }}>Auto Subtitle Indonesia • Keyframe • Template Jualan • Export 9:16 / 16:9</p>

          {/* PASTE BOX */}
          <div style={{ background: '#0f1513', border: '1px solid #1e2e28', borderRadius: 16, padding: 12, marginTop: 22, display: 'flex', gap: 8, flexDirection: 'column' }}>
            <input value={link} onChange={e => setLink(e.target.value)} placeholder="Tempel link YouTube di sini... (contoh: https://youtu.be/...)" style={{ background: '#000', color: 'white', border: '1px solid #222', padding: '14px', borderRadius: 10, width: '100%', boxSizing: 'border-box' }} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['15 detik', '30 detik', '45 detik', '1 menit', '1 menit 10 detik'].map(d => (
                <button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? '#00e5a0' : '#1a1a1a', color: durasi === d ? 'black' : 'white', border: 'none', padding: '8px 12px', borderRadius: 20, fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>{d}</button>
              ))}
            </div>
            <button onClick={handleClip} style={{ background: '#00e5a0', color: 'black', border: 'none', padding: '14px', borderRadius: 10, fontWeight: 900, fontSize: 16, cursor: 'pointer' }}>{loading ? 'AI Lagi Motong... ⏳' : 'Coba Gratis - Buat 5 Clip AI →'}</button>
            <span style={{ fontSize: 12, color: '#888' }}>Gratis tanpa kartu kredit • Langsung jadi 5 clip</span>
          </div>
        </div>

        {/* FITUR */}
        <div style={{ padding: '10px 20px 20px', maxWidth: 900, margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center' }}>Kenapa Kreator Indonesia Pilih Ini?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 14 }}>
            {[
              ['✂️ AI Clip', 'AI cari momen viral otomatis'],
              ['💬 Subtitle Indo', 'Gue, lu, guys, spill kebaca benar'],
              ['🎬 Keyframe', 'Zoom, Shake, Slide halus'],
              ['🛍️ Template Jualan', 'Affiliate, TikTok Shop, Toko'],
              ['🎙️ Voiceover AI Indo', 'Suara Jakarta / Medan / Surabaya'],
              ['💳 Bayar QRIS', 'GoPay, OVO, DANA, Transfer'],
            ].map(([t, d]) => (
              <div key={t} style={{ background: '#0f1513', padding: 14, borderRadius: 12, border: '1px solid #1e2e28' }}>
                <b>{t}</b><div style={{ color: '#aaa', fontSize: 13, marginTop: 4 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TEMPLATE */}
        <div style={{ padding: '10px 20px 30px', maxWidth: 900, margin: '0 auto' }}>
          <h3>Template Trending Indonesia 🔥</h3>
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingTop: 12, paddingBottom: 10 }}>
            {templates.map(t => (
              <div key={t.nama} style={{ minWidth: 170, background: '#0f1513', padding: 14, borderRadius: 12, border: '1px solid #1e2e28' }}>
                <span style={{ background: t.warna, color: 'black', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 10 }}>{t.tag}</span>
                <div style={{ fontWeight: 800, marginTop: 10 }}>{t.nama}</div>
                <div style={{ color: '#aaa', fontSize: 12 }}>{t.desc}</div>
                <button onClick={() => setView('dashboard')} style={{ marginTop: 10, background: 'white', color: 'black', border: 'none', padding: '7px 12px', borderRadius: 20, fontWeight: 700, cursor: 'pointer', width: '100%' }}>Pakai Template</button>
              </div>
            ))}
          </div>
        </div>

        {/* HARGA */}
        <div style={{ padding: '10px 20px 40px', maxWidth: 900, margin: '0 auto' }}>
          <h3 style={{ textAlign: 'center' }}>Harga Rupiah - Bayar QRIS</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 14 }}>
            <div style={{ background: '#0f1513', padding: 16, borderRadius: 14, textAlign: 'center' }}><b>GRATIS</b><div style={{ fontSize: 22, fontWeight: 900, margin: '8px 0' }}>Rp 0</div><div style={{ fontSize: 12, color: '#aaa' }}>5 Clip / hari<br />Watermark<br />720p</div><button onClick={() => setView('dashboard')} style={{ marginTop: 12, width: '100%', padding: 10, borderRadius: 10, border: '1px solid #333', background: 'transparent', color: 'white', cursor: 'pointer' }}>Mulai Gratis</button></div>
            <div style={{ background: '#00e5a0', color: 'black', padding: 16, borderRadius: 14, textAlign: 'center' }}><b>PRO ⭐ PALING LARIS</b><div style={{ fontSize: 22, fontWeight: 900, margin: '8px 0' }}>Rp 49rb / bln</div><div style={{ fontSize: 12 }}>Unlimited Clip<br />Tanpa Watermark<br />1080p + Keyframe</div><button style={{ marginTop: 12, width: '100%', padding: 10, borderRadius: 10, border: 'none', background: 'black', color: 'white', cursor: 'pointer', fontWeight: 800 }}>Bayar QRIS</button></div>
            <div style={{ background: '#0f1513', padding: 16, borderRadius: 14, textAlign: 'center' }}><b>BISNIS</b><div style={{ fontSize: 22, fontWeight: 900, margin: '8px 0' }}>Rp 149rb / bln</div><div style={{ fontSize: 12, color: '#aaa' }}>3 Akun Tim<br />Brand Kit<br />4K + Prioritas</div><button onClick={() => setView('dashboard')} style={{ marginTop: 12, width: '100%', padding: 10, borderRadius: 10, border: '1px solid #333', background: 'transparent', color: 'white', cursor: 'pointer' }}>Hubungi Kami</button></div>
          </div>
          <p style={{ textAlign: 'center', color: '#888', fontSize: 12, marginTop: 20 }}>© 2026 AINEWTECH CLIPER - Buat Kreator Indonesia • Create • Clip • Go Viral</p>
        </div>
      </div>
    );
  }

  // ===== DASHBOARD - ALA CAPCUT WEB =====
  return (
    <div style={{ background: '#050807', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex' }}>
      {/* SIDEBAR */}
      <div style={{ width: 210, background: '#080d0b', borderRight: '1px solid #1a2a22', padding: 16, minHeight: '100vh' }}>
        <div style={{ fontWeight: 900 }}>AINEWTECH <span style={{ color: '#00e5a0' }}>CLIPER</span><div style={{ fontSize: 11, color: '#888', fontWeight: 400 }}>Create • Clip • Go Viral</div></div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {['🏠 Dashboard', '⚡ AI Clipper', '📁 Project Saya', '💬 AI Subtitle', '✨ Animation Studio HOT', '🎨 Templates', '🖼️ Media Library', '📤 Export', '📊 Analytics'].map(m => (
            <div key={m} style={{ padding: '10px 12px', borderRadius: 10, background: m.includes('Dashboard') ? '#0f2a20' : 'transparent', color: m.includes('Dashboard') ? '#00e5a0' : '#ddd', cursor: 'pointer', fontSize: 14 }}>{m}</div>
          ))}
        </div>
        <button onClick={() => setView('landing')} style={{ marginTop: 20, width: '100%', background: '#1a1a1a', color: 'white', border: '1px solid #333', padding: 10, borderRadius: 10, cursor: 'pointer' }}>← Kembali ke Beranda</button>
        <div style={{ marginTop: 16, background: '#0f1513', padding: 12, borderRadius: 12, border: '1px solid #1e2e28' }}>
          <b style={{ fontSize: 13 }}>Tan Tawi</b><div style={{ fontSize: 11, color: '#00e5a0' }}>● Premium User</div><div style={{ fontSize: 11, color: '#888', marginTop: 6 }}>Sisa Clip Hari Ini: Unlimited</div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: 20 }}>
        <h2 style={{ margin: 0 }}>Tempel Link YouTube, Ubah Jadi Puluhan Klip Viral Sekejap!</h2>
        <p style={{ color: '#aaa', fontSize: 14 }}>Didukung AI, auto-subtitle, dan template animasi profesional.</p>

        <div style={{ background: '#0f1513', border: '1px solid #1e2e28', borderRadius: 14, padding: 14, marginTop: 14 }}>
          <input value={link} onChange={e => setLink(e.target.value)} placeholder="Tempel link video YouTube (contoh: https://youtu.be/...)" style={{ background: '#000', color: 'white', border: '1px solid #222', padding: '12px', borderRadius: 10, width: '100%', boxSizing: 'border-box' }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
            {['15 detik', '30 detik', '45 detik', '1 menit', '1 menit 10 detik'].map(d => (
              <button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? '#00e5a0' : '#1a1a1a', color: durasi === d ? 'black' : 'white', border: 'none', padding: '7px 12px', borderRadius: 20, fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>{d}</button>
            ))}
          </div>
          <button onClick={handleClip} style={{ marginTop: 12, background: '#00e5a0', color: 'black', border: 'none', padding: '12px 20px', borderRadius: 10, fontWeight: 900, cursor: 'pointer', width: '100%' }}>{loading ? 'AI Lagi Motong... ⏳' : 'Mulai Potong Otomatis →'}</button>
        </div>

        {/* HASIL CLIP */}
        {clips.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <h3>✅ AI Berhasil Buat 5 Clip Terbaik Untuk Kamu ({durasi})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
              {clips.map(c => (
                <div key={c.id} onClick={() => setSelectedClip(c)} style={{ background: selectedClip?.id === c.id ? '#0f2a20' : '#0f1513', border: selectedClip?.id === c.id ? '1px solid #00e5a0' : '1px solid #1e2e28', padding: 14, borderRadius: 12, cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div><b>Clip {c.id} - {c.judul}</b><div style={{ color: '#aaa', fontSize: 12 }}>{c.dur} • {c.views} • Score AI: {c.score}/100</div></div>
                  <div style={{ background: '#00e5a0', color: 'black', padding: '6px 12px', borderRadius: 20, fontWeight: 800, fontSize: 12 }}>Edit →</div>
                </div>
              ))}
            </div>
            {selectedClip && <div style={{ background: '#00e5a0', color: 'black', padding: 12, borderRadius: 10, marginTop: 12, fontWeight: 800, textAlign: 'center' }}>Kamu pilih: {selectedClip.judul} - Klik Edit untuk masuk Studio (Step 2 nanti)</div>}
          </div>
        )}

        {/* PROJECT SAYA */}
        <h3 style={{ marginTop: 28 }}>📁 Project Saya</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 10 }}>
          {projects.map(p => (
            <div key={p.judul} style={{ background: '#0f1513', padding: 14, borderRadius: 12, border: '1px solid #1e2e28' }}>
              <div style={{ background: '#1a1a1a', height: 80, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>🎬</div>
              <b style={{ fontSize: 13, display: 'block', marginTop: 10 }}>{p.judul}</b>
              <div style={{ color: '#aaa', fontSize: 11 }}>{p.tgl} • {p.dur} • {p.status}</div>
              <button style={{ marginTop: 10, width: '100%', background: 'white', color: 'black', border: 'none', padding: '8px', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>Lanjutkan Edit</button>
            </div>
          ))}
        </div>

        {/* TEMPLATE */}
        <h3 style={{ marginTop: 28 }}>🎨 Template + Brand Kit</h3>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 10 }}>
          {templates.map(t => (
            <div key={t.nama} style={{ minWidth: 160, background: '#0f1513', padding: 12, borderRadius: 12, border: '1px solid #1e2e28' }}>
              <b style={{ fontSize: 13 }}>{t.nama}</b><div style={{ color: '#aaa', fontSize: 11 }}>{t.desc}</div>
            </div>
          ))}
          <div style={{ minWidth: 160, background: '#0f2a20', padding: 12, borderRadius: 12, border: '1px dashed #00e5a0', textAlign: 'center' }}><b>🏷️ Brand Kit Kamu</b><div style={{ fontSize: 11, color: '#aaa' }}>Logo, Warna, Font Tersimpan</div><div style={{ marginTop: 8, fontSize: 12 }}>+ Tambah Brand</div></div>
        </div>
      </div>
    </div>
  );
}
