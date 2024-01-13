import { createBrowserRouter } from "react-router-dom";
import Opening from "~/pages/opening";
import Dubbing from "~/pages/browse/dubbing";
import OriginalLanguage from "~/pages/browse/original-audio";
import Subtitles from "~/pages/browse/subtitle";
import Home from "~/pages/home";
import Latest from "~/pages/latest";
import Movies from "~/pages/movies";
import MyList from "~/pages/my-list";
import NotFound from "~/pages/not-found";
import TvShows from "~/pages/tv-shows";

export const routes = createBrowserRouter([
  {
    index: "/",
    element: <Home />,
  },
  {
    path: "/tv-shows",
    element: <TvShows />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/latest",
    element: <Latest />,
  },
  {
    path: "/my-list",
    element: <MyList />,
  },
  {
    path: "/original-audio",
    element: <OriginalLanguage />,
  },
  {
    path: "/audio",
    element: <Dubbing />,
  },
  {
    path: "/subtitles",
    element: <Subtitles />,
  },
  {
    path: "/opening",
    element: <Opening />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
