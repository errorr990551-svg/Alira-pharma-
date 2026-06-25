import React from 'react';
import Navbar from './components/common/Navbar.jsx'
import Footer from './components/common/Footer.jsx'
import SEOHelper from './components/common/SEOHelper.jsx'
import PopUp from './components/common/PopUp.jsx'
import ScrollToTop from './components/common/ScrollToTop.jsx'
import CookieConsent from './components/common/CookieConsent.jsx'

// Lazy-loaded pages for bundle size optimization (Issue 24)
const Home = React.lazy(() => import('./pages/Home.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const BlogPost = React.lazy(() => import('./pages/BlogPost.jsx'));
const BlogPost2 = React.lazy(() => import('./pages/BlogPost2.jsx'));
const BlogPost3 = React.lazy(() => import('./pages/BlogPost3.jsx'));
const BlogPost4 = React.lazy(() => import('./pages/BlogPost4.jsx'));
const BlogPost5 = React.lazy(() => import('./pages/BlogPost5.jsx'));
const BlogPost6 = React.lazy(() => import('./pages/BlogPost6.jsx'));
const BlogPost7 = React.lazy(() => import('./pages/BlogPost7.jsx'));
const BlogPost8 = React.lazy(() => import('./pages/BlogPost8.jsx'));
const BlogPost9 = React.lazy(() => import('./pages/BlogPost9.jsx'));
const BlogPost10 = React.lazy(() => import('./pages/BlogPost10.jsx'));
const BlogPost11 = React.lazy(() => import('./pages/BlogPost11.jsx'));
const BlogPost12 = React.lazy(() => import('./pages/BlogPost12.jsx'));
const BlogPost13 = React.lazy(() => import('./pages/BlogPost13.jsx'));
const BlogPost14 = React.lazy(() => import('./pages/BlogPost14.jsx'));
const BlogPost15 = React.lazy(() => import('./pages/BlogPost15.jsx'));
const BlogPost16 = React.lazy(() => import('./pages/BlogPost16.jsx'));
const BlogPost17 = React.lazy(() => import('./pages/BlogPost17.jsx'));
const BlogPost18 = React.lazy(() => import('./pages/BlogPost18.jsx'));
const BlogPost19 = React.lazy(() => import('./pages/BlogPost19.jsx'));
const BlogsPage = React.lazy(() => import('./pages/BlogsPage.jsx'));
const Category1 = React.lazy(() => import('./pages/products/Category1.jsx'));
const Category2 = React.lazy(() => import('./pages/products/Category2.jsx'));
const Category3 = React.lazy(() => import('./pages/products/Category3.jsx'));
const Category4 = React.lazy(() => import('./pages/products/Category4.jsx'));
const Category5 = React.lazy(() => import('./pages/products/Category5.jsx'));
const Category6 = React.lazy(() => import('./pages/products/Category6.jsx'));
const Category7 = React.lazy(() => import('./pages/products/Category7.jsx'));
const Category8 = React.lazy(() => import('./pages/products/Category8.jsx'));
const Category9 = React.lazy(() => import('./pages/products/Category9.jsx'));
const Category10 = React.lazy(() => import('./pages/products/Category10.jsx'));
const Category11 = React.lazy(() => import('./pages/products/Category11.jsx'));
const Category12 = React.lazy(() => import('./pages/products/Category12.jsx'));
const ContactUs = React.lazy(() => import('./pages/ContactUs.jsx'));
const SeoPage = React.lazy(() => import('./pages/SeoPage.jsx'));
const JeddahPage = React.lazy(() => import('./pages/JeddahPage.jsx'));
const MeccaPage = React.lazy(() => import('./pages/MeccaPage.jsx'));
const MedinaPage = React.lazy(() => import('./pages/MedinaPage.jsx'));
const DammamPage = React.lazy(() => import('./pages/DammamPage.jsx'));
const MarketArea = React.lazy(() => import('./pages/MarketArea.jsx'));
const KhobarPage = React.lazy(() => import('./pages/KhobarPage.jsx'));
const DhahranPage = React.lazy(() => import('./pages/DhahranPage.jsx'));
const TaifPage = React.lazy(() => import('./pages/TaifPage.jsx'));
const JubailPage = React.lazy(() => import('./pages/JubailPage.jsx'));
const AlAhsaPage = React.lazy(() => import('./pages/AlAhsaPage.jsx'));
const QatifPage = React.lazy(() => import('./pages/QatifPage.jsx'));
const RasTanuraPage = React.lazy(() => import('./pages/RasTanuraPage.jsx'));
const AbqaiqPage = React.lazy(() => import('./pages/AbqaiqPage.jsx'));
const KhafjiPage = React.lazy(() => import('./pages/KhafjiPage.jsx'));
const AlKharjPage = React.lazy(() => import('./pages/AlKharjPage.jsx'));
const AlMajmaahPage = React.lazy(() => import('./pages/AlMajmaahPage.jsx'));
const AlZulfiPage = React.lazy(() => import('./pages/AlZulfiPage.jsx'));
const ShaqraPage = React.lazy(() => import('./pages/ShaqraPage.jsx'));
const AfifPage = React.lazy(() => import('./pages/AfifPage.jsx'));
const DawadmiPage = React.lazy(() => import('./pages/DawadmiPage.jsx'));
const WadiAdDawasirPage = React.lazy(() => import('./pages/WadiAdDawasirPage.jsx'));
const RabighPage = React.lazy(() => import('./pages/RabighPage.jsx'));
const AlLithPage = React.lazy(() => import('./pages/AlLithPage.jsx'));
const AlQunfudhahPage = React.lazy(() => import('./pages/AlQunfudhahPage.jsx'));
const YanbuPage = React.lazy(() => import('./pages/YanbuPage.jsx'));
const AlUlaPage = React.lazy(() => import('./pages/AlUlaPage.jsx'));
const BadrPage = React.lazy(() => import('./pages/BadrPage.jsx'));
const KhaybarPage = React.lazy(() => import('./pages/KhaybarPage.jsx'));
const HubunaPage = React.lazy(() => import('./pages/HubunaPage.jsx'));
const TabukPage = React.lazy(() => import('./pages/TabukPage.jsx'));
const DubaPage = React.lazy(() => import('./pages/DubaPage.jsx'));
const TaymaPage = React.lazy(() => import('./pages/TaymaPage.jsx'));
const HaqlPage = React.lazy(() => import('./pages/HaqlPage.jsx'));
const HailPage = React.lazy(() => import('./pages/HailPage.jsx'));
const BaqaaPage = React.lazy(() => import('./pages/BaqaaPage.jsx'));
const GhazalahPage = React.lazy(() => import('./pages/GhazalahPage.jsx'));
const ArarPage = React.lazy(() => import('./pages/ArarPage.jsx'));
const RafhaPage = React.lazy(() => import('./pages/RafhaPage.jsx'));
const TuraifPage = React.lazy(() => import('./pages/TuraifPage.jsx'));
const BuraydahPage = React.lazy(() => import('./pages/BuraydahPage.jsx'));
const UnaizahPage = React.lazy(() => import('./pages/UnaizahPage.jsx'));
const ArRassPage = React.lazy(() => import('./pages/ArRassPage.jsx'));
const AlBukayriyahPage = React.lazy(() => import('./pages/AlBukayriyahPage.jsx'));
const SakakaPage = React.lazy(() => import('./pages/SakakaPage.jsx'));
const QurayyatPage = React.lazy(() => import('./pages/QurayyatPage.jsx'));
const DumatAlJandalPage = React.lazy(() => import('./pages/DumatAlJandalPage.jsx'));
const ThuwalPage = React.lazy(() => import('./pages/ThuwalPage.jsx'));
const TurabahPage = React.lazy(() => import('./pages/TurabahPage.jsx'));
const RanyahPage = React.lazy(() => import('./pages/RanyahPage.jsx'));
const AlNamasPage = React.lazy(() => import('./pages/AlNamasPage.jsx'));
const TanomahPage = React.lazy(() => import('./pages/TanomahPage.jsx'));
const BaljurashiPage = React.lazy(() => import('./pages/BaljurashiPage.jsx'));
const AlBahaPage = React.lazy(() => import('./pages/AlBahaPage.jsx'));
const AlMithnabPage = React.lazy(() => import('./pages/AlMithnabPage.jsx'));
const Certification = React.lazy(() => import('./pages/Certification.jsx'));
const ProductDetailPage = React.lazy(() => import('./pages/products/ProductDetailPage.jsx'));
const NotFound = React.lazy(() => import('./pages/NotFound.jsx'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy.jsx'));
const TermsConditions = React.lazy(() => import('./pages/TermsConditions.jsx'));

import './App.css'
import './index.css'

import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


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
      <SEOHelper />
      <CookieConsent />
      <Navbar />

      <React.Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
      <Routes>
        <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions/" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/blogs/ent-neuro-surgical-tools' element={<BlogPost/>} />
        <Route path='/blogs/india-uae-cepa-zero-duty-medical-imports-dubai' element={<BlogPost2/>} />
        <Route path='/blogs/sourcing-medical-grade-stainless-steel-instruments' element={<BlogPost3/>} />
        <Route path='/blogs/benefits-of-medical-oem-partnerships-2026' element={<BlogPost4/>} />
        <Route path='/blogs/future-of-infection-control-2026' element={<BlogPost5/>} />
        <Route path='/blogs/medical-logistics-2026' element={<BlogPost6/>} />
        <Route path='/blogs/emergency-trauma-tools-2026' element={<BlogPost7/>} />
        <Route path='/blogs/surgical-instrument-sterilization-guide' element={<BlogPost8/>} />
        <Route path='/blogs/surgical-precision-2026' element={<BlogPost9/>} />
        <Route path='/blogs/surgical-robotics-2026' element={<BlogPost10/>} />
        <Route path='/blogs/sustainable-medical-supplies-2026' element={<BlogPost11/>} />
        <Route path='/blogs/diagnostic-precision-2026' element={<BlogPost12/>} />
        <Route path='/blogs/pediatric-instruments-2026' element={<BlogPost13/>} />
        <Route path='/blogs/medical-accessibility-2026' element={<BlogPost14/>} />
        <Route path='/blogs/remote-diagnostics-2026' element={<BlogPost15 />} />
        <Route path='/blogs/specialized-coatings-surgical-metallurgy' element={<BlogPost16 />} />
        <Route path='/blogs/medical-grade-disposables-icu' element={<BlogPost17 />} />
        <Route path='/blogs/surgical-instrument-suppliers-uae' element={<BlogPost18 />} />
        <Route path='/blogs/ophthalmic-micro-surgical-precision' element={<BlogPost19 />} />
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



        <Route path="/products/:categorySlug/:productSlug/" element={<ProductDetailPage />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />

        <Route path="/products/surgical-instruments" element={<Category1 />} />
        <Route path="/products/retractors-elevators" element={<Category2 />} />
        <Route path="/products/bone-neuro" element={<Category3 />} />
        <Route path="/products/ent-oral" element={<Category4 />} />
        <Route path="/products/surgical-blades" element={<Category5 />} />
        <Route path="/products/trays-utility" element={<Category6 />} />
        <Route path="/products/gloves" element={<Category7 />} />
        <Route path="/products/ppe" element={<Category8 />} />
        <Route path="/products/drapes-gowns" element={<Category9 />} />
        <Route path="/products/wound-care" element={<Category10 />} />
        <Route path="/products/disposables-iv" element={<Category11 />} />
        <Route path="/products/medical-device" element={<Category12 />} />

        {/* 404 Routing */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      </React.Suspense>
      <Footer />
    </div>
      
    
    
  )
}

export default App