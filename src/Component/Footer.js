import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-solid border-gray-400 container mx-auto mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">TRENDY</h1>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-between w-full md:w-auto">
            <div className="text-left md:mr-12 mb-4 md:mb-0">
              <h5 className="font-semibold mb-2">Quick Access</h5>
              <ul>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Apparel</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Collections</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Accessories</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Sport</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Brands</Link></li>
              </ul>
            </div>
            <div className="text-left md:mr-12 mb-4 md:mb-0">
              <h5 className="font-semibold mb-2">About Us</h5>
              <ul>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Help & Support</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Copyright Policy</Link></li>
              </ul>
            </div>
            <div className="text-left">
              <h5 className="font-semibold mb-2">Our Service</h5>
              <ul>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Track Packages</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Shipping Rates and Policies</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Return and Replacement</Link></li>
                <li><Link to='/' className="text-gray-600 hover:text-gray-900">Customer Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t pt-4">
          <p className="text-gray-600 text-sm">&copy; 2022 - 2024 TRENDY®. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to='/' className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to='/' className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to='/' className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-whatsapp"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
