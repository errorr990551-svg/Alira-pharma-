import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronUp, CheckCircle, ShieldCheck, Microscope, Award, AlertTriangle, TrendingDown } from 'lucide-react';

const BlogPost3 = () => {
  const { openQuotePopup } = useQuotePopup();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // SEO Meta Tags
  useEffect(() => {
    // Update page title
    document.title = "Alira Pharmaceuticals | Global Surgical Instrument & Medical Supply Manufacturer";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading global manufacturer of ISO-certified surgical instruments, PPE, and medical disposables. Competitive factory pricing and OEM support for hospitals and distributors worldwide.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Leading global manufacturer of ISO-certified surgical instruments, PPE, and medical disposables. Competitive factory pricing and OEM support for hospitals and distributors worldwide.';
      document.head.appendChild(newMeta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'surgical instrument manufacturer, medical supply exporter, wholesale hospital disposables, medical grade stainless steel tools, OEM medical supplies');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = 'surgical instrument manufacturer, medical supply exporter, wholesale hospital disposables, medical grade stainless steel tools, OEM medical supplies';
      document.head.appendChild(newMeta);
    }

    // Add JSON-LD Schema Markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Alira Pharmaceuticals",
      "url": "https://alirapharmaceuticals.com/",
      "logo": "https://alirapharmaceuticals.com/assets/logo.webp",
      "description": "Global manufacturer and exporter of high-quality surgical instruments, hospital disposables, and PPE.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A-116, URBTECH TRADE, CENTRE SECTOR-132, Baraula",
        "addressLocality": "Gautam Buddha Nagar",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201304",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7895850793",
        "contactType": "sales",
        "email": "info@alirapharmaceuticals.com",
        "areaServed": "Worldwide",
        "availableLanguage": "en"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Medical and Surgical Supplies",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Surgical Instruments" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Disposables" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "OEM & Private Labeling" } }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What is the difference between AISI 304 and AISI 420 steel?",
      answer: "AISI 420 is a high-carbon martensitic steel that can be hardened by heat treatment, making it ideal for cutting tools like scissors and scalpels. AISI 304 is austenitic steel with superior corrosion resistance, used for non-cutting tools like retractors and elevators that face frequent sterilization."
    },
    {
      id: 2,
      question: "What is passivation in surgical instrument manufacturing?",
      answer: "Passivation is a chemical process that removes free iron from the surface of stainless steel, creating a protective chromium oxide layer that prevents rust and pitting during clinical use."
    },
    {
      id: 3,
      question: "Why is ISO 13485 important for medical suppliers?",
      answer: "ISO 13485 is a specific quality management standard for medical devices. It ensures that the manufacturer maintains strict safety and quality controls throughout the production cycle."
    },
    {
      id: 4,
      question: "How do low-quality instruments impact patient safety?",
      answer: "Poorly manufactured tools can have misaligned tips or dull blades, leading to increased surgical time, tissue trauma, and higher risks of infection or tool failure during critical procedures."
    },
    {
      id: 5,
      question: "What is the Total Cost of Ownership (TCO) for surgical tools?",
      answer: "TCO considers not just the initial purchase price, but also the longevity and replacement frequency. High-quality steel tools last longer through repeated sterilization, offering better value over time than cheaper alternatives that rust quickly."
    }
  ];

  return (
    <div className="bg-white">
      {/* ======================== HERO SECTION ======================== */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584982324750-930491a921f0?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical grade stainless steel surgical instruments reflecting precision and quality"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold tracking-widest uppercase mb-6 border border-teal-500/30">
            Metallurgy & Procurement
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            The Ultimate Guide to Sourcing Medical-Grade Stainless Steel Instruments
          </h1>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm md:text-base font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      {/* ======================== ARTICLE CONTENT ======================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Intro */}
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed font-medium mb-8">
            When sourcing Surgical Instruments, the difference between a reliable tool and a clinical failure often comes down to metallurgy. For procurement officers and healthcare providers, understanding the technical standards of stainless steel is not just about durability—it’s about patient safety and long-term cost efficiency.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full mb-12"></div>
        </section>

        {/* 1. Science */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Microscope className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">1. The Science of Medical-Grade Steel (Expertise)</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Not all "stainless" steel is created equal. In the medical field, we primarily rely on two types of series: <strong>300 Series (Austenitic)</strong> and <strong>400 Series (Martensitic)</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-teal-700 mb-3">AISI 420 Stainless Steel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This is the "gold standard" for cutting instruments like scissors and scalpels. It has a higher carbon content, which allows the metal to be hardened through heat treatment, ensuring the blades stay sharp through hundreds of procedures.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-teal-700 mb-3">AISI 304 Stainless Steel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Used mostly for non-cutting tools like Retractors & Elevators, this steel offers superior corrosion resistance, making it ideal for tools that undergo frequent high-pressure steam sterilization (autoclaving).
              </p>
            </div>
          </div>

          <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
            <p className="text-teal-900 font-bold flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal-600" />
              Pro Tip:
            </p>
            <p className="text-teal-800 mt-2">
              Always ask your manufacturer for the Material Test Certificate (MTC) to verify the chemical composition of the steel used in your order.
            </p>
          </div>
        </section>

        {/* 2. Identifying Quality */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">2. Identifying Quality: Beyond the Polish (Experience)</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            A shiny finish can hide poor craftsmanship. To ensure you are receiving <strong>High-Quality Surgical Instruments</strong>, look for these three manufacturing markers:
          </p>

          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Symmetry and Alignment</h4>
                <p className="text-gray-600">Forceps and needle holders should meet perfectly at the tips with no "scissoring" or overlap.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Passivation</h4>
                <p className="text-gray-600">This is a chemical process that removes free iron from the surface of the steel. Without proper passivation, even medical-grade steel will develop "pitting" or rust spots.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Ratchet Smoothness</h4>
                <p className="text-gray-600">In locking instruments, the ratchet should click firmly but release smoothly without excessive force.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Compliance */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Award className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">3. Compliance and Global Standards (Authoritativeness)</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            In 2026, global medical trade is more regulated than ever. To ensure your facility remains compliant, verify that your supplier adheres to:
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-teal-50 p-6 rounded-xl text-center border border-teal-100 hover:bg-teal-100 transition-colors">
              <h4 className="font-bold text-teal-900 mb-2 text-lg">ISO 13485</h4>
              <p className="text-gray-600 text-sm">Quality management system for medical devices.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl text-center border border-teal-100 hover:bg-teal-100 transition-colors">
              <h4 className="font-bold text-teal-900 mb-2 text-lg">CE Marking</h4>
              <p className="text-gray-600 text-sm">Signaling health and safety compliance for Europe.</p>
            </div>
            <div className="bg-teal-50 p-6 rounded-xl text-center border border-teal-100 hover:bg-teal-100 transition-colors">
              <h4 className="font-bold text-teal-900 mb-2 text-lg">ASTM F899</h4>
              <p className="text-gray-600 text-sm">Standard requirements for wrought stainless steels.</p>
            </div>
          </div>
        </section>

        {/* 4. The Hidden Cost */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600">
              <TrendingDown className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">4. The Hidden Cost of "Cheap" Instruments (Trustworthiness)</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            While low-cost alternatives may seem budget-friendly, they often fail the <strong>Total Cost of Ownership (TCO)</strong> test.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-rose-900 mb-1">Premature Rusting</h4>
                <p className="text-rose-800 text-sm">Poorly treated steel reacts with cleaning chemicals, leading to early replacement and unnecessary waste.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-rose-900 mb-1">Patient Risk</h4>
                <p className="text-rose-800 text-sm">Dull or misaligned tools increase surgery time and significantly raise the risk of tissue trauma.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-rose-50 rounded-2xl border border-rose-100">
              <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-rose-900 mb-1">Sterilization Stress</h4>
                <p className="text-rose-800 text-sm">Low-grade alloys can become brittle after repeated exposure to 134°C in an autoclave, leading to catastrophic failure during use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Investing in precision-engineered instruments is an investment in the reliability of your surgical team. At Alira Pharmaceuticals, we combine advanced Manufacturing Excellence with rigorous quality control to ensure every instrument meets international clinical standards.
          </p>
          <div className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Ready to Upgrade Your Inventory?</h3>
              <p className="text-teal-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Source ISO-certified surgical instruments with factory-direct pricing for your hospital or distribution network.
              </p>
              <button 
                onClick={() => openQuotePopup()}
                className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
              >
                Request Bulk Quotation
              </button>
            </div>
            <CheckCircle className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-teal-300 transition-colors">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-teal-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-teal-600" />
                  )}
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 py-5 bg-teal-50 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed italic">"{faq.answer}"</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost3;
