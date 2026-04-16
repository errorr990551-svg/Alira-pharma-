import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Activity, ShieldCheck, Droplet, Zap, CheckCircle, Settings, Smartphone, Microscope } from 'lucide-react';

const BlogPost18 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Bio-Active Wound Care & Smart Dressings 2026 | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Explore the future of wound healing. Learn about hydrocolloids, ionic silver dressings, and smart sensors that are redefining wound care in 2026.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Future of Wound Care: Bio-Active Dressings and Smart Healing",
      "description": "An analysis of advancements in wound care technology, including bio-active materials, antimicrobial silver technology, and digital sensor integration.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "datePublished": "2026-04-16",
      "keywords": "wound care, smart dressings, medical technology, Alira Pharmaceuticals"
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Advanced wound care dressing"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Future of Wound Care: Bio-Active Dressings and Smart Healing
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Moving beyond protection to active cellular regeneration and digital infection monitoring.
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
            As we move through 2026, the treatment of chronic and acute wounds is moving beyond simple "covering and protecting." The new frontier is Bio-Active Wound Care.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Droplet className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Beyond Traditional Gauze</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Modern Wound Care has evolved to include materials that maintain a moist environment, proven to heal 2x faster than dry environments.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Hydrocolloids and Alginates</h4>
              <p className="text-sm text-gray-700">React with exudate to form a soothing gel, preventing secondary trauma during dressing changes compared to cotton gauze.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Super-Absorbent Polymers (SAP)</h4>
              <p className="text-sm text-gray-700">Capable of holding up to 50x their weight in fluid, SAP dressings manage heavily exuding wounds with fewer disruptive changes.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Antimicrobial Innovation</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Alira Pharmaceuticals is leading non-pharmacological infection control to avoid contributing to global antibiotic resistance.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Ionic Silver Technology</h4>
              <p className="text-gray-700">Silver-Impregnated Dressings release ions in a controlled manner, killing 99.9% of bacteria including MRSA.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Medical-Grade Honey</h4>
              <p className="text-gray-700">Specialized layers that lower wound pH, creating a natural acidic environment that inhibits bacterial growth.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Smartphone className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Smart Dressings and the IoMT</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Activity className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">pH and Moisture Sensors</h4>
                <p className="text-gray-600 text-sm">Dressings that change color or send digital alerts when pH shifts, signaling infection before physical symptoms appear.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Zap className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Reduced Clinical Burden</h4>
                <p className="text-gray-600 text-sm">Long-Wear dressings reduce the time nurses spend on routine changes, allowing focus on high-acuity needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. The Alira Standard: Quality in Every Layer</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">A dressing is only as effective as its sterile integrity.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Triple-Seal Packaging: High-barrier medical-grade packaging ensures 100% sterility until application.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Global Compliance: All products are CE marked and ISO 13485 certified for global peace of mind.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Accelerate Healing</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Equip your wound care unit with the next generation of bio-active healing technology.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Wound Care Catalog
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost18;
