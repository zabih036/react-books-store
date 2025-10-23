import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = ({ books, title = "Books" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', 'fiction', 'non-fiction', 'science', 'history', 'biography'];

  const filteredBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => 
      filterCategory === 'all' || book.category === filterCategory
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'author':
          return a.author.localeCompare(b.author);
        case 'title':
        default:
          return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className="books-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          
          <div className="filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
              />
            </div>
            
            <div className="filter-controls">
              <select 
                value={filterCategory} 
                onChange={(e) => setFilterCategory(e.target.value)}
                className="input"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="input"
              >
                <option value="title">Sort by Title</option>
                <option value="author">Sort by Author</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {filteredBooks.length === 0 ? (
          <div className="no-books">
            <p>No books found matching your criteria.</p>
          </div>
        ) : (
          <div className="books-grid">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
