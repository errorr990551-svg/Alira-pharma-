import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, CheckCircle, ShieldCheck, Microscope, AlertTriangle, Settings, RefreshCw } from 'lucide-react';

const BlogPost8 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Surgical Instrument Maintenance & Sterilization Guide | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Learn how to extend the life of your medical-grade stainless steel tools. Expert tips on autoclave protocols, cleaning, and preventing corrosion.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Art of the Autoclave: Maximizing the Lifespan of Your Surgical Assets",
      "description": "Expert advice on the cleaning, lubrication, and sterilization of surgical instruments to ensure clinical safety and long-term durability.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": { "@type": "ImageObject", "url": "https://alirapharmaceuticals.com/logo.png" }
      },
      "datePublished": "2026-04-08",
      "keywords": "surgical instrument care, autoclave protocols, instrument maintenance"
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=2000" 
            alt="Sterilization autoclave equipment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Art of the Autoclave: Maximizing the Lifespan of Your Surgical Assets
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Expert protocols for sterilization, maintenance, and clinical safety in 2026.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
            Procuring high-quality instruments is an investment; maintaining them is a science. In 2026, proper sterilization protocols are not just about hygiene—they are about protecting your hospital’s bottom line by preventing premature tool failure.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Why "Pitting" and Rust Happen (Expertise)</h2>
          </div>
          <p className="text-gray-700 mb-8 font-medium">Even medical-grade stainless steel can corrode if the "passive layer" is damaged.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Chemical Residue</h4>
              <p className="text-sm">Using non-neutral pH detergents can strip the protective chromium oxide layer, leading to corrosion.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Water Quality</h4>
              <p className="text-sm">High mineral content in autoclave water leads to "spotting" that can eventually become permanent rust.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <RefreshCw className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. The 3-Step Protection Protocol (Experience)</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-teal-50 border border-teal-100 rounded-2xl">
              <div className="font-bold text-teal-600 text-2xl">01</div>
              <div>
                <h4 className="font-bold mb-1 text-teal-900">Immediate Rinse</h4>
                <p className="text-gray-600 text-sm">Never let blood or saline dry on an instrument; the chloride ions are highly corrosive.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-teal-50 border border-teal-100 rounded-2xl">
              <div className="font-bold text-teal-600 text-2xl">02</div>
              <div>
                <h4 className="font-bold mb-1 text-teal-900">Lubrication ("Instrument Milk")</h4>
                <p className="text-gray-600 text-sm">Regularly apply water-soluble lubricants to hinges and ratchet mechanisms to ensure smooth operation.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-teal-50 border border-teal-100 rounded-2xl">
              <div className="font-bold text-teal-600 text-2xl">03</div>
              <div>
                <h4 className="font-bold mb-1 text-teal-900">Correct Loading</h4>
                <p className="text-gray-600 text-sm">Never overcrowd autoclave trays. Proper steam circulation is vital for 100% sterilization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-emerald-700">
            <AlertTriangle className="w-8 h-8" />
            <h2 className="text-2xl font-bold">3. Recognizing When to Retire a Tool (Trustworthiness)</h2>
          </div>
          <div className="bg-rose-50 border-2 border-rose-100 p-8 rounded-3xl">
            <p className="text-rose-900 mb-6 font-semibold">A compromised tool is a patient risk. Retire instruments that show:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-rose-600 mt-1" />
                <span className="text-rose-950 font-medium">Hairline Cracks: Often found in the box-locks or hinges.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-rose-600 mt-1" />
                <span className="text-rose-950 font-medium">Burrs on Blades: If a scissor "chews" rather than cuts, it’s time for a replacement.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Invest in Durability</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Source medical-grade stainless steel instruments with lifelong durability from our certified manufacturing unit.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-800 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Sourcing Guide
            </button>
          </div>
          <RefreshCw className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost8;
