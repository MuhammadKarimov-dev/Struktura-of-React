// src/routes.ts
import Home from "./pages/HomePage/Home";
import IncorrectPage from "./view/incorrectPage/incorrectPage";


export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*", // Noto'g'ri sahifa uchun
    element: <IncorrectPage />,
  },
  

];