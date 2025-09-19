import React from 'react';

function Header() {
  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="https://images.pexels.com/photos/3212179/pexels-photo-3212179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="Aroma MedSpa Logo"
            className="logo navbar"
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 uppercase tracking-wide text-sm font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 uppercase tracking-wide text-sm font-medium">Services</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 uppercase tracking-wide text-sm font-medium">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 uppercase tracking-wide text-sm font-medium">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 uppercase tracking-wide text-sm font-medium">
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Header;