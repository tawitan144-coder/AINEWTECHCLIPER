import React, { useState } from 'react';

function App() {
  // State Navigasi & Halaman Utama
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [loading, setLoading] = useState(false);
  const [clips, setClips] = useState([]);
  const [editingClip, setEditingClip] = useState(null);

  // State Editor & Tampilan Preview
  const [hookText, setHookText] = useState('KALIAN WAJIB PUNYA AI CLIPPER INI!');
  const [selectedTemplate, setSelectedTemplate] = useState('Viral Trend');
  const [selectedAnimation, setSelectedAnimation] = useState('Zoom In');
  const [selectedSubtitleStyle, setSelectedSubtitleStyle] = useState('Alex Hormozi Kuning Tebal');
  const [aspectRatio, setAspectRatio] = useState('9:16');
  const [resolution, setResolution] = useState('1080P');
  const [quality, setQuality] = useState('High');
  
  // State Slider Kontrol Animasi
  const [speed, setSpeed] = useState(1.0);
  const [inDuration, setInDuration] = useState(0.5);
  const [outDuration, setOutDuration] = useState(0.5);
  const [animDirection, setAnimDirection] = useState('Atas');
  const [wordDelay, setWordDelay] = useState(0.0);
  const [isLoop, setIsLoop] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // State Admin & Pembayaran
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const isAdminLoggedIn = adminEmail.trim().toLowerCase() === 'tawitan144@gmail.com';
  const [selectedPlan, setSelectedPlan] = useState('Pro');
  const [receiptFile, setReceiptFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Daftar Menu Sidebar
  const sidebarMenus = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'clipper', label: 'AI Clipper', icon: '⚡' },
    { id: 'projects', label: 'My Projects', icon: '📁' },
    { id: 'subtitle', label: 'AI Subtitle', icon: '💬' },
    { id: 'animation', label: 'Animation Studio', icon: '✨', hot: true },
    { id: 'templates', label: 'Templates', icon: '🎨' },
    { id: 'media', label: 'Media Library', icon: '📂' },
    { id: 'export', label: 'Export', icon: '🚀' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'package', label: 'My Package', icon: '💎' },
    { id: 'ambassador', label: 'Ambassador', icon: '👑' },
    { id: 'billing', label: 'Billing', icon: '💳' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  // Data Pilihan Templat Preset
  const templatePresets = [
    { name: 'Viral Trend', color: 'from-pink-500 to-rose-600' },
    { name: 'Gaming Style', color: 'from-emerald-400 to-cyan-500' },
    { name: 'Neon Glow', color: 'from-purple-500 to-indigo-600' },
    { name: '3D Bold', color: 'from-amber-400 to-orange-500' },
    { name: 'Comic Style', color: 'from-yellow-400 to-amber-600' },
    { name: 'Cinematic', color: 'from-blue-500 to-teal-500' },
    { name: 'Text Wave', color: 'from-green-400 to-emerald-600' },
    { name: 'Gradient Color', color: 'from-fuchsia-500 to-purple-600' },
    { name: 'Shadow Effect', color: 'from-sky-400 to-blue-600' },
    { name: 'Glitch Effect', color: 'from-red-500 to-pink-600' },
    { name: 'Karaoke Style', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Typewriter', color: 'from-zinc-300 to-zinc-500' },
  ];

  // Daftar Animasi Teks
  const textAnimations = [
    'Zoom In', 'Bounce', 'Pop Up', 'Shake', 'Slide Up',
    'Slide Down', 'Fade', 'Glow', 'Neon', '3D Flip',
    'Rotate', 'Wave', 'Elastic', 'Flash', 'Typewriter',
    'Blur In', 'Outline', 'Gradient', 'Comic Pop', 'Stroke'
  ];

  // Ekstrak YouTube ID
  const extractYouTubeId = (inputUrl) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = inputUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Proses Video
  const handleProcess = (e) => {
    e.preventDefault();
    if (!url) {
      alert('Masukkan tautan video YouTube terlebih dahulu!');
      return;
    }
    const extractedId = extractYouTubeId(url);
    if (!extractedId) {
      alert('Format tautan YouTube tidak valid!');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVideoId(extractedId);
      const generatedClips = [
        { id: 1, title: 'Klip #1: Momen Paling Seru & Berdampak', start: 10, end: 40, duration: '30 Detik', score: '99% Viral' },
        { id: 2, title: 'Klip #2: Pembahasan Inti Utama', start: 45, end: 85, duration: '40 Detik', score: '96% Viral' },
        { id: 3, title: 'Klip #3: Tips & Trik Cepat', start: 90, end: 135, duration: '45 Detik', score: '94% Viral' },
        { id: 4, title: 'Klip #4: Penutup & Call to Action', start: 140, end: 175, duration: '35 Detik', score: '92% Viral' }
      ];
      setClips(generatedClips);
      setEditingClip(generatedClips[0]);
    }, 1200);
  };

  // Unduh Klip
  const handleDownload = () => {
    if (isAdminLoggedIn) {
      alert(`👑 [ADMIN] Berhasil mengunduh klip "${editingClip?.title}" secara gratis tanpa batas kuota!`);
    } else {
      alert('🔒 Silakan selesaikan pembayaran paket / upgrade Pro untuk membuka unduhan tanpa watermark!');
      setActiveMenu('package');
    }
  };

  // Upload Struk Pembayaran
  const handleUploadReceipt = (e) => {
    e.preventDefault();
    if (!receiptFile) {
      alert('Pilih file bukti struk transfer terlebih dahulu!');
      return;
    }
    setUploadStatus('✅ Struk berhasil dikirim! Menunggu verifikasi otomatis admin (tawitan144@gmail.com).');
  };

  return (
    <div className="min-h-screen bg-[#070b09] text-zinc-100 flex font-sans select-none">
      
      {/* 1. SIDEBAR KIRI */}
      <aside className="w-64 bg-[#050807] border-r border-zinc-900 p-4 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo Brand */}
          <div className="flex items-center space-x-2.5 mb-6 px-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-emerald-500 to-cyan-400 rounded-xl flex items-center justify-center font-black text-black shadow-lg shadow-emerald-500/20">
              ▶
            </div>
            <div>
              <h2 className="font-black text-sm tracking-wide bg-gradient-to-r from-emerald-400 via-green-300 to-cyan-400 bg-clip-text text-transparent">
                AINEWTECH CLIPER AI
              </h2>
              <p className="text-[10px] text-zinc-500 font-semibold tracking-wider">Create • Clip • Go Viral</p>
            </div>
          </div>

          {/* Menu Navigasi */}
          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
            {sidebarMenus.map((menu) => (
              <button
                key={menu.id}
                onClick={() => {
                  setActiveMenu(menu.id);
                  if (menu.id === 'billing' || menu.id === 'package') {
                    // Berpindah ke section paket
                  }
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeMenu === menu.id 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-md shadow-emerald-950' 
                    : 'text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-base">{menu.icon}</span>
                  <span>{menu.label}</span>
                </div>
                {menu.hot && (
                  <span className="bg-amber-500 text-black text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase">HOT</span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Widget Samping Kiri Bawah: Kartu Pro Plan */}
        <div className="p-3.5 bg-gradient-to-b from-[#111c16] to-[#0a120e] border border-emerald-500/30 rounded-2xl relative overflow-hidden shadow-xl mt-4">
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl"></div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-amber-400 text-sm">👑</span>
            <span className="text-xs font-black text-white">Pro Plan</span>
          </div>
          <p className="text-[11px] font-bold text-emerald-400 mb-3">100 Klip / Bulan</p>
          <button 
            onClick={() => setActiveMenu('package')}
            className="w-full py-2 bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300 text-black font-black text-[11px] rounded-xl transition shadow-lg shadow-emerald-950"
          >
            Upgrade Sekarang →
          </button>
        </div>
      </aside>

      {/* 2. KONTEN UTAMA */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-[#070b09]">
        
        {/* Header Atas */}
        <header className="h-16 border-b border-zinc-900 px-6 flex items-center justify-between bg-[#080c0a]/80 backdrop-blur sticky top-0 z-30">
          
          {/* Search Bar / Quick Command */}
          <div className="relative w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500 text-xs">🔍</span>
            <input 
              type="text" 
              placeholder="Cari proyek, template atau fitur..." 
              className="w-full pl-9 pr-12 py-2 bg-zinc-900/90 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[10px] text-zinc-500 bg-zinc-800 px-1.5 my-1.5 rounded font-mono">Ctrl + K</span>
          </div>

          {/* Banner Promo Animasi di Header */}
          <div className="hidden xl:flex items-center space-x-6 bg-gradient-to-r from-emerald-950/60 via-zinc-900 to-emerald-950/40 border border-emerald-500/30 px-5 py-1.5 rounded-2xl">
            <div className="flex items-center space-x-2">
              <span className="text-emerald-400 text-sm">⚡</span>
              <span className="text-xs font-bold text-white">100 Animasi Text</span>
            </div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-sm">★</span>
              <span className="text-xs font-bold text-white">100 Gaya Subtitle</span>
            </div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <span className="text-cyan-400 text-sm">🎬</span>
              <span className="text-xs font-bold text-white">Kualitas Full HD</span>
            </div>
          </div>

          {/* Profil & Notifikasi Admin */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="relative p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-300 transition"
              title="Notifikasi"
            >
              🔔
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">3</span>
            </button>

            <div 
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="flex items-center space-x-3 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-xl cursor-pointer hover:border-emerald-500/50 transition"
            >
              <div className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center font-bold text-black text-xs">
                TT
              </div>
              <div>
                <p className="text-xs font-bold text-white">Tan Tawi</p>
                <p className="text-[10px] text-emerald-400 font-medium">
                  {isAdminLoggedIn ? '👑 Admin Utama' : 'Premium User'}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Panel Modal Login Admin */}
        {isAdminOpen && (
          <div className="bg-[#111714] border-b border-emerald-500/40 p-4 px-6 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xl">
            <div className="flex items-center space-x-3">
              <span className="text-lg">🔑</span>
              <div>
                <h4 className="text-xs font-bold text-emerald-400">Akses Panel Admin Otomatis (Whitelist)</h4>
                <p className="text-[11px] text-zinc-400">Masukkan email admin untuk mengaktifkan akses penuh tanpa batas.</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="tawitan144@gmail.com"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:outline-none w-64"
              />
              <button 
                onClick={() => setIsAdminOpen(false)}
                className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs rounded-xl"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

        {/* KONTEN BERDASARKAN MENU YANG DIPILIH */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">

          {/* KONDISI 1: MENU DASHBOARD / BERANDA / AI CLIPPER */}
          {(activeMenu === 'dashboard' || activeMenu === 'clipper') && (
            <>
              {/* Form Input YouTube */}
              <div className="bg-gradient-to-r from-[#111a15] via-[#0d1612] to-[#09100d] border border-emerald-500/30 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 w-96 h-full bg-radial from-emerald-500/10 to-transparent pointer-events-none"></div>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-3 py-1 rounded-full border border-emerald-500/30 inline-block mb-3">
                  ⚡ AI VIDEO CLIPPER TERBAIK DI INDONESIA
                </span>
                <h1 className="text-xl md:text-2xl font-black text-white mb-2">Tempel Link YouTube, Ubah Jadi Puluhan Klip Viral Sekejap!</h1>
                <p className="text-xs text-zinc-400 mb-5">Didukung pemotongan cerdas berbasis AI, auto-subtitle, dan templat animasi profesional.</p>

                <form onSubmit={handleProcess} className="flex flex-col md:flex-row gap-3 bg-[#050807] p-2 border border-zinc-700/80 rounded-2xl shadow-inner">
                  <input
                    type="text"
                    placeholder="Tempel link video YouTube (contoh: https://youtu.be/...)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 hover:from-emerald-300 hover:to-green-400 text-black font-black text-xs rounded-xl transition shadow-lg shadow-emerald-950 whitespace-nowrap"
                  >
                    {loading ? 'AI Sedang Memproses...' : 'Mulai Potong Otomatis →'}
                  </button>
                </form>
              </div>

              {/* JIKA VIDEO SUDAH DIPROSES & ADA KLIP */}
              {videoId && clips.length > 0 && (
                <div className="space-y-6">
                  
                  {/* Daftar Pilihan Klip */}
                  <div className="bg-[#101613] border border-zinc-800 p-5 rounded-2xl shadow-xl">
                    <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                      🎬 Pilih Hasil Klip (Klik untuk Edit & Nonton Langsung):
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {clips.map((clip) => (
                        <button
                          key={clip.id}
                          onClick={() => setEditingClip(clip)}
                          className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between ${
                            editingClip && editingClip.id === clip.id 
                              ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-lg' 
                              : 'bg-zinc-900/90 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-[10px] font-bold text-emerald-400">{clip.score}</span>
                              <span className="text-[10px] text-zinc-500">{clip.duration}</span>
                            </div>
                            <h4 className="text-xs font-bold truncate">{clip.title}</h4>
                          </div>
                          <span className="text-[10px] mt-2 underline text-emerald-300 font-semibold">▶ Sedang Dipilih</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* STUDIO UTAMA: 3 KOLOM (PRESET, LIVE PLAYER, ANIMASI TEXT) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* KOLOM 1: TEMPLATE PRESET */}
                    <div className="lg:col-span-3 bg-[#101613] border border-zinc-800 p-4 rounded-2xl space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xs font-bold text-white uppercase">Template Preset</h3>
                        <span className="text-[10px] text-zinc-500">12 Opsi</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {templatePresets.map((tpl) => (
                          <button
                            key={tpl.name}
                            onClick={() => setSelectedTemplate(tpl.name)}
                            className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center h-20 bg-gradient-to-br ${tpl.color} ${
                              selectedTemplate === tpl.name ? 'border-white shadow-lg scale-105 ring-2 ring-emerald-400' : 'border-zinc-800 opacity-80 hover:opacity-100'
                            }`}
                          >
                            <span className="text-xs font-black text-black drop-shadow">{tpl.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* KOLOM 2: LIVE VIDEO PREVIEW & PLAYER */}
                    <div className="lg:col-span-5 bg-[#101613] border border-zinc-800 p-5 rounded-2xl flex flex-col items-center space-y-4 shadow-2xl">
                      
                      {/* Kontrol Atas Preview */}
                      <div className="w-full flex justify-between items-center bg-zinc-900 px-3 py-2 rounded-xl text-xs text-zinc-300">
                        <div className="flex space-x-2 font-bold">
                          <span className="bg-zinc-800 px-2 py-1 rounded text-emerald-400">{aspectRatio}</span>
                          <span className="bg-zinc-800 px-2 py-1 rounded">{resolution}</span>
                        </div>
                        <button 
                          onClick={handleDownload}
                          className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs rounded-xl shadow-lg transition"
                        >
                          {isAdminLoggedIn ? '⬇️ Unduh (Bebas Admin)' : '⬇️ Export Preview'}
                        </button>
                      </div>

                      {/* Layar Handphone 9:16 */}
                      <div className="relative w-full max-w-[280px] aspect-[9/16] bg-black rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl flex flex-col justify-between">
                        <iframe
                          className="absolute inset-0 w-full h-full object-cover scale-150 pointer-events-auto"
                          src={`https://www.youtube.com/embed/${videoId}?start=${editingClip?.start || 0}&end=${editingClip?.end || 30}&autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1`}
                          title="Live Preview"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>

                        {/* Teks Hook di Atas */}
                        <div className="relative z-10 p-4 pt-6 text-center pointer-events-none">
                          <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wide bg-red-600 text-white shadow-xl animate-pulse`}>
                            {hookText}
                          </span>
                        </div>

                        {/* Subtitle di Bawah */}
                        <div className="relative z-10 p-4 pb-10 text-center pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                          <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-extrabold text-yellow-300 bg-black/80 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                            "{selectedAnimation}: Ini adalah momen paling krusial video Anda..."
                          </span>
                          <p className="text-[9px] text-emerald-400 mt-1">Gaya: {selectedTemplate} • {selectedSubtitleStyle}</p>
                        </div>
                      </div>

                      {/* Kontrol Player Bawah */}
                      <div className="flex items-center space-x-4 w-full justify-center pt-2">
                        <button 
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="w-10 h-10 bg-emerald-500 text-black rounded-full flex items-center justify-center font-bold text-sm shadow-lg hover:scale-105 transition"
                        >
                          {isPlaying ? '⏸' : '▶'}
                        </button>
                        <span className="text-xs text-zinc-400 font-mono">00:00:12 / 00:00:30</span>
                      </div>

                    </div>

                    {/* KOLOM 3: ANIMASI TEXT & KONTROL */}
                    <div className="lg:col-span-4 bg-[#101613] border border-zinc-800 p-5 rounded-2xl space-y-5">
                      <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                        <h3 className="text-xs font-bold text-emerald-400 uppercase">Animasi Text</h3>
                        <span className="bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded">100+ Animasi</span>
                      </div>

                      {/* Grid Pilihan Animasi */}
                      <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1">
                        {textAnimations.map((anim) => (
                          <button
                            key={anim}
                            onClick={() => setSelectedAnimation(anim)}
                            className={`p-2 rounded-xl text-center text-xs font-bold border transition ${
                              selectedAnimation === anim ? 'bg-emerald-500 text-black border-emerald-400 shadow-md' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                            }`}
                          >
                            {anim}
                          </button>
                        ))}
                      </div>

                      {/* Form Ganti Teks Hook */}
                      <div className="space-y-1 pt-2">
                        <label className="text-[11px] font-bold text-zinc-300">Edit Teks Hook Utama:</label>
                        <input 
                          type="text" 
                          value={hookText}
                          onChange={(e) => setHookText(e.target.value)}
                          className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Slider Kontrol Animasi */}
                      <div className="space-y-3 pt-2 border-t border-zinc-800">
                        <h4 className="text-[11px] font-bold text-emerald-400">Pengaturan Durasi & Kecepatan</h4>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] text-zinc-400">
                            <span>Kecepatan</span>
                            <span className="text-white font-mono">{speed}x</span>
                          </div>
                          <input 
                            type="range" min="0.5" max="2.0" step="0.1" value={speed} 
                            onChange={(e) => setSpeed(parseFloat(e.target.value))}
                            className="w-full accent-emerald-500 cursor-pointer"
                          />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] text-zinc-400">
                            <span>Durasi Masuk</span>
                            <span className="text-white font-mono">{inDuration}s</span>
                          </div>
                          <input 
                            type="range" min="0.1" max="2.0" step="0.1" value={inDuration} 
                            onChange={(e) => setInDuration(parseFloat(e.target.value))}
                            className="w-full accent-emerald-500 cursor-pointer"
                          />
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* MULTI-TRACK TIMELINE EDITOR DI BAWAH */}
                  <div className="bg-[#101613] border border-zinc-800 p-4 rounded-2xl space-y-3 shadow-xl">
                    <div className="flex justify-between items-center text-xs text-zinc-400">
                      <div className="flex space-x-3 font-bold">
                        <button className="hover:text-white">↩ Undo</button>
                        <button className="hover:text-white">↪ Redo</button>
                        <button className="hover:text-white">✂ Potong</button>
                        <button className="hover:text-white">🗑 Hapus</button>
                      </div>
                      <span className="font-mono text-emerald-400">00:00:12 / 00:00:30</span>
                    </div>

                    {/* Timeline Tracks */}
                    <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-2 font-mono text-[11px]">
                      <div className="flex items-center space-x-2">
                        <span className="w-24 text-zinc-500">Teks Utama</span>
                        <div className="flex-1 bg-emerald-600/30 border border-emerald-500 rounded p-1 text-emerald-300 truncate">
                          AA {hookText}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-24 text-zinc-500">Subtitle</span>
                        <div className="flex-1 bg-amber-600/30 border border-amber-500 rounded p-1 text-amber-300 truncate">
                          ⚡ Momen Paling Seru & Berdampak Tinggi
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </>
          )}

          {/* KONDISI 2: MENU HARGA & PAKET (TERMASUK PEMBAYARAN BCA) */}
          {(activeMenu === 'package' || activeMenu === 'billing' || activeMenu === 'harga') && (
            <div className="space-y-8 max-w-4xl mx-auto py-4">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-black text-white">Pilih Paket Langganan AINEWTECH CLIPER AI</h2>
                <p className="text-xs text-zinc-400">Buka akses penuh 500+ templat, kualitas Full HD, dan ekspor tanpa batas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: 'Standart', price: 'Rp 30.000', clips: '10 Klip / Bulan' },
                  { name: 'Pro', price: 'Rp 100.000', clips: '50 Klip Viral + Auto Post' },
                  { name: 'Golden', price: 'Rp 250.000', clips: '100 Klip + Prioritas Server' }
                ].map((pkg) => (
                  <div 
                    key={pkg.name}
                    onClick={() => setSelectedPlan(pkg.name)}
                    className={`cursor-pointer p-6 rounded-3xl border transition-all ${
                      selectedPlan === pkg.name ? 'bg-[#14221a] border-emerald-500 shadow-xl scale-105' : 'bg-[#101613] border-zinc-800 opacity-90 hover:opacity-100'
                    }`}
                  >
                    <h3 className="text-xs font-black uppercase text-emerald-400 mb-2">{pkg.name}</h3>
                    <p className="text-2xl font-black text-white my-2">{pkg.price}</p>
                    <p className="text-xs text-zinc-400 mb-6">{pkg.clips}</p>
                    <button className={`w-full py-2.5 rounded-xl text-xs font-bold ${selectedPlan === pkg.name ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-300'}`}>
                      {selectedPlan === pkg.name ? 'Paket Dipilih' : 'Pilih Paket'}
                    </button>
                  </div>
                ))}
              </div>

              {/* Form Konfirmasi Transfer BCA */}
              <div className="bg-[#101613] border border-zinc-800 p-8 rounded-3xl text-center max-w-xl mx-auto shadow-2xl space-y-4">
                <h3 className="text-sm font-bold text-white">Konfirmasi Pembayaran Paket {selectedPlan}</h3>
                <p className="text-xs text-zinc-400">Silakan transfer sesuai harga paket ke rekening resmi berikut:</p>
                <div className="p-4 bg-zinc-900 border border-zinc-700 rounded-2xl">
                  <p className="text-xl font-black text-emerald-400">BCA: 753-609-2721</p>
                  <p className="text-xs text-zinc-300 mt-1">a.n. <span className="font-bold text-white">THANTHAWI</span></p>
                </div>

                <form onSubmit={handleUploadReceipt} className="space-y-3 pt-2">
                  <input 
                    type="file" 
                    onChange={(e) => setReceiptFile(e.target.files[0])}
                    className="w-full text-xs text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-500 file:text-black cursor-pointer bg-zinc-900 border border-zinc-800 rounded-xl p-1.5"
                  />
                  <button type="submit" className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black rounded-xl transition shadow-lg">
                    Kirim Bukti Struk Transfer
                  </button>
                </form>
                {uploadStatus && <p className="text-emerald-400 text-xs font-semibold pt-2">{uploadStatus}</p>}
              </div>
            </div>
          )}

          {/* KONDISI 3: MENU LAINNYA (My Projects, AI Subtitle, Animation Studio, dll.) */}
          {['projects', 'subtitle', 'animation', 'templates', 'media', 'export', 'analytics', 'ambassador', 'settings'].includes(activeMenu) && (
            <div className="bg-[#101613] border border-zinc-800 p-12 rounded-3xl text-center max-w-2xl mx-auto space-y-4 my-auto">
              <span className="text-4xl">🚀</span>
              <h2 className="text-xl font-bold text-white capitalize">Halaman {activeMenu} AINEWTECH CLIPER AI</h2>
              <p className="text-xs text-zinc-400">Fitur dan modul lengkap untuk pengelolaan {activeMenu} sedang aktif dan terhubung dengan sistem studio utama.</p>
              <button 
                onClick={() => setActiveMenu('dashboard')}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs rounded-xl shadow-lg"
              >
                Kembali ke Studio & Dashboard
              </button>
            </div>
          )}

        </div>

      </main>

    </div>
  );
}

export default App;
