import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuotePopup } from '../../components/context/QuotePopupContext';
import ZoomableImage from '../../components/common/ZoomableImage';

import UnderWaterSeal from '../../assets/Images/underwater seal.jpeg';
import DigitalThermometer from '../../assets/Images/digital thermometer.jpeg';
import BloodPressure from '../../assets/Images/blood pressure.jpeg';

// Using a placeholder image for now as requested
const placeholderImage = 'https://placehold.co/600x400?text=Medical+Device';

const Category12 = () => {
  const { productId } = useParams();
  const { openQuotePopup } = useQuotePopup();

  // Helper to create URL slugs (Matches Navbar logic for scrolling)
  const createSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  // Effect to handle automatic scrolling based on URL parameter
  useEffect(() => {
    if (productId) {
      const element = document.getElementById(productId);
      if (element) {
        // Small timeout ensures the DOM is fully ready before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } else {
      // Scroll to top if no specific product is requested
      window.scrollTo(0, 0);
    }
  }, [productId]);

  const categoryInfo = {
    title: "Medical Device",
    description: "Our range of medical devices are essential tools used by medical professionals for accurate diagnostics, monitoring, and treatments. These high-quality devices are designed for reliability and everyday clinical or home use."
  };

  const products = [
    {
      name: "Under water seal drainage system",
      description: "An under water seal drainage system is used to remove air, fluid, or pus from the pleural cavity, helping restore normal lung function. It is commonly used in thoracic surgeries and emergency care settings. The system ensures controlled drainage while preventing backflow, maintaining patient safety and effective respiratory support.",
      image: UnderWaterSeal
    },
    {
      name: "Digital thermometer",
      description: "A digital thermometer is used to measure body temperature quickly and accurately. It provides fast readings with easy-to-read digital displays, making it suitable for clinical and home use. Designed for hygiene and reliability, it ensures precise temperature monitoring for effective patient care.",
      image: DigitalThermometer
    },
    {
      name: "Blood pressure monitor",
      description: "A blood pressure monitor is used to measure systolic and diastolic blood pressure levels along with pulse rate. It is essential for monitoring cardiovascular health in hospitals, clinics, and home settings. Designed for accuracy and ease of use, it helps in early detection and management of hypertension.",
      image: BloodPressure
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* --- Page Header --- */}
      <div className="bg-teal-900 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{categoryInfo.title}</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-teal-50 leading-relaxed font-light">
            {categoryInfo.description}
          </p>
        </div>
      </div>

      {/* --- Products List --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-24">
        {products.map((item, index) => (
          <div 
            key={index} 
            id={createSlug(item.name)} 
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 scroll-mt-32`}
          >
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative group rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="aspect-4/3 overflow-hidden relative">
                   {/* We can use either img or ZoomableImage from components. Assuming standard img if ZoomableImage was causing issues, but Category1 uses ZoomableImage */}
                   <ZoomableImage src={item.image} alt={item.name} />
                </div>
                {/* Decorative Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 pointer-events-none"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-teal-500"></div>
                <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                  Product {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-teal-700 transition-colors">
                {item.name}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify">
                {item.description}
              </p>

              <button
                onClick={openQuotePopup}
                className="cursor-pointer inline-flex items-center gap-2 bg-teal-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition-all group/btn"
              >
                Request Quote
                <span className="transform group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Category12;
