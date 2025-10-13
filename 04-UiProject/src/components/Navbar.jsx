import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-white bg-black px-5 py-1 uppercase rounded-full">Target Audience</p>
      </div>
      <div className="flex gap-3">
        <button className="px-3 py-1 bg-zinc-100 cursor-pointer rounded-md">Digital</button>
        <button className="px-3 py-1 bg-zinc-100 cursor-pointer rounded-md">Banking</button>
        <button className="px-3 py-1 bg-zinc-100 cursor-pointer rounded-md">Platform</button>
      </div>
    </div>
  );
};

export default Navbar;
