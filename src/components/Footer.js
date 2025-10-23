import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BookOpen size={24} style={{ marginRight: '8px' }} />
              BookStore
            </h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for all your reading needs. Discover amazing books and expand your knowledge.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/books" className="text-gray-300 hover:text-white">Books</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Fiction</span></li>
              <li><span className="text-gray-300">Non-Fiction</span></li>
              <li><span className="text-gray-300">Science</span></li>
              <li><span className="text-gray-300">History</span></li>
              <li><span className="text-gray-300">Biography</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={16} style={{ marginRight: '8px' }} />
                <span className="text-gray-300">info@bookstore.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} style={{ marginRight: '8px' }} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} style={{ marginRight: '8px' }} />
                <span className="text-gray-300">123 Book Street, City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 BookStore. All rights reserved. Made with ❤️ for book lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
