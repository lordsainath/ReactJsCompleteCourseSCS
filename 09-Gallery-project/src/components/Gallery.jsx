import React from "react";
import Photo from "./Photo";

const Gallery = ({ galleryData, setGalleryData,currentPage, setCurrentPage }) => {
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      setGalleryData([])
    }
  };
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    setGalleryData([])
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-screen  flex flex-wrap gap-5 justify-center py-5 ">
          {galleryData.map((item, index) => {
            return (
              <div key={index}>
                <Photo item={item} />
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-5 py-4 ">
          <button
            onClick={handlePrev}
            className={`${currentPage == 0 ? "cursor-not-allowed" : "cursor-pointer"} px-5 py-2  border border-zinc-200 rounded-md`}
          >
            Prev
          </button>
          Page : {currentPage + 1}
          <button
            onClick={handleNext}
            className="px-5 py-2 cursor-pointer border border-zinc-200 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
