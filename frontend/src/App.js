import React, { useState } from 'react';

function App() {
  const [activeMenu, setActiveMenu] = useState('beranda');
  const [url, setUrl] = useState('');
  const [selectedTool, setSelectedTool] = useState('Pemotongan AI');
  const [selectedPlan, setSelectedPlan] = useState('Standart');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [clips, setClips] = useState([]);
  
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [receiptFile, setReceiptFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const planDetails = {
    Standart: { price: 'Rp 30.000', clips: '10 Klip Viral' },
    Pro: { price: 'Rp 100.000', clips: '50 Klip Viral + Auto Post' },
    Golden: { price: 'Rp 250.000', clips: '100 Klip + Prioritas Server' }
  };

  const toolsList = [
    { name: 'Pemotongan AI', desc: 'Ubah video panjang menjadi klip siap dibagikan.' },
    { name: 'Subtitle AI', desc: 'Buat teks takarir otomatis bergaya modern.' },
    { name: 'Peningkatan Video', desc: 'Pertajam resolusi video menjadi HD/4K.' },
    { name: 'AI Bingkai Ulang', desc: 'Sesuaikan aspek rasio vertikal atau horisontal.' },
    { name: 'Thumbnail AI', desc: 'Buat sampul gambar menarik secara otomatis.' }
  ];

  const handleProcess = (e) => {
    e.preventDefault();
    if (!url) {
      alert('Masukkan tautan video atau unggah video terlebih dahulu!');
      return;
    }
    setLoading(true);
    setSuccessMsg('');
    setClips([]);

    setTimeout(() => {
      setLoading(false);
      setSuccessMsg(`Berhasil memproses menggunakan alat "${selectedTool}"!`);
      setClips([
        { id: 1, title: 'Klip Viral 1: Poin Utama (00:15 - 00:45)', duration: '30s' },
        { id: 2, title: 'Klip Viral 2: Momen Menarik (01:20 - 02:00)', duration: '40s' },
        { id: 3, title: 'Klip Viral 3: Kesimpulan (03:10 - 03:50)', duration: '40s' }
      ]);
    }, 2000);
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
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      
      {/* Sidebar Navigasi Kiri */}
      <aside className="w-full md:w-64 bg-zinc-950 border-r border-zinc-800 p-4 flex flex-row md:flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-8 px-2">
            <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center font-bold text-black text-sm">AI</div>
            <span className="font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              AI VideoStudio
            </span>
          </div>

          <nav className="space-y-1 flex md:block overflow-x-auto space-x-2 md:space-x-0">
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
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  activeMenu === menu.id ? 'bg-zinc-800 text-green-400' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span>{menu.icon}</span>
                <span className="hidden md:inline">{menu.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden md:block pt-4 border-t border-zinc-800 text-xs text-zinc-500">
          <p>Logged as:</p>
          <p className="text-zinc-300 font-semibold truncate">THANTHAWI</p>
        </div>
      </aside>

      {/* Konten Utama Kanan */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8 bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl">
          <div>
            <h1 className="text-lg md:text-xl font-bold capitalize">{activeMenu === 'alat' ? 'Pilih Alat AI' : activeMenu}</h1>
            <p className="text-xs text-zinc-400">Platform otomatisasi video berbasis kecerdasan buatan.</p>
          </div>
          <button 
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold rounded-lg border border-zinc-700 transition"
          >
            {isAdminOpen ? 'Tutup Admin' : '🔑 Admin BCA'}
          </button>
        </div>

        {/* Panel Admin Verifikasi */}
        {isAdminOpen && (
          <div className="bg-zinc-900 border border-green-500/50 p-5 rounded-2xl mb-8 shadow-lg">
            <h3 className="text-md font-bold text-green-400 mb-2">Panel Admin Verifikasi (BCA)</h3>
            <p className="text-xs text-zinc-400 mb-3">Login khusus pengelola: tawitan144@gmail.com</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Masukkan email admin..."
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white"
              />
              {adminEmail === 'tawitan144@gmail.com' ? (
                <div className="p-3 bg-green-950/40 border border-green-800 rounded-lg text-xs text-green-300">
                  ✅ Akses Admin Diterima! Daftar struk pembayaran BCA pelanggan aktif.
                </div>
              ) : (
                <p className="text-xs text-zinc-500">Masukkan email yang benar untuk membuka kontrol.</p>
              )}
            </div>
          </div>
        )}

        {/* Menu Beranda / Alat Utama */}
        {(activeMenu === 'beranda' || activeMenu === 'alat') && (
          <div className="space-y-8">
            
            {/* Banner Utama ala WayinVideo */}
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="max-w-xl">
                <span className="bg-green-500/20 text-green-400 text-xs px-2.5 py-1 rounded-full font-bold border border-green-500/30">
                  {selectedTool}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-3 mb-2">Ubah video panjang menjadi klip siap dibagikan.</h2>
                <p className="text-xs md:text-sm text-zinc-400 mb-6">Tempel tautan YouTube atau unggah file video Anda untuk mulai diproses secara instan oleh AI.</p>
              </div>

              {/* Input Kotak Utama */}
              <form onSubmit={handleProcess} className="bg-zinc-950/90 border border-zinc-700 p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 shadow-2xl">
                <input
                  type="text"
                  placeholder="Tempel tautan video YouTube atau unggah video..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent focus:outline-none text-sm text-white placeholder-zinc-500"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-500 font-bold rounded-xl transition text-sm whitespace-nowrap"
                >
                  {loading ? 'Memproses...' : 'Mulai →'}
                </button>
              </form>
              {successMsg && <p className="mt-3 text-green-400 text-xs font-medium">{successMsg}</p>}
            </div>

            {/* Pilihan Alat AI (Grid Menu seperti di Gambar) */}
            <div>
              <h3 className="text-sm font-bold text-zinc-300 mb-4">Pilih Alat AI Lainnya</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {toolsList.map((tool) => (
                  <div
                    key={tool.name}
                    onClick={() => setSelectedTool(tool.name)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      selectedTool === tool.name 
                        ? 'bg-zinc-800 border-green-500 shadow-lg shadow-green-900/20' 
                        : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center mb-3 text-sm">⚡</div>
                    <h4 className="text-xs font-bold text-white mb-1">{tool.name}</h4>
                    <p className="text-[10px] text-zinc-400 line-clamp-2">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hasil Klip AI */}
            {clips.length > 0 && (
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl space-y-4">
                <h3 className="text-md font-bold text-green-400">🎬 Hasil Klip AI (Siap Unduh)</h3>
                <div className="space-y-3">
                  {clips.map((clip) => (
                    <div key={clip.id} className="flex justify-between items-center bg-zinc-800/80 p-4 rounded-xl border border-zinc-700">
                      <div>
                        <h4 className="text-xs font-semibold text-white">{clip.title}</h4>
                        <p className="text-[10px] text-zinc-400">Durasi: {clip.duration}</p>
                      </div>
                      <button 
                        onClick={() => alert('Selesaikan pembayaran paket untuk mengunduh!')}
                        className="px-3 py-1.5 bg-green-600 hover:bg-green-500 text-xs font-bold rounded-lg transition"
                      >
                        Unduh
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Menu Harga & Pembayaran BCA */}
        {(activeMenu === 'harga' || activeMenu === 'beranda') && (
          <div className="mt-12 space-y-8 pt-8 border-t border-zinc-800">
            <div>
              <h3 className="text-lg font-bold mb-1">Paket & Langganan AI</h3>
              <p className="text-xs text-zinc-400">Pilih paket terbaik untuk kebutuhan konten kreator Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.keys(planDetails).map((plan) => (
                <div 
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all ${
                    selectedPlan === plan 
                      ? 'bg-zinc-900 border-green-500 shadow-xl' 
                      : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  <h4 className="text-sm font-bold text-green-400 mb-1">{plan}</h4>
                  <p className="text-xl font-extrabold my-2">{planDetails[plan].price}</p>
                  <p className="text-xs text-zinc-400 mb-4">{planDetails[plan].clips}</p>
                  <button className={`w-full py-2 rounded-lg text-xs font-semibold ${selectedPlan === plan ? 'bg-green-600 text-white' : 'bg-zinc-800 text-zinc-300'}`}>
                    {selectedPlan === plan ? 'Paket Dipilih' : 'Pilih Paket'}
                  </button>
                </div>
              ))}
            </div>

            {/* Kotak Pembayaran BCA a.n THANTHAWI */}
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center max-w-xl mx-auto">
              <h4 className="text-sm font-semibold mb-1">Konfirmasi Pembayaran Paket {selectedPlan}</h4>
              <p className="text-xs text-zinc-400">Transfer sebesar <span className="text-white font-bold">{planDetails[selectedPlan].price}</span> ke rekening:</p>
              <p className="text-lg font-bold text-green-400 my-2">BCA: 753-609-2721</p>
              <p className="text-xs text-zinc-400 mb-4">a.n. <span className="text-white font-semibold">THANTHAWI</span></p>
              
              <form onSubmit={handleUploadReceipt} className="space-y-3">
                <input 
                  type="file" 
                  onChange={(e) => setReceiptFile(e.target.files[0])}
                  className="w-full text-xs text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-green-600 file:text-white cursor-pointer bg-zinc-800 rounded-xl p-1"
                />
                <button 
                  type="submit"
                  className="w-full py-2.5 bg-green-600 hover:bg-green-500 text-xs font-bold rounded-xl transition"
                >
                  Kirim Bukti Struk Transfer
                </button>
              </form>
              {uploadStatus && <p className="mt-3 text-green-400 text-xs font-medium">{uploadStatus}</p>}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
