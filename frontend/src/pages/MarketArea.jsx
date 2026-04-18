import React from 'react';
import { Link } from 'react-router-dom';

const cities = [
  { name: 'Riyadh', path: '/riyadh' },
  { name: 'Jeddah', path: '/jeddah' },
  { name: 'Mecca', path: '/mecca' },
  { name: 'Medina', path: '/medina' },
  { name: 'Dammam', path: '/dammam' },
  { name: 'Al Khobar', path: '/al-khobar' },
  { name: 'Dhahran', path: '/dhahran' },
  { name: 'Taif', path: '/taif' },
  { name: 'Jubail', path: '/jubail' },
  { name: 'Al Ahsa', path: '/al-ahsa' },
  { name: 'Qatif', path: '/qatif' },
  { name: 'Ras Tanura', path: '/ras-tanura' },
  { name: 'Abqaiq', path: '/abqaiq' },
  { name: 'Khafji', path: '/khafji' },
  { name: 'Al Kharj', path: '/al-kharj' },
  { name: 'Al Majma\'ah', path: '/al-majmaah' },
  { name: 'Al Zulfi', path: '/al-zulfi' },
  { name: 'Shaqra', path: '/shaqra' },
  { name: 'Afif', path: '/afif' },
  { name: 'Dawadmi', path: '/dawadmi' },
  { name: 'Wadi ad-Dawasir', path: '/wadi-ad-dawasir' },
  { name: 'Rabigh', path: '/rabigh' },
  { name: 'Al-Lith', path: '/al-lith' },
  { name: 'Al-Qunfudhah', path: '/al-qunfudhah' },
  { name: 'Yanbu', path: '/yanbu' },
  { name: 'Al-Ula', path: '/al-ula' },
  { name: 'Badr', path: '/badr' },
  { name: 'Khaybar', path: '/khaybar' },
  { name: 'Hubuna', path: '/hubuna' },
  { name: 'Tabuk', path: '/tabuk' },
  { name: 'Duba', path: '/duba' },
  { name: 'Tayma', path: '/tayma' },
  { name: 'Haql', path: '/haql' },
  { name: 'Hail', path: '/hail' },
  { name: 'Baqaa', path: '/baqaa' },
  { name: 'Ghazalah', path: '/ghazalah' },
  { name: 'Arar', path: '/arar' },
  { name: 'Rafha', path: '/rafha' },
  { name: 'Turaif', path: '/turaif' },
  { name: 'Buraydah', path: '/buraydah' },
  { name: 'Unaizah', path: '/unaizah' },
  { name: 'Ar-Rass', path: '/ar-rass' },
  { name: 'Al-Bukayriyah', path: '/al-bukayriyah' },
  { name: 'Sakaka', path: '/sakaka' },
  { name: 'Qurayyat', path: '/qurayyat' },
  { name: 'Dumat Al-Jandal', path: '/dumat-al-jandal' },
  { name: 'Thuwal', path: '/thuwal' },
  { name: 'Turabah', path: '/turabah' },
  { name: 'Ranyah', path: '/ranyah' },
  { name: 'Al-Namas', path: '/al-namas' },
  { name: 'Tanomah', path: '/tanomah' },
  { name: 'Baljurashi', path: '/baljurashi' },
  { name: 'Al-Baha', path: '/al-baha' },
  { name: 'Al Mithnab', path: '/al-mithnab' }
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
