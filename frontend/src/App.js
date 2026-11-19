import React, { useState } from 'react';

export default function App() {
  const [link, setLink] = useState('');
  const [clips, setClips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [durasi, setDurasi] = useState('30 detik');
  const [picked, setPicked] = useState(2);

  const neon = '#00e5ff';
  const bg = '#050a1e';

  const makeClips = () => {
    if (!link) return alert('Tempel link YouTube / TikTok / Instagram dulu ya!');
    setLoading(true);
    setTimeout(() => {
      setClips([
        { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18', score: 98 },
        { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32', score: 96 },
        { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10', score: 95 },
        { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27', score: 93 },
        { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45', score: 91 },
      ]);
      setLoading(false);
      document.getElementById('clipSection')?.scrollIntoView({ behavior: 'smooth' });
    }, 1200);
  };

  const cardStyle = { background: 'linear-gradient(180deg,#0a1230,#071022)', border: `1px solid #1a3a5a`, borderRadius: 14, padding: 12 };
  const btnCyan = { background: neon, color: '#00222a', border: 'none', padding: '12px 22px', borderRadius: 10, fontWeight: 900, cursor: 'pointer', boxShadow: `0 0 20px ${neon}55` };

  return (
    <div style={{ background: bg, color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', backgroundImage: 'radial-gradient(circle at 20% 10%, #0a2a5a33 0%, transparent 40%), radial-gradient(circle at 90% 30%, #00e5ff22 0%, transparent 40%)' }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '14px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${neon}66`, borderRadius: 14, padding: '10px 14px', background: '#071022cc' }}>
          <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: -0.5 }}><span style={{ color: neon }}>AI</span> NEWTECH<span style={{ color: '#00ffa3' }}>CLIP</span></div>
          <div style={{ display: 'flex', gap: 12, fontSize: 13, color: '#aaccff', alignItems: 'center', flexWrap: 'wrap' }}>
            <span>Beranda</span><span>Fitur</span><span>Harga</span><span>Referral</span><span>Masuk</span>
            <span style={{ border: `1px solid ${neon}`, padding: '6px 12px', borderRadius: 20, color: neon }}>👤 Dashboard</span>
          </div>
        </div>

        {/* 01 HALAMAN MASUK */}
        <div style={{ padding: '28px 4px 10px' }}>
          <div style={{ color: neon, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>01 • HALAMAN MASUK</div>
          <h1 style={{ fontSize: 32, lineHeight: 1.25, margin: '10px 0 8px' }}>Ubah Link Jadi Klip Viral Hanya dalam Hitungan Detik</h1>
          <p style={{ color: '#9ab4d6', fontSize: 14, margin: 0 }}>Paste link YouTube, TikTok, Instagram, atau podcast. AI kami akan potong jadi 5 clip terbaik otomatis.</p>

          <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 260, display: 'flex', alignItems: 'center', gap: 10, background: '#020617', border: `1px solid ${neon}88`, borderRadius: 12, padding: '12px 14px' }}>
              <span style={{ fontSize: 20 }}>🔗</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12, color: '#aaccff' }}>AI Paste Link</div>
                <input value={link} onChange={e => setLink(e.target.value)} placeholder="https://www.tiktok.com/@contoh/video/123456789..." style={{ background: 'transparent', border: 'none', outline: 'none', color: 'white', width: '100%', fontSize: 13 }} />
              </div>
            </div>
            <button onClick={makeClips} style={{ ...btnCyan, fontSize: 16, minWidth: 160 }}>{loading ? 'AI Motong... ⏳' : '✦ Coba Gratis'}</button>
          </div>
          <div style={{ textAlign: 'center', color: '#9ab4d6', fontSize: 12, marginTop: 10 }}>Tanpa login ✓ &nbsp; Proses 30 detik ✓ &nbsp; Hasil siap edit</div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12, flexWrap: 'wrap' }}>
            {['15 detik', '30 detik', '45 detik', '1 menit', '1 menit 10 detik'].map(d => (
              <button key={d} onClick={() => setDurasi(d)} style={{ background: durasi === d ? neon : '#0a1230', color: durasi === d ? 'black' : 'white', border: `1px solid ${neon}55`, padding: '7px 12px', borderRadius: 20, fontSize: 12, cursor: 'pointer', fontWeight: 700 }}>{d}</button>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${neon}, transparent)`, margin: '18px 0' }} />

        {/* 02 PILIH 5 CLIP AI */}
        <div id="clipSection" style={{ padding: '6px 4px' }}>
          <div style={{ color: neon, fontSize: 12, fontWeight: 800 }}>02 • PILIH 5 CLIP AI</div>
          <h2 style={{ fontSize: 22, margin: '8px 0 4px' }}>AI Pilih 5 Clip Terbaik untuk Kamu</h2>
          <p style={{ color: '#9ab4d6', fontSize: 13, margin: 0 }}>Pilih durasi 15 detik - 1 menit 10 detik. Rekomendasi otomatis berdasarkan hook, retention, dan momen viral.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginTop: 14 }}>
            {(clips.length ? clips : [
              { id: 1, label: 'Hook Kuat', title: 'Tips AI 2024 yang Wajib Kamu Tau', time: '00:18' },
              { id: 2, label: 'Trending', title: 'Cara Edit Video Pakai AI Cepat', time: '00:32' },
              { id: 3, label: 'Viral', title: 'Rahasia Konten FYP di TikTok', time: '01:10' },
              { id: 4, label: 'Paling Ditonton', title: 'Prompt AI untuk Konten Edukasi', time: '00:27' },
              { id: 5, label: 'Rekomendasi', title: 'Storytelling 30 Detik Hook Kuat', time: '00:45' },
            ]).map(c => (
              <div key={c.id} onClick={() => setPicked(c.id)} style={{ ...cardStyle, cursor: 'pointer', border: picked === c.id ? `2px solid ${neon}` : `1px solid #1a3a5a`, boxShadow: picked === c.id ? `0 0 18px ${neon}44` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#0a2a4a', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${neon}` }}>▶️</div>
                  <span style={{ background: '#a3e635', color: 'black', fontSize: 10, fontWeight: 800, padding: '2px 7px', borderRadius: 8 }}>{c.time}</span>
                </div>
                <div style={{ marginTop: 22, display: 'inline-block', background: neon, color: 'black', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 6 }}>{c.label}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 8, lineHeight: 1.3, minHeight: 34 }}>{c.title}</div>
                <div style={{ fontSize: 12, color: picked === c.id ? neon : '#9ab4d6', marginTop: 6 }}>{picked === c.id ? '✓ Pilih' : '✓ Pilih'}</div>
              </div>
            ))}
          </div>
          {clips.length > 0 && <div style={{ background: `${neon}22`, border: `1px solid ${neon}`, padding: 10, borderRadius: 10, marginTop: 12, textAlign: 'center', fontSize: 13 }}>✅ AI berhasil buat 5 clip! Kamu pilih Clip {picked} - Scroll ke bawah untuk Edit</div>}
        </div>

        {/* 03 STUDIO EDIT */}
        <div style={{ padding: '20px 4px 6px' }}>
          <div style={{ color: neon, fontSize: 12, fontWeight: 800 }}>03 • STUDIO EDIT</div>
          <h2 style={{ fontSize: 22, margin: '8px 0 4px' }}>Studio Edit — Edit Cepat Seperti Pro</h2>
          <p style={{ color: '#9ab4d6', fontSize: 13 }}>Customize klip kamu dengan tool lengkap.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 12, marginTop: 12 }}>
            {/* PREVIEW */}
            <div style={{ ...cardStyle, padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', background: '#000', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: 44 }}>🎬</div>
                <div style={{ position: 'absolute', bottom: 28, left: 10, right: 10, background: '#00e5ff', color: 'black', fontSize: 11, fontWeight: 700, padding: '5px 8px', borderRadius: 6 }}>Mau bikin konten viral? Pakai AI aja!</div>
                <div style={{ position: 'absolute', bottom: 8, left: 10, right: 10, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#ccc' }}><span>▶ ⏮ ⏭</span><span>00:12 / 00:32</span><span>⛶</span></div>
                <div style={{ position: 'absolute', top: 8, right: 10, background: '#ff2d55', color: 'white', fontSize: 10, padding: '3px 8px', borderRadius: 10 }}>● Preview</div>
              </div>
              <div style={{ padding: '10px 12px', fontSize: 12, color: '#9ab4d6' }}>Timeline • Split • Trim • Speed • Transisi • Musik</div>
            </div>

            {/* HARGA */}
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ ...cardStyle, flex: 1, textAlign: 'left' }}>
                <span style={{ background: neon, color: 'black', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 6 }}>Gratis</span>
                <div style={{ fontWeight: 900, fontSize: 18, marginTop: 10 }}>Gratis<br />2 Video</div>
                <div style={{ fontSize: 11, color: '#9ab4d6', marginTop: 4 }}>habis</div>
                <div style={{ fontSize: 11, marginTop: 10, lineHeight: 1.7 }}>✓ 5 clip AI / bulan<br />✓ Auto Subtitle<br />✓ Export 720p<br />✓ Watermark AINEWTECHCLIP</div>
                <div style={{ fontSize: 10, color: '#888', marginTop: 10 }}>Paket Gratis - terbatas</div>
              </div>
              <div style={{ ...cardStyle, flex: 1, border: `1px solid ${neon}` }}>
                <span style={{ background: '#ffaa00', color: 'black', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 6 }}>POPULER</span>
                <div style={{ fontWeight: 900, fontSize: 18, marginTop: 10 }}>10 Clip<br />Rp70.000 <span style={{ fontSize: 11, fontWeight: 400 }}>/bulan</span></div>
                <div style={{ fontSize: 11, marginTop: 10, lineHeight: 1.7 }}>✓ Semua akses fitur<br />✓ Export 1080p/4K<br />✓ Tanpa Watermark<br />✓ Auto Subtitle + Keyframe + Overlay</div>
                <button style={{ ...btnCyan, width: '100%', marginTop: 10, padding: 9, fontSize: 13 }}>Pilih Paket</button>
              </div>
            </div>

            {/* PANEL EDIT */}
            <div style={{ ...cardStyle }}>
              <b style={{ color: neon, fontSize: 16 }}>Panel Edit</b>
              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>✏️ Text</span><span style={{ color: neon }}>●○</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>💬 Auto Subtitle Indonesia<br /><small style={{ color: '#9ab4d6' }}>Bahasa Indonesia • Auto translate aktif</small></span><span style={{ color: neon }}>●○</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🔑 Keyframe</span><span>•••••</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🖼️ Overlay</span><span>›</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🎭 Mask</span><span>›</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🎨 Warna</span><span>›</span></div>
                <button style={{ ...btnCyan, marginTop: 6 }}>⬇ Download MP4 1080p</button>
                <div style={{ fontSize: 10, color: '#9ab4d6', textAlign: 'center' }}>Ekspor cepat • Tanpa watermark • 1080p/4K</div>
              </div>
            </div>
          </div>

          {/* PEMBAYARAN */}
          <div style={{ ...cardStyle, marginTop: 12, textAlign: 'center' }}>
            <b style={{ color: neon }}>Metode Pembayaran</b>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 10, flexWrap: 'wrap', fontWeight: 800, fontSize: 14 }}>
              <span>⬛ QRIS</span><span style={{ color: '#00a8ff' }}>● gopay</span><span>🟣 OVO</span><span style={{ color: '#00a8ff' }}>● DANA</span><span>🏦 Transfer Bank</span>
            </div>
            <div style={{ fontSize: 11, color: '#9ab4d6', marginTop: 6 }}>Pembayaran aman • Instant • E-wallet & Transfer Bank</div>
          </div>
        </div>

        {/* 04 BRAND AMBASSADOR */}
        <div style={{ padding: '18px 4px 10px' }}>
          <div style={{ color: neon, fontSize: 12, fontWeight: 800 }}>04 • BRAND AMBASSADOR</div>
          <h2 style={{ fontSize: 22, margin: '8px 0 4px' }}>Jadi Brand Ambassador & Dapatkan 200 Clip Gratis Per Bulan</h2>
          <p style={{ color: '#9ab4d6', fontSize: 13 }}>Semua paket sudah termasuk akses penuh fitur AI dapatkan hadiah!</p>
          <div style={{ ...cardStyle, display: 'flex', gap: 20, flexWrap: 'wrap', border: `1px solid ${neon}88` }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ fontWeight: 800, color: neon }}>🎁 Link Referral Kamu</div>
              <div style={{ background: '#020617', border: `1px solid ${neon}55`, borderRadius: 10, padding: '10px 12px', marginTop: 10, fontSize: 13, display: 'flex', justifyContent: 'space-between' }}>ainewtechclip.com/r/AMBASSADOR-2024 <span>📋</span></div>
              <div style={{ fontSize: 12, color: '#9ab4d6', marginTop: 10 }}>Reward: 5% dari setiap pembelian referral kamu — payout otomatis tiap bulan</div>
              <button style={{ ...btnCyan, marginTop: 14, width: '100%' }}>Daftar Brand Ambassador Sekarang</button>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: neon }}>200 Clip Gratis / Bulan</div>
              <div style={{ fontSize: 13, lineHeight: 1.8, marginTop: 8 }}>Komisi 5% tanpa batas<br />Dashboard Tracking Real-time<br />Bonus Extra tiap 10 teman yang join</div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: 11, color: '#7788aa', padding: '16px 4px 30px', borderTop: '1px solid #1a3a5a', marginTop: 16 }}>
          <span>© 2024 AINEWTECHCLIP • PT AINEWTECH INDONESIA</span>
          <span>Kebijakan Privasi • Syarat & Ketentuan • Bantuan • Kontak</span>
        </div>
        <div style={{ textAlign: 'center', fontSize: 11, color: '#7788aa', paddingBottom: 20 }}>Made for Creator Indonesia 🇮🇩 • Futuristic • Aman • Cepat</div>
      </div>
    </div>
  );
}
