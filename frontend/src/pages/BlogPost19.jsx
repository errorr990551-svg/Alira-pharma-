import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Eye, ShieldCheck, Zap, Layers, CheckCircle, Settings, Microscope, Star } from 'lucide-react';

const BlogPost19 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Ophthalmic Micro-Surgical Instruments | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Explore the precision engineering behind ophthalmic tools. From micro-blades to titanium forceps, learn how Alira Pharmaceuticals supports eye surgery excellence.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Mastering Ophthalmic Precision: The Evolution of Micro-Surgical Tools",
      "description": "A technical overview of the materials and engineering required for ophthalmic surgery, covering micro-blades, titanium tools, and sterilization standards.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "datePublished": "2026-04-16",
      "keywords": "ophthalmic instruments, microsurgery, medical manufacturing, Alira Pharmaceuticals"
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590159413204-6f0144f8087d?auto=format&fit=crop&q=80&w=2000" 
            alt="Ophthalmic surgery setup"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Mastering Ophthalmic Precision: The Evolution of Micro-Surgical Tools
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Engineering for the microscopic margin of error in the world's most delicate surgical field.
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
            Ophthalmic surgery requires a level of precision measured in microns. In 2026, Alira Pharmaceuticals has refined its ophthalmic range to meet these extreme requirements.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. The Art of the Micro-Blade</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Incisions in eye surgery must be self-sealing and perfectly uniform, requiring absolute sharpness.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Diamond-Edge Precision</h4>
              <p className="text-sm text-gray-700">Surgical Knives with ultra-sharp edges that minimize tissue resistance, ensuring the cornea is not distorted during entry.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Satin-Finish Steel</h4>
              <p className="text-sm text-gray-700">Prevents light reflection from operating microscopes, ensuring the surgeon is never blinded by glare during micro-incisions.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Layers className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Forceps and Needle Holders</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Handling 10-0 or 11-0 sutures requires a "feather-light" touch and absolute jaw alignment.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Tying Forceps</h4>
              <p className="text-gray-700">Hand-finished platforms are perfectly flush, allowing secure grasping of microscopic sutures without breaking them.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Titanium Advantage</h4>
              <p className="text-gray-700">40% lighter than stainless steel and non-magnetic, ideal for long procedures near high-resolution imaging equipment.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Zap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Single-Use vs. Reusable</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Precision Disposables</h4>
                <p className="text-gray-600 text-sm">Single-Use Kits ensure "factory-sharp" performance for every patient and eliminate the risk of TASS from sterilization residues.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Eye className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Sustainable Reusables</h4>
                <p className="text-gray-600 text-sm">Premium stainless steel range built to withstand hundreds of autoclave cycles without losing micro-alignment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Star className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. Supporting Vision Worldwide</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">Vision is the most precious sense, and we treat the tools that protect it with the utmost reverence.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Microscopic Inspection: Every single instrument undergoes 40x magnification inspection before leaving the factory.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Global Supply: Supporting leading eye centers in Riyadh, Dubai, and beyond with world-class instrumentation.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Support Eye Excellence</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Equip your ophthalmic clinic with instruments designed for the highest level of micro-surgical precision.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Ophthalmic Catalog
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost19;
