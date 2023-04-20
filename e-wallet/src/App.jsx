// sass
import "./App.scss";
// pages
import HomePage from "./pages/HomePage/HomePage";
import AddCard from "./pages/AddCard/AddCard";
// router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/AddCard",
      element: <AddCard />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
