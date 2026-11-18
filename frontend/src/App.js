import React, { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState('beranda');
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  
  const [selectedTool, setSelectedTool] = useState('Pemotongan AI');
  const [selectedPlan, setSelectedPlan] = useState('Standart');
  const [loading, setLoading] = useState(false);
  const [clips, setClips] = useState([]);
  
  // State untuk Preview Video Langsung di Kolom Pilihan Klip
  const [activePreviewClip, setActivePreviewClip] = useState(null);

  // State Studio Editor & Ratusan Pilihan Templat
  const [editingClip, setEditingClip] = useState(null);
  const [hookText, setHookText] = useState('RAHASIA KONTEN VIRAL OTOMATIS!');
  const [searchTemplate, setSearchTemplate] = useState('');
  
  const [selectedHookTemplate, setSelectedHookTemplate] = useState('Banner Merah Menyala (Viral #01)');
  const [selectedSubtitleStyle, setSelectedSubtitleStyle] = useState('Alex Hormozi Kuning Tebal (#05)');
  const [selectedFrameStyle, setSelectedFrameStyle] = useState('Cinematic Blur Background (#12)');
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

  const translatedSubtitles = {
    Indonesia: '"Ini adalah momen paling krusial yang menentukan kesuksesan video Anda..."',
    English: '"This is the most crucial moment that determines your video success..."',
    Arab: '"هذه هي اللحظة الأكثر أهمية التي تحددنجاح فيديو الخاص بك..."',
    Jepang: '"これはあなたの動画の成功を決定する最も重要な瞬間です..."',
    Korea: '"이것은 비디오의 성공을 결정하는 가장 중요한 순간입니다..."'
  };

  const hookTemplatesList = [
    { id: 1, name: 'Banner Merah Menyala (Viral #01)' },
    { id: 2, name: 'Kuning TokTok Pop-Up (#02)' },
    { id: 3, name: 'Neon Cyberpunk Ungu (#03)' },
    { id: 4, name: 'Minimalis Putih Elegan (#04)' },
  ];

  const subtitleStylesList = [
    { id: 1, name: 'Alex Hormozi Kuning Tebal (#05)' },
    { id: 2, name: 'Karaoke Word-by-Word Motion (#06)' },
    { id: 3, name: 'Clean White Netflix Style (#07)' },
  ];

  const frameStylesList = [
    { id: 1, name: 'Cinematic Blur Background (#12)' },
    { id: 2, name: 'Rounded iPhone 16 Mockup (#15)' },
  ];

  const extractYouTubeId = (inputUrl) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = inputUrl.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleProcess = (e) => {
    e.preventDefault();
    if (!url) {
      alert('Masukkan link YouTube terlebih dahulu!');
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
    setActivePreviewClip(null);

    setTimeout(() => {
      setLoading(false);
      setVideoId(extractedId);
      const generatedClips = [
        { id: 1, title: 'Klip #1: Hook Utama Berdampak Tinggi', start: 15, end: 45, duration: '30 Detik', score: '99% Viral' },
        { id: 2, title: 'Klip #2: Momen Puncak Diskusi', start: 60, end: 100, duration: '40 Detik', score: '96% Viral' },
        { id: 3, title: 'Klip #3: Inti Pembelajaran Cepat', start: 120, end: 165, duration: '45 Detik', score: '94% Viral' },
        { id: 4, title: 'Klip #4: Penutup & Call to Action', start: 190, end: 225, duration: '35 Detik', score: '91% Viral' }
      ];
      setClips(generatedClips);
      setActivePreviewClip(generatedClips[0]); // Set default preview ke klip pertama
    }, 1500);
  };

  const openEditor = (clip) => {
    setEditingClip(clip);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              WayinClipper Pro
            </span>
          </div>

          <nav className="space-y-1.5 flex md:block overflow-x-auto space-x-2 md:space-x-0">
            {[
              { id: 'beranda', label: 'Beranda & 500+ Templat', icon: '🎨' },
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
              {editingClip ? `Studio Editor: ${editingClip.title}` : 'Sistem 500+ Templat & Klip AI'}
            </h1>
            <p className="text-xs text-zinc-400">
              {editingClip ? 'Kustomisasi hook, subtitle, dan bingkai dari ratusan koleksi templat.' : 'Tonton langsung klip pilihan Anda dan edit dengan mudah.'}
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
              <p className="text-xs text-emerald-400 font-medium">✅ Mode Admin Aktif! Bebas unduh semua hasil editan klip tanpa batas.</p>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* STUDIO EDITOR                                             */}
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
              
              <div className="lg:col-span-5 flex flex-col items-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-3">Live Preview (Templat Aktif)</span>
                
                <div className="relative w-full max-w-[300px] aspect-[9/16] bg-black rounded-3xl overflow-hidden border-4 border-zinc-800 shadow-2xl flex flex-col justify-between">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover scale-150 pointer-events-auto"
                    src={`https://www.youtube.com/embed/${videoId}?start=${editingClip.start}&end=${editingClip.end}&autoplay=1&mute=0&loop=1`}
                    title="Clip Preview"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>

                  <div className="relative z-10 p-4 pt-6 text-center pointer-events-none">
                    <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wide bg-red-600 text-white shadow-lg">
                      {hookText}
                    </span>
                  </div>

                  <div className="relative z-10 p-4 pb-10 text-center pointer-events-none bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-extrabold text-yellow-300 bg-black/75 uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                      {translatedSubtitles[targetLang]}
                    </span>
                    <p className="text-[9px] text-emerald-400 mt-1.5">Bahasa: {targetLang} • Templat: Aktif</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 bg-[#080c0a] p-6 rounded-2xl border border-zinc-800">
                <h3 className="text-sm font-bold text-emerald-400 border-b border-zinc-800 pb-3">🎨 Perpustakaan 500+ Templat & Gaya Tulisan</h3>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1">Cari Cepat Templat / Gaya:</label>
                  <input 
                    type="text" 
                    placeholder="Ketik nama templat (cth: Hormozi, Neon, Cinematic)..."
                    value={searchTemplate}
                    onChange={(e) => setSearchTemplate(e.target.value)}
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-zinc-300">1. Pilih Templat Gaya Hook</label>
                  <select 
                    value={selectedHookTemplate}
                    onChange={(e) => setSelectedHookTemplate(e.target.value)}
                    className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
                  >
                    {hookTemplatesList.map((h) => (
                      <option key={h.id} value={h.name}>{h.name}</option>
                    ))}
                  </select>
                  <input 
                    type="text" 
                    value={hookText}
                    onChange={(e) => setHookText(e.target.value)}
                    placeholder="Ubah Teks Hook..."
                    className="w-full p-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold text-zinc-300">2. Pilih Gaya Subtitle Otomatis</label>
                  <select 
                    value={selectedSubtitleStyle}
                    onChange={(e) => setSelectedSubtitleStyle(e.target.value)}
                    className
