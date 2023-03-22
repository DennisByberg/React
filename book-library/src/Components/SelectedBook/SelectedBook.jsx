import "./SelectedBook.css";
import { useLocation } from "react-router-dom";

const SelectedBook = () => {
  const navigatedBook = useLocation();
  const selectedBook = navigatedBook.state.selectedBook[0];
  console.log(selectedBook);

  return <section></section>;
};

export default SelectedBook;
