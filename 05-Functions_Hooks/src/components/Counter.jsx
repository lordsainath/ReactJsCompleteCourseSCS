import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter <= 0) {
      alert("cannot go below zero");
    } else {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };

  useEffect(()=>{
    console.log("component render")
  })

  return (
    <>
      <div className="bg-[#f6db79] w-[100vw] h-[100vh]  flex justify-center items-center">
        <div className="sm:w-[40%] md:w-[50%] w-[300px] h-fit bg-[#f8e5a0] rounded-lg shadow-2xl p-10 flex justify-between flex-col text-center">
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-[#362f78] text-4xl font-bold">Counter App</h1>
            <p>A beautiful counter with intuitive controls</p>
          </div>
          <div className="flex items-center flex-col gap-5 mt-5">
            <div className="w-[200px] h-[200px] flex items-center justify-center text-7xl rounded-full bg-[#fcf0c5] text-[#5145cd] border ">
              {counter}
            </div>
            <div className="flex gap-2  text-[#5850ec]">
              <button
                onClick={decrement}
                className="w-[60px] h-[60px] flex items-center justify-center bg-[#fcf0c5] rounded-full border  cursor-pointer "
              >
                <FaMinus />
              </button>
              <button
                onClick={reset}
                className="text-lg md:text-xl bg-[#fcf0c5] border border-[#f5cd3d] px-10 py-2 rounded-md cursor-pointer"
              >
                Reset
              </button>
              <button
                onClick={increment}
                className="w-[60px] h-[60px] flex items-center justify-center  bg-[#fcf0c5]  rounded-full border   cursor-pointer "
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <p className="mt-4">Click the buttons to change the counter value</p>
        </div>
      </div>
    </>
  );
};

export default Counter;
