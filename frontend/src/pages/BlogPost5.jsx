import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronUp, ChevronRight, CheckCircle, ShieldCheck, Microscope, Leaf, Award, BarChart3 } from 'lucide-react';

const BlogPost5 = () => {
  const { openQuotePopup } = useQuotePopup();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // SEO Meta Tags & Schema
  useEffect(() => {
    document.title = "Infection Control Trends 2026 | Alira Pharmaceuticals";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const desc = "Explore the latest in infection control. Learn why high-quality surgical gowns, gloves, and wound care products are essential for hospital safety in 2026.";
    if (metaDescription) metaDescription.setAttribute('content', desc);

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const keys = "wholesale medical disposables, surgical gown manufacturer, infection control supplies, bulk hospital PPE, Alira Pharmaceuticals products";
    if (metaKeywords) metaKeywords.setAttribute('content', keys);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Future of Infection Control: Why Quality Medical Disposables are Non-Negotiable in 2026",
      "description": "An in-depth look at how material science, advanced wound care, and sustainable manufacturing are redefining medical disposables and patient safety in 2026.",
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
        "@id": "https://alirapharmaceuticals.com/blog/future-of-infection-control-2026"
      },
      "keywords": "wholesale medical disposables, surgical gown manufacturer, infection control supplies, bulk hospital PPE, Alira Pharmaceuticals products",
      "articleSection": "Medical Supplies & Infection Control",
      "hasPart": [
        {
          "@type": "Question",
          "name": "What is the importance of AQL standards in medical gloves?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AQL (Acceptable Quality Level) measures the percentage of defects in a batch. A lower AQL indicates higher reliability and fewer pinhole defects, which is critical for barrier protection in clinical settings."
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => { script.remove(); };
  }, []);

  const toggleFAQ = (id) => setExpandedFAQ(expandedFAQ === id ? null : id);

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Sterile medical environment representing advanced infection control"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Future of Infection Control: Why Quality Medical Disposables are Non-Negotiable
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Setting the standard for patient safety and hospital hygiene in 2026.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
            As healthcare facilities worldwide face evolving pathogen challenges, the role of high-quality medical disposables has shifted from a mere line item to a cornerstone of patient safety. In 2026, the standard for "clean" has been redefined, and procurement teams are prioritizing reliability over cost-cutting.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">1. The Critical Role of Material Science in PPE (Expertise)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Infection control is only as strong as the barrier provided. High-performance PPE, such as Surgical Gowns and Gloves, must now meet advanced fluid-resistance and breathability standards.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-teal-700 mb-3">AQL Standards</h3>
              <p className="text-gray-600 leading-relaxed">Look for gloves with a low Acceptable Quality Level (AQL), ensuring fewer pinhole defects per batch.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Triple-Layer Protection</h3>
              <p className="text-gray-600 leading-relaxed">Modern masks and drapes utilize non-woven fabrics that provide a 99% bacterial filtration efficiency without compromising airflow.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">2. Wound Care Innovation: Beyond Simple Bandages (Experience)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            The global demand for Wound Care is shifting toward specialized products that promote active healing.
          </p>
          <ul className="space-y-6">
            <li className="flex gap-4 p-6 bg-teal-50 rounded-2xl border border-teal-100">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-1">Advanced Adhesion</h4>
                <p className="text-teal-800">Modern Bandages use hypoallergenic adhesives that maintain a sterile seal while being gentle enough for neonatal or geriatric skin.</p>
              </div>
            </li>
            <li className="flex gap-4 p-6 bg-teal-50 rounded-2xl border border-teal-100">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <h4 className="font-bold text-teal-900 mb-1">Moisture Management</h4>
                <p className="text-teal-800">Quality disposables now incorporate absorbent cores that manage exudate, significantly reducing the frequency of dressing changes.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Leaf className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">3. Sustainability vs. Safety: The Hybrid Approach (Authoritativeness)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A major trend this year is the push for sustainable disposables. While the primary goal is safety, top manufacturers are now utilizing recyclable packaging and biodegradable components where clinically safe.
          </p>
          <div className="bg-gray-900 text-white p-8 rounded-3xl relative overflow-hidden">
            <p className="relative z-10 text-lg">
              <strong>Waste Reduction:</strong> By using precision-engineered disposables that don't fail, facilities actually reduce their total medical waste by avoiding the need for "double-gloving" or replacing faulty tools.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Award className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">4. Why Bulk Sourcing Requires Direct Manufacturer Trust</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8 text-justify">
            Navigating the supply chain for Wholesale Medical Disposables requires a partner that understands international compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-2xl hover:border-teal-500 transition-colors">
              <h4 className="text-xl font-bold mb-4">ISO 13485 Compliance</h4>
              <p className="text-gray-600">Ensure your supplier maintains rigorous quality management systems to guarantee every batch is identical in safety.</p>
            </div>
            <div className="border border-gray-200 p-8 rounded-2xl hover:border-teal-500 transition-colors">
              <h4 className="text-xl font-bold mb-4">Factory-Direct Pricing</h4>
              <p className="text-gray-600">Partnering directly with an OEM Manufacturer like Alira Pharmaceuticals ensures you receive the latest innovations without middleman markups.</p>
            </div>
          </div>
        </section>

        <section className="bg-teal-700 rounded-2xl p-10 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Commitment to Patient Care</h2>
          <p className="text-teal-50 mb-10 max-w-2xl mx-auto italic">
            "In the modern clinical environment, the quality of your disposables is a direct reflection of your commitment to patient care."
          </p>
          <button 
            onClick={() => openQuotePopup()}
            className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
          >
            Request Bulk Quotation
          </button>
        </section>

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">FAQs</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => toggleFAQ(1)}
                className="w-full px-8 py-5 flex items-center justify-between bg-white hover:bg-teal-50 transition-colors text-left"
              >
                <span className="font-bold text-gray-900">What is the importance of AQL standards in medical gloves?</span>
                <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform ${expandedFAQ === 1 ? 'rotate-180' : ''}`} />
              </button>
              {expandedFAQ === 1 && (
                <div className="px-8 py-5 bg-teal-50 text-gray-700 border-t border-gray-200">
                  AQL (Acceptable Quality Level) measures the percentage of defects in a batch. A lower AQL indicates higher reliability and fewer pinhole defects, which is critical for barrier protection in clinical settings.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost5;
