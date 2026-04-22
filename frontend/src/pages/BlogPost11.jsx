import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Leaf, Recycle, Wind, ShieldCheck, CheckCircle, Droplets, TrendingUp, Globe } from 'lucide-react';

const BlogPost11 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Sustainable Medical Supplies & Green Hospitals 2026 | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Explore the shift toward eco-friendly healthcare. Learn about sustainable procurement, biodegradable PPE, and the ROI of green medical supplies.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Global Shift Toward Green Hospitals: Sustainable Procurement in Medical Supplies",
      "description": "An in-depth guide on how the medical supply chain is evolving to support environmental sustainability through circular economy models and eco-friendly disposables.",
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
        "@id": "https://alirapharmaceuticals.com/blog/sustainable-medical-supplies-2026"
      },
      "keywords": "sustainable medical supplies, green hospital, eco-friendly medical, Alira Pharmaceuticals",
      "articleSection": "Sustainability & Logistics",
      "hasPart": [
        {
          "@type": "Question",
          "name": "Can surgical instruments be recycled?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, high-grade surgical stainless steel can be recycled. Many manufacturers offer recycling programs where retired instruments are repurposed to reduce environmental impact."
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
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Eco-friendly hospital concept with greenery"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Global Shift Toward "Green" Hospitals
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Sustainable Procurement: Turning the Healthcare Revolution into a Circular Economy.
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
            As we move through 2026, the healthcare sector—historically one of the largest producers of waste—is undergoing a massive green revolution. Sustainable procurement is now a core pillar of healthcare excellence.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Recycle className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Circular Economy in Surgical Instrumentation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Life-Cycle Extension</h4>
              <p className="text-sm text-gray-700">High-grade stainless steel instruments are the ultimate sustainable asset. A premium Alira instrument can be sterilized and reused for decades, reducing material waste.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Recycling Programs</h4>
              <p className="text-sm text-gray-700">We offer "buy-back" or recycling credits for retired steel instruments, ensuring raw materials are repurposed rather than sent to landfills.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Innovation of Eco-Friendly Disposables</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Biodegradable PPE</h4>
                <p className="text-gray-600 text-sm">Surgical Gowns and Drapes made from plant-based polymers that maintain a 99% bacterial barrier while being compostable.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold mb-1">Plastic Reduction</h4>
                <p className="text-gray-600 text-sm">Redesigned packaging for Wound Care Kits has reduced single-use plastic volume by up to 25% without compromising sterility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Wind className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Energy-Efficient Sterilization and Logistics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Low-Heat Autoclaving</h4>
              <p className="text-sm text-gray-700">New chemical and plasma techniques reduce energy consumption compared to traditional high-heat steam.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Carbon-Neutral Shipping</h4>
              <p className="text-sm text-gray-700">Optimizing routes to Riyadh and Jeddah using sustainable aviation fuel (SAF) partnerships.</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. The "Green Premium" vs. Long-Term ROI</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">Longevity over Low-Cost: Green is no longer "more expensive" when calculated over the product's life cycle.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Reduced hazardous waste disposal fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Enhanced brand reputation and patient trust.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Join the Green Healthcare Revolution</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Transition to sustainable medical procurement with our eco-friendly instruments and disposable range.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Sustainability Catalog
            </button>
          </div>
          <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost11;
