import React, { useEffect } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { Globe, Building, ClipboardList, ShieldCheck, Award, Truck, MapPin, CheckCircle, HelpCircle, ArrowRight, Image as ImageIcon } from 'lucide-react';

const BlogPost18 = () => {
  const { openQuotePopup } = useQuotePopup();
  
  useEffect(() => {
    document.title = "Top Surgical Instrument Suppliers in UAE: What Hospitals & Clinics Should Look For (2025)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', 'Looking for reliable surgical instrument suppliers in UAE? Discover the key criteria hospitals, clinics, and procurement teams must evaluate when choosing a B2B medical supplier in the GCC.');
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top Surgical Instrument Suppliers in UAE: What Hospitals & Clinics Should Look For (2025)",
      "description": "Looking for reliable surgical instrument suppliers in UAE? Discover the key criteria hospitals, clinics, and procurement teams must evaluate when choosing a B2B medical supplier in the GCC.",
      "author": { "@type": "Organization", "name": "Alira Pharmaceuticals Editorial Team" },
      "publisher": { "@type": "Organization", "name": "Alira Pharmaceuticals" },
      "datePublished": "2025-06-18", // Assuming current date or relevant date
      "keywords": "surgical instrument suppliers UAE, surgical instruments UAE, medical supply companies UAE, hospital procurement UAE, B2B medical supplier GCC"
    });
    document.head.appendChild(script);
    return () => { script.remove(); };
  }, []);

  // Placeholder component for images
  const ImagePlaceholder = ({ text }) => (
    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center my-8 flex flex-col items-center justify-center min-h-[300px]">
      <ImageIcon className="w-12 h-12 text-slate-400 mb-4" />
      <p className="text-slate-600 font-medium">{text}</p>
      <p className="text-slate-400 text-sm mt-2">Space reserved for image</p>
    </div>
  );

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Fallback pattern or effect since we are keeping cards empty, but hero needs a bg or pattern */}
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/95 to-teal-800/85"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-700/20 skew-x-12 transform translate-x-32"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="bg-teal-700 text-teal-100 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            Procurement Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            Top Surgical Instrument Suppliers in UAE: What Hospitals & Clinics Should Look For (2025)
          </h1>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-8 font-medium">
            A comprehensive guide for procurement managers, hospital administrators, and clinic owners in the GCC.
          </p>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm font-medium">
            <span>By Alira Pharmaceuticals Editorial Team</span>
            <span>|</span>
            <span>Last reviewed: June 2025</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        {/* Author Note */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-12 text-sm text-slate-600">
          <strong>Author Note:</strong> This guide has been reviewed by our procurement specialists with over 15 years of combined experience supplying surgical instruments to hospitals and clinics across the UAE, Saudi Arabia, and GCC region.
        </div>

        {/* Section 1: Introduction */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              1
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Why Choosing the Right Supplier Matters</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            The UAE's healthcare sector is one of the fastest growing in the world. With major investments flowing into world-class hospitals in Dubai, Abu Dhabi, Sharjah, and across the GCC, the demand for high-quality surgical instruments has never been higher. But for procurement managers, hospital administrators, and clinic owners, identifying the right B2B surgical instrument supplier is not just about price — it's about patient safety, regulatory compliance, and operational continuity.
          </p>
          <p className="text-slate-700 leading-relaxed mb-6">
            The wrong supplier can mean delayed procedures, instrument failures, failed regulatory audits, or worse — patient harm. This guide outlines exactly what to evaluate when sourcing surgical instruments in the UAE, drawn from firsthand supply chain experience across the GCC healthcare sector.
          </p>
          
          <img src="/b(1).jpeg" alt="Modern hospital operating room equipped with surgical lights, operating table, and advanced medical equipment." className="w-full h-auto rounded-2xl my-8 shadow-sm" />
        </section>

        {/* Section 2: Landscape */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              2
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Understanding the UAE's Medical Supply Landscape</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            The UAE operates one of the most regulated healthcare procurement ecosystems in the Middle East. The Ministry of Health and Prevention (MoHAP), the Dubai Health Authority (DHA), and the Department of Health – Abu Dhabi (DoH) each set distinct requirements for medical devices and surgical instruments entering facilities under their jurisdiction.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-3 text-teal-600">
                <Globe className="w-5 h-5" />
                <h4 className="font-bold text-slate-900">Regulatory Framework</h4>
              </div>
              <p className="text-sm text-slate-600">All surgical instruments and medical devices must comply with UAE Cabinet Resolution No. 7 of 2020 on medical product registration.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-3 text-teal-600">
                <ShieldCheck className="w-5 h-5" />
                <h4 className="font-bold text-slate-900">Import Standards</h4>
              </div>
              <p className="text-sm text-slate-600">Products entering the UAE must bear CE marking (European standard) or meet FDA-equivalent global quality standards.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-3 text-teal-600">
                <Building className="w-5 h-5" />
                <h4 className="font-bold text-slate-900">Procurement Channels</h4>
              </div>
              <p className="text-sm text-slate-600">Most hospitals operate through Approved Vendor Lists (AVL), and suppliers must go through formal qualification processes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 mb-3 text-teal-600">
                <ClipboardList className="w-5 h-5" />
                <h4 className="font-bold text-slate-900">Tender-Driven Market</h4>
              </div>
              <p className="text-sm text-slate-600">Government hospitals often procure through DHA or MoHAP tenders; private hospitals may operate through direct procurement or GPOs.</p>
            </div>
          </div>


        </section>

        {/* Section 3: Types */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              3
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Types of Surgical Instruments Available in the UAE Market</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Not all surgical instrument suppliers offer the same product portfolio. When evaluating a B2B supplier, assess whether they cover the full spectrum your facility requires:
          </p>
          
          <ul className="space-y-4 my-8">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">General Surgery Instruments:</strong> Scalpels, forceps, retractors, scissors, needle holders, clamps, haemostats
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Laparoscopic & Minimally Invasive Instruments:</strong> Trocars, graspers, dissectors, laparoscopic scissors, clip appliers
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Orthopaedic Instruments:</strong> Bone rongeurs, osteotomes, mallet sets, bone holding forceps, curettes
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Obstetrics & Gynaecology (OB/GYN) Instruments:</strong> Sims speculums, uterine dilators, ovum forceps, curettage sets
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Ophthalmic Instruments:</strong> Iris scissors, conjunctival forceps, lid retractors, phaco probes
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">ENT Instruments:</strong> Nasal speculums, ear curettes, laryngoscopes, adenotome sets
              </div>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Dental & Oral Surgery Instruments:</strong> Extraction forceps, elevators, scalers, surgical burs
              </div>
            </li>
          </ul>

          <img src="/b(2).jpeg" alt="Professional surgical instrument set arranged inside a red medical carrying case." className="w-full h-auto rounded-2xl my-8 shadow-sm" />
        </section>

        {/* Section 4: Regulatory */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              4
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Regulatory Compliance — Non-Negotiable Standards</h2>
          </div>
          <img src="/b(3).jpeg" alt="Map of the UAE showing hospitals, clinics, and planned healthcare facilities for unified healthcare procurement." className="w-full h-auto rounded-2xl my-8 shadow-sm" />
          <p className="text-slate-700 leading-relaxed mb-6">
            This is where many buyers underestimate the risk. A surgical instrument that is not properly certified can lead to regulatory action against your facility, not just the supplier. Here's what to verify:
          </p>
          
          <ol className="space-y-4 my-8 list-decimal pl-5 text-slate-700">
            <li><strong>ISO 13485 Certification:</strong> This is the global standard for Quality Management Systems in medical device manufacturing. Any reputable surgical instrument supplier — or their manufacturers — should hold this certification.</li>
            <li><strong>CE Marking (European Conformity):</strong> The CE mark indicates compliance with EU Medical Device Regulation (MDR 2017/745), a standard widely recognised and accepted in the UAE and GCC.</li>
            <li><strong>MDCG & UAE MOHU Registration:</strong> Check that the supplier's products are registered with relevant UAE authorities. Products not on approved lists cannot legally be supplied to licensed healthcare facilities.</li>
            <li><strong>Sterilisation Compliance:</strong> Instruments should be supplied with clear documentation on sterilisation method compatibility — autoclave, EtO, or gamma radiation — and reusability classification.</li>
            <li><strong>Lot Traceability:</strong> In line with patient safety best practices, instruments should carry lot numbers and full traceability documentation enabling recall management if needed.</li>
          </ol>
        </section>

        {/* Section 5: Quality Assurance */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              5
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Quality Assurance — Beyond the Certificate</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Certificates are necessary but not sufficient. Here's how to assess actual instrument quality:
          </p>
          <ul className="space-y-4 my-6">
            <li><strong>Material Grade:</strong> Surgical instruments should be manufactured from Grade 316L or 410 stainless steel as a minimum. Instruments made from lower-grade alloys corrode faster, lose their edge, and can introduce contaminants into surgical fields.</li>
            <li><strong>Surface Finish:</strong> Satin/Matt Finish reduces glare under surgical lighting; Mirror/Bright Finish is used for some ophthalmic and micro instruments.</li>
            <li><strong>Precision & Tolerances:</strong> Request sample batches before committing to large orders. Check jaw alignment, tension of ring handles, and bite pattern of serrations.</li>
          </ul>
        </section>

        {/* Section 6: Service Standards */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              6
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Service Standards — Delivery, Lead Times & After-Sale Support</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            A great product delivered unreliably is a liability. Evaluate these operational factors:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-1">Lead Times</h4>
              <p className="text-sm text-slate-600">Local stock = same-day to 3-day delivery. Import orders = 2–6 weeks depending on origin and customs clearance.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-1">MOQ Requirements</h4>
              <p className="text-sm text-slate-600">Look for suppliers who accommodate both small and large volume orders without prohibitive MOQs.</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-1">Emergency Supply</h4>
              <p className="text-sm text-slate-600">Can the supplier fulfil urgent orders outside standard cycles to prevent procedure cancellations?</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-bold text-slate-900 mb-1">Technical Support</h4>
              <p className="text-sm text-slate-600">Does the supplier offer product demonstrations, clinical support, or in-service training?</p>
            </div>
          </div>

          <img src="/b(4).jpeg" alt="Medical supply warehouse with organized shelves containing hospital equipment, surgical supplies, and packaged inventory." className="w-full h-auto rounded-2xl my-8 shadow-sm" />
        </section>

        {/* Section 7: Track Record */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              7
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Evaluating a Supplier's Track Record in the GCC</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-6">
            Experience in the GCC market specifically — not just global supply — matters. Ask any prospective supplier:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-700">
            <li>How long have you been supplying to UAE/GCC hospitals?</li>
            <li>Which hospitals or healthcare groups are you currently approved vendors for?</li>
            <li>Can you provide references from current GCC clients?</li>
            <li>Do you have a local office, warehouse, or representative in the UAE?</li>
          </ul>
        </section>

        {/* Section 8: Alira */}
        <section className="mb-16 bg-teal-50 p-8 rounded-2xl border border-teal-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              8
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Why Alira Pharmaceuticals is a Trusted Choice</h2>
          </div>
          <img src="/b(5).jpeg" alt="Flowchart showing hospital consultant services for planning and procurement including vendor shortlisting, negotiation, installation, and staff training." className="w-full h-auto rounded-2xl my-8 shadow-sm" />
          <p className="text-slate-700 leading-relaxed mb-6">
            Alira Pharmaceuticals has built its reputation as a dependable B2B supplier of surgical instruments, medical disposables, and healthcare devices across the UAE, Saudi Arabia, and the broader GCC.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> Verified Product Portfolio (ISO 13485, CE)</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> GCC-Specific Expertise (MoHAP, DHA, DoH, SFDA)</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> Flexible Supply (Single clinic to large groups)</li>
            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-teal-600 shrink-0" /> Local Presence & Reliable Lead Times</li>
          </ul>
        </section>

        {/* Section 9: Questions */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg">
              9
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Key Questions to Ask Any Supplier Before Signing a Contract</h2>
          </div>
          
          <div className="space-y-3 text-slate-700">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 border-2 border-teal-500 rounded-sm shrink-0"></div>
              <span>Are your products ISO 13485 certified (at manufacturer level)?</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 border-2 border-teal-500 rounded-sm shrink-0"></div>
              <span>Do you hold CE marking or FDA equivalence for your instrument ranges?</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 border-2 border-teal-500 rounded-sm shrink-0"></div>
              <span>Are your products registered with UAE MoHAP or relevant DHA/DoH authorities?</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 border-2 border-teal-500 rounded-sm shrink-0"></div>
              <span>What is your standard lead time for in-stock and import items?</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 border-2 border-teal-500 rounded-sm shrink-0"></div>
              <span>Do you maintain local stock in the UAE?</span>
            </div>
          </div>


        </section>

        {/* Section 10: Conclusion */}
        <section className="mb-16 text-center bg-slate-900 text-white p-12 rounded-3xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Selecting a surgical instrument supplier in the UAE is a decision with direct implications for patient safety, regulatory standing, and operational efficiency. The right partner brings not just quality products but regulatory expertise, local market knowledge, and reliable service standards.
            </p>
            <button 
              onClick={() => openQuotePopup()}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Request a Product Catalogue <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </section>
      </div>
    </div>
  );
};

export default BlogPost18;
