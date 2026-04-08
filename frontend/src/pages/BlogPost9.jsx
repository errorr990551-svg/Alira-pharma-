import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, CheckCircle, ShieldCheck, HeartPulse, Activity, Layers, Settings, Microscope } from 'lucide-react';

const BlogPost9 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Advanced Orthopedic & Cardiovascular Instruments | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Discover the latest innovations in surgical precision. Explore Alira Pharmaceuticals\' range of high-grade orthopedic tools and cardiovascular instruments for 2026.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Precision in the Operating Room: Evolution of Orthopedic and Cardiovascular Instruments",
      "description": "An expert overview of advancements in surgical metallurgy, ergonomics, and modular systems for orthopedic and cardiovascular surgery in 2026.",
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
      "datePublished": "2026-04-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alirapharmaceuticals.com/blog/surgical-precision-2026"
      },
      "keywords": "orthopedic surgical instruments, cardiovascular forceps, surgical tool manufacturer, Alira Pharmaceuticals",
      "articleSection": "Surgical Instruments",
      "hasPart": [
        {
          "@type": "Question",
          "name": "Why are Tungsten Carbide inserts used in surgical instruments?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tungsten Carbide (TC) is significantly harder than stainless steel. Instruments with TC inserts stay sharp longer and provide a superior grip, making them the preferred choice for needle holders and scissors."
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
            alt="Operating room with precision instruments"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Precision in the Operating Room: The Evolution of Orthopedic and Cardiovascular Instruments
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Engineering the next generation of specialized surgical tools for 2026.
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
            In the high-stakes environment of the operating room, the difference between a successful outcome and a complication often rests on the millimeter-level precision of the tools in a surgeon’s hand. As we move through 2026, Alira Pharmaceuticals is at the forefront of engineering the next generation of specialized surgical instruments.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Activity className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Orthopedic Innovation: Strength Meets Ergonomics</h2>
          </div>
          <p className="text-gray-700 mb-8">Modern orthopedic procedures, from joint replacements to complex spinal reconstructions, require instruments that can withstand significant torque while maintaining absolute accuracy.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">High-Grade Alloys</h4>
              <p className="text-sm text-gray-700">We utilize vacuum-hardened stainless steel and titanium alloys that offer superior strength-to-weight ratios.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Ergonomic Handling</h4>
              <p className="text-sm text-gray-700">Fatigue is a real factor in long surgeries. Our newer designs feature knurled grips and balanced weighting to ensure the instrument feels like an extension of the surgeon’s arm.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <HeartPulse className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Cardiovascular Excellence: Micro-Precision</h2>
          </div>
          <p className="text-gray-700 mb-8">Cardiovascular surgery demands a different level of finesse. When working with delicate vascular structures, the "feel" of the instrument is paramount.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Atraumatic Serrations</h4>
              <p className="text-sm text-gray-700">Our Cardiovascular Forceps are designed with specialized teeth that provide a secure grip on vessels without causing intimal damage.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Non-Reflective Coating</h4>
              <p className="text-sm text-gray-700">To assist under intense OR lighting and microscopic visualization, our instruments feature "ebony" or "satin" finishes to reduce glare and eye strain.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Layers className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. The Shift Toward Modular Systems (Efficiency)</h2>
          </div>
          <p className="text-gray-700 mb-8">Hospital procurement departments are increasingly looking for modular instrument sets. These systems allow for:</p>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="font-bold text-teal-600 text-2xl">01</div>
              <div>
                <h4 className="font-bold mb-1">Reduced Sterilization Costs</h4>
                <p className="text-gray-600 text-sm">Streamlined trays mean fewer items to process, saving time and energy.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <div className="font-bold text-teal-600 text-2xl">02</div>
              <div>
                <h4 className="font-bold mb-1">Rapid Customization</h4>
                <p className="text-gray-600 text-sm">Surgeons can quickly swap components to suit the specific anatomy of the patient, enhancing the personalized care model of 2026.</p>
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
            <h2 className="text-3xl font-bold text-teal-900">4. Quality Assurance: The Alira Standard (Trust)</h2>
          </div>
          <div className="bg-amber-50 border-2 border-amber-100 p-8 rounded-3xl mb-8">
            <p className="text-amber-900 mb-6 font-semibold">Every instrument bearing the Alira Pharmaceuticals name undergoes a rigorous multi-stage inspection process.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-1" />
                <span className="text-amber-950 font-bold">Tungsten Carbide Inserts:</span>
                <span className="text-amber-900">For cutting and needle-holding instruments, we use TC inserts to ensure longevity and a "gold-standard" grip.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-600 mt-1" />
                <span className="text-amber-950 font-bold">Global Compliance:</span>
                <span className="text-amber-900">All instruments are manufactured in accordance with ISO 13485 and CE mark requirements.</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-600 italic">Ensuring they meet the strictest safety standards in Riyadh, London, or New York.</p>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Experience Surgical Excellence</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Equip your facility with instruments that define the benchmark for surgical precision and durability.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Contact Our Specialists
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost9;
