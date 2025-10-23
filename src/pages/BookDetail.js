import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Calendar, BookOpen, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { books } from '../data/books';

const BookDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container">
        <div className="error-page">
          <h2>Book not found</h2>
          <p>The book you're looking for doesn't exist.</p>
          <Link to="/books" className="btn btn-primary">
            Back to Books
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="book-detail">
      <div className="container">
        <Link to="/books" className="back-link">
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Back to Books
        </Link>
        
        <div className="book-detail-content">
          <div className="book-detail-image">
            <img src={book.image} alt={book.title} />
          </div>
          
          <div className="book-detail-info">
            <h1 className="book-detail-title">{book.title}</h1>
            <p className="book-detail-author">by {book.author}</p>
            
            <div className="book-detail-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < Math.floor(book.rating) ? "#fbbf24" : "#d1d5db"}
                    color={i < Math.floor(book.rating) ? "#fbbf24" : "#d1d5db"}
                  />
                ))}
              </div>
              <span className="rating-text">({book.rating}/5)</span>
            </div>
            
            <div className="book-detail-price">${book.price}</div>
            
            <div className="book-detail-meta">
              <div className="meta-item">
                <BookOpen size={16} />
                <span>{book.pages} pages</span>
              </div>
              <div className="meta-item">
                <Calendar size={16} />
                <span>Published {book.published}</span>
              </div>
              <div className="meta-item">
                <User size={16} />
                <span>{book.category}</span>
              </div>
            </div>
            
            <div className="book-detail-description">
              <h3>Description</h3>
              <p>{book.description}</p>
            </div>
            
            <div className="book-detail-actions">
              <button 
                onClick={handleAddToCart}
                className="btn btn-primary"
              >
                <ShoppingCart size={20} style={{ marginRight: '8px' }} />
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-outline">
                View Cart
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Books */}
        <div className="related-books">
          <h2>Related Books</h2>
          <div className="books-grid">
            {books
              .filter(b => b.category === book.category && b.id !== book.id)
              .slice(0, 4)
              .map(relatedBook => (
                <div key={relatedBook.id} className="book-card">
                  <Link to={`/books/${relatedBook.id}`}>
                    <div className="book-image-container">
                      <img 
                        src={relatedBook.image} 
                        alt={relatedBook.title}
                        className="book-image"
                      />
                    </div>
                    <div className="book-info">
                      <h3 className="book-title">{relatedBook.title}</h3>
                      <p className="book-author">by {relatedBook.author}</p>
                      <p className="book-price">${relatedBook.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
