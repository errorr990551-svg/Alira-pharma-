import React, { useEffect } from 'react';
import { Award, FileCheck, Download, ChevronRight, CheckCircle } from 'lucide-react';
import certificatePDF from '../assets/certificateOfIEC (3).pdf';

const Certification = () => {
  // SEO Configuration
  useEffect(() => {
    document.title = "Accreditation & Certificates | Alira Pharmaceuticals";

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "View the official certifications and accreditation of Alira Pharmaceuticals. We adhere to international quality standards for medical and surgical supply manufacturing.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = descriptionContent;
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* --- Banner Section --- */}
      <div className="relative bg-teal-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical certification background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-linear-to-r from-teal-900/90 to-teal-800/80 mix-blend-multiply"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Accreditation & Certificates
          </h1>
          <div className="flex items-center justify-center gap-2 text-teal-100 text-sm md:text-base font-medium">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>|</span>
            <span className="text-white">Certification</span>
          </div>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Side: Text Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-10 w-1.5 bg-teal-500 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our Commitment to Quality
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Alira Pharmaceuticals, quality is not just a requirement—it is our core philosophy. We maintain rigorous standards across our entire manufacturing and supply chain processes to ensure patient safety and clinical excellence.
                </p>
                <p>
                  Our certifications reflect our dedication to international best practices in medical device manufacturing, export protocols, and healthcare safety standards.
                </p>
                
                <ul className="space-y-4 pt-4">
                  {[
                    "Import Export Code (IEC) Certified",
                    "Adherence to International Quality Standards",
                    "Rigorous Multi-stage Quality Control",
                    "Certified Medical-Grade Materials",
                    "Global Compliance for Healthcare Exports"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <a 
                    href={certificatePDF} 
                    download="Alira_Pharmaceuticals_IEC_Certificate.pdf"
                    className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-700 transition-colors shadow-lg group"
                  >
                    <Download className="w-5 h-5 group-hover:bounce" />
                    Download IEC Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Certificate Preview */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl border border-gray-200 shadow-inner">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-100 aspect-[1/1.41] relative group">
                  {/* Since it's a PDF, we'll use an iframe for preview or a styled placeholder if iframe is blocked */}
                  <iframe 
                    src={`${certificatePDF}#toolbar=0`} 
                    title="Certificate Preview"
                    className="w-full h-full border-none"
                  />
                  
                  {/* Overlay for better mobile UX (optional) */}
                  <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                  
                  <div className="absolute bottom-4 right-4 lg:hidden">
                     <span className="bg-white/90 backdrop-blur-sm text-teal-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-teal-100">
                       Official Document
                     </span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 italic">
                    Importer Exporter Code (IEC) - Issued by Government of India
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Trust Badges Section --- */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-12">
            Recognized & Verified
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
             <div className="flex flex-col items-center gap-2">
                <Award className="w-12 h-12 text-gray-400" />
                <span className="text-xs font-bold uppercase tracking-tighter">ISO Standards</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <FileCheck className="w-12 h-12 text-gray-400" />
                <span className="text-xs font-bold uppercase tracking-tighter">Certified Quality</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <Award className="w-12 h-12 text-gray-400" />
                <span className="text-xs font-bold uppercase tracking-tighter">Export Authority</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <FileCheck className="w-12 h-12 text-gray-400" />
                <span className="text-xs font-bold uppercase tracking-tighter">Verified Manufacturer</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;
