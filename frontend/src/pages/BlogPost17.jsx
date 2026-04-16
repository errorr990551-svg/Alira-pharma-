import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Activity, ShieldCheck, Wind, Droplets, CheckCircle, Settings, Truck, Heart } from 'lucide-react';

const BlogPost17 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "High-Acuity Medical Disposables & ICU Standards | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Explore the critical role of IV therapy, respiratory care, and advanced wound care disposables in ICU settings. Learn about Alira\'s 2026 safety standards.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Critical Standards for Medical-Grade Disposables in High-Acuity Units",
      "description": "A technical guide to the safety and performance requirements of IV sets, respiratory disposables, and wound care in intensive care environments.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals"
      },
      "datePublished": "2026-04-16",
      "keywords": "ICU medical supplies, medical disposables, IV therapy, Alira Pharmaceuticals"
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="bg-white pt-20">
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549462980-007f38f7514a?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical disposables in ICU"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Critical Standards for Medical-Grade Disposables in High-Acuity Units
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Essential reliability for life-support systems in high-stakes clinical environments.
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
            In 2026, the Intensive Care Unit (ICU) and Emergency Department (ED) serve as the ultimate testing grounds for Medical Disposables. In these environments, every tool is a vital component of a life-support system.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Droplets className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Fluid Management and IV Therapy</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">In a crisis, vascular access must be immediate and secure, requiring precision engineering in every disposable set.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Kink-Resistant Tubing</h4>
              <p className="text-sm text-gray-700">Utilizing advanced polymer blends that prevent occlusion, ensuring steady medication flow even during patient transport.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Safety Cannulas</h4>
              <p className="text-sm text-gray-700">Passive needle-shielding technology virtually eliminates the risk of needle-stick injuries for healthcare workers.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Wind className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Respiratory Care and Oxygen Delivery</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Respiratory distress requires disposables that are both comfortable for the patient and clinically effective.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Hypoallergenic Materials</h4>
              <p className="text-gray-700">100% latex-free and DEHP-free masks and cannulas prevent skin irritation and long-term chemical exposure.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">High-Flow Compatibility</h4>
              <p className="text-gray-700">Designed to maintain structural integrity under increased pressure and humidity, meeting 2026 standards for HFNO.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Advanced Wound Care for Pressure Injuries</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <Activity className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Silicone Border Dressings</h4>
                <p className="text-gray-600 text-sm">Can be lifted and reapplied to check skin without causing "skin stripping" or trauma, crucial for ICU prevention.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">High MVTR engineering</h4>
                <p className="text-gray-600 text-sm">Engineered with high Moisture Vapor Transmission Rates (MVTR), allowing skin to breathe while maintaining a sterile barrier.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Truck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. The Alira Guarantee: Supply Chain Reliability</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">High-acuity units cannot function without a consistent supply of wholesale disposables.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Sterility Assurance Levels (SAL): Batches validated to a SAL of 10⁻⁶, the highest industry standard.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Regional Availability: Dedicated inventory in Riyadh and Dammam hubs ensure zero-day lead times.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Ensure Unit Readiness</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Partner with Alira Pharmaceuticals for high-acuity disposables that never compromise on safety or availability.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Disposable Supply Guide
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost17;
