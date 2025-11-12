// import { useState } from 'react'

import logo from './assets/logo.png'
import coffeeBeans from './assets/background-coffee-bean.png'
import arabika2 from './assets/Trije/Arabika/2.jpg'
import classic2 from './assets/Trije/Classic/2.jpg'
import robusta2 from './assets/Trije/Robusta/2.jpg'
import organik2 from './assets/Trije/Organik/2.jpg'
import jahe2 from './assets/Trije/Jahe/2.jpg'
import leftButton from './assets/button-left.png'
import rightButton from './assets/button-right.png'
import krisnaBypass from './assets/krisna-bypass.png'
import krisnaSunsetRoad from './assets/krisna-tuban.png'
import krisnaTuban from './assets/krisna-sunset-road.png'

import whatsapp from './assets/whatsapp.svg'
import facebook from './assets/facebook.svg'

import './App.css'

function App() {
    return (
        <div id="home" className='m-0 p-0 w-full'>
            <header className="flex flex-wrap w-full h-16 bg-[#4b1f0e]">
                <div className="flex items-center pt-[4px] pl-6 w-[220px] h-[60px]">
                    <img src={logo} className='w-[18px]'></img>
                    {/* <h1 className='ml-3 font-montserrat text-white text-2xl'>Trije Bali</h1> */}
                </div>
                <div className="flex flex-wrap items-center justify-center mx-auto gap-0 text-white font-montserrat">
                    <a href="#home"><div className="flex items-center justify-center h-16 w-[80px] transition duration-0 hover:bg-[#431C0C]">Home</div></a>
                    <a href="#produk" className="flex items-center justify-center h-16 w-[90px] transition duration-0 hover:bg-[#431C0C]"><div>Produk</div></a>
                    <a href="#tentang" className="flex items-center justify-center h-16 w-[140px] transition duration-0 hover:bg-[#431C0C]"><div>Tentang Kami</div></a>
                    <a href="#lokasi" className="flex items-center justify-center h-16 w-[80px] transition duration-0 hover:bg-[#431C0C]"><div>Lokasi</div></a>
                    <a href="#kontak" className="flex items-center justify-center h-16 w-[90px] transition duration-0 hover:bg-[#431C0C]"><div>Kontak</div></a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 w-[220px] text-white font-montserrat">
                    <a href="https://www.tokopedia.com/kopitrijebali" target="_blank"><div className="flex items-center justify-center bg-[#be7656] rounded-full w-[180px] h-[35px] transition duration-0 hover:opacity-90">Pesan Sekarang!</div></a>
                </div>
            </header>
            <div className="w-full h-[790px] bg-cover bg-top pt-[300px]" style={{ backgroundImage: `url(${coffeeBeans})` }}>
                <div className="flex items-center justify-center mx-auto pb-[5px] w-[1000px] h-[75px] bg-[#4b1f0e] rounded-2xl">
                    <h2 className="text-5xl text-[#ffffff] font-playfair font-bold">Secangkir Kehangatan, Sejuta Cerita</h2>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <div className="w-[450px] h-[1.5px] bg-white mr-4"></div>
                    <h1 className="mt-1 text-white font-montserrat">Trije Bali</h1>
                    <div className="w-[450px] h-[1.5px] bg-white ml-4"></div>
                </div>
                <div className='absolute bottom-0 w-full h-[107px]'>
                    <svg className="absolute top-0 h-[110px]" viewBox="0 0 1480 110" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ceae97" stroke="#ceae97" stroke-width="3" d="M0,110 L620,0 C670,10 810,10 860,0 L1480,110 Z"></path>
                    </svg>
                </div>
            </div>
            <div id="produk" className="h-[950px] bg-[#ceae97]">
                <h3 className="font-montserrat text-4xl">PRODUK KAMI</h3>
                <div className="flex flex-wrap justify-center gap-8 mt-[60px]">
                    <div className="bg-[#f9e0ce] w-[200px] h-[350px] flex flex-col items-center">
                        <img src={arabika2}></img>
                        <h4 className='mt-[15px] font-montserrat font-bold'>Kopi Arabika</h4>
                        <p className='mt-[15px] font-montserrat text-[13px]'>Kopi dengan rasa <em>fruity</em> yang segar, dan kandungan kafein yang rendah</p>
                    </div>
                    <div className="bg-[#f9e0ce] w-[200px] h-[350px] flex flex-col items-center">
                        <img src={jahe2}></img>
                        <h4 className='mt-[15px] font-montserrat font-bold'>Kopi Jahe</h4>
                        <p className='mt-[15px] font-montserrat text-[13px]'>Perpaduan kopi arabika pilihan dengan aroma dan kehangatan jahe</p>
                    </div>
                    <div className="bg-[#f9e0ce] w-[200px] h-[350px] flex flex-col items-center">
                        <img src={robusta2}></img>
                        <h4 className='mt-[15px] font-montserrat font-bold'>Kopi Robusta</h4>
                        <p className='mt-[15px] font-montserrat text-[13px]'>Perpaduan kandungan kafein yang lebih tinggi dari kopi arabika, dan rasa pahit yang menyegarkan</p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-8 mt-[40px]">
                    <div className="bg-[#f9e0ce] w-[200px] h-[350px] flex flex-col items-center">
                        <img src={classic2}></img>
                        <h4 className='mt-[15px] font-montserrat font-bold'>Kopi Classic</h4>
                        <p className='mt-[15px] font-montserrat text-[13px]'>Kopi robusta yang diolah secara tradisional sebagai warisan budaya</p>
                    </div>
                    <div className="bg-[#f9e0ce] w-[200px] h-[350px] flex flex-col items-center">
                        <img src={organik2}></img>
                        <h4 className='mt-[15px] font-montserrat font-bold'>Kopi Organik</h4>
                        <p className='mt-[15px] font-montserrat text-[13px]'>Hasil dari perkebunan dan pengolahan yang alami</p>
                    </div>
                </div>
            </div>
            <div id="tentang" className="mx-auto h-[310px] w-[1000px] pt-[40px]">
                <h3 className='font-montserrat text-4xl'>TENTANG KAMI</h3>
                <p className='font-montserrat mt-[30px]'>Berawal dari kecintaan kami terhadap cita rasa dan aroma khas kopi Bali, kami percaya bahwa setiap cangkir kopi memiliki cerita tentang asal, rasa, dan kehangatan yang menyatukan.</p>
                <p className='font-montserrat mt-[20px]'>Dari biji kopi pilihan, kami menghadirkan cita rasa autentik dalam setiap kemasan produk kami.</p>
                <p className='font-montserrat mt-[20px]'>Bagi kami, kopi bukan hanya sekadar minuman. Ia adalah cara kami berbagi kehangatan, inspirasi, dan kebersamaan dalam setiap tegukan.</p>
            </div>
            <div id="lokasi" className="bg-[#ceae97] w-full h-[540px] pt-[30px]">
                <h3 className='font-montserrat text-4xl'>LOKASI</h3>
                <p className='font-montserrat mt-[30px]'>Temukan produk kami di pusat oleh-oleh pilihan berikut:</p>
                <div className="flex flex-wrap justify-center gap-[60px] mt-[40px]">
                    <div className='flex items-center h-[300px]'>
                        <div className="bg-white w-[30px] h-[30px] rounded-full">
                            <img src={leftButton}></img>
                        </div>
                    </div>
                    <div className='flex items-center h-[300px]'>
                        <div className="bg-[#f9e0ce] w-[200px] h-[250px] flex flex-col items-center rounded-3xl">
                            <img src={krisnaSunsetRoad} className='w-[200px] h-[100px] object-cover object-center rounded-t-[24px]' />
                            <h4 className="mt-[12px] font-montserrat font-bold text-[13px]">Krisna Sunset Road</h4>
                            <p className='mt-[10px] w-[180px] font-montserrat text-[11px]'>Jl. Sunset Road No.88, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia</p>
                            <a href="https://maps.app.goo.gl/VEYrTR2wEUKfvK7B9" target='_blank'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-black mt-[13px] transition duration-0 hover:opacity-50"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="bg-[#f9e0ce] w-[240px] h-[300px] flex flex-col items-center rounded-3xl">
                        <img src={krisnaBypass} className='w-[240px] h-[120px] object-cover object-center rounded-t-[24px]' />
                        <h4 className='mt-[13px] font-montserrat font-bold text-[15px]'>Krisna Bypass Ngurah Rai</h4>
                        <p className='mt-[10px] w-[180px] font-montserrat text-[13px]'>Jl. Bypass Ngurah Rai, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia</p>
                        <a href="https://maps.app.goo.gl/zKr8rECCLbfbt4GL9" target='_blank'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 text-black mt-[13px] transition duration-0 hover:opacity-50"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className='flex items-center h-[300px]'>
                        <div className="bg-[#f9e0ce] w-[200px] h-[250px] flex flex-col items-center rounded-3xl">
                            <img src={krisnaTuban} className='w-[200px] h-[100px] object-cover object-center rounded-t-[24px]' />
                            <h4 className='mt-[12px] font-montserrat font-bold text-[13px]'>Rama Krisna</h4>
                            <p className='mt-[10px] w-[180px] font-montserrat text-[11px]'>Jl. Raya Tuban No.2X, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia</p>
                            <a href="https://maps.app.goo.gl/v4rXJ1bdeaJiu2VJA" target='_blank'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 text-black mt-[13px] transition duration-0 hover:opacity-50"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='flex items-center h-[300px]'>
                        <div className="flex items-center justify-center bg-white w-[30px] h-[30px] rounded-full">
                            <img src={rightButton}></img>
                        </div>
                    </div>
                </div>
            </div>
            <footer id="kontak" className='bg-[#4b1f0e] pt-[10px] w-full h-[100px]'>
                <h3 className='font-montserrat text-2xl text-white'>Kontak</h3>
                <div className="flex items-center justify-center pt-[15px]">
                    <a href="https://www.facebook.com/kopitrijebali" target='_blank'>
                        <span className='flex items-center justify-center gap-3 text-white transition duration-0 hover:opacity-60'>
                            <img src={facebook} className='w-4 h-4 invert'></img>
                            Kopi Trije Bali
                        </span>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default App
