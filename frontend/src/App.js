import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
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
      setSuccessMsg('Video berhasil dianalisis oleh AI! Silakan pilih paket dan lakukan pembayaran untuk mengunduh klip.');
      // Simulasi hasil klip video yang dihasilkan AI
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header & Tombol Admin */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI Video Clipper SaaS
            </h1>
            <p className="text-gray-400 text-sm mt-1">Ubah video panjang YouTube jadi klip viral otomatis.</p>
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
                  ✅ Akses Admin Diterima! Daftar pengguna yang mengunggah struk BCA akan muncul di sini.
                </div>
              ) : (
                <p className="text-xs text-gray-500">Masukkan email yang benar untuk membuka panel kontrol.</p>
              )}
            </div>
          </div>
        )}

        {/* Input URL Section */}
        <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl shadow-xl backdrop-blur-md mb-8">
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
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-semibold rounded-xl shadow-lg transition-all duration-200 text-sm"
            >
              {loading ? 'AI Sedang Memotong Video...' : 'Mulai Potong Video (AI)'}
            </button>
          </form>
          {successMsg && <p className="mt-4 text-green-400 text-center text-sm font-medium">{successMsg}</p>}
        </div>

        {/* Hasil Klip AI (Akan muncul setelah diproses) */}
        {clips.length > 0 && (
          <div className="bg-gray-900 border border-purple-500/40 p-6 rounded-2xl mb-8 shadow-xl">
            <h3 className="text-lg font-bold text-purple-400 mb-4">🎬 Hasil Klip AI (Siap Unduh)</h3>
            <div className="space-y-3">
              {clips.map((clip) => (
                <div key={clip.id} className="flex justify-between items-center bg-gray-800/80 p-4 rounded-xl border border-gray-700">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{clip.title}</h4>
                    <p className="text-xs text-gray-400">Durasi: {clip.duration}</p>
                  </div>
                  <button 
                    onClick={() => alert('Silakan selesaikan pembayaran paket terlebih dahulu untuk mengunduh klip tanpa watermark!')}
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
