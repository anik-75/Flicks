import "./App.css";
import Main from "./components/Main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoviePage from "./components/MoviePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/:id",
      element: <MoviePage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
