import { NotesData } from "../data/NotesData";
import { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const foreref  = useRef(null)
  const [notesdata] = useState(NotesData);
  return (
    <div ref={foreref} className="w-full  h-screen flex gap-5 flex-wrap p-5   fixed z-[3] top-0 left-0">
    {
        notesdata.map((item,index)=>{
             return <Card foreref={foreref} key={index}  item={item} />
        })
    }
    </div>
  );
};

export default Foreground;
