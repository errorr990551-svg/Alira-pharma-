import React from 'react'
import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Navbar from './components/common/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/common/Footer.jsx'
import About from './pages/About.jsx'
import BlogPost from './pages/BlogPost.jsx'
import BlogPost2 from './pages/BlogPost2.jsx'
import BlogPost3 from './pages/BlogPost3.jsx'
import BlogPost4 from './pages/BlogPost4.jsx'
import BlogPost5 from './pages/BlogPost5.jsx'
import BlogPost6 from './pages/BlogPost6.jsx'
import BlogPost7 from './pages/BlogPost7.jsx'
import BlogPost8 from './pages/BlogPost8.jsx'
import BlogPost9 from './pages/BlogPost9.jsx'
import BlogPost10 from './pages/BlogPost10.jsx'
import BlogPost11 from './pages/BlogPost11.jsx'
import BlogPost12 from './pages/BlogPost12.jsx'
import BlogPost13 from './pages/BlogPost13.jsx'
import BlogPost14 from './pages/BlogPost14.jsx'
import BlogsPage from './pages/BlogsPage.jsx'

import Category1 from './pages/products/Category1.jsx'
import Category2 from './pages/products/Category2.jsx'
import Category3 from './pages/products/Category3.jsx'
import Category4 from './pages/products/Category4.jsx'
import Category5 from './pages/products/Category5.jsx'
import Category6 from './pages/products/Category6.jsx'
import Category7 from './pages/products/Category7.jsx'
import Category8 from './pages/products/Category8.jsx'
import Category9 from './pages/products/Category9.jsx'
import Category10 from './pages/products/Category10.jsx'
import Category11 from './pages/products/Category11.jsx'
import Category12 from './pages/products/Category12.jsx'
import ContactUs from './pages/ContactUs.jsx'
import PopUp from './components/common/PopUp.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import SeoPage from './pages/SeoPage.jsx'
import JeddahPage from './pages/JeddahPage.jsx'
import MeccaPage from './pages/MeccaPage.jsx'
import MedinaPage from './pages/MedinaPage.jsx'
import DammamPage from './pages/DammamPage.jsx'
import MarketArea from './pages/MarketArea.jsx'
import KhobarPage from './pages/KhobarPage.jsx'
import DhahranPage from './pages/DhahranPage.jsx'
import TaifPage from './pages/TaifPage.jsx'
import JubailPage from './pages/JubailPage.jsx'
import AlAhsaPage from './pages/AlAhsaPage.jsx'
import QatifPage from './pages/QatifPage.jsx'
import RasTanuraPage from './pages/RasTanuraPage.jsx'
import AbqaiqPage from './pages/AbqaiqPage.jsx'
import KhafjiPage from './pages/KhafjiPage.jsx'
import AlKharjPage from './pages/AlKharjPage.jsx'
import AlMajmaahPage from './pages/AlMajmaahPage.jsx'
import AlZulfiPage from './pages/AlZulfiPage.jsx'
import ShaqraPage from './pages/ShaqraPage.jsx'
import AfifPage from './pages/AfifPage.jsx'
import DawadmiPage from './pages/DawadmiPage.jsx'
import WadiAdDawasirPage from './pages/WadiAdDawasirPage.jsx'
import RabighPage from './pages/RabighPage.jsx'
import AlLithPage from './pages/AlLithPage.jsx'
import AlQunfudhahPage from './pages/AlQunfudhahPage.jsx'
import YanbuPage from './pages/YanbuPage.jsx'
import AlUlaPage from './pages/AlUlaPage.jsx'
import BadrPage from './pages/BadrPage.jsx'
import KhaybarPage from './pages/KhaybarPage.jsx'
import HubunaPage from './pages/HubunaPage.jsx'
import TabukPage from './pages/TabukPage.jsx'
import DubaPage from './pages/DubaPage.jsx'
import TaymaPage from './pages/TaymaPage.jsx'
import HaqlPage from './pages/HaqlPage.jsx'
import HailPage from './pages/HailPage.jsx'
import BaqaaPage from './pages/BaqaaPage.jsx'
import GhazalahPage from './pages/GhazalahPage.jsx'
import ArarPage from './pages/ArarPage.jsx'
import RafhaPage from './pages/RafhaPage.jsx'
import TuraifPage from './pages/TuraifPage.jsx'
import BuraydahPage from './pages/BuraydahPage.jsx'
import UnaizahPage from './pages/UnaizahPage.jsx'
import ArRassPage from './pages/ArRassPage.jsx'
import AlBukayriyahPage from './pages/AlBukayriyahPage.jsx'
import SakakaPage from './pages/SakakaPage.jsx'
import QurayyatPage from './pages/QurayyatPage.jsx'
import DumatAlJandalPage from './pages/DumatAlJandalPage.jsx'
import ThuwalPage from './pages/ThuwalPage.jsx'
import TurabahPage from './pages/TurabahPage.jsx'
import RanyahPage from './pages/RanyahPage.jsx'
import AlNamasPage from './pages/AlNamasPage.jsx'
import TanomahPage from './pages/TanomahPage.jsx'
import BaljurashiPage from './pages/BaljurashiPage.jsx'
import AlBahaPage from './pages/AlBahaPage.jsx'
import AlMithnabPage from './pages/AlMithnabPage.jsx'

function App() {
  return (
    <div>
      <Toaster 
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: '16px',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          success: {
            duration: 4000,
            style: {
              background: '#0d9488', // teal-600
              color: '#fff',
            },
          },
          error: {
            duration: 5000,
            style: {
              background: '#ef4444', // red-500
              color: '#fff',
            },
          },
        }}
      />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/blog/ent-neuro-surgical-tools' element={<BlogPost/>} />
        <Route path='/blog/india-uae-cepa-zero-duty-medical-imports-dubai' element={<BlogPost2/>} />
        <Route path='/blog/sourcing-medical-grade-stainless-steel-instruments' element={<BlogPost3/>} />
        <Route path='/blog/benefits-of-medical-oem-partnerships-2026' element={<BlogPost4/>} />
        <Route path='/blog/future-of-infection-control-2026' element={<BlogPost5/>} />
        <Route path='/blog/medical-logistics-2026' element={<BlogPost6/>} />
        <Route path='/blog/emergency-trauma-tools-2026' element={<BlogPost7/>} />
        <Route path='/blog/surgical-instrument-sterilization-guide' element={<BlogPost8/>} />
        <Route path='/blog/surgical-precision-2026' element={<BlogPost9/>} />
        <Route path='/blog/surgical-robotics-2026' element={<BlogPost10/>} />
        <Route path='/blog/sustainable-medical-supplies-2026' element={<BlogPost11/>} />
        <Route path='/blog/diagnostic-precision-2026' element={<BlogPost12/>} />
        <Route path='/blog/pediatric-instruments-2026' element={<BlogPost13/>} />
        <Route path='/blog/medical-accessibility-2026' element={<BlogPost14/>} />
        <Route path='/blogs' element={<BlogsPage />} />

        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/Riyadh' element={<SeoPage/>} />
        <Route path='/Jeddah' element={<JeddahPage/>} />
        <Route path='/Mecca' element={<MeccaPage/>} />
        <Route path='/Medina' element={<MedinaPage/>} />
        <Route path='/Dammam' element={<DammamPage/>} />
        <Route path='/market-area' element={<MarketArea/>} />
        <Route path='/Al-Khobar' element={<KhobarPage/>} />
        <Route path='/Dhahran' element={<DhahranPage/>} />
        <Route path='/Taif' element={<TaifPage/>} />
        <Route path='/Jubail' element={<JubailPage/>} />
        <Route path='/Al-Ahsa' element={<AlAhsaPage/>} />
        <Route path='/Qatif' element={<QatifPage/>} />
        <Route path='/Ras-Tanura' element={<RasTanuraPage/>} />
        <Route path='/Abqaiq' element={<AbqaiqPage/>} />
        <Route path='/Khafji' element={<KhafjiPage/>} />
        <Route path='/Al-Kharj' element={<AlKharjPage/>} />
        <Route path='/Al-Majmaah' element={<AlMajmaahPage/>} />
        <Route path='/Al-Zulfi' element={<AlZulfiPage/>} />
        <Route path='/Shaqra' element={<ShaqraPage/>} />
        <Route path='/Afif' element={<AfifPage/>} />
        <Route path='/Dawadmi' element={<DawadmiPage/>} />
        <Route path='/Wadi-ad-Dawasir' element={<WadiAdDawasirPage/>} />
        <Route path='/Rabigh' element={<RabighPage/>} />
        <Route path='/Al-Lith' element={<AlLithPage/>} />
        <Route path='/Al-Qunfudhah' element={<AlQunfudhahPage/>} />
        <Route path='/Yanbu' element={<YanbuPage/>} />
        <Route path='/Al-Ula' element={<AlUlaPage/>} />
        <Route path='/Badr' element={<BadrPage/>} />
        <Route path='/Khaybar' element={<KhaybarPage/>} />
        <Route path='/Hubuna' element={<HubunaPage/>} />
        <Route path='/Tabuk' element={<TabukPage/>} />
        <Route path='/Duba' element={<DubaPage/>} />
        <Route path='/Tayma' element={<TaymaPage/>} />
        <Route path='/Haql' element={<HaqlPage/>} />
        <Route path='/Hail' element={<HailPage/>} />
        <Route path='/Baqaa' element={<BaqaaPage/>} />
        <Route path='/Ghazalah' element={<GhazalahPage/>} />
        <Route path='/Arar' element={<ArarPage/>} />
        <Route path='/Rafha' element={<RafhaPage/>} />
        <Route path='/Turaif' element={<TuraifPage/>} />
        <Route path='/Buraydah' element={<BuraydahPage/>} />
        <Route path='/Unaizah' element={<UnaizahPage />} />
        <Route path='/Ar-Rass' element={<ArRassPage />} />
        <Route path='/Al-Bukayriyah' element={<AlBukayriyahPage />} />
        <Route path='/Sakaka' element={<SakakaPage />} />
        <Route path='/Qurayyat' element={<QurayyatPage />} />
        <Route path='/Dumat-Al-Jandal' element={<DumatAlJandalPage />} />
        <Route path='/Thuwal' element={<ThuwalPage />} />
        <Route path='/Turabah' element={<TurabahPage />} />
        <Route path='/Ranyah' element={<RanyahPage />} />
        <Route path='/Al-Namas' element={<AlNamasPage />} />
        <Route path='/Tanomah' element={<TanomahPage />} />
        <Route path='/Baljurashi' element={<BaljurashiPage />} />
        <Route path='/Al-Baha' element={<AlBahaPage />} />
        <Route path='/Al-Mithnab' element={<AlMithnabPage />} />



        <Route path="/products/surgical-instruments/:productId" element={<Category1 />} />
        <Route path="/products/surgical-instruments" element={<Category1 />} />

        <Route path="/products/retractors-elevators/:productId" element={<Category2 />} />
        <Route path="/products/retractors-elevators" element={<Category2 />} />

        <Route path="/products/bone-neuro/:productId" element={<Category3 />} />
        <Route path="/products/bone-neuro" element={<Category3 />} />

        <Route path="/products/ent-oral/:productId" element={<Category4 />} />
        <Route path="/products/ent-oral" element={<Category4 />} />

        <Route path="/products/surgical-blades/:productId" element={<Category5 />} />
        <Route path="/products/surgical-blades" element={<Category5 />} />

        <Route path="/products/trays-utility/:productId" element={<Category6 />} />
        <Route path="/products/trays-utility" element={<Category6 />} />

        <Route path="/products/gloves/:productId" element={<Category7 />} />
        <Route path="/products/gloves" element={<Category7 />} />
        
        <Route path="/products/ppe/:productId" element={<Category8 />} />
        <Route path="/products/ppe" element={<Category8 />} />

        <Route path="/products/drapes-gowns/:productId" element={<Category9 />} />
        <Route path="/products/drapes-gowns" element={<Category9 />} />

        <Route path="/products/wound-care/:productId" element={<Category10 />} />
        <Route path="/products/wound-care" element={<Category10 />} />

        <Route path="/products/disposables-iv/:productId" element={<Category11 />} />
        <Route path="/products/disposables-iv" element={<Category11 />} />
        
        <Route path="/products/medical-device/:productId" element={<Category12 />} />
        <Route path="/products/medical-device" element={<Category12 />} />
        
      </Routes>
      <Footer />
    </div>
      
    
    
  )
}

export default App