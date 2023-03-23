import "./SelectedBook.css";
import { useLocation } from "react-router-dom";

const SelectedBook = () => {
  const selectedBook = useLocation().state.selectedBook[0];
  console.log(selectedBook);

  return (
    <section
      className="selected-book"
      style={{
        background: `linear-gradient(45deg, ${selectedBook.color} 55%, rgba(255,255,255,0.8) 100%)`,
      }}
    >
      <p className="selected-book__title">{selectedBook.title}</p>
      <p className="selected-book__author">{selectedBook.author}</p>
    </section>
  );
};

export default SelectedBook;
