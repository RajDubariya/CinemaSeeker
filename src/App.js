import "./App.css";
import "swiper/css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PopularMovies from "./components/PopularMovies";
import UpcomingMovies from "./components/UpcomingMovies";
import TopRated from "./components/TopRated";
import MovieDetails from "./components/MovieDetails";
import TvShowsDetails from "./components/TvShowsDetails";
import Search from "./components/Search";
import MoviesByGenres from "./components/MoviesByGenres";
import TvShowsByGenres from "./components/TvShowsByGenres";
import Cast from "./components/Cast";

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
        <Route path="/search/:query" element={<Search />} />
        <Route path="/movieGenre/:genreId" element={<MoviesByGenres />} />
        <Route path="/tvGenre/:genreId" element={<TvShowsByGenres />} />
        <Route path="/cast" element={<Cast />} />
      </Routes>
    </>
  );
}

export default App;
