import React from "react";

const TitleBar = () => {
  return (
    <div className="bg-zinc-100 h-[15vh] flex flex-col justify-center gap-2 items-center">
      <h1 className="text-4xl font-semibold">Image Gallery</h1>
      <p>Browse through our collection of beautiful images</p>
    </div>
  );
};

export default TitleBar;
