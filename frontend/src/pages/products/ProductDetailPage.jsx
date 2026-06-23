import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuotePopup } from '../../components/context/QuotePopupContext';
import { productsCatalog } from '../../data/productsCatalog';
import ZoomableImage from '../../components/common/ZoomableImage';
import { 
  ArrowLeft, 
  Send, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Scale, 
  Globe, 
  CheckCircle, 
  Star,
  Download,
  AlertCircle
} from 'lucide-react';

const ProductDetailPage = () => {
  const { categorySlug, productSlug } = useParams();
  const { openQuotePopup } = useQuotePopup();

  // Find the category and product in the catalog
  const category = productsCatalog[categorySlug];
  const product = category?.products.find(p => p.slug === productSlug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, productSlug]);

  if (!category || !product) {
    return (
      <div className="bg-gray-50 min-h-screen pt-32 pb-16 flex flex-col items-center justify-center px-4">
        <AlertCircle className="w-16 h-16 text-teal-600 mb-4" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Product Not Found</h1>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          The product you are looking for might have been moved or renamed. Browse our catalog to find what you need.
        </p>
        <Link 
          to="/products/surgical-instruments/"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  // Find related products full details
  const relatedItems = category.products
    .filter(p => product.relatedProducts.includes(p.slug))
    .slice(0, 4);

  // PDF Catalog download handler
  const catalogLink = "/alira-b2b-catalog-3.0.pdf";

  // Pre-filled WhatsApp link
  const whatsappNumber = "+917895850793";
  const whatsappMessage = encodeURIComponent(`Hi Alira Pharmaceuticals, I am interested in requesting a quote for ${product.name} (REF: ${product.specsTable["REF Number"]}). Please share procurement pricing, MOQ options, and shipping timelines to my location.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* --- Breadcrumbs --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-500 font-medium items-center gap-2">
          <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to={`/products/${categorySlug}/`} className="hover:text-teal-600 transition-colors">{category.title}</Link>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* --- Main Product Section (Above Fold) --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left: Product Images */}
            <div className="space-y-6">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-gray-100 bg-white group shadow-sm">
                <ZoomableImage src={product.image} alt={product.name} />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  SFDA Approved
                </div>
              </div>
              
              {/* Trust Badge Grid */}
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-800 block">CE MARK</span>
                  <span className="text-[9px] text-gray-500 block">Certified</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-800 block">ISO 13485</span>
                  <span className="text-[9px] text-gray-500 block">Quality Mgmt</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-800 block">SFDA</span>
                  <span className="text-[9px] text-gray-500 block">Saudi Registered</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <span className="text-[10px] sm:text-xs font-bold text-gray-800 block">MOH UAE</span>
                  <span className="text-[9px] text-gray-500 block">Compliant</span>
                </div>
              </div>
            </div>

            {/* Right: Product Summary & Call-to-Actions */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Category tag */}
                <span className="text-teal-600 font-bold tracking-wider uppercase text-xs sm:text-sm block mb-2">
                  {category.title}
                </span>
                
                {/* H1 Name */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {product.name}
                </h1>

                {/* Rating / Social proof counter */}
                <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-sm font-bold text-gray-800">5.0</span>
                  <span className="text-sm text-gray-500">| Used in 50+ GCC Facilities</span>
                </div>

                {/* Key Spec Bullets */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Highlights</h3>
                  <ul className="space-y-3">
                    {product.keySpecsSummary.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Logistics Info Bar */}
                <div className="bg-teal-50/50 rounded-xl p-4 border border-teal-100/50 grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-teal-800 font-bold block">Lead Time</span>
                      <span className="text-xs text-gray-600 leading-tight block">7-10 Days (Riyadh / Dubai)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs text-teal-800 font-bold block">Minimum MOQ</span>
                      <span className="text-xs text-gray-600 leading-tight block">{product.moq}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price Indicator & CTA buttons */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-gray-500 font-medium">B2B Wholesale Pricing:</span>
                  <span className="text-lg font-bold text-teal-700">{product.priceIndicator}</span>
                </div>
                
                <div>
                  <button 
                    onClick={openQuotePopup}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-teal-600/10 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] uppercase tracking-wide text-sm"
                  >
                    <Send className="w-5 h-5" />
                    Request a Quote
                  </button>
                </div>
                
                {/* PDF Catalog download */}
                <a 
                  href={catalogLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-teal-600 hover:text-teal-800 gap-1.5 transition-colors uppercase tracking-wider mx-auto sm:mx-0 pt-2"
                >
                  <Download className="w-4 h-4" />
                  Download Full B2B Medical Catalog (PDF)
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* --- Product Details (Below Fold) --- */}
      <div className="bg-white border-t border-gray-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Description & Arabic (Left 2 Columns) */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Product description in English */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-teal-500 pl-4 uppercase tracking-wide">
                  Product Description
                </h2>
                <div className="text-gray-600 leading-relaxed text-justify text-base space-y-4">
                  <p>{product.description}</p>
                  <p>
                    Our {product.name} is engineered to ensure unmatched longevity and ease of sterilization in medical settings. Specifically designed to meet high B2B hospital standards across the GCC region, this product offers surgical-grade performance with the strict approvals required by healthcare procurement teams in Riyadh, Dubai, Doha, and Muscat.
                  </p>
                </div>
              </div>

              {/* Arabic Translation Block (Bilingual Target Audience) */}
              <div className="bg-teal-50/30 rounded-xl p-6 md:p-8 border border-teal-100/50 space-y-4" dir="rtl">
                <h2 className="text-xl font-bold text-teal-900 border-r-4 border-teal-600 pr-4 text-right">
                  الوصف باللغة العربية (Bilingual Content)
                </h2>
                <h3 className="text-lg font-bold text-gray-900 text-right">{product.arName}</h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base text-right">
                  {product.arDescription} يلتزم هذا المنتج بأعلى المعايير الطبية المعتمدة ويخضع لرقابة جودة صارمة لتلبية متطلبات المستشفيات والمرافق الطبية في المملكة العربية السعودية والخليج العربي. معقم ومتوافق تمامًا مع الهيئة العامة للغذاء والدواء (SFDA).
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-teal-500 pl-4 uppercase tracking-wide">
                  Technical Specifications
                </h2>
                <div className="overflow-hidden border border-gray-200 rounded-xl">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-xs">Specification</th>
                        <th className="px-6 py-4 font-bold text-gray-700 uppercase tracking-wider text-xs">Detail Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {Object.entries(product.specsTable).map(([key, val]) => (
                        <tr key={key} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">{key}</td>
                          <td className="px-6 py-4 text-gray-600">{val}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-teal-500 pl-4 uppercase tracking-wide">
                  Product Compliance & FAQs
                </h2>
                <div className="space-y-4">
                  {product.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                      <h4 className="font-bold text-gray-900 mb-2 flex gap-2">
                        <span className="text-teal-600">Q.</span>
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Social Proof & Sidebar RFQ Form (Right Column) */}
            <div className="space-y-8">
              
              {/* Quality & Certifications Certs badge list */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  Compliance & Quality
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>ISO 13485:2016 Compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>CE Notified Mark Approval</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>SFDA Device Registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>Halal Certified Disposables</span>
                  </li>
                </ul>
              </div>

              {/* B2B Testimonials */}
              <div className="bg-teal-900 rounded-xl p-6 text-white space-y-4 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-teal-800 rounded-bl-full opacity-35"></div>
                <h3 className="text-lg font-bold uppercase tracking-wider flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  Client Endorsement
                </h3>
                <p className="text-teal-50 text-sm italic leading-relaxed">
                  "Alira's medical supplies have met all GCC import requirements, including SFDA registration. The quality and sterile packaging were outstanding, streamlining our procurement process."
                </p>
                <div className="pt-2 border-t border-teal-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center font-bold text-teal-200 text-sm">
                    MD
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Mohammed Darwish</h5>
                    <p className="text-xs text-teal-200">Purchasing Executive, Riyadh Clinic</p>
                  </div>
                </div>
              </div>

              {/* Quick RFQ form panel */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Quick B2B Enquiry</h3>
                <p className="text-xs text-gray-500">
                  Request custom pricing, catalogs, and MOQ quotes for your facility.
                </p>
                <button 
                  onClick={openQuotePopup}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                >
                  <Send className="w-4 h-4" />
                  Launch RFQ Form
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* --- Related Products Section --- */}
      {relatedItems.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-100 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center uppercase tracking-wide">
              Related Medical Supplies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="aspect-4/3 overflow-hidden bg-gray-50 border-b border-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-2 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">{item.description}</p>
                    </div>
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <Link 
                        to={`/products/${categorySlug}/${item.slug}/`}
                        className="w-full border border-teal-600 hover:bg-teal-50 text-teal-600 text-center font-semibold py-2 rounded-lg text-xs transition-colors block"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetailPage;
