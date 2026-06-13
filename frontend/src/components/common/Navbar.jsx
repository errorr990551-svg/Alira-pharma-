// import React, { useState } from 'react';
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
// import { Link } from "react-router-dom";
// import LogoImg from '../../assets/Images/Logo.webp';

// // Custom Logo Component - Redesigned to be distinct ("Bio-Hexagon" theme)
// const Logo = () => (
//   <div className="flex items-center">
//     {/* Placeholder for Logo Image - Replace 'logo.webp' with your actual file path */}
//     <img 
//       src={LogoImg} 
//       alt="Alira Pharmaceuticals company logo - Medical and Surgical Supplies Manufacturer" 
//       className="h-24 w-auto object-contain cursor-pointer" 
//     />
//   </div>
// );

// // --- Data Structure for Products ---
// const productCategories = [
//   {
//     id: 'surgical-instruments',
//     category: "Surgical Instruments",
//     products: [
//       "Mayo Scissors (Straight & Curved)",
//       "Metzenbaum Scissors",
//       "Operating Scissors (Sharp / Blunt)",
//       "Surgical Knife Handles (No. 3 & 4)",
//       "Tissue Forceps (Toothed / Non-Toothed)",
//       "Artery Forceps / Hemostats (Straight & Curved)",
//       "Needle Holders (Mayo-Hegar / Olsen-Hegar)",
//       "Allis Tissue Forceps",
//       "Babcock Forceps",
//       "Backhaus Towel Clamp"
//     ]
//   },
//   {
//     id: 'retractors-elevators',
//     category: "Retractors & Elevators",
//     products: [
//       "Langenbeck Retractor",
//       "Volkmann Retractor",
//       "Skin Hook Retractor",
//       "Self-Retaining Retractors (Weitlaner / Gelpi)",
//       "Periosteal Elevator"
//     ]
//   },
//   {
//     id: 'bone-neuro',
//     category: "Bone & Neuro Instruments",
//     products: [
//       "Bone Cutter / Rongeur",
//       "Bone Nibbler",
//       "Laminectomy Punch / Kerrison Rongeur"
//     ]
//   },
//   {
//     id: 'ent-oral',
//     category: "ENT & Oral Instruments",
//     products: [
//       "Tongue Depressor",
//       "Mouth Gag (Boyle Davis)"
//     ]
//   },
//   {
//     id: 'surgical-blades',
//     category: "Surgical Blades & Accessories",
//     products: [
//       "Scalpel Blades (Disposable)"
//     ]
//   },
//   {
//     id: 'trays-utility',
//     category: "Trays & Utility Items",
//     products: [
//       "Instrument Tray",
//       "Kidney Tray"
//     ]
//   },
//   {
//     id: 'gloves',
//     category: "Gloves",
//     products: [
//       "Latex Examination Gloves",
//       "Nitrile Examination Gloves",
//       "Surgical Gloves (Sterile)"
//     ]
//   },
//   {
//     id: 'ppe',
//     category: "Face Masks & PPE",
//     products: [
//       "3-Ply Disposable Face Masks",
//       "N95 Face Masks",
//       "Disposable Shoe Covers (Plastic & Non-Woven)",
//       "Disposable Caps (Bouffant / Surgeon)",
//       "Disposable Aprons",
//       "Isolation Gowns"
//     ]
//   },
//   {
//     id: 'drapes-gowns',
//     category: "Surgical Drapes & Gowns",
//     products: [
//       "Surgical Drapes (Sterile & Non-Sterile)",
//       "Surgical Gowns (Sterile & Non-Sterile)"
//     ]
//   },
//   {
//     id: 'wound-care',
//     category: "Wound Care & Dressings",
//     products: [
//       "Absorbent Gauze Rolls",
//       "Gauze Swabs (Sterile & Non-Sterile)",
//       "Crepe Bandages",
//       "Adhesive Bandages (Plasters)",
//       "Absorbent Cotton Rolls"
//     ]
//   },
//   {
//     id: 'disposables-iv',
//     category: "Disposables & IV Products",
//     products: [
//       "Disposable Syringes with Needles",
//       "IV Sets",
//       "IV Cannula"
//     ]
//   }
// ];

// // Helper to create URL slugs
// const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
  
//   // State for Desktop Mega Menu
//   const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
//   const [isProductsHovered, setIsProductsHovered] = useState(false);

//   // State for Mobile Menu Accordions
//   const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
//   const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Company Profile", href: "/about" },
//     { name: "Products", href: "#products", isDropdown: true }, // Marked as dropdown
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100 font-sans">
//       {/* Added 'relative' here to serve as the anchor for the absolute full-width dropdown */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Changed justify-between to justify-start and added gap-12 to shift links left */}
//         <div className="flex justify-start items-center h-20 gap-12">
          
//           {/* Logo Section */}
//           <div className="shrink-0 cursor-pointer z-50">
//             <Link to="/">
//               <Logo />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-45 h-full ml-30">
//             {links.map((link) => {
//               if (link.isDropdown) {
//                 return (
//                   <div 
//                     key={link.name} 
//                     // Removed 'relative' from here so the dropdown positions relative to the main container
//                     className="h-full flex items-center group"
//                     onMouseEnter={() => setIsProductsHovered(true)}
//                     onMouseLeave={() => setIsProductsHovered(false)}
//                   >
//                     <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full border-b-2 border-transparent hover:border-teal-500">
//                       {link.name}
//                       <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsHovered ? 'rotate-180' : ''}`} />
//                     </button>

//                     {/* MEGA MENU DROPDOWN */}
//                     {/* Changed positioning to absolute w-full left-0 to span the container width */}
//                     <div 
//                       className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-teal-500 rounded-b-xl overflow-hidden transition-all duration-300 origin-top z-50 ${
//                         isProductsHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
//                       }`}
//                     >
//                       <div className="flex h-[550px]"> {/* Increased height for "enlarged" look */}
                        
//                         {/* LEFT SIDE: Categories */}
//                         <div className="w-1/3 bg-gray-50 overflow-y-auto border-r border-gray-100 py-6">
//                           {productCategories.map((cat) => (
//                             <div 
//                               key={cat.id}
//                               onMouseEnter={() => setActiveCategory(cat.id)}
//                               className={`px-8 py-3.5 cursor-pointer flex items-center justify-between text-base font-medium transition-colors duration-200 ${
//                                 activeCategory === cat.id 
//                                   ? 'bg-white text-teal-600 border-l-4 border-teal-500 shadow-sm' 
//                                   : 'text-gray-600 hover:bg-gray-100 hover:text-teal-600 border-l-4 border-transparent'
//                               }`}
//                             >
//                               {cat.category}
//                               {activeCategory === cat.id && <ChevronRight className="w-5 h-5" />}
//                             </div>
//                           ))}
//                         </div>

//                         {/* RIGHT SIDE: Products List */}
//                         <div className="w-2/3 p-10 overflow-y-auto bg-white">
//                           <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-100">
//                             {/* UPDATED: Wrapped Category Title in Link to make it clickable */}
//                             <Link 
//                               to={`/products/${activeCategory}`}
//                               onClick={() => setIsProductsHovered(false)}
//                               className="hover:text-teal-600 transition-colors cursor-pointer block"
//                             >
//                               {productCategories.find(c => c.id === activeCategory)?.category}
//                             </Link>
//                           </h3>
//                           <div className="grid grid-cols-2 gap-x-8 gap-y-4">
//                             {productCategories.find(c => c.id === activeCategory)?.products.map((product, idx) => (
//                               <Link 
//                                 key={idx} 
//                                 to={`/products/${activeCategory}/${createSlug(product)}`}
//                                 className="text-base text-gray-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-200 flex items-start gap-3 group/item"
//                                 onClick={() => setIsProductsHovered(false)}
//                               >
//                                 <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-200 shrink-0 group-hover/item:bg-teal-500 transition-colors"></span>
//                                 {product}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>

//                       </div>
//                     </div>
//                   </div>
//                 );
//               }
              
//               return (
//                 <Link
//                   key={link.name} 
//                   to={link.href} 
//                   className="font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full flex items-center border-b-2 border-transparent hover:border-teal-500"
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Button - Pushed to right with ml-auto */}
//           <div className="flex items-center md:hidden ml-auto">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 hover:text-teal-700 hover:bg-teal-50 focus:outline-none transition-all"
//             >
//               {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       <div 
//         className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
//           isOpen ? "max-h-[85vh] opacity-100 shadow-lg" : "max-h-0 opacity-0"
//         }`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-1">
//           {links.map((link) => {
//             if (link.isDropdown) {
//               return (
//                 <div key={link.name} className="border-b border-gray-50 last:border-0">
//                   <button 
//                     onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
//                     className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-teal-600 px-4 rounded-lg"
//                   >
//                     {link.name}
//                     <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
//                   </button>
                  
//                   {/* Mobile Nested Menu */}
//                   <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
//                     {productCategories.map((cat) => (
//                       <div key={cat.id} className="bg-gray-50">
//                         <button 
//                           onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.id ? null : cat.id)}
//                           className="w-full flex items-center justify-between py-2 px-8 text-base font-medium text-gray-600 hover:text-teal-600 border-l-4 border-transparent hover:border-teal-500"
//                         >
//                           {cat.category}
//                           <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveCategory === cat.id ? 'rotate-180' : ''}`} />
//                         </button>
                        
//                         {/* Mobile Products List */}
//                         <div className={`overflow-hidden transition-all duration-300 bg-white ${mobileActiveCategory === cat.id ? 'max-h-[500px]' : 'max-h-0'}`}>
//                            {cat.products.map((product, idx) => (
//                              <Link 
//                                key={idx}
//                                to={`/products/${cat.id}/${createSlug(product)}`}
//                                className="block py-2 pl-12 pr-4 text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50"
//                                onClick={() => setIsOpen(false)} // Close menu on click
//                              >
//                                • {product}
//                              </Link>
//                            ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             }
            
//             return (
//               <Link
//                 key={link.name} 
//                 to={link.href} 
//                 className="block w-full py-3 text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

// Using a placeholder image to ensure the code compiles in this environment.
// You can uncomment your local import below and remove the const LogoImg line.
import LogoImg from '../../assets/Images/Logo.webp';


// --- Data Structure for Products ---
const productCategories = [
  {
    id: 'surgical-instruments',
    category: "Surgical Instruments",
    products: [
      "Mayo Scissors (Straight & Curved)",
      "Metzenbaum Scissors",
      "Operating Scissors (Sharp / Blunt)",
      "Surgical Knife Handles (No. 3 & 4)",
      "Tissue Forceps (Toothed / Non-Toothed)",
      "Artery Forceps / Hemostats (Straight & Curved)",
      "Needle Holders (Mayo-Hegar / Olsen-Hegar)",
      "Allis Tissue Forceps",
      "Babcock Forceps",
      "Backhaus Towel Clamp"
    ]
  },
  {
    id: 'retractors-elevators',
    category: "Retractors & Elevators",
    products: [
      "Langenbeck Retractor",
      "Volkmann Retractor",
      "Skin Hook Retractor",
      "Self-Retaining Retractors (Weitlaner / Gelpi)",
      "Periosteal Elevator"
    ]
  },
  {
    id: 'bone-neuro',
    category: "Bone & Neuro Instruments",
    products: [
      "Bone Cutter / Rongeur",
      "Bone Nibbler",
      "Laminectomy Punch / Kerrison Rongeur"
    ]
  },
  {
    id: 'ent-oral',
    category: "ENT & Oral Instruments",
    products: [
      "Tongue Depressor",
      "Mouth Gag (Boyle Davis)"
    ]
  },
  {
    id: 'surgical-blades',
    category: "Surgical Blades & Accessories",
    products: [
      "Scalpel Blades (Disposable)"
    ]
  },
  {
    id: 'trays-utility',
    category: "Trays & Utility Items",
    products: [
      "Instrument Tray",
      "Kidney Tray"
    ]
  },
  {
    id: 'gloves',
    category: "Gloves",
    products: [
      "Latex Examination Gloves",
      "Nitrile Examination Gloves",
      "Surgical Gloves (Sterile)"
    ]
  },
  {
    id: 'ppe',
    category: "Face Masks & PPE",
    products: [
      "3-Ply Disposable Face Masks",
      "N95 Face Masks",
      "Disposable Shoe Covers (Plastic & Non-Woven)",
      "Disposable Caps (Bouffant / Surgeon)",
      "Disposable Aprons",
      "Isolation Gowns"
    ]
  },
  {
    id: 'drapes-gowns',
    category: "Surgical Drapes & Gowns",
    products: [
      "Surgical Drapes (Sterile & Non-Sterile)",
      "Surgical Gowns (Sterile & Non-Sterile)"
    ]
  },
  {
    id: 'wound-care',
    category: "Wound Care & Dressings",
    products: [
      "Absorbent Gauze Rolls",
      "Gauze Swabs (Sterile & Non-Sterile)",
      "Crepe Bandages",
      "Adhesive Bandages (Plasters)",
      "Absorbent Cotton Rolls"
    ]
  },
  {
    id: 'disposables-iv',
    category: "Disposables & IV Products",
    products: [
      "Disposable Syringes with Needles",
      "IV Sets",
      "IV Cannula"
    ]
  },
  {
    id: 'medical-device',
    category: "Medical Device",
    products: [
      "Under water seal drainage system",
      "Digital thermometer",
      "Blood pressure monitor"
    ]
  }
];

// Helper to create URL slugs
const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const Logo = () => (
  <div className="flex items-center">
    <img 
      src={LogoImg} 
      alt="Alira Pharmaceuticals company logo - Medical and Surgical Supplies Manufacturer" 
      className="h-20 w-auto object-contain" 
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // State for Desktop Mega Menu
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isBlogHovered, setIsBlogHovered] = useState(false);

  // State for Mobile Menu Accordions
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState(null);

  // --- NEW ADDITION: Listen for Footer "See more" click event ---
  useEffect(() => {
    const handleOpenMenu = () => {
      // Check window width to decide whether to open Mobile Menu or Desktop Dropdown
      if (window.innerWidth < 768) {
        setIsOpen(true);
        setMobileProductsOpen(true);
      } else {
        setIsProductsHovered(true);
        // Optional: Automatically close it after a few seconds if no interaction
        // setTimeout(() => setIsProductsHovered(false), 4000); 
      }
    };

    window.addEventListener('open-products-menu', handleOpenMenu);
    
    const handleOpenAbout = () => {
      if (window.innerWidth < 768) {
        setIsOpen(true);
        setMobileAboutOpen(true);
      } else {
        setIsAboutHovered(true);
      }
    };

    window.addEventListener('open-about-menu', handleOpenAbout);

    return () => {
      window.removeEventListener('open-products-menu', handleOpenMenu);
      window.removeEventListener('open-about-menu', handleOpenAbout);
    };
  }, []);
  // -------------------------------------------------------------

  const links = [
    { name: "Home", href: "/" },
    { 
      name: "Company Profile", 
      isDropdown: true,
      subItems: [
        { name: "About Us", href: "/about/" },
        { name: "Certification", href: "/certification/" }
      ]
    },
    { name: "Blog", href: "/blogs/" },
    { name: "Products", href: "#products", isMegaMenu: true }, 
    { name: "Contact", href: "/contact/" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-start items-center h-20 gap-12">
          
          {/* Logo Section */}
          <div className="shrink-0 cursor-pointer z-50">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10 h-full ml-8">
            {links.map((link) => {
              if (link.isMegaMenu) {
                // Products Dropdown (Mega Menu)
                return (
                  <div 
                    key={link.name} 
                    className="h-full flex items-center group"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full border-b-2 border-transparent hover:border-teal-500">
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsHovered ? 'rotate-180' : ''}`} />
                    </button>

                    {/* MEGA MENU DROPDOWN */}
                    <div 
                      className={`absolute top-full left-0 w-full bg-white shadow-xl border-t border-teal-500 rounded-b-xl overflow-hidden transition-all duration-300 origin-top z-50 ${
                        isProductsHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="flex h-[550px]">
                        
                        {/* LEFT SIDE: Categories */}
                        <div className="w-1/3 bg-gray-50 overflow-y-auto border-r border-gray-100 py-6">
                          <div className="px-8 pb-4 text-sm font-bold text-teal-600 tracking-wider">
                            OEM available on demand
                          </div>
                          {productCategories.map((cat) => (
                            <div 
                              key={cat.id}
                              onMouseEnter={() => setActiveCategory(cat.id)}
                              className={`px-8 py-3.5 cursor-pointer flex items-center justify-between text-base font-medium transition-colors duration-200 ${
                                activeCategory === cat.id 
                                  ? 'bg-white text-teal-600 border-l-4 border-teal-500 shadow-sm' 
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-teal-600 border-l-4 border-transparent'
                              }`}
                            >
                              {cat.category}
                              {activeCategory === cat.id && <ChevronRight className="w-5 h-5" />}
                            </div>
                          ))}
                        </div>

                        {/* RIGHT SIDE: Products List */}
                        <div className="w-2/3 p-10 overflow-y-auto bg-white">
                          <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b border-gray-100">
                            <Link 
                              to={`/products/${activeCategory}/`}
                              onClick={() => setIsProductsHovered(false)}
                              className="hover:text-teal-600 transition-colors cursor-pointer block"
                            >
                              {productCategories.find(c => c.id === activeCategory)?.category}
                            </Link>
                          </h3>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {productCategories.find(c => c.id === activeCategory)?.products.map((product, idx) => (
                              <Link 
                                key={idx} 
                                to={`/products/${activeCategory}/${createSlug(product)}/`}
                                className="text-base text-gray-600 hover:text-teal-600 hover:translate-x-1 transition-all duration-200 flex items-start gap-3 group/item"
                                onClick={() => setIsProductsHovered(false)}
                              >
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-200 shrink-0 group-hover/item:bg-teal-500 transition-colors"></span>
                                {product}
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }

              if (link.isDropdown) {
                // Simple Dropdown (Company Profile)
                return (
                  <div 
                    key={link.name} 
                    className="h-full flex items-center relative group"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full border-b-2 border-transparent hover:border-teal-500">
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutHovered ? 'rotate-180' : ''}`} />
                    </button>

                    <div 
                      className={`absolute top-full left-0 w-48 bg-white shadow-xl border-t-2 border-teal-500 rounded-b-lg overflow-hidden transition-all duration-300 origin-top z-50 ${
                        isAboutHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="py-2">
                        {link.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-6 py-3 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                            onClick={() => setIsAboutHovered(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name} 
                  to={link.href} 
                  className="font-medium text-gray-600 hover:text-teal-600 text-sm lg:text-base transition-colors duration-200 cursor-pointer h-full flex items-center border-b-2 border-transparent hover:border-teal-500"
                >
                  {link.name}
                </Link>
              );
             })}
          </div>

          {/* Desktop WhatsApp & Language Toggle */}
          <div className="hidden md:flex items-center gap-4 ml-auto shrink-0">
            {/* WhatsApp Hotline */}
            <a 
              href="https://wa.me/917895850793" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.886-6.968C16.59 1.93 14.113.905 11.48.905c-5.44 0-9.866 4.415-9.87 9.845-.001 1.716.45 3.39 1.303 4.872L1.896 21.07l5.75-1.506zM18.01 14.88c-.324-.162-1.92-.949-2.213-1.055-.294-.106-.508-.16-.722.162-.214.324-.83.106-1.017-.107-.187-.213-.746-.275-.828-.328-.08-.053-.162-.107-.267-.213-.105-.107-.374-.374-.535-.587-.16-.213-.374-.16-.481-.053-.107.106-.213.267-.32.373-.107.107-.214.16-.427.054-.213-.107-.9-.331-1.718-1.06-.63-.564-1.055-1.261-1.178-1.473-.123-.213-.013-.328.093-.434.096-.096.213-.267.32-.4.107-.133.143-.227.214-.373.07-.147.035-.275-.018-.382-.053-.107-.481-1.16-.659-1.59-.173-.427-.36-.37-.508-.37-.131-.007-.282-.008-.434-.008-.152 0-.399.057-.609.287-.21.23-.8.782-.8 1.908 0 1.127.818 2.215.932 2.37.114.156 1.611 2.46 3.902 3.45.545.235.97.375 1.302.48.548.174 1.047.15 1.442.09.44-.066 1.92-.785 2.187-1.542.267-.757.267-1.405.187-1.54-.08-.135-.294-.216-.618-.378z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Language Selector */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4 h-8 shrink-0">
              <button 
                onClick={() => toast("Arabic language version is currently under construction. Please use our English site.", { icon: 'ℹ️' })}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-teal-600 transition-colors font-semibold cursor-pointer"
                title="Translate to Arabic"
              >
                <span className="text-sm">🇸🇦</span>
                <span className="hidden xl:inline font-bold">العربية</span>
              </button>
              
              <span className="text-xs text-gray-300 font-light">|</span>
              <button 
                className="flex items-center gap-1 text-xs text-teal-600 font-bold cursor-default"
                title="English (GCC) default"
              >
                <span className="text-sm">🇦🇪</span>
                <span>EN</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 hover:text-teal-700 hover:bg-teal-50 focus:outline-none transition-all"
            >
              {isOpen ? <X className="block h-7 w-7" /> : <Menu className="block h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-y-auto transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          isOpen ? "max-h-[85vh] opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {links.map((link) => {
            if (link.isMegaMenu) {

              // Products Dropdown for Mobile (existing)
              return (
                <div key={link.name} className="border-b border-gray-50 last:border-0">
                  <button 
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-teal-600 px-4 rounded-lg"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Nested Menu */}
                  <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
                    <div className="px-8 py-3 text-sm font-bold text-teal-600 bg-gray-50 border-b border-gray-100">
                      OEM available on demand
                    </div>
                    {productCategories.map((cat) => (
                      <div key={cat.id} className="bg-gray-50">
                        <button 
                          onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.id ? null : cat.id)}
                          className="w-full flex items-center justify-between py-2 px-8 text-base font-medium text-gray-600 hover:text-teal-600 border-l-4 border-transparent hover:border-teal-500"
                        >
                          {cat.category}
                          <ChevronDown className={`w-4 h-4 transition-transform ${mobileActiveCategory === cat.id ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Products List */}
                        <div className={`overflow-hidden transition-all duration-300 bg-white ${mobileActiveCategory === cat.id ? 'max-h-[500px]' : 'max-h-0'}`}>
                           {cat.products.map((product, idx) => (
                             <Link 
                               key={idx}
                               to={`/products/${cat.id}/${createSlug(product)}/`}
                               className="block py-2 pl-12 pr-4 text-sm text-gray-500 hover:text-teal-600 hover:bg-teal-50"
                               onClick={() => setIsOpen(false)} // Close menu on click
                             >
                               • {product}
                             </Link>
                           ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (link.isDropdown) {
              // Company Profile Dropdown for Mobile
              return (
                <div key={link.name} className="border-b border-gray-50 last:border-0">
                  <button 
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-700 hover:text-teal-600 px-4 rounded-lg"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 bg-gray-50 ${mobileAboutOpen ? 'max-h-48' : 'max-h-0'}`}>
                    {link.subItems.map((sub) => (
                      <Link 
                        key={sub.name}
                        to={sub.href}
                        className="block py-3 pl-8 text-base font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            
            return (
              <Link
                key={link.name} 
                to={link.href} 
                className="block w-full py-3 text-lg font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile WhatsApp and Language Toggle */}
          <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col gap-4 px-4">
            <a 
              href="https://wa.me/917895850793" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg shadow-sm text-base cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.886-6.968C16.59 1.93 14.113.905 11.48.905c-5.44 0-9.866 4.415-9.87 9.845-.001 1.716.45 3.39 1.303 4.872L1.896 21.07l5.75-1.506zM18.01 14.88c-.324-.162-1.92-.949-2.213-1.055-.294-.106-.508-.16-.722.162-.214.324-.83.106-1.017-.107-.187-.213-.746-.275-.828-.328-.08-.053-.162-.107-.267-.213-.105-.107-.374-.374-.535-.587-.16-.213-.374-.16-.481-.053-.107.106-.213.267-.32.373-.107.107-.214.16-.427.054-.213-.107-.9-.331-1.718-1.06-.63-.564-1.055-1.261-1.178-1.473-.123-.213-.013-.328.093-.434.096-.096.213-.267.32-.4.107-.133.143-.227.214-.373.07-.147.035-.275-.018-.382-.053-.107-.481-1.16-.659-1.59-.173-.427-.36-.37-.508-.37-.131-.007-.282-.008-.434-.008-.152 0-.399.057-.609.287-.21.23-.8.782-.8 1.908 0 1.127.818 2.215.932 2.37.114.156 1.611 2.46 3.902 3.45.545.235.97.375 1.302.48.548.174 1.047.15 1.442.09.44-.066 1.92-.785 2.187-1.542.267-.757.267-1.405.187-1.54-.08-.135-.294-.216-.618-.378z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-4 py-2 bg-gray-50 rounded-lg">
              <button 
                onClick={() => {
                  toast("Arabic language version is currently under construction. Please use our English site.", { icon: 'ℹ️' });
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 font-bold cursor-pointer"
              >
                <span>🇸🇦</span>
                <span>العربية</span>
              </button>
              <span className="text-gray-300">|</span>
              <button 
                className="flex items-center gap-2 text-sm text-teal-600 font-bold cursor-default"
              >
                <span>🇦🇪</span>
                <span>English (EN)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;