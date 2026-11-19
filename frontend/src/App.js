import React, { useState } from 'react';
export default function App(){
const [page,setPage]=useState('home');
const [link,setLink]=useState('');
const [picked,setPicked]=useState(null);
const [loading,setLoading]=useState(false);
const [paket,setPaket]=useState('GRATIS');
const [kredit,setKredit]=useState(2);
const [totalKredit,setTotalKredit]=useState(2);
const [isAdmin,setIsAdmin]=useState(false);
const [ae,setAe]=useState('');
const [ap,setAp]=useState('');
const [tab,setTab]=useState('dashboard');
const [sub,setSub]=useState('Mau bikin konten viral? Pakai AI aja!');
const [subOn,setSubOn]=useState(true);
const [speed,setSpeed]=useState(1);
const [pos,setPos]=useState(35);
const [aw,setAw]=useState(2);
const [be,setBe]=useState(false);
const neon='#00e5ff',bg='#050a1e',card='#0a1226';
const AE='tawitan144@gmail.com',AP='1234567890';
const [users,setUsers]=useState([
{id:1,nama:'Budi Santoso',wa:'081234567890',paket:'10 CLIP',kredit:8,total:10,bayar:'Rp 70.000',status:'Lunas',dl:2,tgl:'19 Nov'},
{id:2,nama:'Siti Rahma',wa:'081298765432',paket:'UNLIMITED',kredit:999,total:999,bayar:'Rp 149.000',status:'Lunas',dl:15,tgl:'18 Nov'},
{id:3,nama:'Andi Pratama',wa:'081355512345',paket:'AMBASSADOR',kredit:185,total:200,bayar:'Gratis',status:'Aktif',dl:15,tgl:'18 Nov'},
{id:4,nama:'Dewi Lestari',wa:'081377788899',paket:'GRATIS',kredit:1,total:2,bayar:'Gratis',status:'Aktif',dl:1,tgl:'19 Nov'},
{id:5,nama:'Rizky Fauzi',wa:'081211122233',paket:'10 CLIP',kredit:0,total:10,bayar:'Rp 70.000',status:'Habis',dl:10,tgl:'17 Nov'},
]);
const clips=[
{id:1,label:'Hook Kuat',title:'Tips AI 2024 yang Wajib Kamu Tau',time:'00:18',img:'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500',video:'https://cdn.coverr.co/videos/coverr-typing-on-a-keyboard-1584/1080p.mp4',tr:['Halo','guys','ini','tips','AI','2024']},
{id:2,label:'Trending',title:'Cara Edit Video Pakai AI Cepat',time:'00:32',img:'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500',video:'https://cdn.coverr.co/videos/coverr-editing-video-on-a-laptop-1600/1080p.mp4',tr:['Cara','edit','video','pakai','AI']},
{id:3,label:'Viral',title:'Rahasia Konten FYP di TikTok',time:'01:10',img:'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500',video:'https://cdn.coverr.co/videos/coverr-using-a-smartphone-1579/1080p.mp4',tr:['Rahasia','FYP','TikTok']},
{id:4,label:'Paling Ditonton',title:'Prompt AI untuk Konten Edukasi',time:'00:27',img:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500',video:'https://cdn.coverr.co/videos/coverr-working-on-a-laptop-1587/1080p.mp4',tr:['Prompt','AI','ini','bikin']},
{id:5,label:'Rekomendasi',title:'Storytelling 30 Detik Hook Kuat',time:'00:45',img:'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500',video:'https://cdn.coverr.co/videos/coverr-a-woman-recording-a-video-1590/1080p.mp4',tr:['Storytelling','30','detik']},
];
const search=()=>{if(!link)return alert('Tempel link dulu!');setLoading(true);setTimeout(()=>{setLoading(false);setPage('clips')},800)};
const beli=(n,j)=>{setPaket(n);setKredit(j);setTotalKredit(j);alert('Beli '+n+' Berhasil!');setPage('clips')};
const dl=()=>{if(paket!=='UNLIMITED'&&kredit<=0){alert('Kredit habis!');setPage('paket');return}if(paket!=='UNLIMITED')setKredit(kredit-1);alert('Download Berhasil!')};
const login=()=>{if(ae.trim().toLowerCase()===AE&&ap===AP){setIsAdmin(true);setPage('admin');alert('Selamat datang, Tawitan!')}else alert('Email / Password salah!')};
const tambah=(id,j)=>{setUsers(users.map(u=>u.id===id?{...u,kredit:u.kredit+j,total:u.total+j}:u));alert('Tambah '+j+' kredit!')};
const reset=(id)=>{setUsers(users.map(u=>u.id===id?{...u,kredit:0}:u));alert('Reset jadi 0')};
