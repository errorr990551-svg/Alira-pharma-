import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Heart, CheckCircle, ShieldCheck, Microscope, Scissors, Star, Activity, Settings } from 'lucide-react';

const BlogPost13 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Specialized Pediatric Surgical Instruments | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Discover why specialized pediatric instruments are critical for patient safety. Learn about micro-precision, atraumatic design, and neonatal care tools for 2026.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Vital Importance of Quality in Specialized Pediatric Instruments",
      "description": "An analysis of the unique engineering requirements for pediatric and neonatal surgical tools, focusing on micro-precision and patient safety in 2026.",
      "author": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": {
          "@type": "ImageObject",
          "url": "https://alirapharmaceuticals.com/logo.webp"
        }
      },
      "datePublished": "2026-04-15",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alirapharmaceuticals.com/blog/pediatric-instruments-2026"
      },
      "keywords": "pediatric surgical instruments, neonatal care, medical manufacturing, Alira Pharmaceuticals",
      "articleSection": "Pediatric Surgery",
      "hasPart": [
        {
          "@type": "Question",
          "name": "Are pediatric instruments just smaller versions of adult tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. True pediatric instruments are specifically engineered for the delicacy of a child's anatomy, featuring lighter tension, micro-fine tips, and specialized finishes that standard tools do not possess."
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
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Neonatal care setting"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Vital Importance of Quality in Specialized Pediatric Instruments
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Beyond "Small": Engineering the next generation of life-saving tools for developing anatomy.
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
            Pediatric surgery is a discipline defined by scale and extreme delicacy. When operating on newborns and children, the margin for error is non-existent.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Beyond "Small": The Engineering of Pediatric Tools</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">A common misconception is that adult instruments can simply be scaled down. True pediatric tools require unique structural considerations.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Micro-Fine Tips</h4>
              <p className="text-xs text-gray-700">Forceps fine enough to handle tissues as thin as tissue paper without tearing.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Balanced Tension</h4>
              <p className="text-xs text-gray-700">Spring tension calibrated to prevent accidental crushing of fragile vessels.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">A-Grade Steel</h4>
              <p className="text-xs text-gray-700">Highest quality martensitic steel ensures tools do not flex even at microscopic dimensions.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Specialized Fields: Neonatal and Cardiac Care</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Activity className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Atraumatic Serrations</h4>
                <p className="text-gray-600 text-sm">Our cardiovascular instruments feature smooth serrations designed to hold delicate veins without causing trauma or intimal tearing.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Scissors className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Non-Glare Finishes</h4>
                <p className="text-gray-600 text-sm">Satin-matte finishes eliminate distracting light reflections under high-magnification loops or microscopes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Reducing Patient Trauma and Recovery Time</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Minimally Invasive Focus</h4>
              <p className="text-gray-700">Using precision Micro-Scissors allows for smaller incisions, leading to less pain and faster discharge for young patients.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Safety & Compliance</h4>
              <p className="text-gray-700">Every pediatric tool meets global ISO 13485 standards, ensuring the smallest patients receive the highest care.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Star className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. The Alira Commitment to the Next Generation</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">Caring for the future: Our pediatric range is engineered with a deep understanding of patient fragility.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Specialized "touch-test" inspection ensures perfectly flush tip alignment.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Immediate access to life-saving specialized tools from Riyadh to London.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Care for the Smallest Lives</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Equip your pediatric unit with instruments designed for the ultimate delicacy and precision.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Pediatric Catalog
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost13;
