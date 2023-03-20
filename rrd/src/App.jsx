import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Error404 from "./views/Error404";
import Product from "./views/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Home />,
      errorElement: <Error404 />,
    },
    {
      path: `/om`,
      element: <About />,
      errorElement: <Error404 />,
    },
    {
      path: `/product/:title`, // valfri title
      element: <Product />,
      errorElement: <Error404 />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
