import React, { useState, useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronUp, CheckCircle, TrendingUp, Truck, Shield, Globe, AlertCircle } from 'lucide-react';

const BlogPost2 = () => {
  const { openQuotePopup } = useQuotePopup();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // SEO Meta Tags
  useEffect(() => {
    // Update page title
    document.title = "India-UAE CEPA: Zero-Duty Medical Imports Dubai | Indian Surgical Instruments Exporter";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how the India-UAE CEPA agreement enables zero-duty medical imports in Dubai. Learn how UAE distributors benefit from faster MOHAP registration, lower procurement costs, and reliable supply from Indian surgical instrument manufacturers.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Discover how the India-UAE CEPA agreement enables zero-duty medical imports in Dubai. Learn how UAE distributors benefit from faster MOHAP registration, lower procurement costs, and reliable supply from Indian surgical instrument manufacturers.';
      document.head.appendChild(newMeta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'India-UAE CEPA, zero-duty medical imports Dubai, pharmaceutical exporter to UAE, Indian surgical instruments manufacturer, medical device registration MOHAP, UAE healthcare procurement, Jebel Ali re-export hub, medical device supplier India to UAE, CEPA medical trade India UAE, hospital equipment supplier Dubai');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = 'India-UAE CEPA, zero-duty medical imports Dubai, pharmaceutical exporter to UAE, Indian surgical instruments manufacturer, medical device registration MOHAP, UAE healthcare procurement, Jebel Ali re-export hub, medical device supplier India to UAE, CEPA medical trade India UAE, hospital equipment supplier Dubai';
      document.head.appendChild(newMeta);
    }

    // Add JSON-LD Schema Markup
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "The Zero-Duty Revolution: Why UAE Healthcare is Turning to Indian Medical Excellence",
      "description": "Learn how the India-UAE CEPA agreement enables zero-duty medical imports in Dubai and why UAE healthcare distributors are sourcing surgical instruments and pharmaceuticals from Indian manufacturers.",
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
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://alirapharmaceuticals.com/blog/india-uae-cepa-zero-duty-medical-imports-dubai"
      },
      "datePublished": "2026-03-15",
      "dateModified": "2026-03-15",
      "keywords": [
        "India-UAE CEPA",
        "zero-duty medical imports Dubai",
        "pharmaceutical exporter to UAE",
        "medical device registration MOHAP",
        "Indian surgical instruments manufacturer",
        "Jebel Ali re-export hub"
      ],
      "articleSection": "Medical Trade",
      "inLanguage": "en"
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
      question: "What is the India-UAE CEPA agreement?",
      answer: "The India-UAE Comprehensive Economic Partnership Agreement (CEPA) is a trade agreement that enables zero-duty or preferential tariff imports on a wide range of medical devices, pharmaceutical products, and other goods between India and UAE."
    },
    {
      id: 2,
      question: "How much can distributors save with zero-duty imports?",
      answer: "By eliminating import duties, distributors can typically reduce procurement costs by 5-15% depending on product classification, and reinvest savings into competitive pricing or higher profit margins."
    },
    {
      id: 3,
      question: "What are the regulatory requirements for CEPA-compliant products?",
      answer: "Products must be manufactured in India, have proper Certificate of Origin, comply with WHO-GMP or ISO standards, and meet MOHAP/EDE requirements for UAE market approval."
    },
    {
      id: 4,
      question: "How long does the registration process take?",
      answer: "Under CEPA fast-track pathways, compliant Indian medical products typically receive market authorization within approximately 90 days of dossier submission to UAE regulatory authorities."
    },
    {
      id: 5,
      question: "Can products be re-exported from UAE to other GCC countries?",
      answer: "Yes, Jebel Ali Free Zone (JAFZA) is a major re-export hub. Distributors can legally store and re-export CEPA-sourced medical products to Saudi Arabia, Oman, Kuwait, and East African markets."
    },
    {
      id: 6,
      question: "What shipping routes connect India to UAE?",
      answer: "Major Indian export ports (Mundra, JNPT, Kandla) have direct shipping routes to Jebel Ali Port with typical transit times of 3-5 days by sea."
    }
  ];

  return (
    <div>
      {/* ======================== BANNER SECTION ======================== */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000" 
            alt="India UAE CEPA agreement enabling zero duty medical device imports to Dubai healthcare distributors"
            title="India-UAE CEPA Medical Trade Advantage"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            The Zero-Duty Revolution: Why UAE Healthcare is Turning to Indian Medical Excellence
          </h1>
          <p className="text-lg md:text-xl text-teal-50 mb-6">
            India-UAE CEPA: Zero-Duty Medical Imports Dubai
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm md:text-base font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Blog</span>
          </div>
        </div>
      </div>

      {/* ======================== ARTICLE CONTAINER ======================== */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ======================== INTRODUCTION SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
              The New Trade Landscape Transforming UAE Healthcare Procurement
            </h2>
            
            {/* Featured Snippet Optimized Description */}
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 leading-relaxed font-semibold">
                The India-UAE CEPA agreement is transforming medical trade between the two countries by enabling zero-duty imports on many medical devices and pharmaceutical products. For distributors operating in Dubai, Abu Dhabi, and the Jebel Ali Free Zone, sourcing from Indian manufacturers now offers significant advantages in pricing, regulatory approvals, and logistics efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This article explains how UAE healthcare distributors can leverage CEPA to reduce procurement costs, accelerate MOHAP product registration, and strengthen regional distribution through JAFZA re-export networks.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              In the evolving healthcare supply chain of the Gulf region, procurement efficiency has become as critical as clinical quality. Hospitals, pharmaceutical distributors, and healthcare investors in Dubai, Abu Dhabi, and the wider GCC are increasingly seeking sourcing strategies that reduce cost, accelerate regulatory approvals, and ensure reliable logistics.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The India–UAE Comprehensive Economic Partnership Agreement (CEPA) has emerged as a defining factor in this transformation. By enabling zero-duty imports on a wide range of medical devices and pharmaceutical products, CEPA is reshaping how UAE healthcare buyers evaluate suppliers.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For hospital procurement officers and pharmaceutical distributors operating from hubs like Jebel Ali Free Zone (JAFZA), the implications are clear: Indian medical manufacturers now offer a significant pricing and operational advantage over traditional European or East Asian suppliers.
            </p>

            <div className="bg-linear-to-r from-teal-600 to-teal-700 text-white p-6 rounded-lg mb-8">
              <p className="text-lg">
                Exporters such as <strong>Alira Pharmaceuticals</strong>, a pharmaceutical exporter to UAE markets, are leveraging this agreement to provide CEPA-compliant medical sourcing solutions that combine cost efficiency, regulatory readiness, and fast logistics.
              </p>
            </div>
          </section>

          {/* ======================== COST FACTOR SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              The Cost Factor: How Zero-Duty Imports Are Increasing Distributor Margins
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              For distributors operating in competitive healthcare markets such as Dubai and Abu Dhabi, procurement cost directly impacts profitability. Prior to the India-UAE CEPA agreement, imported medical devices and pharmaceutical products often faced duties that added substantial overhead to landed costs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-semibold text-lg">
              Under CEPA, many Indian-origin medical products now enter the UAE at 0% import duty, creating an immediate financial advantage.
            </p>

            <div className="bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-teal-900 mb-8">Financial Advantages for UAE Buyers</h3>
              
              <div className="space-y-6">
                {/* Advantage 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <TrendingUp className="w-8 h-8 text-teal-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-teal-900 mb-2">Reduced Landed Cost</h4>
                    <p className="text-gray-700">
                      Zero-duty medical imports in Dubai allow distributors to reduce procurement costs by eliminating import tariffs typically associated with international sourcing.
                    </p>
                  </div>
                </div>

                {/* Advantage 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <CheckCircle className="w-8 h-8 text-teal-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-teal-900 mb-2">Improved Pricing Flexibility</h4>
                    <p className="text-gray-700 mb-3">
                      With lower import expenses, distributors can:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Offer competitive pricing to hospitals and clinics
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Maintain higher profit margins
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Increase product portfolio competitiveness against European imports
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Advantage 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Globe className="w-8 h-8 text-teal-600 mt-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-teal-900 mb-2">Strategic Re-Export Opportunities</h4>
                    <p className="text-gray-700 mb-3">
                      Many distributors in Jebel Ali re-export hubs supply medical products to markets across:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Saudi Arabia
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Oman
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        Kuwait
                      </li>
                      <li className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                        East Africa
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Lower procurement costs from Indian manufacturers make UAE distributors more competitive in regional trade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-300">
                <p className="text-gray-700 font-semibold">
                  For procurement teams, sourcing from an Indian surgical instruments manufacturer through CEPA effectively creates a structural cost advantage in the healthcare supply chain.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== SPEED TO MARKET SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Speed to Market: Fast-Track Registration for Indian Medical Products
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Beyond pricing advantages, regulatory timelines play a major role in procurement decisions. Healthcare distributors must ensure that all medical devices and pharmaceutical products comply with UAE regulatory requirements governed by MOHAP (Ministry of Health and Prevention) and the Emirates Drug Establishment (EDE).
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Under strengthened trade cooperation frameworks, Indian medical products are benefiting from faster regulatory pathways, enabling many compliant products to reach the UAE market within approximately <strong>90 days</strong> of dossier submission.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
              <h3 className="text-2xl font-semibold text-teal-800 mb-6">The Fast-Track Registration Process</h3>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <h4 className="text-lg font-semibold text-teal-900">Technical Dossier Submission</h4>
                  </div>
                  <p className="text-gray-700 ml-11 mb-3">
                    Manufacturers submit regulatory documentation including:
                  </p>
                  <ul className="ml-11 space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      Product technical files
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      Quality certificates
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      Clinical validation where required
                    </li>
                  </ul>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <h4 className="text-lg font-semibold text-teal-900">MOHAP Compliance Verification</h4>
                  </div>
                  <p className="text-gray-700 ml-11 mb-3">
                    The UAE regulatory authority verifies:
                  </p>
                  <ul className="ml-11 space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      Manufacturing standards
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      Product classification
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                      International certifications
                    </li>
                  </ul>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <h4 className="text-lg font-semibold text-teal-900">Market Authorization</h4>
                  </div>
                  <p className="text-gray-700 ml-11">
                    Once approved, distributors can legally import and distribute products across UAE healthcare institutions.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-300">
                <p className="text-gray-700 font-semibold">
                  By partnering with a pharmaceutical exporter to UAE markets that already understands MOHAP requirements, distributors reduce delays and streamline product registration.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== QUALITY & COMPLIANCE SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
             The Foundation of Modern Surgery: Surgical Grade Metallurgy
          </h2>
          <div className="h-1 w-20 bg-teal-500 rounded-full mb-10"></div>
          <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium">
              While cost and speed are important, quality assurance remains the top priority for hospital procurement officers. Indian medical manufacturers supplying the UAE market have significantly upgraded their production capabilities over the past decade. Leading exporters now operate under internationally recognized standards, including:
            </p>

            {/* WHO-GMP Section */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">WHO-GMP Certification</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pharmaceutical manufacturing facilities comply with World Health Organization Good Manufacturing Practices, ensuring:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Controlled production environments
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Strict quality testing protocols
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Traceable batch documentation
                </li>
              </ul>
            </div>

            {/* ISO 13485 Section */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">ISO 13485 Medical Device Compliance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medical device manufacturers adhere to ISO 13485 standards, which govern:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Design and manufacturing processes
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Risk management systems
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Regulatory documentation
                </li>
              </ul>
            </div>

            {/* Full Documentation Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">Full Documentation for Import Compliance</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional exporters provide complete shipment documentation including:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Commercial invoices
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Packing lists
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Certificate of origin (required for CEPA benefits)
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Bill of Lading
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Regulatory dossiers
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-gray-700 font-semibold">
                  For UAE distributors concerned about product reliability, sourcing from a certified Indian surgical instruments manufacturer ensures compliance with international healthcare standards.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== LOGISTICS SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Logistics Advantage: India's Proximity to UAE Trade Hubs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Geography is another key factor influencing procurement decisions. Compared to European or East Asian suppliers, India offers significantly faster shipping routes to the UAE.
            </p>

            <div className="bg-linear-to-r from-cyan-50 to-teal-50 border border-teal-200 rounded-lg p-8 space-y-8">
              {/* Short Transit Times */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-teal-600" />
                  <h3 className="text-2xl font-semibold text-teal-900">Short Transit Times</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Major Indian export ports such as:
                </p>
                <ul className="space-y-2 ml-4 mb-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Mundra Port
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Nhava Sheva (JNPT)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Kandla Port
                  </li>
                </ul>
                <p className="text-gray-700 font-semibold">
                  Offer direct shipping routes to Jebel Ali Port, typically arriving within <strong>3–5 days</strong> of sea transit.
                </p>
              </div>

              {/* Efficient Free-Zone Distribution */}
              <div className="pt-6 border-t border-teal-300">
                <h3 className="text-2xl font-semibold text-teal-900 mb-4">Efficient Free-Zone Distribution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Once cargo reaches JAFZA, distributors can:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Store products in bonded warehouses
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Re-export across the GCC and Africa
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Optimize inventory cycles
                  </li>
                </ul>
              </div>

              {/* Reliable Documentation Handling */}
              <div className="pt-6 border-t border-teal-300">
                <h3 className="text-2xl font-semibold text-teal-900 mb-4">Reliable Documentation Handling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experienced exporters provide complete shipping documentation including:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Bill of Lading
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Packing lists
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Certificate of Origin (for CEPA duty benefits)
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Export declarations
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-teal-300">
                <p className="text-gray-700 font-semibold">
                  For procurement teams managing hospital supply chains, shorter transit times translate directly into improved inventory management and reduced stock risk.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== STRATEGIC OPPORTUNITY SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              The Strategic Opportunity for UAE Healthcare Buyers
            </h2>
            <div className="bg-linear-to-r from-teal-600 to-teal-700 text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed mb-6">
                The healthcare procurement landscape in the Gulf is evolving rapidly. Rising demand, expanding hospital networks, and increasing regulatory sophistication require supply partners who combine cost efficiency, regulatory expertise, and dependable logistics.
              </p>
              <p className="text-lg leading-relaxed mb-8">
                The India-UAE CEPA agreement has positioned India as one of the most competitive sourcing destinations for:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Surgical instruments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Medical devices</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Pharmaceutical products</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Hospital consumables</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-500">
                <p className="text-lg font-semibold">
                  For UAE distributors operating from Dubai, Abu Dhabi, or the Jebel Ali re-export hub, sourcing from India is no longer just an alternative—it is becoming a <strong>strategic procurement advantage</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== ALIRA SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Partner with Alira Pharmaceuticals for CEPA-Compliant Medical Sourcing
            </h2>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-8 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Alira Pharmaceuticals is an experienced pharmaceutical exporter to UAE markets, specializing in CEPA-compliant medical sourcing solutions for distributors, healthcare investors, and hospital procurement teams.
              </p>
              
              <h3 className="text-xl font-semibold text-teal-900 mb-4">Our capabilities include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Supply of high-quality surgical instruments and medical devices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Products manufactured under WHO-GMP and ISO 13485 standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Complete regulatory documentation for MOHAP compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Efficient logistics to Jebel Ali and Dubai healthcare distribution hubs</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-teal-300">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Partner with Alira Pharmaceuticals to leverage the full advantage of the India-UAE CEPA agreement and optimize your medical procurement strategy.
                </p>
                <p className="text-gray-700 font-semibold">
                  Connect with our export team today to explore cost-efficient, zero-duty medical sourcing from India.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== FAQ SECTION ======================== */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-teal-100 rounded-xl overflow-hidden hover:border-teal-300 transition-colors">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-teal-50 transition-colors"
                  >
                    <span className="text-lg font-bold text-teal-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-teal-600 transition-transform ${expandedFAQ === faq.id ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 py-5 bg-teal-50 border-t border-teal-100 italic leading-relaxed">
                      <p className="text-gray-700 leading-relaxed italic">"{faq.answer}"</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ======================== CTA SECTION ======================== */}
          <section className="bg-teal-700 rounded-2xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-white">Upgrade Your Surgical Inventory</h3>
            <p className="text-lg text-teal-50 mb-10 max-w-2xl mx-auto">
              Our precision-engineered instruments meet the highest standards of durability and performance. Partner with Alira Pharmaceuticals for your hospital's surgical procurement needs.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Request Bulk Quotation
            </button>
          </div>
          <ShieldCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-white/10" />
        </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
