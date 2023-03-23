import "./BooksPage.css";
import booksArray from "../../childrenBooks.json";
import { useState } from "react";
import Book from "../../Components/Book/Book";

const BooksPage = () => {
  const [books, setBooks] = useState(booksArray);
  const amountOfBooks = books.length;

  const booksComponents = books.map((book) => {
    return (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        color={book.color}
      />
    );
  });

  return (
    <section className="books-page">
      <h1 className="books-page__title">
        {amountOfBooks} Classic Children Books
      </h1>
      <ul className="books-page__books-ul-list">{booksComponents}</ul>
    </section>
  );
};

export default BooksPage;
