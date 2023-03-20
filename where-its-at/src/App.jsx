import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Buypage from "./Pages/Buypage/Buypage";
import ConfirmationPage from "./Pages/ConfirmationPage/ConfirmationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      // errorElement:
    },
    {
      path: "/ticket/:ticket",
      element: <Buypage />,
      // errorElement:
    },
    {
      path: "/confirmation/:ticket",
      element: <ConfirmationPage />,
      // errorElement:
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
