import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Printer, Instagram, ChevronRight, FileText, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ContactDetailPopup from './ContactDetailPopup';


const Footer = () => {
  const [detailsRevealed, setDetailsRevealed] = useState(() => localStorage.getItem('alira_contact_details_revealed') === 'true');
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  useEffect(() => {
    const handleReveal = () => {
      setDetailsRevealed(true);
    };
    window.addEventListener('contactDetailsRevealed', handleReveal);
    return () => {
      window.removeEventListener('contactDetailsRevealed', handleReveal);
    };
  }, []);

  return (
    <footer className="bg-[#E0F7FA] text-gray-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout - 7-column system for XL screens to balance Address and Heading widths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-12 lg:gap-8 xl:gap-8">
          
          {/* Column 1: Contact Information */}
          <div className="xl:col-span-2">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Contact Information
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-700 mt-1 shrink-0" />
                <span className="text-sm leading-relaxed text-gray-700">
                  A-116, URBTECH TRADE CENTRE,<br />
                  SECTOR-132, Baraula, Dadri,<br />
                  Gautam Buddha Nagar, UP - 201304
                </span>
              </li>
              {detailsRevealed ? (
                <>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-teal-700 mt-1 shrink-0" />
                    <div className="flex flex-col gap-1">
                      <a href="mailto:anmolchauhan@alirapharmaceuticals.com" className="text-sm hover:text-teal-700 transition-colors">
                        anmolchauhan@alirapharmaceuticals.com
                      </a>
                      <a href="mailto:info@alirapharmaceuticals.com" className="text-sm hover:text-teal-700 transition-colors">
                        info@alirapharmaceuticals.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal-700 shrink-0" />
                    <a href="tel:+91-7895850793" className="text-sm hover:text-teal-700 transition-colors">
                      Phone: +91 7895850793
                    </a>
                  </li>
                </>
              ) : (
                <li className="flex flex-col gap-2 pt-2">
                  <button 
                    onClick={() => setIsContactPopupOpen(true)}
                    className="flex items-center justify-center gap-2 w-full max-w-[200px] bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2 px-3 rounded-lg text-xs shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    Show Contact Details
                  </button>
                </li>
              )}
              
            </ul>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="xl:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about/" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Company Profile
                </Link>
              </li>
              <li>
                <Link to="/products/surgical-instruments/" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/market-area/" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Market Area
                </Link>
              </li>
              <li>
                <Link to="/blogs/" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Blogs / FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div className="xl:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Our Products
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Surgical Instruments', path: '/products/surgical-instruments/' },
                { name: 'Retractors & Elevators', path: '/products/retractors-elevators/' },
                { name: 'Bone & Neuro Instruments', path: '/products/bone-neuro/' },
                { name: 'ENT & Oral Instruments', path: '/products/ent-oral/' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                    <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                    {item.name}
                  </Link>
                </li>
              ))}
              {/* See More Link */}
              <li>
                <Link to="/products/surgical-instruments/" className="group flex items-center text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors mt-2">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  See more...
                </Link>
              </li>
            </ul>
          </div>


          {/* Column 4: Downloads */}
          <div className="xl:col-span-1 flex flex-col gap-6">
            <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900">
              Downloads
            </h3>
            <div className="flex flex-col gap-4">
                {[
                    { name: 'Alira Catalog [PDF, 5.0 MB]', file: '/alira-catalog.pdf' },
                    { name: 'B2B Catalog 1.1 [PDF, 1.8 MB]', file: '/alira-b2b-catalog-1.1.pdf' },
                    { name: 'B2B Catalog 2.0 [PDF, 2.5 MB]', file: '/alira-b2b-catalog-2.0.pdf' },
                    { name: 'B2B Catalog 3.0 [PDF, 2.1 MB]', file: '/alira-b2b-catalog-3.0.pdf' },
                ].map((catalog) => (
                    <a 
                        key={catalog.name}
                        href={catalog.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center text-sm text-gray-700 hover:text-teal-700 transition-all duration-300"
                    >
                        <FileText className="w-4 h-4 text-teal-700 mr-2 group-hover:scale-110 transition-transform" />
                        <span>{catalog.name}</span>
                    </a>
                ))}
            </div>
          </div>


          {/* Column 5: Policies */}
          <div className="xl:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Policies
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/export-return-and-replacement-terms.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm hover:text-teal-700 transition-all duration-300 transform"
                >
                  <FileText className="w-4 h-4 text-teal-700 mr-2 shrink-0" />
                  <span>Export & Return Terms [PDF, 2.0 MB]</span>
                </a>
              </li>

              <li>
                <Link 
                  to="/privacy-policy/"
                  className="group flex items-center text-sm hover:text-teal-700 transition-all duration-300"
                >
                  <FileText className="w-4 h-4 text-teal-700 mr-2 shrink-0" />
                  <span>Privacy Policy</span>
                </Link>
              </li>

              <li>
                <Link 
                  to="/terms-and-conditions/"
                  className="group flex items-center text-sm hover:text-teal-700 transition-all duration-300"
                >
                  <FileText className="w-4 h-4 text-teal-700 mr-2 shrink-0" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>

              <li>
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-sm hover:text-teal-700 transition-all duration-300"
                >
                  <FileText className="w-4 h-4 text-teal-700 mr-2 shrink-0" />
                  <span>Sitemap XML</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6 text-gray-900">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a 
                href="https://x.com/AliraPharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-700 text-white hover:bg-teal-800 transition-colors"
                aria-label="Follow Alira Pharmaceuticals on X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/alirapharmaceuticals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-700 text-white hover:bg-teal-800 transition-colors"
                aria-label="Follow Alira Pharmaceuticals on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* GCC Flags Strip & Certifications Badges */}
        <div className="mt-12 pt-8 border-t border-teal-200/50 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Countries Served */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Countries Served (GCC & Middle East)
            </h4>
            <div className="flex flex-wrap gap-3">
              <Link to="/market-area" className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/60 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50 transition-colors cursor-pointer" title="Saudi Arabia">
                <span>🇸🇦</span> <span>Saudi Arabia (KSA)</span>
              </Link>
              <button 
                onClick={() => toast.success("Zero-Duty Import: Under India-UAE CEPA, medical devices and surgical instruments from our facilities qualify for zero import duty in Dubai/Abu Dhabi.", { icon: "🇦🇪", duration: 6000 })}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/60 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50 transition-colors cursor-pointer text-left" 
                title="United Arab Emirates"
              >
                <span>🇦🇪</span> <span>United Arab Emirates (UAE)</span>
              </button>
              <button 
                onClick={() => toast("Qatar Distribution: We supply government hospitals, primary health centers (PHCC), and private clinics in Doha. SFDA/CE compliance documentation is available upon request.", { icon: "🇶🇦", duration: 6000 })}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/60 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50 transition-colors cursor-pointer text-left" 
                title="Qatar"
              >
                <span>🇶🇦</span> <span>Qatar</span>
              </button>
              <button 
                onClick={() => toast("Oman Distribution: Direct wholesale shipment to Muscat, Salalah, and Sohar with full MOH compliance and CE certificate clearance.", { icon: "🇴🇲", duration: 6000 })}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/60 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50 transition-colors cursor-pointer text-left" 
                title="Oman"
              >
                <span>🇴🇲</span> <span>Oman</span>
              </button>
              <button 
                onClick={() => toast("Kuwait Distribution: Trusted supplier to public and private clinical facilities under MOH guidelines. MOQ and customized shipping terms apply.", { icon: "🇰🇼", duration: 6000 })}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/60 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50 transition-colors cursor-pointer text-left" 
                title="Kuwait"
              >
                <span>🇰🇼</span> <span>Kuwait</span>
              </button>
              <button 
                onClick={() => toast("Bahrain Distribution: Shipping high-grade surgical and clinical consumables directly to Manama. Compliance with local NHRA standards.", { icon: "🇧🇭", duration: 6000 })}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 bg-white/60 hover:bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100/50 transition-colors cursor-pointer text-left" 
                title="Bahrain"
              >
                <span>🇧🇭</span> <span>Bahrain</span>
              </button>
            </div>
          </div>

          {/* Certifications and Compliance */}
          <div className="space-y-3 lg:text-right">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
              Regulatory Compliance & Certifications
            </h4>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <Link to="/certification" className="bg-teal-900 hover:bg-teal-800 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md border border-teal-800 uppercase tracking-wider shadow-sm transition-colors cursor-pointer text-center">
                ISO 13485:2016
              </Link>
              <Link to="/certification" className="bg-teal-900 hover:bg-teal-800 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md border border-teal-800 uppercase tracking-wider shadow-sm transition-colors cursor-pointer text-center">
                CE Mark Approved
              </Link>
              <Link to="/certification" className="bg-teal-900 hover:bg-teal-800 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md border border-teal-800 uppercase tracking-wider shadow-sm transition-colors cursor-pointer text-center">
                SFDA Compliant
              </Link>
              <Link to="/certification" className="bg-teal-900 hover:bg-teal-800 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md border border-teal-800 uppercase tracking-wider shadow-sm transition-colors cursor-pointer text-center">
                UAE MOH Certified
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar Signature */}
      <div className="bg-[#E0F7FA] text-gray-600 py-8 border-t border-teal-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
          <p>© 2026 Alira Pharmaceuticals</p>
          <p className="text-center md:text-right">
            <a href="https://errorr.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors underline decoration-teal-700/30 underline-offset-4">
              Designed and Promoted By Errorr.in - Best Digital Marketing Company in India.
            </a>
          </p>
        </div>
      </div>
      <ContactDetailPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
    </footer>
  );
};

export default Footer;