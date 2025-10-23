import React from 'react';
import BookList from '../components/BookList';
import { books } from '../data/books';

const Books = () => {
  return (
    <div className="books-page">
      <div className="page-header">
        <div className="container">
          <h1>All Books</h1>
          <p>Discover our complete collection of books</p>
        </div>
      </div>
      
      <BookList books={books} title="All Books" />
    </div>
  );
};

export default Books;
