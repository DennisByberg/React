import "./BookPage.css";
import SelectedBook from "../../Components/SelectedBook/SelectedBook";
import SelectedBookInfo from "../../Components/SelectedBookInfo/SelectedBookInfo";

const BookPage = () => {
  return (
    <section className="book-page">
      <SelectedBook />
      <SelectedBookInfo />
    </section>
  );
};

export default BookPage;
