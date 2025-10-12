import React from "react";
import Card from "../components/Card";
import { jobOpening } from "../data/JobOpening";

const Homepage = () => {
  console.log(jobOpening)
  return (
    <div className="bg-[#f0f0f0] w-[100vw]   flex flex-wrap gap-5 justify-center p-10 items-center">
      {jobOpening.map((item,index)=>{
        return <Card key={index} cardData={item}/>
      })}
      
    </div>
  );
};

export default Homepage;
