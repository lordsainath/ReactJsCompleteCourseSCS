import { MdDeleteOutline } from "react-icons/md";



const Card = ({ data,handleDelete,index }) => {
  return (
    <div
      style={{ background: `${data.bgcolor}`,color:`${data.textcolor}` }}
      className={`w-60 h-72   px-5 py-4 rounded-lg`}
    >
      <div className="flex justify-between h-full flex-col">
        <div>
          <h1 className="text-2xl capitalize">{data.title}</h1>
          <p className="text-[1rem] text-zinc-800 capitalize">{data.content}</p>
        </div>
        <div className="flex justify-between items-center text-zinc-500">
          <p>{data.date}</p>
          <div className="">
           
            <span className="cursor-pointer" onClick={(e)=>handleDelete(e,index)}>
              <MdDeleteOutline />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
