import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Stethoscope, Activity, Heart, Eye, Signal, ShieldCheck, CheckCircle, Globe, Settings } from 'lucide-react';

const BlogPost12 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Modern Diagnostic Instruments & Clinical Accuracy | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Explore the evolution of diagnostic tools in 2026. From high-sensitivity stethoscopes to LED ENT gear, learn why precision diagnostics are the foundation of patient care.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Advancements in Diagnostic Instruments: The First Line of Clinical Accuracy",
      "description": "A comprehensive look at the role of modern diagnostic tools in 2026, covering acoustic technology, neurological assessment, and digital integration.",
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
        "@id": "https://alirapharmaceuticals.com/blog/diagnostic-precision-2026"
      },
      "keywords": "diagnostic instruments, medical tools, Alira Pharmaceuticals",
      "articleSection": "Diagnostic Equipment",
      "hasPart": [
        {
          "@type": "Question",
          "name": "Why is acoustic sensitivity important in stethoscopes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High acoustic sensitivity allows healthcare providers to hear subtle heart, lung, and bowel sounds that might indicate early-stage medical conditions, leading to faster and more accurate diagnoses."
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
            src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical professional using a stethoscope"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Advancements in Diagnostic Instruments: The First Line of Clinical Accuracy
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            The unsung heroes of clinical reliability: Integrating digital precision with traditional metallurgy.
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
            In the modern medical landscape, the journey toward patient recovery begins long before the first incision. Diagnostic instruments provide the critical data that informs every subsequent surgical and therapeutic decision.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. The Physics of Precision: Stethoscopes</h2>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">Even in a high-tech era, the fundamental tools remain indispensable, but their construction has evolved.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Acoustic Sensitivity</h4>
              <p className="text-sm text-gray-700">Modern Stethoscopes utilize dual-frequency diaphragms that allow clinicians to hear both high and low-frequency sounds without turning the chestpiece, essential for detecting subtle cardiac murmurs.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
              <h4 className="font-bold text-teal-950 mb-2">Non-Invasive Monitoring</h4>
              <p className="text-sm text-gray-700">Our Diagnostic Sphygmomanometers are engineered with latex-free cuffs and precision-calibrated gauges to ensure consistent readings across diverse populations.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Neurological and Sensory Assessment</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">Tuning Forks & Percussors</h4>
              <p className="text-gray-700">Balanced Neurological Hammers with medical-grade silicone heads provide the exact impact force needed for reflex testing while ensuring patient comfort.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-6">
              <h4 className="font-bold text-teal-950 mb-2">ENT Diagnostics</h4>
              <p className="text-gray-700">High-intensity LED Otoscopes and Ophthalmoscopes provide "true color" visualization, allowing identification of tissue inflammation with higher confidence.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b">
          <div className="flex items-center gap-4 mb-8 text-teal-700">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Signal className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Integration with Telehealth and Digital Records</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-teal-600 mb-3" />
              <div>
                <h4 className="font-bold mb-1">Smart Data Capture</h4>
                <p className="text-gray-600 text-sm">Tools designed for rapid data entry into Electronic Health Records (EHR), reducing manual transcription errors.</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl">
              <CheckCircle className="w-6 h-6 text-teal-600 mb-3" />
              <div>
                <h4 className="font-bold mb-1">Remote Reliability</h4>
                <p className="text-gray-600 text-sm">Tested to maintain calibration in extreme environmental conditions, from remote clinics to rural healthcare outposts.</p>
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
            <h2 className="text-3xl font-bold text-teal-900">4. The Alira Quality Guarantee</h2>
          </div>
          <div className="bg-teal-50 border-2 border-teal-100 p-8 rounded-3xl">
            <p className="text-teal-900 mb-6 font-semibold">As a Global Medical Manufacturer, we understand that a diagnostic error can have a cascading effect on patient safety.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">ISO-Certified Calibration standards for every gauge.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                <span className="text-gray-700">Strict OEM Manufacturing control over every otoscope.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">Drive Clinical Excellence</h3>
            <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Equip your medical team with diagnostic instruments that set the standard for accuracy and durability.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Diagnostic Catalog
            </button>
          </div>
          <Settings className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
      </div>
    </div>
  );
};

export default BlogPost12;
