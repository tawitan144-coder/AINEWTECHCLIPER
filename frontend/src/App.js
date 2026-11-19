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

  // ===== HALAMAN 3 - STUDIO EDIT =====
  if (page === 'studio') {
    return wrap(
      <div>
        <button onClick={() => setPage('clips')} style={{ background: 'transparent', color: neon, border: `1px solid ${neon}`, padding: '7px 14px', borderRadius: 20, cursor: 'pointer', marginBottom: 12 }}>← Kembali ke 5 Clip</button>
        <h2 style={{ fontSize: 22, margin: '4px 0' }}>Studio Edit — {picked?.title}</h2>
        <p style={{ color: '#9ab4d6', fontSize: 13 }}>Kamu lagi edit: <b style={{ color: 'white' }}>{picked?.label} • {picked?.time}</b></p>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12, marginTop: 12 }}>
          <div style={{ background: '#0a1230', border: `1px solid ${neon}55`, borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ position: 'relative', background: '#000', height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>🎬
              <div style={{ position: 'absolute', bottom: 28, left: 10, right: 10, background: '#00e5ff', color: 'black', fontSize: 11, fontWeight: 700, padding: '5px 8px', borderRadius: 6 }}>Mau bikin konten viral? Pakai AI aja!</div>
              <div style={{ position: 'absolute', bottom: 8, left: 10, right: 10, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#ccc' }}><span>▶ ⏮ ⏭</span><span>00:12 / {picked?.time}</span><span>⛶</span></div>
            </div>
            <div style={{ padding: '10px 12px', fontSize: 12, color: '#9ab4d6' }}>Timeline • Split • Trim • Speed • Transisi • Musik</div>
          </div>
          <div style={{ background: '#0a1230', border: `1px solid ${neon}55`, borderRadius: 14, padding: 14 }}>
            <b style={{ color: neon, fontSize: 16 }}>Panel Edit</b>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>✏️ Text</span><span style={{ color: neon }}>●○</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>💬 Auto Subtitle Indonesia</span><span style={{ color: neon }}>●○</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🔑 Keyframe</span><span>•••••</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🖼️ Overlay</span><span>›</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🎭 Mask</span><span>›</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>🎨 Warna</span><span>›</span></div>
              <button style={{ background: neon, color: 'black', border: 'none', padding: 11, borderRadius: 10, fontWeight: 900, cursor: 'pointer' }}>⬇ Download MP4 1080p</button>
              <button onClick={() => setPage('paket')} style={{ background: 'transparent', color: neon, border: `1px solid ${neon}`, padding: 10, borderRadius: 10, cursor: 'pointer', fontWeight: 700 }}>Lihat Daftar Paket untuk Buka 4K →</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== HALAMAN 4 - BRAND AMBASSADOR =====
  if (page === 'ambassador') {
    return wrap(
      <div>
        <div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>04 • BRAND AMBASSADOR</div>
        <h2 style={{ fontSize: 26, margin: '8px 0 4px' }}>Jadi Brand Ambassador & Dapatkan <span style={{ color: neon }}>200 Clip Gratis</span> Per Bulan</h2>
        <p style={{ color: '#9ab4d6', fontSize: 14 }}>Bagikan link kamu, dapat komisi tiap orang beli. Tanpa modal, tanpa stok.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14, marginTop: 16 }}>
          <div style={{ background: '#0a1230', border: `1px solid ${neon}88`, borderRadius: 14, padding: 16 }}>
            <b style={{ color: neon }}>🎁 Link Referral Kamu</b>
            <div style={{ background: '#020617', border: `1px solid ${neon}55`, borderRadius: 10, padding: '12px', marginTop: 10, fontSize: 14, display: 'flex', justifyContent: 'space-between' }}>ainewtechclip.com/r/AMBASSADOR-2024 <span>📋 Salin</span></div>
            <div style={{ fontSize: 13, color: '#9ab4d6', marginTop: 12, lineHeight: 1.7 }}>
              <b style={{ color: 'white' }}>Cara Kerja:</b><br />
              1. Daftar jadi Ambassador (Gratis)<br />
              2. Bagikan link ke TikTok / IG / WhatsApp<br />
              3. Teman klik & beli paket<br />
              4. Kamu dapat <b style={{ color: neon }}>Komisi 5%</b> - cair tiap bulan
            </div>
            <div style={{ background: '#020617', borderRadius: 10, padding: 12, marginTop: 12 }}>
              <b style={{ fontSize: 13 }}>Daftar Sekarang - Gratis</b>
              <input value={namaRef} onChange={e => setNamaRef(e.target.value)} placeholder="Nama Lengkap Kamu" style={{ background: '#071022', color: 'white', border: `1px solid ${neon}55`, padding: 10, borderRadius: 10, width: '100%', boxSizing: 'border-box', marginTop: 8 }} />
              <input value={waRef} onChange={e => setWaRef(e.target.value)} placeholder="Nomor WhatsApp (contoh: 0812...)" style={{ background: '#071022', color: 'white', border: `1px solid ${neon}55`, padding: 10, borderRadius: 10, width: '100%', boxSizing: 'border-box', marginTop: 8 }} />
              <button onClick={() => alert('Berhasil daftar Ambassador! Link kamu: ainewtechclip.com/r/' + (namaRef || 'AMBASSADOR') + ' - Cek WhatsApp kamu ya!')} style={{ background: neon, color: 'black', border: 'none', width: '100%', padding: 12, borderRadius: 10, fontWeight: 900, cursor: 'pointer', marginTop: 10 }}>Daftar Brand Ambassador Sekarang →</button>
              <div style={{ fontSize: 11, color: '#7788aa', textAlign: 'center', marginTop: 8 }}>Gratis • Tanpa dipungut biaya • Langsung dapat link</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: `linear-gradient(135deg, ${neon}, #00ffa3)`, color: 'black', borderRadius: 14, padding: 16, textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 900 }}>200 Clip</div>
              <div style={{ fontWeight: 700 }}>Gratis / Bulan</div>
              <div style={{ fontSize: 12, marginTop: 6 }}>Khusus Ambassador aktif</div>
            </div>
            <div style={{ background: '#0a1230', border: `1px solid ${neon}55`, borderRadius: 14, padding: 14, fontSize: 13, lineHeight: 1.8 }}>
              <b>Keuntungan Ambassador:</b><br />
              ✅ Komisi 5% tanpa batas<br />
              ✅ Dashboard Tracking Real-time<br />
              ✅ Bonus Extra tiap 10 teman join<br />
              ✅ Grup WhatsApp Ambassador<br />
              ✅ Template promosi siap posting
            </div>
            <div style={{ background: '#0a1230', border: `1px solid ${neon}55`, borderRadius: 14, padding: 14 }}>
              <b style={{ fontSize: 13 }}>Contoh Penghasilan:</b>
              <div style={{ fontSize: 12, color: '#9ab4d6', marginTop: 6, lineHeight: 1.7 }}>
                10 teman beli Rp 70.000 = Rp 700.000<br />
                Komisi kamu 5% = <b style={{ color: neon }}>Rp 35.000</b><br />
                100 teman beli = <b style={{ color: neon }}>Rp 350.000 / bulan</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===== HALAMAN 5 - DAFTAR PAKET KITA =====
  return wrap(
    <div>
      <div style={{ fontSize: 12, color: neon, fontWeight: 800 }}>05 • DAFTAR PAKET KITA</div>
      <h2 style={{ fontSize: 26, margin: '8px 0 4px' }}>Pilih Paket Sesuai Kebutuhan Kamu</h2>
      <p style={{ color: '#9ab4d6', fontSize: 14 }}>Semua paket sudah termasuk akses penuh fitur AI. Bayar sekali, langsung aktif.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginTop: 16 }}>
        <div style={{ background: '#0a1230', border: `1px solid ${neon}55`, borderRadius: 14, padding: 18, textAlign: 'center' }}>
          <span style={{ background: neon, color: 'black', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 6 }}>GRATIS</span>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 12 }}>Gratis<br />2 Video</div>
          <div style={{ fontSize: 12, color: '#9ab4d6' }}>Coba dulu, tanpa bayar</div>
          <div style={{ fontSize: 13, textAlign: 'left', marginTop: 14, lineHeight: 1.9 }}>
            ✓ 5 Clip AI / bulan<br />✓ Auto Subtitle Indonesia<br />✓ Export 720p<br />✓ Watermark AINEWTECHCLIP<br />✓ Durasi 15 detik - 1 menit
          </div>
          <button onClick={() => setPage('home')} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 10, cursor: 'pointer', fontWeight: 700, marginTop: 14 }}>Mulai Gratis →</button>
        </div>

        <div style={{ background: `linear-gradient(180deg, ${neon}, #00ffa3)`, color: 'black', borderRadius: 14, padding: 18, textAlign: 'center', transform: 'scale(1.03)', boxShadow: `0 0 30px ${neon}55` }}>
          <span style={{ background: '#ffaa00', color: 'black', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 6 }}>⭐ PALING LARIS</span>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 12 }}>10 Clip<br />Rp 70.000 <span style={{ fontSize: 12, fontWeight: 400 }}>/bulan</span></div>
          <div style={{ fontSize: 12 }}>Rp 7.000 / clip - Paling hemat</div>
          <div style={{ fontSize: 13, textAlign: 'left', marginTop: 14, lineHeight: 1.9, fontWeight: 600 }}>
            ✓ Semua fitur Gratis<br />✓ Export 1080p / 4K<br />✓ Tanpa Watermark<br />✓ Keyframe + Overlay + Mask<br />✓ Auto Subtitle + Voiceover AI<br />✓ Prioritas Proses AI Cepat
          </div>
          <button onClick={() => alert('Lanjut ke pembayaran QRIS - Rp 70.000 / bulan. Pilih GoPay / OVO / DANA / Transfer Bank')} style={{ background: 'black', color: 'white', width: '100%', padding: 12, borderRadius: 10, cursor: 'pointer', fontWeight: 800, marginTop: 14 }}>Bayar QRIS Sekarang →</button>
        </div>

        <div style={{ background: '#0a1230', border: `1px solid #a78bfa`, borderRadius: 14, padding: 18, textAlign: 'center' }}>
          <span style={{ background: '#a78bfa', color: 'black', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 6 }}>BISNIS / TIM</span>
          <div style={{ fontWeight: 900, fontSize: 22, marginTop: 12 }}>Unlimited<br />Rp 149.000 <span style={{ fontSize: 12, fontWeight: 400 }}>/bulan</span></div>
          <div style={{ fontSize: 12, color: '#9ab4d6' }}>Untuk tim & agensi</div>
          <div style={{ fontSize: 13, textAlign: 'left', marginTop: 14, lineHeight: 1.9 }}>
            ✓ Semua fitur Pro<br />✓ Unlimited Clip<br />✓ 3 Akun Tim<br />✓ Brand Kit (Logo, Warna, Font)<br />✓ Export 4K + Prioritas<br />✓ Support WhatsApp Prioritas
          </div>
          <button onClick={() => alert('Hubungi kami di WhatsApp untuk paket Bisnis Rp 149.000')} style={{ background: 'transparent', color: 'white', border: '1px solid #333', width: '100%', padding: 11, borderRadius: 10, cursor: 'pointer', fontWeight: 700, marginTop: 14 }}>Hubungi Kami →</button>
        </div>
      </div>

      <div style={{ background: '#0a1230', border: `1px solid ${neon}55`, borderRadius: 14, padding: 16, marginTop: 16, textAlign: 'center' }}>
        <b style={{ color: neon }}>Metode Pembayaran</b>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginTop: 10, flexWrap: 'wrap', fontWeight: 800, fontSize: 14 }}>
          <span>⬛ QRIS</span><span style={{ color: '#00a8ff' }}>● gopay</span><span>🟣 OVO</span><span style={{ color: '#00a8ff' }}>● DANA</span><span>🏦 Transfer Bank</span>
        </div>
        <div style={{ fontSize: 11, color: '#9ab4d6', marginTop: 6 }}>Pembayaran aman • Instant • E-wallet & Transfer Bank • Garansi 7 hari uang kembali</div>
      </div>

      <div style={{ background: `linear-gradient(90deg, ${neon}22, #00ffa322)`, border: `1px solid ${neon}`, borderRadius: 14, padding: 14, marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
        <div><b>Belum yakin?</b> <span style={{ color: '#9ab4d6', fontSize: 13 }}>Coba Gratis dulu 2 Video, atau jadi Ambassador dapat 200 Clip Gratis.</span></div>
        <button onClick={() => setPage('ambassador')} style={{ background: neon, color: 'black', border: 'none', padding: '10px 18px', borderRadius: 20, fontWeight: 800, cursor: 'pointer' }}>Jadi Ambassador →</button>
      </div>
    </div>
  );
}
