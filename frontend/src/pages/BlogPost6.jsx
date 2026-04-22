import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronUp, CheckCircle, Truck, ShieldAlert, BarChart3, Globe, Zap } from 'lucide-react';

const BlogPost6 = () => {
  const { openQuotePopup } = useQuotePopup();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    document.title = "Global Medical Supply Chain Logistics | Alira Pharmaceuticals";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Learn how Alira Pharmaceuticals ensures reliable delivery of medical supplies to emerging markets through advanced logistics, compliance, and sterile packaging.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Logistics of Global Medical Supply: Ensuring Reliability in Emerging Markets",
      "description": "An analysis of medical supply chain challenges in 2026, focusing on regulatory compliance, sterile packaging integrity, and real-time tracking logistics.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": { "@type": "ImageObject", "url": "https://alirapharmaceuticals.com/logo.webp" }
      },
      "datePublished": "2026-04-08",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alirapharmaceuticals.com/blog/medical-logistics-2026"
      },
      "keywords": "medical supply chain, hospital logistics, medical export, Alira Pharmaceuticals",
      "articleSection": "Logistics & Supply Chain",
      "hasPart": [
        {
          "@type": "Question",
          "name": "How does Alira Pharmaceuticals ensure sterile integrity during shipping?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use reinforced medical-grade packaging and climate-controlled shipping environments to ensure the sterile barrier of every instrument remains intact from the factory to the hospital."
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
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000" 
            alt="International shipping and logistics for medical supplies"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Logistics of Global Medical Supply: Ensuring Reliability
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Navigating regulatory complexity and supply chain resilience in 2026.
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
            In the medical industry, a high-quality instrument is only effective if it reaches the surgical suite on time and in sterile condition. For healthcare providers in rapidly growing markets—from the Middle East to Southeast Asia—supply chain resilience has become a top priority in 2026.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* Section 1 */}
        <section className="mb-16 p-8 bg-teal-50 rounded-2xl border border-teal-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Globe className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">1. Navigating Regulatory Landscapes (Expertise)</h2>
          </div>
          <p className="text-gray-700 mb-6 italic font-medium">Global distribution requires more than just shipping; it requires a deep understanding of regional compliance.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-50">
              <h4 className="font-bold text-teal-900 mb-2">Local Certification</h4>
              <p className="text-sm text-gray-600">Navigating SFDA requirements in Saudi Arabia or EEA standards in Europe requires a partner who handles the paperwork at the source.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-teal-50">
              <h4 className="font-bold text-teal-900 mb-2">Customs Efficiency</h4>
              <p className="text-sm text-gray-600">At Alira Pharmaceuticals, we pre-clear documentation to ensure critical Surgical Instruments aren't held up at borders.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">2. Cold Chain and Sterile Packaging Integrity (Experience)</h2>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold shrink-0">A</div>
              <p className="text-gray-700 pt-1 leading-relaxed"><strong>Reinforced Packaging:</strong> We use medical-grade Tyvek and puncture-resistant materials to ensure that even delicate Orthopedic Tools arrive ready for the autoclave.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold shrink-0">B</div>
              <p className="text-gray-700 pt-1 leading-relaxed"><strong>Climate Monitoring:</strong> For sensitive disposables, we employ smart tracking to monitor temperature and humidity throughout the transit process.</p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Zap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">3. Real-Time Transparency: The 2026 Standard (Authoritativeness)</h2>
          </div>
          <p className="mb-8 text-gray-700 leading-relaxed font-medium">Modern procurement managers no longer accept "estimated arrival dates." They demand data.</p>
          <div className="bg-teal-700 rounded-3xl p-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h4 className="text-xl font-bold mb-2">IoT Tracking</h4>
                <p className="text-teal-50 text-sm leading-relaxed">By integrating GPS and RFID technology, we provide our partners with real-time visibility into their shipments.</p>
              </div>
              <div className="md:w-1/2">
                <h4 className="text-xl font-bold mb-2">Predictive Inventory</h4>
                <p className="text-teal-50 text-sm leading-relaxed">Our OEM Partnership model uses data to help distributors predict when they will run low, triggering automated restock alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Globe className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-teal-900">4. Supporting Local Healthcare Growth (Trustworthiness)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-10 text-lg">
            Our mission extends beyond sales; it’s about infrastructure. By establishing robust distribution hubs in cities like Riyadh, Jeddah, and Dammam, we ensure that emerging healthcare markets have the same access to quality as established medical hubs.
          </p>
          <div className="bg-teal-900 rounded-3xl p-10 text-white flex flex-col items-center shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Enhance Your Supply Chain</h4>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-800 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Partner for Distribution
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-teal-900 mb-8 border-b pb-4">FAQs</h2>
          <div className="border border-teal-100 rounded-xl overflow-hidden hover:border-teal-300 transition-colors">
            <button 
              onClick={() => toggleFAQ(1)}
              className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-teal-50 transition-colors font-bold text-teal-900"
            >
              How does Alira Pharmaceuticals ensure sterile integrity during shipping?
              <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform ${expandedFAQ === 1 ? 'rotate-180' : ''}`} />
            </button>
            {expandedFAQ === 1 && (
              <div className="px-6 py-5 bg-teal-50 text-gray-700 border-t border-teal-100 italic leading-relaxed">
                We use reinforced medical-grade packaging and climate-controlled shipping environments to ensure the sterile barrier of every instrument remains intact from the factory to the hospital.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost6;
