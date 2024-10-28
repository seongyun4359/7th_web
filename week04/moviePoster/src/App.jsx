import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import RootLayout from "./layout/RootLayout.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import CategoryPage from "./pages/Category.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import NowPlayingPage from "./pages/Movie/NowPlayingPage.jsx";
import PopularPage from "./pages/Movie/PopularPage.jsx";
import TopRatedPage from "./pages/Movie/TopRatedPage.jsx";
import UpcomingPage from "./pages/Movie/UpcomingPage.jsx"; 
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";  // 여기를 수정

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,  // 여기를 수정
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      { path: "category/now-playing", element: <NowPlayingPage /> },
      { path: "category/popular", element: <PopularPage /> },
      { path: "category/top-rated", element: <TopRatedPage /> },
      { path: "category/upcoming", element: <UpcomingPage /> },
      { errorElement: <h1>너는 없는 경로에 들어왔다 ^ㅁ^ 야호~!</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
