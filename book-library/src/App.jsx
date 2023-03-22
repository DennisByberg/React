import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BooksPage from "./Pages/BooksPage/BooksPage";
import BookPage from "./Pages/BookPage/BookPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BooksPage />,
    },
    {
      path: "/bookPage",
      element: <BookPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
