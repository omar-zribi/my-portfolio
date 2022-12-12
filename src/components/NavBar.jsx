import React from "react";

const NavBar = () => {
  return (
    <div className="bg-black flex fixed w-[100%]">
      <span className="block ml-6 mt-2 mr-2 mb-2 w-8 capitalize italic text-center">
      <a className="text-green-400 text-3xl font-bold " href="/">
        <h1>Omar</h1>
        <h1>Zribi</h1>
        </a></span>
      <ul className="flex text-white w-3/4 justify-around ml-40 text-4xl m-6">
        <li>
          <a className=" hover:text-green-400" href="/">Home</a>
        </li>
        <li>
          <a className=" hover:text-green-400" href="/aboutme">About me</a>
        </li>
        <li>
          <a className=" hover:text-green-400" href="/contact">Contact</a>
        </li>
        
      </ul>
    </div>
  );
};

export default NavBar;
