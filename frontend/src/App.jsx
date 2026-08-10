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
        <Route path='/contact' element={<ContactUs/>} />

        {/* Blogs */}
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

        {/* Products */}
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