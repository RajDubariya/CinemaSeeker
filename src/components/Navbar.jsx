import React, { useState, useEffect } from "react";
import { GiFilmProjector } from "react-icons/gi";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <div className=" w-screen h-[10vh] bg-[rgb(0,0,0,0.15)] border-b border-b-gray-100/20 flex justify-between items-center p-5">
        <Link to={"/"}>
          <div className=" flex items-center text-xl text-white">
            <GiFilmProjector size={40} />
            <p>CinemaSeeker</p>
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className=" flex items-center capitalize text-white">
            <li className=" p-3 hover:text-gray-300">
              <Link to="/">home</Link>
            </li>
            <li className=" p-3 hover:text-gray-300">
              <Link to="/toprated">top rated</Link>
            </li>
            <li className=" p-3 hover:text-gray-300">
              <Link to="/popular">popular</Link>
            </li>
            <li className=" p-3 hover:text-gray-300">
              <Link to="/upcoming">upcoming</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden text-white">
          <button className="p-2 text-xl" onClick={handleMenu}>
            <RiMenu4Line size={25} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 text-white text-lg text-center capitalize bg-gray-400/10">
          <ul>
            <li className=" py-1">
              <Link to="/">home</Link>
            </li>
            <li className=" py-1">
              <Link to="/toprated">top rated</Link>
            </li>
            <li className=" py-1">
              <Link to="/popular">popular</Link>
            </li>
            <li className=" py-1">
              <Link to="/upcoming">upcoming</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
