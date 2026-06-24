import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, ArrowRight, MessageSquare } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Alira Pharmaceuticals";
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, follow');
  }, []);

  const whatsappNumber = "+917895850793";
  const whatsappMessage = encodeURIComponent("Hi Alira Pharmaceuticals, I hit a broken page or could not find a specific medical supply item. Can you help me locate the correct product or quote?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center space-y-6">
        
        {/* Graphic */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
            <FileQuestion className="w-10 h-10" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold text-teal-900">404</h1>
          <h2 className="text-xl font-bold text-gray-900">Page Not Found</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved to a new address.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 gap-3 pt-4 border-t border-gray-100">
          <Link 
            to="/" 
            className="flex items-center justify-between px-4 py-3 rounded-lg bg-teal-50 text-teal-800 hover:bg-teal-100 transition-colors font-semibold text-sm"
          >
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go to Home Page
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 rounded-lg bg-green-50 text-green-800 hover:bg-green-100 transition-colors font-semibold text-sm"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
