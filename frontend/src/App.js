import React, { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState('beranda');
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  
  const [selectedTool, setSelectedTool] = useState('Pemotongan AI');
  const [selectedPlan, setSelectedPlan] = useState('Standart');
  const [loading, setLoading] = useState(false);
  const [clips, setClips] = useState([]);
  
  // State untuk Studio Editor Profesional
  const [editingClip, setEditingClip] = useState(null);
  const [hookText, setHookText] = useState('RAHASIA SUKSES YANG JARANG DIKETAHUI!');
  const [hookStyle, setHookStyle] = useState('Banner Merah Menyala');
  const [subtitleStyle, setSubtitleStyle] = useState('Alex Hormozi (Kuning Tebal)');
  const [targetLang, setTargetLang] = useState('Indonesia');

  // State Admin
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const isAdminLoggedIn = adminEmail.trim().toLowerCase() === 'tawitan144@gmail.com';
  
  const [receiptFile, setReceiptFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const planDetails = {
    Standart: { price: 'Rp 30.000', clips: '10 Klip Viral' },
    Pro: { price: 'Rp 100.000', clips: '50 Klip Viral + Auto Post' },
    Golden: { price: 'Rp 250.000', clips: '100 Klip + Prioritas Server' }
  };

  // Simulasi Terjemahan Subtitle Otomatis
  const translatedSubtitles = {
    Indonesia: '"Ini adalah titik balik terpenting yang mengubah segalanya dalam bisnis..."',
    English: '"This is the most crucial turning point that changed everything in business..."',
    Arab: '"هذه هي نقطة التحول الأكثر أهمية التي غيرت كل شيء في الأعمال..."',
    Jepang: '"これはビジネスのすべてを変えた最も重要な転換点です..."',
    Korea: '"이것은 비즈니스의 모든 것을 바꾼 가장 중요한 전환점입니다..."'
  };

  const extractYouTubeId = (inputUrl) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = inputUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleProcess = (e) => {
    e.preventDefault();
    if (!url) {
      alert('Masukkan tautan video YouTube terlebih dahulu!');
      return;
    }
    const extractedId = extractYouTubeId(url);
    if (!extractedId) {
      alert('Link YouTube tidak valid!');
      return;
    }

    setLoading(true);
    setClips([]);
    setEditingClip(null);

    setTimeout(() => {
      setLoading(false);
      setVideoId(extractedId);
      // Membuat 4 potongan klip spesifik dengan waktu mulai & selesai berbeda
      setClips([
        { id: 1, title: 'Klip #1: Hook Pembuka Kuat', start: 15, end: 45, duration: '30 Detik', score: '98% Viral', defaultHook: 'JANGAN LEWATKAN RAHASIA INI!' },
        { id: 2, title: 'Klip #2: Fakta Mengejutkan', start: 65, end: 110, duration: '45 Detik', score: '95% Viral', defaultHook: 'TERNYATA INI PENYEBABNYA...' },
        { id: 3, title: 'Klip #3: Poin Inti Pembahasan', start: 130, end: 175, duration: '45 Detik', score: '92% Viral', defaultHook: 'CARA TERCEPAT UNTUK PEMULA' },
        { id: 4, title: 'Klip #4: Kesimpulan Emosional', start: 200, end: 230, duration: '30 Detik', score: '90% Viral', defaultHook: 'PESAN PENTING UNTUK MASA DEPAN' }
      ]);
    }, 1500);
  };

  const openEditor = (clip) => {
    setEditingClip(clip);
    setHookText(clip.defaultHook);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fungsi Unduh yang langsung merespons di Google Chrome
  const handleDownloadClip = (clipTitle, startSec, endSec) => {
    if (isAdminLoggedIn) {
      alert(`✅ ADMIN (THANTHAWI): Mengunduh "${clipTitle}" secara gratis!`);
      window.open(`https://www.youtube.com/watch?v=${videoId}&t=${startSec}s`, '_blank');
    } else {
      alert('Selesaikan pembayaran paket terlebih dahulu (Transfer BCA: 753-609-2721 a.n. THANTHAWI) untuk membuka akses unduh tanpa watermark!');
    }
  };

  const handleUploadReceipt = (e) => {
    e.preventDefault();
    if (!receiptFile) {
      alert('Pilih file struk terlebih dahulu!');
      return;
    }
    setUploadStatus('Struk berhasil diunggah! Menunggu verifikasi admin (tawitan144@gmail.com).');
  };

  return (
    <div className="min-h-screen bg-[#0b0f0e] text-zinc-100 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar Kiri */}
      <aside className="w-full md:w-60 bg-[#070a09] border-r border-zinc-900 p-4 flex flex-row md:flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center space-x-2.5 mb-8 px-2 py-1">
            <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-black text-base">AI</div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              WayinClipper
            </span>
          </div>

          <nav className="space-y-1.5 flex md:block overflow-x-auto space-x-2 md:space-x-0">
            {[
              { id: 'beranda', label: 'Beranda & Klip', icon: '✂️' },
              { id: 'harga', label: 'Harga & Paket', icon: '💎' },
              { id: 'admin', label: 'Panel Admin', icon: '🔑' },
            ].map((menu) => (
              <button
                key={menu.id}
                onClick={() => {
                  setActiveMenu(menu.id);
                  setEditingClip(null);
                  if (menu.id === 'admin') setIsAdminOpen(true);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeMenu === menu.id ? 'bg-zinc-800 text-emerald-400' : 'text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                }`}
              >
                <span className="text-base">{menu.icon}</span>
                <span className="hidden md:inline">{menu.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:block pt-4 border-t border-zinc-900 text-[11px] text-zinc-500 px-2">
          <p className="text-zinc-400 font-medium">Status Akun:</p>
          <p className={`font-bold truncate mt-0.5 ${isAdminLoggedIn ? 'text-emerald-400' : 'text-zinc-300'}`}>
            {isAdminLoggedIn ? '👑 ADMIN (THANTHAWI)' : 'Pengguna Umum'}
          </p>
        </div>
      </aside>

      {/* Konten Utama */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        
        {/* Header Atas */}
        <div className="flex justify-between items-center mb-6 bg-[#111614] border border-zinc-800/80 px-6 py-4 rounded-2xl">
          <div>
            <h1 className="text-base md:text-lg font-bold text-zinc-200">
              {editingClip ? `Studio Editor: ${editingClip.title}` : 'AI Video Clipper & Studio'}
            </h1>
            <p className="text-xs text-zinc-400">
              {editingClip ? 'Sesuaikan gaya hook, subtitle otomatis, dan terjemahan bahasa.' : 'Potong video panjang menjadi klip pendek siap viral.'}
            </p>
          </div>
          <button 
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition ${
              isAdminLoggedIn ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-zinc-800 border-zinc-700 text-white'
            }`}
          >
            {isAdminLoggedIn ? '👑 Admin Aktif' : '🔑 Login Admin'}
          </button>
        </div>

        {/* Panel Login Admin */}
        {isAdminOpen && (
          <div className="bg-[#111614] border border-emerald-500/50 p-5 rounded-2xl mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-emerald-400">Panel Akses Admin</h3>
              <button onClick={() => setIsAdminOpen(false)} className="text-xs text-zinc-500 hover:text-white">✕ Tutup</button>
            </div>
            <input 
              type="email" 
              placeholder="Masukkan email admin (tawitan144@gmail.com)..."
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white mb-2"
            />
            {isAdminLoggedIn && (
              <p className="text-xs text-emerald-400 font-medium">✅ Mode Admin Aktif! Bebas unduh semua hasil editan klip.</p>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAMPILAN 1: STUDIO EDITOR PROFESIONAL (Jika klip dipilih)  */}
        {/* ========================================================= */}
        {editingClip ? (
          <div className="bg-[#111614] border border-emerald-500/40 p-6 rounded-3xl shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <button 
                onClick={() => setEditingClip(null)}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold rounded-xl transition flex items-center gap-2"
              >
                ← Kembali ke Daftar Klip
              </button>
              <button 
                onClick={() => handleDownloadClip(editingClip.title, editingClip.start, editingClip.end)}
                className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black rounded-xl transition shadow-lg"
              >
                {isAdminLoggedIn ? '⬇️ Export & Unduh Video (Gratis Admin)' : '🔒 Export & Unduh Video'}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Pratinjau Video Vertikal (9:16) */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3">Pratinjau Hasil Edit (9:16)</span>
                
                <div className="relative w-full max-w-[300px] aspect-[9/16] bg-black rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl flex flex-col justify-between">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover scale-150 pointer-events-auto"
                    src={`https://www.youtube.com/embed/${videoId}?start=${editingClip.start}&end=${editingClip.end}&autoplay=1&mute=0&loop=1`}
                    title="Clip Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>

                  <div className="relative z-10 p-4 pt-6 text-center pointer-events-none">
                    <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wide shadow-lg ${
                      hookStyle === 'Banner Merah Menyala' ? 'bg-red-600 text-white' :
                      hookStyle === 'Kuning Viral (TikTok)' ? 'bg-yellow-400 text-black' :
                      hookStyle === 'Neon Cyberpunk' ? 'bg-purple-600 text-emerald-300 border border-emerald-400' :
                      'bg-black/80 text-white border border-white/30'
                    }`}>
                      {hookText}
                    </span>
                  </div>

                  <div className="relative z-10 p-4 pb-10 text-center pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-extrabold leading-snug shadow-md ${
                      subtitleStyle === 'Alex Hormozi (Kuning Tebal)' ? 'text-yellow-300 bg-black/75 uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]' :
                      subtitleStyle === 'Putih Clean Minimalis' ? 'text-white bg-black/60 font-semibold' :
                      subtitleStyle === 'Hijau Neon Glow' ? 'text-emerald-400 bg-zinc-950/80 border border-emerald-500/40' :
                      'text-white bg-blue-600/90'
                    }`}>
                      {translatedSubtitles[targetLang]}
                    </span>
                    <p className="text-[9px] text-zinc-400 mt-1.5">Bahasa Subtitle: {targetLang}</p>
                  </div>
                </div>
              </div>

              {/* Panel Kontrol Alat Edit */}
              <div className="lg:col-span-7 space-y-5 bg-[#080c0a] p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-sm font-bold text-emerald-400 border-b border-zinc-800 pb-3">🎛️ Pengaturan AI Editor</h3>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-zinc-300">1. Teks Judul Hook (Atas Video)</label>
                  <input 
                    type="text" 
                    value={hookText}
                    onChange={(e) => setHookText(e.target.value)}
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />

                  <label className="block text-xs font-bold text-zinc-300 pt-1">Pilih Gaya Desain Hook</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Banner Merah Menyala', 'Kuning Viral (TikTok)', 'Neon Cyberpunk', 'Elegan Gelap'].map((style) => (
                      <button
                        key={style}
                        onClick={() => setHookStyle(style)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition ${
                          hookStyle === style ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  <label className="block text-xs font-bold text-zinc-300">2. Gaya Tampilan Subtitle Otomatis</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Alex Hormozi (Kuning Tebal)', 'Putih Clean Minimalis', 'Hijau Neon Glow', 'Kotak Biru Modern'].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setSubtitleStyle(sub)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition ${
                          subtitleStyle === sub ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                  <label className="block text-xs font-bold text-zinc-300">3. Terjemahkan Bahasa Subtitle Otomatis (AI Translate)</label>
                  <select 
                    value={targetLang}
                    onChange={(e) => setTargetLang(e.target.value)}
                    className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="Indonesia">🇮🇩 Bahasa Indonesia (Otomatis)</option>
                    <option value="English">🇺🇸 Bahasa Inggris (English)</option>
                    <option value="Arab">🇸🇦 Bahasa Arab (العربية)</option>
                    <option value="Jepang">🇯🇵 Bahasa Jepang (日本語)</option>
                    <option value="Korea">🇰🇷 Bahasa Korea (한국어)</option>
                  </select>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* TAMPILAN 2: HALAMAN UTAMA & KOLOM PILIHAN HASIL KLIP      */
          /* ========================================================= */
          <div className="space-y-8">
            
            <div className="bg-gradient-to-br from-[#121815] via-[#111614] to-[#0d1210] border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-2xl">
              <span className="bg-emerald-500/10 text-emerald-400 text-[11px] px-3 py-1 rounded-full font-bold border border-emerald-500/20 inline-block mb-3">
                ⚡ {selectedTool}
              </span>
              <h2 className="text-xl md:text-3xl font-black tracking-tight mb-2 text-white">Tempel link YouTube untuk membuat klip otomatis.</h2>
              <p className="text-xs md:text-sm text-zinc-400 mb-6">AI akan memotong momen terbaik menjadi beberapa klip pendek yang siap Anda edit.</p>

              <form onSubmit={handleProcess} className="bg-[#080c0a] border border-zinc-700/80 p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-xl">
                <input
                  type="text"
                  placeholder="Tempel tautan video YouTube (contoh: https://youtu.be/...)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent focus:outline-none text-xs md:text-sm text-white placeholder-zinc-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 font-extrabold text-black rounded-xl transition text-xs whitespace-nowrap"
                >
                  {loading ? 'Memotong Video...' : 'Buat Klip AI →'}
                </button>
              </form>
            </div>

            {/* KOLOM KECIL PILIHAN KLIP VIDEO YANG SUDAH TERPOTONG */}
            {videoId && clips.length > 0 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-emerald-400">✂️ Pilih Potongan Klip untuk Diedit ({clips.length} Klip Ditemukan)</h3>
                  <span className="text-xs text-zinc-400">Klik "Edit Klip" untuk masuk ke Studio Editor</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {clips.map((clip) => (
                    <div key={clip.id} className="bg-[#111614] border border-zinc-800 hover:border-emerald-500 rounded-2xl overflow-hidden flex flex-col justify-between transition shadow-lg">
                      
                      <div className="relative w-full aspect-video bg-black">
                        <iframe
                          
