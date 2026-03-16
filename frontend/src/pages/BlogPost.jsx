import React, { useState } from 'react';
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ChevronDown, ChevronUp, CheckCircle, AlertCircle, Zap, Award } from 'lucide-react';

const BlogPost = () => {
  const { openQuotePopup } = useQuotePopup();
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "What instruments are included in a neurosurgery instrument set?",
      answer: "A neurosurgery instrument set typically includes micro-dissectors, surgical retractors, cranial perforators, neuro forceps, and micro scissors used in brain and spinal procedures."
    },
    {
      id: 2,
      question: "What materials are used in high-quality surgical instruments?",
      answer: "Most surgical instruments are made from medical-grade stainless steel, offering corrosion resistance, durability, and compatibility with sterilization methods."
    },
    {
      id: 3,
      question: "Why do hospitals source surgical instruments from India?",
      answer: "India offers high-quality manufacturing, competitive pricing, skilled technicians, and strong global export infrastructure."
    },
    {
      id: 4,
      question: "What certifications should surgical instruments have?",
      answer: "Important certifications include ISO 13485, CE marking, and compliance with international surgical steel standards."
    },
    {
      id: 5,
      question: "What should procurement officers consider when sourcing surgical tools?",
      answer: "They should evaluate manufacturing quality, ergonomic design, sterilization compatibility, regulatory compliance, and supplier reliability."
    }
  ];

  return (
    <div>
      {/* ======================== BANNER SECTION ======================== */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000" 
            alt="Surgical Instruments Banner" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 to-teal-800/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Sourcing Specialty ENT & Neuro-Surgical Tools
          </h1>
          <p className="text-lg md:text-xl text-teal-50 mb-6">
            A Comprehensive Guide for Procurement Officers
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
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
              Growing Demand for Specialized Surgical Instruments in Modern Hospitals
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Healthcare systems worldwide are witnessing a steady increase in demand for specialized surgical procedures, particularly within otolaryngology (ENT) and neurosurgery. Advancements in diagnostic imaging, minimally invasive surgical techniques, and microsurgical procedures have significantly increased the need for precision surgical instruments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hospitals, specialty clinics, and surgical centers now require highly specialized tools that support delicate procedures involving the brain, spinal cord, ear canal, nasal cavity, and larynx. Unlike general surgical instruments, ENT and neurosurgical tools must offer exceptional accuracy, durability, and ergonomic control.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For hospital procurement departments, sourcing these instruments involves far more than price comparison. Procurement officers must carefully evaluate:
            </p>

            {/* Key Considerations */}
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg mb-8">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong>Instrument precision and mechanical reliability</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong>Surgical-grade metallurgy</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong>Compliance with international manufacturing standards</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong>Sterilization compatibility</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800"><strong>Supplier reliability and logistics capabilities</strong></span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              As global healthcare systems expand, hospital instrument procurement teams increasingly work with trusted surgical instrument suppliers in India, known for their high manufacturing standards and cost-efficient production capabilities.
            </p>
          </section>

          {/* ======================== ENT INSTRUMENTS SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Key ENT Surgical Instruments Used in Clinical Procedures
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              ENT procedures require specialized instruments designed to operate within narrow anatomical structures such as the ear canal, nasal cavity, and throat. These instruments must provide excellent visualization and controlled manipulation without damaging surrounding tissues.
            </p>

            {/* Nasal Speculum */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Nasal Speculum</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A nasal speculum is a diagnostic and surgical instrument used to widen the nasal cavity for examination and surgical procedures. It allows surgeons to access the nasal passages while maintaining clear visibility.
              </p>
              <p className="text-gray-600 font-semibold mb-3">High-quality nasal speculums typically feature:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Smooth opening mechanisms
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Rounded edges to prevent mucosal trauma
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Surgical-grade stainless steel construction
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Sterilization compatibility with autoclaves
                </li>
              </ul>
            </div>

            {/* Ear Forceps */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Ear Forceps</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ear forceps are delicate instruments used to remove foreign bodies, earwax, or tissue from the ear canal. Because of the ear's sensitive structure, these instruments require precise alignment and narrow tips.
              </p>
              <p className="text-gray-600 font-semibold mb-3">Procurement officers should ensure ear forceps offer:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  High tactile sensitivity
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Non-slip grip handles
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Fine tip alignment for delicate manipulation
                </li>
              </ul>
            </div>

            {/* Sinus Instruments */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Sinus Instruments</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sinus surgery instruments are designed for procedures addressing sinus infections, nasal polyps, and sinus blockages. These tools often include curettes, suction tubes, and graspers.
              </p>
              <p className="text-gray-600 font-semibold mb-3">High-quality sinus instruments should demonstrate:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Precision-cut edges
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Strong corrosion resistance
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Lightweight ergonomic design
                </li>
              </ul>
            </div>

            {/* Laryngoscopes */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Laryngoscopes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Laryngoscopes are essential diagnostic and surgical tools used to examine the larynx and vocal cords. They are also widely used during airway management procedures such as intubation.
              </p>
              <p className="text-gray-600 font-semibold mb-3">Modern laryngoscopes typically feature:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Fiber-optic illumination
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Durable blade construction
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Sterilizable components
                </li>
              </ul>
            </div>
          </section>

          {/* ======================== NEURO INSTRUMENTS SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Essential Neuro-Surgical Instruments for Precision Procedures
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Neurosurgery represents one of the most technically demanding medical specialties. Surgical procedures involving the brain and spinal cord require extremely precise instruments capable of operating within millimeter-level margins. A typical neurosurgery instrument set includes several highly specialized tools designed for microsurgical precision.
            </p>

            {/* Micro-Dissectors */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Micro-Dissectors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Micro-dissectors are used to separate delicate tissues during brain or spinal surgery. These instruments must provide maximum control with minimal pressure.
              </p>
              <p className="text-gray-600 font-semibold mb-3">Key design considerations include:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Ultra-fine tips
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Balanced handle weight
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  High tactile sensitivity
                </li>
              </ul>
            </div>

            {/* Surgical Retractors */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Specialized Surgical Retractors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Specialized surgical retractors are essential for holding back tissues to provide surgeons with clear visibility during procedures.
              </p>
              <p className="text-gray-600 font-semibold mb-3">Neurosurgical retractors must offer:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Stable retraction without excessive pressure
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Adjustable blade angles
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Lightweight yet durable construction
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                High-quality retractors reduce surgical fatigue while ensuring optimal surgical field exposure.
              </p>
            </div>

            {/* Cranial Perforators */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Cranial Perforators</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cranial perforators are used during neurosurgical procedures to create controlled openings in the skull. These instruments must meet strict safety and precision standards to prevent damage to underlying tissues.
              </p>
              <p className="text-gray-600 font-semibold mb-3">Procurement officers should ensure these tools feature:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Precision drilling mechanisms
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Safety stop technology
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Durable surgical steel construction
                </li>
              </ul>
            </div>

            {/* Neuro Forceps */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Neuro Forceps</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Neuro forceps are used to grasp and manipulate extremely delicate tissues within the central nervous system.
              </p>
              <p className="text-gray-600 font-semibold mb-3">Critical features include:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Precision tip alignment
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Non-slip ergonomic handles
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Balanced instrument weight
                </li>
              </ul>
            </div>

            {/* Micro Scissors */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Micro Scissors</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Micro scissors are used for precise cutting during neurosurgical procedures. These instruments must maintain consistent cutting performance even after repeated sterilization cycles. Hospitals sourcing wholesale neuro-surgical tools should ensure suppliers maintain strict quality control processes during manufacturing.
              </p>
            </div>
          </section>

          {/* ======================== TECHNICAL SPECIFICATIONS SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Technical Specifications Procurement Officers Must Evaluate
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Selecting surgical instruments involves detailed technical evaluation. Poorly manufactured tools can compromise surgical outcomes and increase the risk of complications. Key technical factors procurement teams must consider include:
            </p>

            {/* Surgical-Grade Stainless Steel */}
            <div className="mb-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Surgical-Grade Stainless Steel</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                High-quality surgical instruments are typically manufactured using medical-grade stainless steel, which provides excellent strength, corrosion resistance, and durability. Common surgical steel grades include:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <strong>Martensitic stainless steel</strong> for cutting instruments
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <strong>Austenitic stainless steel</strong> for corrosion resistance
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These materials ensure long-term durability under repeated sterilization cycles.
              </p>
            </div>

            {/* Corrosion Resistance */}
            <div className="mb-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Corrosion Resistance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Surgical instruments are exposed to moisture, chemicals, and sterilization processes. Instruments must resist corrosion to maintain safety and performance. High-quality instruments undergo surface treatments such as:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Passivation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Electropolishing
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These processes improve corrosion resistance and extend instrument lifespan.
              </p>
            </div>

            {/* Instrument Balance and Ergonomics */}
            <div className="mb-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Instrument Balance and Ergonomics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Instrument balance directly impacts surgical precision. Poorly balanced instruments can cause surgeon fatigue and reduce procedural accuracy. Well-designed instruments offer:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Proper weight distribution
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Ergonomic grip handles
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Smooth articulation mechanisms
                </li>
              </ul>
            </div>

            {/* Sterilization Compatibility */}
            <div className="mb-8 bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Sterilization Compatibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hospitals rely on sterilization methods such as:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Steam autoclaving
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Ethylene oxide sterilization
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Plasma sterilization
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Instruments must withstand these processes without structural degradation.
              </p>
            </div>

            {/* Precision Engineering */}
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-semibold text-teal-800 mb-3">Precision Engineering</h3>
              <p className="text-gray-700 leading-relaxed">
                Precision manufacturing ensures instrument tips align perfectly and cutting edges remain sharp. Even slight deviations can affect surgical performance. Trusted precision surgical instruments manufacturers maintain strict tolerance controls during production.
              </p>
            </div>
          </section>

          {/* ======================== ERGONOMICS & DURABILITY SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Importance of Ergonomics and Durability in High-Risk Surgeries
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              ENT and neurosurgical procedures often last several hours and require sustained concentration from surgeons. Instrument ergonomics therefore play a crucial role in surgical performance. Well-designed instruments help surgeons maintain control and reduce fatigue during complex procedures.
            </p>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg mb-8 border border-teal-200">
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Key Ergonomic Features</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-800">Lightweight construction</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-800">Textured grip surfaces</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-800">Balanced center of gravity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-teal-600 flex-shrink-0" />
                  <span className="text-gray-800">Smooth articulation mechanisms</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Durability is equally critical. Instruments must maintain performance across repeated sterilization cycles and heavy clinical usage. Hospitals typically prioritize suppliers capable of delivering stainless steel surgical instruments with long service life.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Impact on Surgical Outcomes</h3>
                  <p className="text-gray-700">
                    Well-maintained, durable instruments directly contribute to better surgical outcomes, reduced complications, and improved patient safety.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ======================== QUALITY STANDARDS SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Quality Standards and Certifications for Surgical Instruments
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              International healthcare institutions require surgical instruments that meet recognized safety and quality standards. Important certifications include:
            </p>

            {/* ISO Certifications */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">ISO Certifications</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                ISO standards ensure manufacturers follow strict quality management systems during production. Common standards include:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <strong>ISO 13485</strong> for medical device quality management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  <strong>ISO 9001</strong> for quality assurance processes
                </li>
              </ul>
            </div>

            {/* CE Marking */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">CE Marking</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                CE certification confirms that medical devices comply with European safety and performance regulations. Many international buyers require CE-certified instruments for hospital procurement.
              </p>
            </div>

            {/* Surgical Steel Standards */}
            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">Surgical Steel Standards</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                High-quality instruments follow established metallurgical standards that ensure durability and corrosion resistance. Manufacturers must carefully control heat treatment and finishing processes to maintain these standards.
              </p>
            </div>

            {/* Manufacturing Quality Control */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-semibold text-teal-800">Manufacturing Quality Control</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reliable surgical instrument manufacturers implement strict inspection protocols, including:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Dimensional accuracy checks
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Surface finish inspection
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  Mechanical performance testing
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                These processes ensure instruments meet clinical requirements.
              </p>
            </div>
          </section>

          {/* ======================== WHY INDIA SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Why Hospitals Source Surgical Instruments from India
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              India has become a major hub for surgical instrument manufacturing and export. Hospitals and distributors worldwide increasingly partner with surgical instrument suppliers in India for several reasons:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Manufacturing Expertise</h3>
                <p className="text-gray-700">
                  India has decades of experience producing high-quality surgical instruments using advanced machining technologies and skilled technicians.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Cost Efficiency</h3>
                <p className="text-gray-700">
                  Large-scale manufacturing capabilities allow Indian suppliers to offer competitive pricing without compromising quality.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Global Export Infrastructure</h3>
                <p className="text-gray-700">
                  Indian exporters maintain well-established logistics networks supporting shipments to international healthcare markets.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Reliable Production Capacity</h3>
                <p className="text-gray-700">
                  Manufacturers in India can handle large-volume orders for hospital procurement projects and government healthcare programs.
                </p>
              </div>
            </div>
          </section>

          {/* ======================== ALIRA PHARMACEUTICALS SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              How Alira Pharmaceuticals Supports Hospital Procurement Teams
            </h2>
            <div className="bg-gradient-to-r from-teal-900 to-teal-800 text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed mb-6">
                Alira Pharmaceuticals, based in Delhi NCR, works with trusted manufacturing partners to supply specialized surgical instruments to international healthcare institutions.
              </p>
              <p className="text-lg font-semibold mb-4">The company supports procurement teams by providing:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Access to ENT surgical instruments manufacturers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Reliable sourcing of wholesale neuro-surgical tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Bulk procurement support for hospitals and distributors</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Efficient global logistics and export coordination</span>
                </li>
              </ul>
              <p className="text-lg mt-6">
                Through strong supplier networks and global distribution capabilities, Alira Pharmaceuticals helps healthcare institutions source high-quality surgical instruments for clinical use.
              </p>
            </div>
          </section>

          {/* ======================== CONCLUSION SECTION ======================== */}
          <section className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-teal-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ENT and neurosurgical procedures require instruments designed with exceptional precision, durability, and ergonomic control. For procurement officers, selecting the right supplier directly impacts surgical performance and patient safety.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hospitals must evaluate instrument metallurgy, manufacturing standards, sterilization compatibility, and supplier reliability when sourcing specialized surgical tools.
            </p>
            <p className="text-lg font-semibold text-teal-800">
              Working with experienced suppliers ensures healthcare institutions receive instruments that meet the demanding requirements of modern surgical environments.
            </p>
          </section>

          {/* ======================== FAQ SECTION ======================== */}
          <section>
            <h2 className="text-3xl font-bold text-teal-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-teal-900 text-left">{faq.question}</span>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 py-4 bg-teal-50 border-t border-gray-300">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ======================== CTA SECTION ======================== */}
          <section className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white p-8 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Source High-Quality Surgical Instruments?</h3>
            <p className="text-lg mb-6 text-teal-50">
              Connect with Alira Pharmaceuticals for reliable surgical instrument procurement and global distribution.
            </p>
            <button
              onClick={() => openQuotePopup()}
              className="bg-white text-teal-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get in Touch
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
