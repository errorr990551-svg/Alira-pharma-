import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronUp, CheckCircle, Settings, FileText, BarChart3, ShieldAlert, Zap } from 'lucide-react';

const BlogPost4 = () => {
  const { openQuotePopup } = useQuotePopup();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // SEO Meta Tags
  useEffect(() => {
    // Update page title
    document.title = "5 Benefits of Medical OEM Partnerships 2026 | Alira Pharmaceuticals";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover why medical distributors are choosing OEM partnerships in 2026. Learn about cost efficiency, ISO compliance, and custom private labeling for surgical instruments.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Discover why medical distributors are choosing OEM partnerships in 2026. Learn about cost efficiency, ISO compliance, and custom private labeling for surgical instruments.';
      document.head.appendChild(newMeta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'medical OEM manufacturer, private label surgical instruments, wholesale medical supplies export, hospital procurement trends 2026');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = 'medical OEM manufacturer, private label surgical instruments, wholesale medical supplies export, hospital procurement trends 2026';
      document.head.appendChild(newMeta);
    }

    // Add JSON-LD Schema Markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "5 Strategic Benefits of OEM Partnerships for Medical Distributors in 2026",
      "author": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "logo": {
          "@type": "ImageObject",
          "url": "https://alirapharmaceuticals.com/assets/logo.webp"
        }
      },
      "datePublished": "2026-03-29",
      "description": "An in-depth look at how OEM partnerships drive value for medical distributors through customization, compliance, and cost efficiency.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alirapharmaceuticals.com/blog/benefits-of-medical-oem-partnerships-2026"
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
      question: "What does OEM mean in medical manufacturing?",
      answer: "OEM (Original Equipment Manufacturer) refers to a company that manufactures products based on the client's specifications, which the client then sells under their own brand name."
    },
    {
      id: 2,
      question: "How can OEM partnerships improve profit margins?",
      answer: "By sourcing directly from a manufacturer, distributors eliminate middleman markups and benefit from economies of scale, resulting in lower per-unit costs and higher profitability."
    },
    {
      id: 3,
      question: "Is private labeling available for all surgical instruments?",
      answer: "Yes, most medical manufacturers offer private labeling through laser-etching and custom packaging for a wide range of tools, from basic forceps to complex neuro-surgical instruments."
    },
    {
      id: 4,
      question: "How do manufacturers ensure sterilization compliance?",
      answer: "Leading OEMs use validated sterilization methods such as Plasma Gas or Class B Steam Autoclaves, complying with international standards to ensure instruments are 100% pathogen-free."
    }
  ];

  return (
    <div className="bg-white">
      {/* ======================== HERO SECTION ======================== */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Advanced medical manufacturing and strategic OEM partnerships"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            5 Strategic Benefits of OEM Partnerships for Medical Distributors in 2026
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            Building competitive advantage through strategic manufacturing alliances.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm md:text-base font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      {/* ======================== ARTICLE CONTENT ======================== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <section className="mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            As we move through 2026, the global medical supply chain is undergoing a massive shift. With a projected global market reach of <strong>$15.5 billion</strong> for Surgical Instruments, distributors are no longer just looking for "vendors"—they are seeking <strong>strategic Manufacturing Partners</strong>.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Whether you are a hospital procurement head or a regional distributor, here is why a direct OEM partnership is your most competitive move this year.
          </p>
          <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
        </section>

        {/* 1. Customization */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Settings className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">1. Customization and Private Labeling (Experience)</h2>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            In a crowded market, brand differentiation is key. An OEM partnership allows you to move beyond generic supplies.
          </p>

          <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 mb-8">
            <h4 className="text-xl font-bold text-teal-900 mb-4">The Technical Edge</h4>
            <p className="text-teal-800 leading-relaxed">
              Direct manufacturers can offer <strong>OEM & Private Labeling</strong>, allowing you to specify everything from ergonomic handle designs to custom laser-etching for your brand.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 italic">
            <p className="text-gray-600">
              <strong>Case Study:</strong> We’ve seen a 25% increase in distributors requesting specialized Retractors & Elevators tailored for minimally invasive procedures—a trend dominating Global Surgical Growth this year.
            </p>
          </div>
        </section>

        {/* 2. Regulatory */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <FileText className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">2. Streamlined Regulatory Compliance (Trustworthiness)</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Navigating international standards like <strong>ISO 13485</strong> or the <strong>EU MDR</strong> is the biggest hurdle for importers.
          </p>

          <div className="bg-teal-600 rounded-2xl p-8 text-white">
            <h4 className="text-xl font-bold mb-4">The OEM Advantage</h4>
            <p className="text-teal-50 leading-relaxed">
              When you partner with an established Global Manufacturer, you inherit their certifications. At Alira Pharmaceuticals, our documentation is pre-verified for export to the Middle East, Europe, and Africa, significantly reducing your time-to-market.
            </p>
          </div>
        </section>

        {/* 3. Cost Efficiency */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">3. Cost Efficiency through Vertical Integration (Expertise)</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            In-house manufacturing often incurs massive overhead. Outsourcing to an OEM provides:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">1</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Economies of Scale</h4>
                <p className="text-gray-600 text-sm">Lower per-unit costs for high-volume orders of Wound Care & Bandages.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-sm">2</div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Predictable Pricing</h4>
                <p className="text-gray-600 text-sm">Direct manufacturers offer "factory-direct" pricing, shielding you from reseller markups.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Sterilization */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">4. Advanced Sterilization Assurance (Authoritativeness)</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            With the rise of antibiotic-resistant infections, <strong>Sterilization Standards</strong> are stricter than ever.
          </p>

          <div className="bg-gray-900 text-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h4 className="text-xl font-bold mb-4 text-teal-400">Next-Gen Tech</h4>
              <p className="text-gray-300 leading-relaxed">
                Leading OEMs now use advanced Class B Pre-vacuum Autoclaves and Plasma Gas Sterilization to ensure that even complex Orthopedic Fracture Appliances are 100% pathogen-free.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <span className="block text-teal-400 font-bold mb-1">Class B</span>
                <span className="text-xs text-gray-400 uppercase">Autoclaves</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl text-center">
                <span className="block text-teal-400 font-bold mb-1">Plasma</span>
                <span className="text-xs text-gray-400 uppercase">Sterilization</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Resilience */}
        <section className="mb-16 pb-16 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
              <Zap className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">5. Supply Chain Resilience</h2>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            2026 has taught us that "just-in-time" delivery is risky. A direct partnership with a manufacturer like <strong>Alira Pharmaceuticals</strong> gives you:
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Priority Stock:</strong> Guaranteed allocation of critical PPE and surgical tools during seasonal demand spikes.</p>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
              <p className="text-gray-700"><strong>Direct Support:</strong> A single point of contact for technical issues, avoiding the reseller customer support loop.</p>
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-teal-50 border-2 border-teal-500 rounded-2xl p-10 text-center">
            <h3 className="text-3xl font-bold text-teal-900 mb-6">Partner for Success</h3>
            <p className="text-lg text-teal-800 mb-10 max-w-2xl mx-auto">
              Alira Pharmaceuticals combines Manufacturing Excellence with strategic OEM support to help your distribution brand grow in the global healthcare market.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-teal-700 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-800 transition-all shadow-xl hover:scale-105"
            >
              Request OEM Sourcing Guide
            </button>
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

export default BlogPost4;
