import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Globe, Users, ShieldCheck, Zap, CheckCircle, TrendingUp, Handshake, Settings } from 'lucide-react';

const BlogPost14 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Global Medical Accessibility & Health Equity 2026 | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Explore how standardized medical supplies and ethical procurement are bridging the healthcare gap. Learn about Alira Pharmaceuticals\' mission for global accessibility.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Ethics of Accessibility: Bridging the Medical Supply Gap in 2026",
      "description": "An exploration of global healthcare equity, focusing on the role of standardized medical instrumentation and resilient supply chains in providing universal access to care.",
      "author": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": {
          "@type": "ImageObject",
          "url": "https://alirapharmaceuticals.com/logo.png"
        }
      },
      "datePublished": "2026-04-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alirapharmaceuticals.com/blog/medical-accessibility-2026"
      },
      "keywords": "medical accessibility, health equity, surgical instruments, Alira Pharmaceuticals",
      "articleSection": "Global Health & Ethics",
      "hasPart": [
        {
          "@type": "Question",
          "name": "How does equipment standardization improve healthcare?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standardization ensures that tools are compatible across different regions and facilities, making training easier, maintenance more predictable, and clinical outcomes more consistent globally."
          }
        }
      ]
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000" 
            alt="Diverse group of people representing global community"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Ethics of Accessibility: Bridging the Medical Supply Gap in 2026
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Bridging the Medical Supply Gap: Ensuring quality care reaches every corner of the world.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <a href="/blogs" className="hover:text-white transition-colors">Blog</a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
            As we conclude our series on the future of healthcare, we must address the most critical challenge: Accessibility. High-quality care should not be a luxury dictated by geography. In 2026, the global medical community is shifting its focus toward "Health Equity."
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Standardization as a Tool for Equality</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Lack of standardized equipment is a major barrier. Adhering to strict international standards ensures consistency.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Universal Quality</h4>
              <p className="text-sm text-gray-700">By adhering to ISO 13485 and CE standards, Alira ensures a surgeon in a rural village has access to the same quality tools as those in metropolitan hubs.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Interchangeable Parts</h4>
              <p className="text-sm text-gray-700">Standardizing fitments for products like IV Cannulas allows for seamless integration across different healthcare systems, reducing the "compatibility gap."</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Zap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Digital Training and Tele-Sourcing</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-teal-600 mb-3" />
              <div>
                <h4 className="font-bold mb-1">Virtual Support</h4>
                <p className="text-gray-600 text-sm">We provide digital "User Guides" and video tutorials, ensuring staff in remote locations can calibrate and maintain tools correctly.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-teal-600 mb-3" />
              <div>
                <h4 className="font-bold mb-1">E-Procurement</h4>
                <p className="text-gray-600 text-sm">Our platform allows smaller clinics to source Wholesale Medical Supplies directly from the factory, leveling the financial playing field.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Resilience in the Face of Global Crises</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Strategic Stockpiling</h4>
              <p className="text-gray-700">Assisting regional distributors in maintaining "Safety Buffers" to ensure local care is not interrupted by logistics disruptions.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Local Hubs</h4>
              <p className="text-gray-700">Presence in Riyadh and Dammam allows us to act as a launchpad for supplies throughout the MENA region, cutting delivery times significantly.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Handshake className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. A Shared Responsibility</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">Ethical Pricing & The Long View: Supporting the infrastructure of global health.</p>
            <p className="text-gray-700">At Alira Pharmaceuticals, we believe "Quality" shouldn't be priced out of reach. We pass manufacturing efficiencies directly to healthcare systems. We aren't just selling tools; we are supporting the infrastructure of global health.</p>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Join Our Mission for Global Health</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Partner with a manufacturer committed to ethical procurement and universal access to medical excellence.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Our Mission Team
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost14;
