import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PopularMovies from "./components/PopularMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRated from "./components/TopRated";
import MovieDetails from "./components/MovieDetails";
import TvShowsDetails from "./components/TvShowsDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/popular" element={<PopularMovies />} />
        <Route path="/upcoming" element={<UpcomingMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvShowsDetails />} />
      </Routes>
    </>
  );
}

export default App;
