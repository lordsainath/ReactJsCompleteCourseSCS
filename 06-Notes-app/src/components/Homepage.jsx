import { useState } from "react";
import AddNote from "./AddNote";
import Cards from "./Cards";
import { textColors, bgColors } from "../data/Colors";

const Homepage = () => {
  const [formInfo, setFormInfo] = useState({
    title: "",
    content: "",
    bgcolor: "#fff59d",
    textcolor: "000000",
    date:"",
  });

  const [formData, setFormData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    formInfo.date = new Date().toISOString().split('T')[0];
    setFormData([...formData, formInfo]);
    setFormInfo({
      title: "",
      content: "",
      bgcolor: "#fff59d",
      textcolor: "000000",
      date:"",
    });
  };

  const handleDelete = (e, deleteindex) => {
    
    setFormData(formData.filter((item,index)=>index !== deleteindex))
    
  };

  return (
    <>
      <div className="w-screen h-screen px-10 py-5">
        <div className="flex flex-col w-full items-center gap-4">
          <h1 className="text-5xl bgtext font-semibold">
            Creative Sticky Notes
          </h1>
          <p className="text-lg text-zinc-800">
            Express your ideas with colorful notes
          </p>
        </div>

        <div className="flex w-full mt-8 ">
          <AddNote
            bgColors={bgColors}
            textColors={textColors}
            formInfo={formInfo}
            setFormInfo={setFormInfo}
            handleSubmit={handleSubmit}
            setFormData={setFormData}
          />
          <Cards handleDelete={handleDelete} formData={formData} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
