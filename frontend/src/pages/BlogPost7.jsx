import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronRight, CheckCircle, Cross, ShieldCheck, Microscope, Heart, Stethoscope } from 'lucide-react';

const BlogPost7 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Emergency Trauma Tools & Wound Care | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Discover the essential tools for emergency response. From high-grade trauma shears to advanced hemostatic wound care, we explore the gear saving lives in 2026.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Emergency Care Excellence: Essential Tools for Trauma and First Response",
      "description": "A guide to the high-performance instruments and disposables required for critical emergency and trauma care in 2026.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": { "@type": "ImageObject", "url": "https://alirapharmaceuticals.com/logo.png" }
      },
      "datePublished": "2026-04-08",
      "keywords": "emergency medical supplies, trauma shears, wound care, Alira Pharmaceuticals"
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
            alt="Emergency medical response team in action"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Emergency Care Excellence: Essential Tools for Trauma & First Response
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Reliability in the "golden hour" — delivering high-performance tools for critical patient outcomes.
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
          <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-8">
            In critical "golden hour" situations, the reliability of medical equipment can be the deciding factor in patient outcomes. As emergency departments and first responders face increasing pressure in 2026, having the right high-performance tools is essential.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <Heart className="w-8 h-8" />
            <h2 className="text-3xl font-bold">1. The Anatomy of a Perfect Trauma Shears (Expertise)</h2>
          </div>
          <p className="text-gray-700 mb-8">Standard scissors aren't enough for emergency care. High-quality trauma shears must be:</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border-l-4 border-teal-500 bg-teal-50/50">
              <h4 className="font-bold text-teal-950 mb-2">Hardened Stainless Steel</h4>
              <p className="text-sm">Forged from AISI 420 Martensitic steel to cut through thick denim and leather without dulling.</p>
            </div>
            <div className="p-6 border-l-4 border-teal-500 bg-teal-50/50">
              <h4 className="font-bold text-teal-950 mb-2">Serrated Edges</h4>
              <p className="text-sm">Non-slip serrations provide extra grip on slippery materials during high-stress situations.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <Microscope className="w-8 h-8" />
            <h2 className="text-3xl font-bold">2. Advanced Wound Management in the Field (Experience)</h2>
          </div>
          <p className="text-gray-700 mb-8">Stopping a bleed quickly is the first priority. Modern Wound Care products have evolved:</p>
          <div className="space-y-6">
            <div className="flex gap-4 p-8 bg-slate-900 text-white rounded-3xl">
              <CheckCircle className="w-6 h-6 text-teal-500 shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Hemostatic Dressings</h4>
                <p className="text-teal-100/80">Quality gauze now incorporates advanced agents that accelerate clotting even in deep arterial wounds.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <Stethoscope className="w-8 h-8" />
            <h2 className="text-3xl font-bold">3. Airway Management and Diagnostic Reliability (Trustworthiness)</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-teal-900 mb-2">Precision Forceps</h4>
              <p className="text-gray-600">For removing obstructions, precision-engineered Forceps with perfectly aligned tips are non-negotiable.</p>
            </div>
            <div>
              <h4 className="font-bold text-teal-900 mb-2">Bulk Diagnostic PPE</h4>
              <p className="text-gray-600">Ensuring responders have immediate access to high-AQL Gloves and Masks is the foundation of field safety.</p>
            </div>
          </div>
        </section>

        <section className="bg-teal-50 rounded-3xl p-12 text-center border-2 border-teal-100 shadow-xl">
          <h3 className="text-3xl font-bold text-teal-950 mb-6">Equip Your First Responders</h3>
          <p className="text-teal-900/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Alira Pharmaceuticals provides life-saving trauma tools and medical disposables for emergency services worldwide.
          </p>
          <button 
            onClick={() => openQuotePopup()}
            className="bg-teal-700 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-800 transition-all shadow-xl hover:scale-105"
          >
            Request Emergency Catalog
          </button>
        </section>
      </div>
    </div>
  );
};

export default BlogPost7;
