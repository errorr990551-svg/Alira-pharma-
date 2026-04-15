import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag, ChevronRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "Sourcing ENT & Neuro-Surgical Tools",
    excerpt: "A comprehensive procurement guide for hospital officers looking for high-precision specialized instruments.",
    image: "https://images.unsplash.com/photo-1579154235602-382b99ef711a?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/ent-neuro-surgical-tools",
    category: "Procurement",
    date: "April 10, 2026"
  },
  {
    id: 2,
    title: "The Zero-Duty Revolution: India-UAE CEPA",
    excerpt: "Exploring the benefits of the India-UAE Comprehensive Economic Partnership Agreement for medical imports in Dubai.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/india-uae-cepa-zero-duty-medical-imports-dubai",
    category: "Logistics",
    date: "April 09, 2026"
  },
  {
    id: 3,
    title: "Sourcing Medical-Grade Stainless Steel",
    excerpt: "A guide to metallurgy and clinical quality in the manufacturing of high-performance surgical instruments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/sourcing-medical-grade-stainless-steel-instruments",
    category: "Manufacturing",
    date: "April 08, 2026"
  },
  {
    id: 4,
    title: "Benefits of OEM Partnerships 2026",
    excerpt: "Strategic manufacturing and private labeling advantages for global healthcare providers and distributors.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/benefits-of-medical-oem-partnerships-2026",
    category: "Business",
    date: "April 08, 2026"
  },
  {
    id: 5,
    title: "Future of Infection Control 2026",
    excerpt: "Advancements in material science and antimicrobial coatings for wound care and surgical hygiene.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/future-of-infection-control-2026",
    category: "Infection Control",
    date: "April 08, 2026"
  },
  {
    id: 6,
    title: "Global Medical Logistics 2026",
    excerpt: "Ensuring reliability and sterile integrity in emerging markets through advanced supply chain management.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/medical-logistics-2026",
    category: "Logistics",
    date: "April 08, 2026"
  },
  {
    id: 7,
    title: "Emergency Trauma Tools & Response",
    excerpt: "Essential equipment for trauma care and first response in critical 'golden hour' patient outcomes.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/emergency-trauma-tools-2026",
    category: "Emergency Care",
    date: "April 08, 2026"
  },
  {
    id: 8,
    title: "Instrument Sterilization Guide",
    excerpt: "Maximizing lifespan through proper autoclave protocols and medical-grade stainless steel maintenance.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/surgical-instrument-sterilization-guide",
    category: "Maintenance",
    date: "April 08, 2026"
  },
  {
    id: 9,
    title: "Orthopedic & Cardiovascular Precision",
    excerpt: "Millimeter-level accuracy and specialized alloys for the modern high-stakes operating room.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
    link: "/blog/surgical-precision-2026",
    category: "Surgical Tech",
    date: "April 08, 2026"
  },
  {
    id: 10,
    title: "The Future of Surgical Robotics",
    excerpt: "How hybrid instrumentation is defining the next era of precision in robot-assisted surgery.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
    link: "/blog/surgical-robotics-2026",
    category: "Robotics",
    date: "April 15, 2026"
  },
  {
    id: 11,
    title: "Green Hospitals & Sustainable Procurement",
    excerpt: "Reducing the carbon footprint of healthcare through circular economy models and eco-friendly supplies.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000",
    link: "/blog/sustainable-medical-supplies-2026",
    category: "Sustainability",
    date: "April 15, 2026"
  },
  {
    id: 12,
    title: "Advancements in Diagnostic Instruments",
    excerpt: "The critical role of high-sensitivity diagnostic gear as the first line of clinical accuracy.",
    image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2000",
    link: "/blog/diagnostic-precision-2026",
    category: "Diagnostics",
    date: "April 15, 2026"
  },
  {
    id: 13,
    title: "Quality in Specialized Pediatric Instruments",
    excerpt: "Engineering micro-precision tools for the unique anatomical requirements of neonatal and child care.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000",
    link: "/blog/pediatric-instruments-2026",
    category: "Pediatrics",
    date: "April 15, 2026"
  },
  {
    id: 14,
    title: "The Ethics of Medical Accessibility",
    excerpt: "Bridging the global supply gap through standardized procurement and resilient infrastructure.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2000",
    link: "/blog/medical-accessibility-2026",
    category: "Ethics",
    date: "April 15, 2026"
  }
];

const BlogsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-teal-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Medical Insights & Industry News</h1>
          <p className="text-teal-100 text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with the latest trends in surgical technology, medical procurement, and global healthcare logistics.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-800/20 skew-x-12 transform translate-x-20"></div>
      </div>

      {/* Blogs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link 
              key={blog.id} 
              to={blog.link}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              {/* Content */}
              <div className="p-8 flex flex-col grow">
                <div className="mb-4">
                  <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between text-teal-600 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter / CTA Section */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden text-center text-white">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Sourcing Excellence Directly to Your Inbox</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Get notified about new product launches, regulatory updates, and sector insights.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="grow bg-slate-800 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-teal-500 outline-none"
              />
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 rounded-2xl transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
