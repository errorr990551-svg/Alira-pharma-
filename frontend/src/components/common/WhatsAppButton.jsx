import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = "+917895850793";
  const message = encodeURIComponent("Hi Alira Pharmaceuticals, I am looking for medical supplies / surgical instruments and would like to request a quote.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 group border-2 border-white"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap">
        Chat with us (WhatsApp)
      </span>

      {/* SVG Icon */}
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.843.002-2.63-1.023-5.101-2.886-6.968C16.59 1.93 14.113.905 11.48.905c-5.44 0-9.866 4.415-9.87 9.845-.001 1.716.45 3.39 1.303 4.872L1.896 21.07l5.75-1.506zM18.01 14.88c-.324-.162-1.92-.949-2.213-1.055-.294-.106-.508-.16-.722.162-.214.324-.83.106-1.017-.107-.187-.213-.746-.275-.828-.328-.08-.053-.162-.107-.267-.213-.105-.107-.374-.374-.535-.587-.16-.213-.374-.16-.481-.053-.107.106-.213.267-.32.373-.107.107-.214.16-.427.054-.213-.107-.9-.331-1.718-1.06-.63-.564-1.055-1.261-1.178-1.473-.123-.213-.013-.328.093-.434.096-.096.213-.267.32-.4.107-.133.143-.227.214-.373.07-.147.035-.275-.018-.382-.053-.107-.481-1.16-.659-1.59-.173-.427-.36-.37-.508-.37-.131-.007-.282-.008-.434-.008-.152 0-.399.057-.609.287-.21.23-.8.782-.8 1.908 0 1.127.818 2.215.932 2.37.114.156 1.611 2.46 3.902 3.45.545.235.97.375 1.302.48.548.174 1.047.15 1.442.09.44-.066 1.92-.785 2.187-1.542.267-.757.267-1.405.187-1.54-.08-.135-.294-.216-.618-.378z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
