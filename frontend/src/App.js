import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Standart');
  const [subtitleStyle, setSubtitleStyle] = useState('Modern (Kuning/Hitam)');
  const [hookStyle, setHookStyle] = useState('Emosional / Pertanyaan');
  const [clipDuration, setClipDuration] = useState('30 Detik');
  
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

  const handleProcess = (e) => {
    e.preventDefault();
    if (!url) {
      alert('Masukkan link YouTube terlebih dahulu!');
      return;
    }
    setLoading(true);
    setSuccessMsg('');
    setClips([]);

    setTimeout(() => {
      setLoading(false);
      setSuccessMsg(`AI berhasil memotong video menggunakan Hook "${hookStyle}" & Subtitle "${subtitleStyle}"!`);
      setClips([
        { id: 1, title: 'Klip 1: Poin Utama & Hook Kuat', duration: clipDuration },
        { id: 2, title: 'Klip 2: Pembahasan Menarik', duration: clipDuration },
        { id: 3, title: 'Klip 3: Kesimpulan & Call to Action', duration: clipDuration }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header & Tombol Admin */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI Video Clipper SaaS Pro
            </h1>
            <p className="text-gray-400 text-sm mt-1">Platform Otomasi Klip Viral dengan Kustomisasi AI.</p>
          </div>
          <button 
            onClick={() => setIsAdminOpen(!isAdminOpen)}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-xs font-semibold rounded-lg border border-gray-700 transition"
          >
            {isAdminOpen ? 'Tutup Admin' : '🔑 Login Admin'}
          </button>
        </header>

        {/* Panel Login Admin */}
        {isAdminOpen && (
          <div className="bg-gray-900 border border-purple-500/50 p-5 rounded-2xl mb-8 shadow-lg">
            <h3 className="text-md font-bold text-purple-400 mb-2">Panel Admin Verifikasi</h3>
            <p className="text-xs text-gray-400 mb-3">Login khusus pengelola: tawitan144@gmail.com</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Masukkan email admin..."
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white"
              />
              {adminEmail === 'tawitan144@gmail.com' ? (
                <div className="p-3 bg-purple-950/40 border border-purple-800 rounded-lg text-xs text-purple-300">
                  ✅ Akses Admin Diterima! Daftar pengguna yang mengunggah struk BCA aktif.
                </div>
              ) : (
                <p className="text-xs text-gray-500">Masukkan email yang benar untuk membuka panel kontrol.</p>
              )}
            </div>
          </div>
        )}

        {/* Input URL & Tool Clipper Lengkap */}
        <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-xl backdrop-blur-md mb-8 space-y-4">
          <form onSubmit={handleProcess} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Link Video YouTube</label>
              <input
                type="text"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-white text-sm"
              />
            </div>

            {/* Pilihan Tool Clipper & Kustomisasi AI */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Pilih Gaya Hook</label>
                <select 
                  value={hookStyle} 
                  onChange={(e) => setHookStyle(e.target.value)}
                  className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-xs text-white"
                >
                  <option>Emosional / Pertanyaan</option>
                  <option>Fakta Mengejutkan</option>
                  <option>Kontroversial / Debat</option>
                  <option>Edukasi Langsung</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Gaya Subtitle AI</label>
                <select 
                  value={subtitleStyle} 
                  onChange={(e) => setSubtitleStyle(e.target.value)}
                  className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-xs text-white"
                >
                  <option>Modern (Kuning/Hitam - Alex Hormozi)</option>
                  <option>Minimalis Clean (Putih)</option>
                  <option>Neon Glow (Ungu/Pink)</option>
                  <option>Netflix Style</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Durasi Target Klip</label>
                <select 
                  value={clipDuration} 
                  onChange={(e) => setClipDuration(e.target.value)}
                  className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-xl text-xs text-white"
                >
                  <option>30 Detik (Shorts/Reels)</option>
                  <option>60 Detik (TikTok/IG)</option>
                  <option>90 Detik (Deep Dive)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-semibold rounded-xl shadow-lg transition-all duration-200 text-sm mt-4"
            >
              {loading ? 'AI Sedang Menganalisis & Meracik Klip...' : '🚀 Mulai Potong Video dengan AI'}
            </button>
          </form>
          {successMsg && <p className="mt-2 text-green-400 text-center text-xs font-medium">{successMsg}</p>}
        </div>

        {/* Hasil Klip & Pemutar Video (Video Player Preview) */}
        {clips.length > 0 && (
          <div className="bg-gray-900 border border-purple-500/40 p-6 rounded-2xl mb-8 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-purple-400">🎬 Hasil Klip AI & Pemutar Pratinjau</h3>
            
            {/* Simulasi Video Player dengan Subtitle & Hook */}
            <div className="relative w-full aspect-[9/16] md:aspect-video bg-black rounded-xl overflow-hidden border border-gray-800 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 flex flex-col justify-between p-4">
                <span className="bg-purple-600/80 text-white text-[10px] px-2.5 py-1 rounded-full w-max font-bold">
                  Hook: {hookStyle}
                </span>
                <div className="text-center mb-6">
                  <span className="bg-black/70 text-yellow-300 px-3 py-1.5 rounded-lg text-sm md:text-lg font-extrabold tracking-wide shadow-lg border border-yellow-500/30">
                    ✨ [Teks Subtitle Bergaya "{subtitleStyle}"]
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-xs">Pratinjau Video Vertikal / Horisontal AI Clipper</p>
            </div>

            {/* Daftar Klip Siap Unduh */}
            <div className="space-y-3">
              {clips.map((clip) => (
                <div key={clip.id} className="flex justify-between items-center bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{clip.title}</h4>
                    <p className="text-xs text-gray-400">Durasi: {clip.duration} • Subtitle & Hook Diterapkan</p>
                  </div>
                  <button 
                    onClick={() => alert('Selesaikan pembayaran paket di bawah untuk mengunduh seluruh klip tanpa watermark!')}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-xs font-bold rounded-lg transition"
                  >
                    Unduh Klip
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing / Credit Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Object.keys(planDetails).map((plan) => (
            <div 
              key={plan}
              onClick={() => setSelectedPlan(plan)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-200 ${
                selectedPlan === plan 
                  ? 'bg-gray-900 border-purple-500 shadow-purple-900/30 shadow-xl scale-[1.02]' 
                  : 'bg-gray-900/60 border-gray-800 hover:border-gray-700'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-purple-400">{plan}</h3>
                {selectedPlan === plan && <span className="bg-purple-600 text-[10px] px-2 py-0.5 rounded-full font-bold">DIPILIH</span>}
              </div>
              <p className="text-2xl font-extrabold my-2">{planDetails[plan].price}</p>
              <p className="text-xs text-gray-400 mb-4">{planDetails[plan].clips}</p>
              <button className={`w-full py-2 rounded-lg text-xs font-semibold ${selectedPlan === plan ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300'}`}>
                {selectedPlan === plan ? 'Paket Aktif' : 'Pilih Paket'}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Info & Upload Struk BCA */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center mb-8">
          <h4 className="text-md font-semibold text-gray-200 mb-2">Pembayaran Paket {selectedPlan}</h4>
          <p className="text-xs text-gray-400">Silakan transfer sebesar <span className="text-white font-bold">{planDetails[selectedPlan].price}</span> ke rekening:</p>
          <p className="text-xl font-bold text-purple-400 my-2">BCA: 753-609-2721</p>
          <p className="text-xs text-gray-400 mb-4">a.n. <span className="text-white font-semibold">THANTHAWI</span></p>
          
          <div className="inline-block bg-white p-3 rounded-xl mb-4 shadow">
            <div className="w-28 h-28 bg-gray-900 flex items-center justify-center text-[10px] text-white text-center p-2 rounded">
              [BARCODE QRIS / BCA]
            </div>
          </div>

          <form onSubmit={handleUploadReceipt} className="max-w-md mx-auto mt-2 space-y-3">
            <div className="text-left">
              <label className="block text-xs font-medium text-gray-300 mb-1">Unggah Struk Bukti Transfer:</label>
              <input 
                type="file" 
                onChange={(e) => setReceiptFile(e.target.files[0])}
                className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-500 cursor-pointer bg-gray-800 rounded-xl p-1"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-2.5 bg-green-600 hover:bg-green-500 text-xs font-bold rounded-xl transition shadow"
            >
              Kirim Bukti Pembayaran
            </button>
          </form>
          {uploadStatus && <p className="mt-3 text-green-400 text-xs font-medium">{uploadStatus}</p>}
        </div>

      </div>
    </div>
  );
}

export default App;
