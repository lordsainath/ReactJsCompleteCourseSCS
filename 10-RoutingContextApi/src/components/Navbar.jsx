import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, handleTheme] = useContext(Theme);

  return (
    <div className="flex justify-between items-center shadow-lg px-5 py-4">
      <div>
        <p className="text-xl font-bold">lOGO</p>
      </div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleTheme}
          className="px-5 py-1 bg-white border active:scale-[1.1] hover:bg-zinc-100 border-black rounded-md cursor-pointer"
        >
          {theme ? "dark" : "light"}
        </button>
        <button className="px-5 py-1 bg-black border text-white active:scale-[1.1] hover:bg-white hover:text-black border-black  rounded-md cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
