import React from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Riyadh', path: '/Riyadh' },
  { name: 'Jeddah', path: '/Jeddah' },
  { name: 'Mecca', path: '/Mecca' },
  { name: 'Medina', path: '/Medina' },
  { name: 'Dammam', path: '/Dammam' },
  { name: 'Al Khobar', path: '/Al-Khobar' },
  { name: 'Dhahran', path: '/Dhahran' },
  { name: 'Taif', path: '/Taif' },
  { name: 'Jubail', path: '/Jubail' },
  { name: 'Al Ahsa', path: '/Al-Ahsa' },
  { name: 'Qatif', path: '/Qatif' },
  { name: 'Ras Tanura', path: '/Ras-Tanura' },
  { name: 'Abqaiq', path: '/Abqaiq' },
  { name: 'Khafji', path: '/Khafji' },
  { name: 'Al Kharj', path: '/Al-Kharj' },
  { name: 'Al Majma\'ah', path: '/Al-Majmaah' },
  { name: 'Al Zulfi', path: '/Al-Zulfi' },
  { name: 'Shaqra', path: '/Shaqra' },
  { name: 'Afif', path: '/Afif' },
  { name: 'Dawadmi', path: '/Dawadmi' }
];

const MarketArea = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <div className="bg-gray-100 py-4 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-sm font-medium text-gray-600 uppercase tracking-wider">
            <Link to="/" className="hover:text-teal-700 transition-colors">HOME</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">MARKET AREA</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-serif text-gray-800 border-b border-gray-100 pb-4">
            Saudi Arabian Cities : We Serve
          </h2>
        </div>

        {/* Grid of Cities - 4 columns as per Image 1 reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cities.map((city) => (
            <Link 
              key={city.name} 
              to={city.path}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-normal py-3 px-6 transition-colors duration-200 text-left flex items-center"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketArea;
