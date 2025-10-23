import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, BookOpen } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <BookOpen size={32} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          BookStore
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/books" className="nav-link">Books</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
