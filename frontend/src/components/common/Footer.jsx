import React from 'react';
import { MapPin, Mail, Phone, Printer, Instagram, ChevronRight, FileText } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import policiesPDF from '../../assets/EXPORT RETURN & REPLACEMENT TERMS.pdf';
import catalogV3 from '../../assets/Alira Pharmaceuticals - B2B Catalog 3.0.pdf';
import catalogV2 from '../../assets/Alira Pharmaceuticals — B2B Catalog 2.0.pdf';
import catalogV1_1 from '../../assets/Alira Pharmaceuticals — B2B Catalog 1.1.pdf';
import catalogBasic from '../../assets/Alira Pharmaceuticals.pdf';

const Footer = () => {

  // Function to handle "opening" the navbar dropdown (simulated via event/scroll)
  const handleOpenProducts = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // This dispatches an event that the Navbar can listen to if implemented, 
    // or simply brings the user to the top where the menu is.
    window.dispatchEvent(new Event('open-products-menu'));
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenFAQ = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Go to home and tell it to scroll to FAQ
      navigate("/", { state: { scrollTo: "faq" } });
    } else {
      // Already on home, just scroll
      const section = document.getElementById("faq");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
};

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
                <Link to="/about" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Company Profile
                </Link>
              </li>
              <li>
                <a href="#products" onClick={handleOpenProducts} className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Products
                </a>
              </li>
              <li>
                <Link to="/contact" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/market-area" className="group flex items-center text-sm hover:text-teal-700 transition-colors">
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  Market Area
                </Link>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={handleOpenFAQ}
                  className="group flex items-center text-sm hover:text-teal-700 transition-colors"
                >
                  <span className="mr-2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  FAQs
                </a>
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
                { name: 'Surgical Instruments', path: '/products/surgical-instruments' },
                { name: 'Retractors & Elevators', path: '/products/retractors-elevators' },
                { name: 'Bone & Neuro Instruments', path: '/products/bone-neuro' },
                { name: 'ENT & Oral Instruments', path: '/products/ent-oral' }
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
                <a href="#products" onClick={handleOpenProducts} className="group flex items-center text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors mt-2">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">»</span>
                  See more...
                </a>
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
                    { name: 'Alira Catalog', file: catalogBasic, downloadName: 'Alira-Pharmaceuticals-Catalog.pdf' },
                    { name: 'B2B Catalog 1.1', file: catalogV1_1, downloadName: 'Alira-B2B-Catalog-1.1.pdf' },
                    { name: 'B2B Catalog 2.0', file: catalogV2, downloadName: 'Alira-B2B-Catalog-2.0.pdf' },
                    { name: 'B2B Catalog 3.0', file: catalogV3, downloadName: 'Alira-B2B-Catalog-3.0.pdf' },
                ].map((catalog) => (
                    <a 
                        key={catalog.name}
                        href={catalog.file}
                        download={catalog.downloadName}
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
                  href={policiesPDF}
                  download="EXPORT RETURN & REPLACEMENT TERMS.pdf"
                  className="group flex items-center text-sm hover:text-teal-700 transition-all duration-300 transform"
                >
                  <FileText className="w-4 h-4 text-teal-700 mr-2 shrink-0" />
                  <span>Export & Return Terms</span>
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
                aria-label="X (Twitter)"
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
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar Signature */}
      <div className="bg-[#E0F7FA] text-gray-600 py-8 border-t border-teal-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
          <p>© 2026 Alira Pharmaceuticals</p>
          <p className="text-center md:text-right">
            Designed and Promoted By <a href="https://errorr.in" target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:text-teal-900 transition-colors underline decoration-teal-700/30 underline-offset-4">Errorr.in</a> - Best Digital Marketing Company in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;