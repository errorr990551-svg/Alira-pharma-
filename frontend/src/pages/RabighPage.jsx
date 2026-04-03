import { ArrowRight, ChevronDown, Factory, FileCheck, Globe, Medal, ShieldCheck, Truck } from 'lucide-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useQuotePopup } from '../components/context/QuotePopupContext'

// --- Product Images ---
import operatingScissors from '../assets/Images/operatingscissors.jpeg'
import periosteal from '../assets/Images/periosteal.jpeg'
import bonecutter from '../assets/Images/bonecutter.jpeg'
import tongue from '../assets/Images/tongue.jpeg'
import scalpel from '../assets/Images/scalpel.jpeg'
import InstrumentalTray from '../assets/Images/instrumental tray.jpeg'
import nitrile from '../assets/Images/nitrile.jpeg'
import ply from '../assets/Images/3ply.jpeg'
import gowns from '../assets/Images/gowns.jpeg'
import gs from '../assets/Images/gauzeswabs.jpeg'
import syringes from '../assets/Images/syringes.jpeg'
import BloodPressure from '../assets/Images/blood pressure.jpeg'
import placeholderMap from '../assets/Images/placeholder.jpeg'

const categoriesData = [
  { id: 'surgical-instruments', title: "Surgical Instruments", image: operatingScissors },
  { id: 'retractors-elevators', title: "Retractors & Elevators", image: periosteal },
  { id: 'bone-neuro', title: "Bone & Neuro Instruments", image: bonecutter },
  { id: 'ent-oral', title: "ENT & Oral Instruments", image: tongue },
  { id: 'surgical-blades', title: "Surgical Blades & Accessories", image: scalpel },
  { id: 'trays-utility', title: "Trays & Utility Items", image: InstrumentalTray },
  { id: 'gloves', title: "Gloves", image: nitrile },
  { id: 'ppe', title: "Face Masks & PPE", image: ply },
  { id: 'drapes-gowns', title: "Surgical Drapes & Gowns", image: gowns },
  { id: 'wound-care', title: "Wound Care & Dressings", image: gs },
  { id: 'disposables-iv', title: "Disposables & IV Products", image: syringes },
  { id: 'medical-device', title: "Medical Device", image: BloodPressure }
];

const faqData = [
  {
    question: "Do you export surgical instruments directly to Rabigh?",
    answer: "Yes, Alira Pharmaceutical has a dedicated export wing that handles direct shipments to public and private hospitals, distributors, and clinics across the Rabigh region."
  },
  {
    question: "Are your medical products compliant with Saudi SFDA standards?",
    answer: "Our products are manufactured according to international quality benchmarks (like ISO) and are designed to meet the safety and regulatory standards required for the Saudi market."
  },
  {
    question: "What is the typical lead time for an export order to Rabigh?",
    answer: "Lead times vary based on volume, but our logistics network is optimized for fast transit to Jeddah Islamic Port and subsequent delivery to Rabigh."
  },
  {
    question: "Can I request a bulk quote for medical disposables in Rabigh?",
    answer: "Absolutely. We specialize in wholesale supply for healthcare networks. You can [Request a Quote] via our website for competitive regional pricing."
  },
  {
    question: "Do you provide samples to Rabigh hospitals?",
    answer: "Yes, we understand the need for quality assurance. We can arrange for product samples to be sent to your facility in Rabigh for evaluation by your clinical or procurement team."
  }
];

const RabighPage = () => {
    const { openQuotePopup } = useQuotePopup();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    useEffect(() => {
      const updateVisibleItems = () => {
        if (window.innerWidth < 768) setVisibleItems(1);
        else if (window.innerWidth < 1024) setVisibleItems(2);
        else setVisibleItems(3);
      };
      updateVisibleItems();
      window.addEventListener('resize', updateVisibleItems);
      return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    const location = useLocation();

    useEffect(() => {
        document.title = "Top Surgical Instruments & Medical Supplies Exporter to Rabigh";
        let metaDescription = document.querySelector('meta[name="description"]');
        const descriptionContent = "Leading manufacturer of high-quality surgical instruments, PPE, and medical disposables. Reliable export and supply chain solutions for hospitals and clinics in Rabigh and the Makkah Province.";
        if (metaDescription) metaDescription.setAttribute('content', descriptionContent);
        else {
            metaDescription = document.createElement('meta');
            metaDescription.name = "description";
            metaDescription.content = descriptionContent;
            document.head.appendChild(metaDescription);
        }

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        const keywordsContent = "Surgical instruments Rabigh, medical supplies Rabigh KSA, wholesale medical disposables Makkah Province, Rabigh healthcare suppliers, hospital equipment exporter Saudi Arabia, Rabigh General Hospital supplies.";
        if (metaKeywords) metaKeywords.setAttribute('content', keywordsContent);
        else {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            metaKeywords.content = keywordsContent;
            document.head.appendChild(metaKeywords);
        }
    }, [location]);

    const maxIndex = categoriesData.length - visibleItems;
    const nextSlide = () => setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
    
  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="relative bg-teal-900 pt-32 pb-48 lg:pt-40 lg:pb-64 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')` }}>
          <div className="absolute inset-0 bg-teal-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-teal-900/90 via-teal-900/40 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">Global Manufacturer & Exporter of Surgical & Medical Supplies to Rabigh</h1>
              <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Delivering precision-crafted surgical instruments, certified PPE, and premium medical disposables to support the expanding healthcare needs of Rabigh’s community and industrial workforce.</p>
              <div className="mb-10"><a href="/about" className="inline-flex items-center text-teal-300 font-semibold hover:text-white transition-colors group">Explore More About Us <span className="ml-2 bg-teal-700/50 p-1 rounded-full group-hover:bg-teal-600 transition-colors"><ArrowRight size={16} /></span></a></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 rounded-md border-2 border-teal-100 text-teal-50 font-semibold hover:bg-white hover:text-teal-900 transition-colors">Download Rabigh Product Catalog</button>
                <button onClick={openQuotePopup} className="px-8 py-3 rounded-md bg-white text-teal-900 font-semibold hover:bg-teal-50 transition-colors shadow-lg cursor-pointer">Get Export Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 lg:-mt-32 z-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4"><Truck className="w-10 h-10 text-teal-700" strokeWidth={1.5} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wide Product Range</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Manufacturing surgical instruments, PPE, IV products, wound care, and hospital disposables under strict quality standards for global markets.</p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4"><Medal className="w-10 h-10 text-teal-700" strokeWidth={1.5} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Manufacturing</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Produced using medical-grade stainless steel and high-quality materials with stringent quality control and international compliance.</p>
            </div>
            <div className="bg-cyan-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-cyan-100 text-center">
              <div className="flex justify-center mb-4"><FileCheck className="w-10 h-10 text-teal-700" strokeWidth={1.5} /></div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Export Network</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Supplying hospitals, distributors, and healthcare institutions across Asia, Africa, Europe, and the Middle East.</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-20 lg:py-32 mt-12 lg:mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              <div className="w-full lg:w-5/12 relative">
                <div className="absolute inset-0 border-2 border-teal-200 rounded-2xl transform translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 -z-10"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/5 bg-gray-100 group">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Alira-Medical-Export-Rabigh" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 right-0 bg-teal-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-tl-2xl shadow-lg">Alira Pharmaceuticals</div>
                </div>
              </div>
              <div className="w-full lg:w-7/12">
                <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-4">Welcome to Alira Pharmaceutical</h2>
                <div className="h-1 w-24 bg-teal-500 rounded-full mb-10"></div>
                <div className="space-y-10 text-gray-700 leading-relaxed text-justify">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pharmaceutical Distributors for Rabigh</h3>
                    <p>Alira Pharmaceutical specializes in the strategic sourcing and distribution of generic medications and essential medical supplies tailored for the <span className="font-semibold text-teal-700">Rabigh healthcare market</span>. We serve the region’s medical centers and industrial clinics, ensuring they receive compliant, high-efficacy products that meet international safety and SFDA standards.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Surgical Instruments Suppliers in Rabigh</h3>
                    <p>We provide <span className="font-semibold text-teal-700">Rabigh’s medical teams</span> with the precision they demand. Our Surgical Instruments are forged from medical-grade stainless steel, ensuring durability for procedures in institutions like Rabigh General Hospital. From Retractors to specialized surgical tools, we are your trusted partner for clinical excellence.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Wholesale Medical Disposables in Rabigh</h3>
                    <p>Hygiene and infection control are the foundation of Rabigh’s modern medical facilities. As a leading <span className="font-semibold text-teal-700">Wholesale Medical Disposables Supplier</span>, we offer clinics a robust inventory of Gloves, Surgical Gowns, and Wound Care products designed for single-use safety and uncompromised hygiene.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-20 lg:py-28 relative">
          <div className="max-w-360 mx-auto px-4 sm:px-12 lg:px-16">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Explore Our Range</h2><div className="h-1 w-24 bg-teal-500 mx-auto rounded-full"></div></div>
            <div className="relative group">
              <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 z-10"><ChevronLeft size={24} /></button>
              <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-700 hover:scale-110 transition-all duration-300 z-10"><ChevronRight size={24} /></button>
              <div className="overflow-hidden mx-auto px-2 py-4">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * (100 / visibleItems)}%)` }}>
                  {categoriesData.map((category) => (
                    <div key={category.id} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4">
                      <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-[500px] overflow-hidden group/card">
                        <div className="h-56 w-full p-6 bg-white shrink-0 overflow-hidden"><img src={category.image} alt={category.title} className="w-full h-full object-contain transform group-hover/card:scale-105 transition-transform duration-500" /></div>
                        <div className="p-8 pt-4 flex flex-col items-center text-center grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">{category.title}</h3>
                          <div className="mt-auto"><a href={`/products/${category.id}`} className="inline-block bg-gray-900 text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-teal-700 hover:shadow-md transition-all duration-300">View More</a></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-teal-100 rounded-[3rem] transform -translate-x-4 translate-y-4 -z-10"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-4/3 group"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" alt="Global-Medical-Logistics-Rabigh" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" /></div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Precision Manufacturing, Worldwide Supply to Rabigh</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">Alira Pharmaceutical is a leading manufacturer and global exporter of surgical instruments, medical disposables, and hospital supplies. With advanced production facilities and strict quality control systems, we deliver precision-crafted products trusted by healthcare professionals across international markets, specifically catering to the <span className="font-semibold text-teal-700">Rabigh medical sector</span>. Our commitment to quality, compliance, and timely delivery ensures dependable supply worldwide.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Choose Alira for Rabigh Exports?</h2><div className="h-1.5 w-24 bg-teal-500 mx-auto rounded-full"></div></div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-teal-100/50">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500"><Truck className="w-8 h-8" strokeWidth={1.5} /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industrial Sector Support</h3>
                <p className="text-gray-600 leading-relaxed">We specialize in high-volume wholesale orders designed to meet the rigorous safety standards of Rabigh’s unique industrial and community healthcare landscape.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-teal-100/50">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500"><ShieldCheck className="w-8 h-8" strokeWidth={1.5} /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Quality</h3>
                <p className="text-gray-600 leading-relaxed">All products are manufactured under strict ISO/CE quality control using medical-grade materials to meet the rigorous standards of the Saudi Ministry of Health.</p>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-teal-100/50">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500"><Globe className="w-8 h-8" strokeWidth={1.5} /></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Logistics</h3>
                <p className="text-gray-600 leading-relaxed">20+ years of experience in international shipping with optimized routes to the Makkah Province, ensuring efficient delivery to Rabigh and surrounding areas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
              <div className="w-full md:w-5/12"><h2 className="text-xl md:text-2xl font-bold text-teal-600 uppercase tracking-widest mb-2">MEDICAL SUPPLIES EXPORT</h2><h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">Leading Medical Supply Manufacturers for Rabigh</h3></div>
              <div className="w-full md:w-7/12"><p className="text-gray-600 text-lg leading-relaxed text-justify">Alira Pharmaceutical offers a unique variety of surgical instruments, PPE, and medical disposables tailored for the <span className="font-semibold text-teal-700">Rabigh market</span>. We are a prominent manufacturer and supplier in the healthcare industry, leveraging major shipping routes to the <span className="font-semibold text-teal-700">Makkah Province</span> for faster delivery. Following the latest regulatory standards, our supplies add reliability and operational efficiency to your medical facility in Rabigh.</p></div>
            </div>
            <div className="relative flex flex-col md:block">
              <div className="w-full md:w-3/4 md:ml-auto bg-sky-100 rounded-lg overflow-hidden aspect-square md:aspect-21/9 relative z-0"><img src={placeholderMap} alt="Service Map" className="w-full h-full object-cover" /></div>
              <div className="w-full md:w-5/12 bg-gray-900 text-white relative z-10 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 shadow-2xl rounded-lg md:rounded-none overflow-hidden -mt-16 md:mt-0">
                <div className="grid grid-cols-2">
                  <div className="p-8 border-b border-r border-gray-700 flex flex-col justify-center"><div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">100+</div><div className="text-sm font-semibold tracking-wide text-gray-300">Dealers Served</div></div>
                  <div className="p-8 border-b border-gray-700 flex flex-col justify-center"><div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">5000+</div><div className="text-sm font-semibold tracking-wide text-gray-300">Wholesale Orders</div></div>
                  <div className="p-8 border-r border-gray-700 flex flex-col justify-center"><div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">400+</div><div className="text-sm font-semibold tracking-wide text-gray-300">Exclusive Products</div></div>
                  <div className="p-8 flex flex-col justify-center"><div className="text-4xl lg:text-5xl font-bold text-teal-400 mb-2">20+</div><div className="text-sm font-semibold tracking-wide text-gray-300">Years Exp.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="faq" className="bg-white py-16 lg:py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-wide">Frequently Asked Questions</h2><div className="h-1 w-16 bg-teal-500 mx-auto mt-4 rounded-full"></div></div>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 last:border-0">
                  <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"><span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-teal-600' : 'text-gray-900 group-hover:text-teal-600'}`}>Q{index + 1}. {item.question}</span><span className={`ml-6 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-teal-600' : 'text-gray-400 group-hover:text-teal-600'}`}><ChevronDown className="w-6 h-6" /></span></button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}><p className="text-gray-600 leading-relaxed pr-12 text-justify">{item.answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default RabighPage
