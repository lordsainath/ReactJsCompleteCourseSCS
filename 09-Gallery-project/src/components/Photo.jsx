import React from "react";

const Photo = ({ item }) => {
  return (
    <div className="w-80 h-72 bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="h-[80%]">
        <img src={item.download_url} className="w-full h-full" alt="" />
      </div>
      <div className=" flex justify-between items-center h-[20%] px-5">
        <p>{item.author}</p>

        <a
          href={item.url}
          target="_blank"
          className="border border-zinc-200 px-3 py-1 rounded-md"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default Photo;
