import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(book);
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        <img 
          src={book.image || 'https://via.placeholder.com/300x400?text=Book+Cover'} 
          alt={book.title}
          className="book-image"
        />
        <div className="book-overlay">
          <Link to={`/books/${book.id}`} className="btn btn-outline">
            <Eye size={16} style={{ marginRight: '4px' }} />
            View Details
          </Link>
        </div>
      </div>
      
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <p className="book-price">${book.price}</p>
        <p className="book-description">{book.description}</p>
        
        <div className="book-actions">
          <button 
            onClick={handleAddToCart}
            className="btn btn-primary w-full"
          >
            <ShoppingCart size={16} style={{ marginRight: '4px' }} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
