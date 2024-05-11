import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const isLoggedIn = !!localStorage.getItem('user');

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-2">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="flex flex-wrap gap-4">
              <li><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
              {isLoggedIn && (
                <li><Link to="/events" className="text-blue-500 hover:text-blue-700">News & Events</Link></li>
              )}
              <li><Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:contact@nasa.com" className="text-blue-500 hover:text-blue-700">contact@nasa.com</a></p>
            <p>Phone: <a href="tel:+11234567890" className="text-blue-500 hover:text-blue-700">+1 123 456 7890</a></p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <ul className="flex gap-4">
              <li><a href="https://twitter.com/nasa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Twitter</a></li>
              <li><a href="https://www.facebook.com/nasa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Facebook</a></li>
              <li><a href="https://www.instagram.com/nasa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 NASA. All rights reserved.</p>
          <p>Designed and developed by NASA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
