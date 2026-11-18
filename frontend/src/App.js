import React, { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState('beranda');
  const [url, setUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  
  // Pilihan Kustomisasi Klip
  const [selectedTool, setSelectedTool] = useState('Pemotongan AI');
  const [subtitleStyle, setSubtitleStyle] = useState('Modern (Alex Hormozi)');
  const [hookStyle, setHookStyle] = useState('Emosional / Pertanyaan');
  const [clipDuration, setClipDuration] = useState('30 Detik');
  
  const [selectedPlan, setSelectedPlan] = useState('Standart');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [clips, setClips] = useState([]);
  
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

  const toolsList = [
    { name: 'Pemotongan AI', desc: 'Ubah video panjang menjadi klip siap dibagikan.', badge: 'Free' },
    { name: 'Temukan Momen', desc: 'Deteksi bagian paling menarik dari video.', badge: 'Free' },
    { name: 'Sorotan Sekali Klik', desc: 'Auto sorot otomatis dalam hitungan detik.', badge: 'New' },
    { name: 'Subtitle AI', desc: 'Gaya teks dinamis ala Alex Hormozi.', badge: 'Free' },
    { name: 'AI Bingkai Ulang', desc: 'Ubah orientasi video horisontal ke vertikal.', badge: 'Free' },
    { name: 'Thumbnail AI', desc: 'Buat sampul klik menarik secara instan.', badge: 'New' }
  ];

  // Fungsi untuk mengambil ID Video YouTube dari berbagai format link
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
      alert('Link YouTube tidak valid! Pastikan menggunakan link youtube.com atau youtu.be');
      return;
    }

    setLoading(true);
    setSuccessMsg('');
    setClips([]);
    setVideoId('');

    setTimeout(() => {
      setLoading(false);
      setVideoId(extractedId);
      setSuccessMsg(`Berhasil memproses dengan "${selectedTool}" | Hook: ${hookStyle} | Subtitle: ${subtitleStyle}`);
      setClips([
        { id: 1, title: `Klip 1: Hook "${hookStyle}" (00:15 - 00:45)`, duration: clipDuration, start: 15 },
        { id: 2, title: `Klip 2: Momen Puncak (01:20 - 02:00)`, duration: clipDuration, start: 80 },
        { id: 3, title: `Klip 3: Kesimpulan Viral (03:10 - 03:50)`, duration: clipDuration, start: 190 }
      ]);
    }, 1500);
  };

  const handleDownloadClip = (clipTitle) => {
    if (isAdminLoggedIn) {
      alert(`✅ AKSES ADMIN DITERIMA!\nMengunduh file: "${clipTitle}" dengan Subtitle "${subtitleStyle}" secara GRATIS.`);
    } else {
      alert('Selesaikan pembayaran paket terlebih dahulu untuk mengunduh klip tanpa watermark! (Atau login sebagai Admin).');
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
      
      {/* Sidebar Kiri ala WayinVideo */}
      <aside className="w-full md:w-60 bg-[#070a09] border-r border-zinc-900 p-4 flex flex-row md:flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center space-x-2.5 mb-8 px-2 py-1">
            <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center font-black text-black text-base shadow-lg shadow-emerald-900/40">AI</div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              WayinClipper
            </span>
          </div>

          <nav className="space-y-1.5 flex md:block overflow-x-auto space-x-2 md:space-x-0">
            {[
              { id: 'beranda', label: 'Beranda', icon: '🏠' },
              { id: 'alat', label: 'Alat AI', icon: '⚡' },
              { id: 'harga', label: 'Harga & Paket', icon: '💎' },
              { id: 'admin', label: 'Panel Admin', icon: '🔑' },
            ].map((menu) => (
              <button
                key={menu.id}
                onClick={() => {
                  setActiveMenu(menu.id);
                  if (menu.id === 'admin') setIsAdminOpen(true);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeMenu === menu.id ? 'bg-zinc-800 text-emerald-400 shadow-sm' : 'text-zinc-400 hover:bg-zinc-900/80 hover:text-zinc-200'
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
        <div className="flex justify-between items-center mb-8 bg-[#111614] border border-zinc-800/80 px-6 py-4 rounded-2xl shadow-sm">
          <div>
            <h1 className="text-base md:text-lg font-bold text-zinc-200">
              {isAdminLoggedIn ? 'Selamat Datang, Admin Thanthawi' : 'AI Video Clipper Studio'}
            </h1>
            <p className="text-xs text-zinc-400">
              {isAdminLoggedIn ? 'Mode Admin Aktif: Bebas unduh semua klip tanpa biaya.' : 'Tempel link YouTube, pilih gaya subtitle & hook, lalu potong otomatis.'}
            </p>
          </div>
          <button 
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl border transition shadow ${
              isAdminLoggedIn 
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' 
                : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-white'
            }`}
          >
            {isAdminLoggedIn ? '👑 Admin Aktif' : '🔑 Login Admin'}
          </button>
        </div>

        {/* Panel Login Admin */}
        {isAdminOpen && (
          <div className="bg-[#111614] border border-emerald-500/50 p-5 rounded-2xl mb-8 shadow-xl">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-emerald-400">Panel Akses & Verifikasi Admin</h3>
              <button onClick={() => setIsAdminOpen(false)} className="text-xs text-zinc-500 hover:text-white">✕ Tutup</button>
            </div>
            <p className="text-xs text-zinc-400 mb-3">Masukkan email pengelola untuk membuka akses gratis & verifikasi struk BCA:</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="tawitan144@gmail.com"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-3 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-xs text-white focus:border-emerald-500 focus:outline-none"
              />
              {isAdminLoggedIn ? (
                <div className="p-3 bg-emerald-950/50 border border-emerald-700 rounded-xl text-xs text-emerald-300 font-medium">
                  ✅ Akses Admin Diterima! Anda sekarang bisa langsung mengunduh semua hasil klip video tanpa perlu membayar.
                </div>
              ) : (
                <p className="text-[11px] text-zinc-500">Ketik <b>tawitan144@gmail.com</b> untuk mengaktifkan mode admin.</p>
              )}
            </div>
          </div>
        )}

        {/* Halaman Beranda / Alat */}
        {(activeMenu === 'beranda' || activeMenu === 'alat') && (
          <div className="space-y-8">
            
            {/* Banner Kotak Utama & Pilihan Pengaturan Klip */}
            <div className="bg-gradient-to-br from-[#121815] via-[#111614] to-[#0d1210] border border-zinc-800 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6">
              <div>
                <span className="bg-emerald-500/10 text-emerald-400 text-[11px] px-3 py-1 rounded-full font-bold border border-emerald-500/20 inline-block mb-3">
                  ⚡ {selectedTool}
                </span>
                <h2 className="text-xl md:text-3xl font-black tracking-tight mb-2 text-white">Ubah video panjang menjadi klip viral.</h2>
                <p className="text-xs md:text-sm text-zinc-400">Atur gaya hook dan subtitle sesuai keinginan Anda sebelum AI memotong video.</p>
              </div>

              {/* Form Input URL + Opsi Pilihan */}
              <form onSubmit={handleProcess} className="space-y-4">
                <div className="bg-[#080c0a] border border-zinc-700/80 p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-xl">
                  <input
                    type="text"
                    placeholder="Tempel tautan video YouTube di sini (contoh: https://youtu.be/...)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent focus:outline-none text-xs md:text-sm text-white placeholder-zinc-500"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-400 font-extrabold text-black rounded-xl transition text-xs whitespace-nowrap shadow-lg shadow-emerald-900/30"
                  >
                    {loading ? 'Memproses AI...' : 'Potong Video →'}
                  </button>
                </div>

                {/* 3 Pilihan Dropdown (Hook, Subtitle, Durasi) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  <div className="bg-[#080c0a] border border-zinc-800 p-3 rounded-xl">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">🎯 Pilih Gaya Hook</label>
                    <select 
                      value={hookStyle} 
                      onChange={(e) => setHookStyle(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option>Emosional / Pertanyaan</option>
                      <option>Fakta Mengejutkan</option>
                      <option>Kontroversial / Debat</option>
                      <option>Edukasi & Tips Cepat</option>
                    </select>
                  </div>

                  <div className="bg-[#080c0a] border border-zinc-800 p-3 rounded-xl">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">💬 Gaya Subtitle AI</label>
                    <select 
                      value={subtitleStyle} 
                      onChange={(e) => setSubtitleStyle(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option>Modern (Alex Hormozi)</option>
                      <option>Minimalis Clean (Putih)</option>
                      <option>Neon Glow (Hijau/Ungu)</option>
                      <option>Klasik Kuning Sinematik</option>
                    </select>
                  </div>

                  <div className="bg-[#080c0a] border border-zinc-800 p-3 rounded-xl">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5">⏱️ Durasi Klip</label>
                    <select 
                      value={clipDuration} 
                      onChange={(e) => setClipDuration(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option>30 Detik (Shorts/Reels)</option>
                      <option>60 Detik (TikTok/IG)</option>
                      <option>90 Detik (Penjelasan Detail)</option>
                    </select>
                  </div>
                </div>
              </form>

              {successMsg && <p className="text-emerald-400 text-xs font-semibold bg-emerald-950/40 border border-emerald-800/50 p-3 rounded-xl">{successMsg}</p>}
            </div>

            {/* PEMUTAR VIDEO ASLI & HASIL KLIP (Muncul setelah video diproses) */}
            {videoId && clips.length > 0 && (
              <div className="bg-[#111614] border border-emerald-500/40 p-6 rounded-3xl space-y-6 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-emerald-400">🎬 Pratinjau Video & Hasil Klip AI</h3>
                  <span className="text-[11px] bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full">
                    Subtitle: <b>{subtitleStyle}</b>
                  </span>
                </div>

                {/* Pemutar Video YouTube Asli */}
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                    title="YouTube Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Daftar Klip Siap Unduh */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Daftar Potongan Klip ({clips.length} Klip):</h4>
                  {clips.map((clip) => (
                    <div key={clip.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-[#080c0a] p-4 rounded-2xl border border-zinc-800">
                      <div>
                        <h4 className="text-xs font-bold text-white">{clip.title}</h4>
                        <p className="text-[11px] text-zinc-400 mt-0.5">
                          Durasi: {clip.duration} • Gaya Subtitle: <span className="text-emerald-400">{subtitleStyle}</span>
                        </p>
                      </div>
                      <button 
                        onClick={() => handleDownloadClip(clip.title)}
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-extrabold rounded-xl transition shadow shrink-0"
                      >
                        {isAdminLoggedIn ? '⬇️ Unduh Gratis (Admin)' : '🔒 Unduh Klip'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Grid Alat AI Tersedia */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 px-1">Alat AI Tersedia</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {toolsList.map((tool) => (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedTool(tool.name)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      selectedTool === tool.name 
                        ? 'bg-[#18221e] border-emerald-500 shadow-lg shadow-emerald-900/10' 
                        : 'bg-[#111614]/80 border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-8 h-8 rounded-xl bg-zinc-800/80 flex items-center justify-center text-sm">✨</div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${tool.badge === 'Free' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
                          {tool.badge}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">{tool.name}</h4>
                      <p className="text-[10px] text-zinc-400 line-clamp-2">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Halaman Harga & Pembayaran BCA */}
        {(activeMenu === 'harga' || activeMenu === 'beranda') && (
          <div className="mt-16 space-y-8 pt-10 border-t border-zinc-900">
            <div>
              <h3 className="text-base font-bold mb-1 text-zinc-200">Paket Langganan Pelanggan</h3>
              <p className="text-xs text-zinc-400">Pengguna umum dapat memilih paket di bawah untuk membuka kunci unduhan.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(planDetails).map((plan) => (
                <div 
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`cursor-pointer p-6 rounded-3xl border transition-all ${
                    selectedPlan === plan 
                      ? 'bg-[#18221e] border-emerald-500 shadow-xl' 
                      : 'bg-[#111614]/80 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-2">{plan}</h4>
                  <p className="text-2xl font-black my-2 text-white">{planDetails[plan].price}</p>
                  <p className="text-xs text-zinc-400 mb-6">{planDetails[plan].clips}</p>
                  <button className={`w-full py-2.5 rounded-xl text-xs font-bold ${selectedPlan === plan ? 'bg-emerald-500 text-black' : 'bg-zinc-800 text-zinc-300'}`}>
                    {selectedPlan === plan ? 'Paket Dipilih' : 'Pilih Paket'}
                  </button>
                </div>
              ))}
            </div>

            {/* Kotak Transfer BCA */}
            <div className="bg-[#111614] border border-zinc-800 p-8 rounded-3xl text-center max-w-xl mx-auto shadow-2xl">
              <h4 className="text-sm font-bold mb-1 text-zinc-200">Konfirmasi Pembayaran Paket {selectedPlan}</h4>
              <p className="text-xs text-zinc-400">Silakan transfer sebesar <span className="text-white font-extrabold">{planDetails[selectedPlan].price}</span> ke rekening resmi:</p>
              <p className="text-xl font-black text-emerald-400 my-3 tracking-wide">BCA: 753-609-2721</p>
              <p className="text-xs text-zinc-400 mb-6">a.n. <span className="text-white font-bold">THANTHAWI</span></p>
              
              <form onSubmit={handleUploadReceipt} className="space-y-3">
                <input 
                  type="file" 
                  onChange={(e) => setReceiptFile(e.target.files[0])}
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-500 file:text-black hover:file:bg-emerald-400 cursor-pointer bg-zinc-900 border border-zinc-800 rounded-xl p-1.5"
                />
                <button 
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black rounded-xl transition shadow-lg"
                >
                  Kirim Bukti Struk Transfer
                </button>
              </form>
              {uploadStatus && <p className="mt-3 text-emerald-400 text-xs font-semibold">{uploadStatus}</p>}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
