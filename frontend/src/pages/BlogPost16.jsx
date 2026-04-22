import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Layers, ShieldCheck, Sun, Zap, CheckCircle, Settings, Scissors, Beaker } from 'lucide-react';

const BlogPost16 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Surgical Instrument Coatings & Metallurgy | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Learn how Tungsten Carbide, DLC, and Anti-Glare coatings enhance surgical precision and tool lifespan in 2026. Expert guide to medical surface engineering.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Science of Specialized Coatings in Surgical Metallurgy",
      "description": "An expert analysis of how advanced coatings like Tungsten Carbide and DLC improve the performance, durability, and safety of surgical instruments.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": { "@type": "ImageObject", "url": "https://alirapharmaceuticals.com/logo.webp" }
      },
      "datePublished": "2026-04-16",
      "keywords": "surgical instrument coatings, tungsten carbide, DLC coating, Alira Pharmaceuticals",
      "hasPart": [
        {
          "@type": "Question",
          "name": "What do gold handles on surgical instruments mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gold handles signify that the instrument is equipped with Tungsten Carbide (TC) inserts, which provide superior hardness, grip, and edge retention compared to standard steel."
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
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="High-precision surgical instruments"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Science of Specialized Coatings in Surgical Metallurgy
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Redefining durability and precision through advanced surface engineering and microscopic innovations.
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
            In the high-precision world of 2026, the performance of a surgical instrument is no longer determined solely by its base metal. Specialized coatings have redefined clinical metrics across the board.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Zap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Tungsten Carbide (TC) Inserts</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">The "Gold Standard" for longevity, often signified by gold handles on high-end surgical scissors and needle holders.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Extreme Hardness</h4>
              <p className="text-sm text-gray-700">TC is twice as stiff as steel, meaning TC Scissors stay sharp up to 5 times longer than standard stainless steel variants.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Superior Grip</h4>
              <p className="text-sm text-gray-700">Pyramid-shaped serrations provide a non-slip grip on fine suture needles, preventing "needle rotation" during delicate surgeries.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Sun className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Anti-Glare and "Ebony" Coatings</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Modern operating rooms with intense LED lighting require surfaces that don't blind the surgeon or wash out camera feeds.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Satin Finish</h4>
              <p className="text-gray-700">A micro-bead blasted surface that diffuses light, providing a soft, non-reflective finish for high-definition environments.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Black Ceramic (Ebony)</h4>
              <p className="text-gray-700">Eliminates 100% of light reflection and increases surface hardness, making tools resistant to bacteria-harboring scratches.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Layers className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Diamond-Like Carbon (DLC)</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Scissors className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Low-Friction Movement</h4>
                <p className="text-gray-600 text-sm">DLC coatings provide a "slick" surface that reduces the force required to operate complex retractable tools, reducing hand fatigue.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Beaker className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Superior Biocompatibility</h4>
                <p className="text-gray-600 text-sm">Chemically inert and resistant to body fluids and cleaning chemicals, protecting Medical Grade Steel from corrosion.</p>
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
            <h2 className="text-3xl font-bold text-teal-900">4. The Alira Quality Standard</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">A coating is only as good as the bond to the metal beneath it.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Plasma-Vapor Deposition (PVD): Molecular-level bonding ensuring coatings won't chip or peel during autoclave cycles.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Certified Excellence: Fully compliant with ISO 13485 for long-lasting performance in Riyadh and beyond.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Invest in Longevity</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Upgrade your surgical suite with instruments that utilize the world's most advanced metallurgical coatings.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Coated Instrument Catalog
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost16;
