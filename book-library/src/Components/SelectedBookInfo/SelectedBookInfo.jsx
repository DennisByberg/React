import "./SelectedBookInfo.css";
import { useLocation, useNavigate } from "react-router-dom";

const SelectedBookInfo = () => {
  const selectedBook = useLocation().state.selectedBook[0];
  console.log(selectedBook);

  const navigate = useNavigate();

  function navigateHome() {
    navigate("/");
  }

  return (
    <section className="selected-book-info">
      <div className="selected-book-info__title-author-and-container">
        <h1 className="selected-book-info__title">{selectedBook.title}</h1>
        <h2 className="selected-book-info__author">{selectedBook.author}</h2>
      </div>
      <div>
        <p>{selectedBook.plot}</p>
      </div>
      <div className="selected-book-info__numbers-info">
        <div className="selected-book-info__numbers-info-container-1">
          <p>
            <span className="bold">Audience: </span>
            {selectedBook.audience}
          </p>
          <p>
            <span className="bold">Pages:</span> {selectedBook.pages}
          </p>
        </div>
        <div className="selected-book-info__numbers-info-container-2">
          <p>
            <span className="bold">First published:</span> {selectedBook.year}
          </p>
          <p>
            <span className="bold">Publisher:</span> {selectedBook.publisher}
          </p>
        </div>
      </div>
      <img
        onClick={navigateHome}
        src="https://cdn-icons-png.flaticon.com/512/8979/8979605.png"
      />
    </section>
  );
};

export default SelectedBookInfo;
