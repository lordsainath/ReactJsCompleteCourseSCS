import { GiDrippingStar } from "react-icons/gi";
import Card from "./Card";
import { useRef } from "react";

const Cards = ({ formData, handleDelete }) => {
  const cardlimit = useRef(null);
  return (
    <div className="w-[60%] h-full  overflow-y-auto px-5">
      <div className="flex justify-between  sticky bg-[#f4f4f5] top-0 left-0 items-center">
        <div className="flex items-center gap-2">
          <span className="text-[#995eef]">
            <GiDrippingStar size="2rem" />
          </span>
          <p className="text-2xl text-[#995eef] font-semibold">Your Notes</p>
        </div>
        <div>
          <button className="bg-white border border-[#995eef] px-5 py-2 rounded-lg">
            Total Notes <span>{formData.length}</span>
          </button>
        </div>
      </div>

      <div className="" ref={cardlimit}>
        <div className="flex justify-center mt-4 py-5 bg-white rounded-md h-[75vh] gap-2 overflow-y-auto  flex-wrap">
          {formData.length > 0 ? (
            formData.map((item, index) => (
              <Card
                cardlimit={cardlimit}
                index={index}
                handleDelete={handleDelete}
                data={item}
                key={index}
              />
            ))
          ) : (
            <div className="w-full h-full flex gap-4 justify-center flex-col items-center">
              <div className="w-[70px] h-[70px] rounded-full bg-[#995eef]/20 flex items-center justify-center">
                <div className="w-[40px] h-[40px] rounded-full bg-[#995eef]"></div>
              </div>

              <div className="text-center">
                <p>No Notes yet</p>
                <p className="text-zinc-600">
                  Create your first note using the form
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
