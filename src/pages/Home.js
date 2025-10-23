import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Award } from 'lucide-react';
import BookList from '../components/BookList';
import { books } from '../data/books';

const Home = () => {
  const featuredBooks = books.slice(0, 6);
  const bestSellers = books.filter(book => book.rating >= 4.5).slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Discover Your Next Favorite Book</h1>
          <p>Explore our vast collection of books from classic literature to modern bestsellers</p>
          <div className="hero-actions">
            <Link to="/books" className="btn btn-primary">
              Browse Books
              <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose BookStore?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <BookOpen size={48} className="feature-icon" />
              <h3>Wide Selection</h3>
              <p>Thousands of books across all genres and categories</p>
            </div>
            <div className="feature-card">
              <Star size={48} className="feature-icon" />
              <h3>Quality Books</h3>
              <p>Carefully curated collection of high-quality books</p>
            </div>
            <div className="feature-card">
              <Users size={48} className="feature-icon" />
              <h3>Expert Reviews</h3>
              <p>Books recommended by experts and fellow readers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books">
        <div className="container">
          <h2 className="section-title">Featured Books</h2>
          <div className="books-grid">
            {featuredBooks.map(book => (
              <div key={book.id} className="book-card">
                <div className="book-image-container">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="book-image"
                  />
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <div className="book-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(book.rating) ? "#fbbf24" : "#d1d5db"}
                        color={i < Math.floor(book.rating) ? "#fbbf24" : "#d1d5db"}
                      />
                    ))}
                    <span className="rating-text">({book.rating})</span>
                  </div>
                  <p className="book-price">${book.price}</p>
                  <Link to={`/books/${book.id}`} className="btn btn-primary w-full">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/books" className="btn btn-outline">
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="best-sellers">
        <div className="container">
          <h2 className="section-title">Best Sellers</h2>
          <div className="books-grid">
            {bestSellers.map(book => (
              <div key={book.id} className="book-card">
                <div className="book-image-container">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="book-image"
                  />
                  <div className="bestseller-badge">
                    <Award size={16} />
                    Best Seller
                  </div>
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <div className="book-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(book.rating) ? "#fbbf24" : "#d1d5db"}
                        color={i < Math.floor(book.rating) ? "#fbbf24" : "#d1d5db"}
                      />
                    ))}
                    <span className="rating-text">({book.rating})</span>
                  </div>
                  <p className="book-price">${book.price}</p>
                  <Link to={`/books/${book.id}`} className="btn btn-primary w-full">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Reading?</h2>
            <p>Join thousands of satisfied customers and discover your next favorite book today!</p>
            <div className="cta-actions">
              <Link to="/books" className="btn btn-primary">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
