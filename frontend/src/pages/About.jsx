import React, { useEffect } from 'react'
import { useQuotePopup } from '../components/context/QuotePopupContext';
import { ClipboardList, User, Hand, Award, CheckSquare, Globe, Scan, DollarSign, Lightbulb, Users,Truck, ChevronRight, Factory, } from 'lucide-react';
import missionImg from '../assets/Images/mission.webp';
import visionImg from '../assets/Images/vision.webp';


// --- Features Data ---
const featuresData = [
  {
    id: 1,
    icon: Globe,
    title: "Manufacturing Excellence",
    shortText: "We manufacture high-quality surgical instruments and medical disposables using premium-grade materials and advanced production processes to ensure durability and precision.",
    longText: " Our team's deep understanding of market trends and regulatory landscapes helps us anticipate challenges and provide proactive solutions. We don't just supply products; we offer strategic insights that help your pharmacy thrive in a competitive environment."
  },
  {
    id: 2,
    icon: Scan,
    title: "Strict Quality Control",
    shortText: "Every product undergoes rigorous inspection and testing to meet international healthcare standards and ensure consistent performance.",
    longText: " From high-volume generics to hard-to-find niche medications, our catalog is constantly updated to reflect current demands. We maintain robust stock levels to minimize backorders and ensure your patients never have to wait for critical treatments."
  },
  {
    id: 3,
    icon: Truck, // Reusing Truck icon, or could use MapPin/Globe
    title: "Global Export Network",
    shortText: "We supply hospitals, distributors, and medical institutions across international markets with reliable shipping and documentation support.",
    longText: " Our logistics partners are vetted for excellence in cold-chain management and secure transport. Whether you are a rural independent pharmacy or a large urban hospital system, our reliable supply chain reaches you with speed and precision."
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Competitive Factory Pricing",
    shortText: "As direct manufacturers, we offer cost-effective pricing without compromising on quality.",
    longText: " We pass these savings directly to you, improving your pharmacy's margins without compromising on quality. Our transparent pricing models and flexible terms are designed to support your financial sustainability."
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Customization & OEM Support",
    shortText: "We provide private labelling, OEM manufacturing, and customized product solutions to meet specific client requirements.",
    longText: " Our user-friendly online portal provides real-time inventory visibility, automated order tracking, and seamless DSCSA compliance documentation. We are constantly evolving our tech stack to make your procurement process effortless."
  },
  {
    id: 6,
    icon: Users,
    title: "Trusted Industry Experience",
    shortText: "With strong expertise in surgical and medical manufacturing, we focus on innovation, compliance, and long-term partnerships.",
    longText: " We view ourselves as an extension of your team. Our dedicated support staff is always available to resolve issues, answer questions, and tailor our services to match your specific operational requirements."
  }
];

const About = () => {
  const { openQuotePopup } = useQuotePopup();

  // SEO Configuration
  useEffect(() => {
    document.title = "Company Profile | Alira Pharmaceuticals | Medical Supply Manufacturer";

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Learn about Alira Pharmaceuticals, a trusted global exporter of surgical instruments and medical disposables. We combine precision engineering with a mission of uncompromising patient safety.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = descriptionContent;
      document.head.appendChild(metaDescription);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    const keywordsContent = "Alira Pharmaceuticals profile, medical device manufacturer, surgical instrument exporter, healthcare supply mission, certified medical manufacturing, global medical distribution, surgical tool engineering.";
    
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywordsContent);
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      metaKeywords.content = keywordsContent;
      document.head.appendChild(metaKeywords);
        }

        // Update Canonical URL
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        const canonicalUrl = `https://alirapharmaceuticals.com${location.pathname.toLowerCase() === '/' ? '' : location.pathname.toLowerCase()}/`;
        
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute('href', canonicalUrl);
  }, []);

  return (
    <div>

        {/* --- Banner Section --- */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2000" 
            alt="Alira Pharmaceuticals corporate banner - Global medical supply solutions" 
            className="w-full h-full object-cover opacity-20"
            width="2000"
            height="1000"
            decoding="async"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/90 to-teal-800/80 mix-blend-multiply"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Company Profile
          </h1>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm md:text-base font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Company Profile</span>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Side: Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-4/3 lg:aspect-auto lg:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
                  alt="Alira Pharmaceuticals team discussing medical manufacturing and quality control" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                  width="800"
                  height="600"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1.5 bg-teal-500 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
                <p>Alira Pharmaceuticals is a leading manufacturer and global exporter of high-quality surgical instruments, medical disposables, and healthcare supplies. We specialize in producing precision-engineered surgical tools and certified medical products that meet international quality standards.</p>
                <p>With a strong focus on quality control, innovation, and reliability, our products are manufactured using medical-grade materials and strict production protocols to ensure durability, safety, and performance.</p>
                <p>Serving hospitals, distributors, healthcare institutions, and importers worldwide, we are committed to delivering consistent quality, competitive pricing, and dependable export services.</p>
                <p>Our expertise spans surgical instruments, retractors, bone & neuro instruments, ENT tools, surgical blades, wound care products, PPE, and IV disposables—making us a trusted partner for global medical supply solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision Section --- */}
      <div className="bg-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Mission & Vision</h2>
            <div className="h-1 w-24 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative rounded-lg overflow-hidden shadow-xl aspect-4/3 lg:aspect-auto lg:h-[600px] w-full">
                  <img
                    src={missionImg}
                    alt="Alira Pharmaceuticals mission - Commitment to precision in surgical manufacturing"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    width="800"
                    height="600"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-teal-500 pl-6">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our mission is simple, but heavy with responsibility to never forget that every product we make may one day stand between danger and survival. We work in an industry where mistakes are not numbers, they are names. Where precision is not preference, it is protection. That is why we hold ourselves to standards that do not bend, even when no one is watching. We are here to build medical devices and solutions that earn trust not through words, but through performance—quiet, consistent, and uncompromising. Because when something carries our name, it must be worthy of the lives that depend on it.
                </p>
                <ul className="space-y-4">
                  {["Never compromise on precision—lives depend on it", "Build trust through performance, not promises", "Hold ourselves to standards that do not bend", "Earn responsibility by honoring the weight we carry", "Create products worthy of the lives that depend on them"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckSquare className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative rounded-lg overflow-hidden shadow-xl aspect-4/3 lg:aspect-auto lg:h-[600px] w-full">
                  <img
                    src={visionImg}
                    alt="Alira Pharmaceuticals vision - Raising the standard of global healthcare trust"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
                    width="800"
                    height="600"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 border-l-8 border-teal-500 pl-6">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We are building more than a company. We are building a reputation that will outlive us.
                  <br /><br />A reputation that walks into operating rooms before we ever do. A name that represents certainty in moments filled with uncertainty. We envision a future where our brand is not chosen because it is the biggest, but because it is the safest choice. Where growth never comes at the cost of integrity. Where innovation serves humanity, not ego.
                  <br /><br />As we expand across continents and move into full-scale manufacturing, our purpose will remain unchanged: to raise the standard of trust in healthcare so high that our name becomes a quiet assurance, a symbol that what is in a surgeon's hand has been built with conscience, discipline, and respect for life itself.
                  <br /><br />We do not want to be remembered for market share. We want to be remembered for the lives protected because we refused to compromise.
                </p>
                <ul className="space-y-4">
                  {["Build a reputation based on uncompromising safety and integrity", "Choose to be remembered for lives protected, not market share", "Raise the standard of trust in healthcare globally", "Prove that growth and conscience can grow together", "Create certainty in moments filled with uncertainty"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckSquare className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                      <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-teal-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Get a Custom Quote in 3 Simple Steps</h2>
          <div className="grid md:grid-cols-4 gap-8 items-start">
            <div className="flex flex-col space-y-3">
              <span className="text-5xl font-bold opacity-90">1.</span>
              <h3 className="text-xl font-semibold">Share Your Requirements</h3>
              <p className="text-teal-50 leading-relaxed">Send us your product list, quantities, and specifications. Our team will review your request carefully.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-5xl font-bold opacity-90">2.</span>
              <h3 className="text-xl font-semibold">Receive Competitive Quotation</h3>
              <p className="text-teal-50 leading-relaxed">We provide detailed pricing, MOQs, production timelines, and shipping terms tailored to your needs.</p>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="text-5xl font-bold opacity-90">3.</span>
              <h3 className="text-xl font-semibold">Confirm & Start Production</h3>
              <p className="text-teal-50 leading-relaxed">Once approved, we initiate manufacturing, quality checks, and arrange secure global delivery.</p>
            </div>
            <div className="md:text-right mt-8 md:mt-0 flex items-center md:justify-end">
              <button onClick={openQuotePopup} className="cursor-pointer bg-white text-teal-600 font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors shadow-lg">Request a Quote</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
