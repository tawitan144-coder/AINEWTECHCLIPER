import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Standart');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleProcess = (e) => {
    e.preventDefault();
    if (!url) {
      alert('Masukkan link YouTube terlebih dahulu!');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMsg('Video berhasil diproses! Silakan lakukan pembayaran untuk mengunduh klip.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            AI Video Clipper SaaS
          </h1>
          <p className="text-gray-400 mt-2">Ubah video panjang YouTube menjadi ratusan klip viral otomatis dengan AI.</p>
        </header>

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
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-white"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-semibold rounded-xl shadow-lg transition-all duration-200"
            >
              {loading ? 'Memproses AI Clipper...' : 'Mulai Potong Video (AI)'}
            </button>
          </form>
          {successMsg && <p className="mt-4 text-green-400 text-center font-medium">{successMsg}</p>}
        </div>

        {/* Pricing / Credit Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-purple-400">Standart</h3>
            <p className="text-2xl font-extrabold my-2">Rp 30.000</p>
            <p className="text-sm text-gray-400 mb-4">10 Klip Viral + Auto Subtitle</p>
            <button onClick={() => setSelectedPlan('Standart')} className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium">Pilih Paket</button>
          </div>
          <div className="bg-gray-900 border-2 border-purple-500 p-6 rounded-2xl relative shadow-purple-900/20 shadow-xl">
            <span className="absolute -top-3 right-4 bg-purple-600 text-xs px-2 py-1 rounded-full font-bold">TERPOPULER</span>
            <h3 className="text-lg font-bold text-purple-400">Pro</h3>
            <p className="text-2xl font-extrabold my-2">Rp 100.000</p>
            <p className="text-sm text-gray-400 mb-4">50 Klip Viral + Auto Post</p>
            <button onClick={() => setSelectedPlan('Pro')} className="w-full py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium">Pilih Paket</button>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-purple-400">Golden</h3>
            <p className="text-2xl font-extrabold my-2">Rp 250.000</p>
            <p className="text-sm text-gray-400 mb-4">100 Klip + Prioritas Server</p>
            <button onClick={() => setSelectedPlan('Golden')} className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium">Pilih Paket</button>
          </div>
        </div>

        {/* Payment Info (BCA) */}
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
          <h4 className="text-md font-semibold text-gray-200 mb-2">Informasi Pembayaran BCA</h4>
          <p className="text-sm text-gray-400">Silakan transfer sesuai paket ({selectedPlan}) ke rekening:</p>
          <p className="text-xl font-bold text-purple-400 my-2">BCA: 753-609-2721</p>
          <p className="text-sm text-gray-400">a.n. <span className="text-white font-semibold">THANTHAWI</span></p>
          <p className="text-xs text-red-400 mt-3">*Kebijakan: Layanan bersifat non-refund setelah diproses.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
