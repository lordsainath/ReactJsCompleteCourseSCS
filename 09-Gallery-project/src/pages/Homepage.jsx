import React, { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import Gallery from "../components/Gallery";
import axios from "axios";
import Loading from "../components/Loading";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [galleryData, setGalleryData] = useState([]);

  const getProduct = () => {
    axios
      .get(`https://picsum.photos/v2/list?page=${currentPage}&limit=10`)
      .then((data) => setGalleryData(data.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getProduct();
  }, [currentPage]);

  return (
    <>
      <div className="w-full h-full">
        <TitleBar />

        {galleryData.length > 0 ? (
          <Gallery
            galleryData={galleryData}
            setGalleryData={setGalleryData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Homepage;
