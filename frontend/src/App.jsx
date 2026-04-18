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
import BlogPost15 from './pages/BlogPost15.jsx'
import BlogPost16 from './pages/BlogPost16.jsx'
import BlogPost17 from './pages/BlogPost17.jsx'
import BlogPost18 from './pages/BlogPost18.jsx'
import BlogPost19 from './pages/BlogPost19.jsx'
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
import Certification from './pages/Certification.jsx'

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
        <Route path='/certification' element={<Certification />} />
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
        <Route path='/blog/remote-diagnostics-2026' element={<BlogPost15 />} />
        <Route path='/blog/specialized-coatings-surgical-metallurgy' element={<BlogPost16 />} />
        <Route path='/blog/medical-grade-disposables-icu' element={<BlogPost17 />} />
        <Route path='/blog/future-of-wound-care-2026' element={<BlogPost18 />} />
        <Route path='/blog/ophthalmic-micro-surgical-precision' element={<BlogPost19 />} />
        <Route path='/blogs' element={<BlogsPage />} />

        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/riyadh' element={<SeoPage/>} />
        <Route path='/jeddah' element={<JeddahPage/>} />
        <Route path='/mecca' element={<MeccaPage/>} />
        <Route path='/medina' element={<MedinaPage/>} />
        <Route path='/dammam' element={<DammamPage/>} />
        <Route path='/market-area' element={<MarketArea/>} />
        <Route path='/al-khobar' element={<KhobarPage/>} />
        <Route path='/dhahran' element={<DhahranPage/>} />
        <Route path='/taif' element={<TaifPage/>} />
        <Route path='/jubail' element={<JubailPage/>} />
        <Route path='/al-ahsa' element={<AlAhsaPage/>} />
        <Route path='/qatif' element={<QatifPage/>} />
        <Route path='/ras-tanura' element={<RasTanuraPage/>} />
        <Route path='/abqaiq' element={<AbqaiqPage/>} />
        <Route path='/khafji' element={<KhafjiPage/>} />
        <Route path='/al-kharj' element={<AlKharjPage/>} />
        <Route path='/al-majmaah' element={<AlMajmaahPage/>} />
        <Route path='/al-zulfi' element={<AlZulfiPage/>} />
        <Route path='/shaqra' element={<ShaqraPage/>} />
        <Route path='/afif' element={<AfifPage/>} />
        <Route path='/dawadmi' element={<DawadmiPage/>} />
        <Route path='/wadi-ad-dawasir' element={<WadiAdDawasirPage/>} />
        <Route path='/rabigh' element={<RabighPage/>} />
        <Route path='/al-lith' element={<AlLithPage/>} />
        <Route path='/al-qunfudhah' element={<AlQunfudhahPage/>} />
        <Route path='/yanbu' element={<YanbuPage/>} />
        <Route path='/al-ula' element={<AlUlaPage/>} />
        <Route path='/badr' element={<BadrPage/>} />
        <Route path='/khaybar' element={<KhaybarPage/>} />
        <Route path='/hubuna' element={<HubunaPage/>} />
        <Route path='/tabuk' element={<TabukPage/>} />
        <Route path='/duba' element={<DubaPage/>} />
        <Route path='/tayma' element={<TaymaPage/>} />
        <Route path='/haql' element={<HaqlPage/>} />
        <Route path='/hail' element={<HailPage/>} />
        <Route path='/baqaa' element={<BaqaaPage/>} />
        <Route path='/ghazalah' element={<GhazalahPage/>} />
        <Route path='/arar' element={<ArarPage/>} />
        <Route path='/rafha' element={<RafhaPage/>} />
        <Route path='/turaif' element={<TuraifPage/>} />
        <Route path='/buraydah' element={<BuraydahPage/>} />
        <Route path='/unaizah' element={<UnaizahPage />} />
        <Route path='/ar-rass' element={<ArRassPage />} />
        <Route path='/al-bukayriyah' element={<AlBukayriyahPage />} />
        <Route path='/sakaka' element={<SakakaPage />} />
        <Route path='/qurayyat' element={<QurayyatPage />} />
        <Route path='/dumat-al-jandal' element={<DumatAlJandalPage />} />
        <Route path='/thuwal' element={<ThuwalPage />} />
        <Route path='/turabah' element={<TurabahPage />} />
        <Route path='/ranyah' element={<RanyahPage />} />
        <Route path='/al-namas' element={<AlNamasPage />} />
        <Route path='/tanomah' element={<TanomahPage />} />
        <Route path='/baljurashi' element={<BaljurashiPage />} />
        <Route path='/al-baha' element={<AlBahaPage />} />
        <Route path='/al-mithnab' element={<AlMithnabPage />} />



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