import "./Book.css";
import childrenBooks from "../../childrenBooks.json";
import { useNavigate } from "react-router-dom";

const Book = ({ title, author, color }) => {
  const navigate = useNavigate();

  function handleBookClick() {
    const selectedBook = childrenBooks.filter((book) => {
      if (book.title === title) return book;
    });

    navigate("/BookPage", { state: { selectedBook } });
  }

  return (
    <li
      onClick={() => handleBookClick(title)}
      className="book"
      style={{
        background: `linear-gradient(45deg, ${color} 55%, rgba(255,255,255,0.8) 100%)`,
      }}
    >
      <p className="book__title">{title}</p>
      <p className="book__author">{author}</p>
    </li>
  );
};

export default Book;
