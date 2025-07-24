// src/components/sections/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">
            Bluvia
          </div>
          <p className="text-gray-400 mb-6">Industrial Water Waste Solutions</p>
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Bluvia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
