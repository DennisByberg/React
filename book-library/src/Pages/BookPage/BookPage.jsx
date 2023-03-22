import "./BookPage.css";
import SelectedBook from "../../Components/SelectedBook/SelectedBook";

const BookPage = () => {
  // const selectedBookData = {
  //   id: selectedBook.id,
  //   title: selectedBook.title,
  //   author: selectedBook.author,
  //   audience: selectedBook.audience,
  //   color: selectedBook.color,
  //   pages: selectedBook.pages,
  //   plot: selectedBook.plot,
  //   publisher: selectedBook.publisher,
  //   year: selectedBook.year,
  // };

  return (
    <section className="book-page">
      <SelectedBook />
    </section>
  );
};

export default BookPage;
