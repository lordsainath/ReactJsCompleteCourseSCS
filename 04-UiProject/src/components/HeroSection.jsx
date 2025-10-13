

const HeroSection = () => {
  return (
    <>
      <div className="flex w-[100%] h-full items-center gap-[30px] justify-center ">
        <div className="w-[30%]  rounded-4xl h-[80%] flex flex-col justify-between pt-20 pb-5 px-5">
          <div className="">
            <p className="text-bold text-5xl">
              Prospective customer segmentation
            </p>
            <p className="leading-none mt-5">
              Depending on customer satisfaction andaccess to banking products,
              potential target audience can be divided into three groups.
            </p>
          </div>
          <div>
            <img src="/arrow.svg" className="w-[30%]" alt="" />
          </div>
        </div>

        <div className="w-[70%] h-full flex items-center  gap-[20px] overflow-x-scroll scroll-smooth">
          {/* first card */}
          <div
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2023/04/03/04/48/woman-7895953_1280.jpg",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
            className="w-80 shrink-0 rounded-4xl h-[80%] overflow-hidden"
          >
            <div className="bg-black/40 text-white w-full h-full px-10 py-10 flex justify-between flex-col">
              <div className="bg-white text-black p-5 w-[20px] h-[20px] font-bold text-xl flex items-center justify-center rounded-full">
                1
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xl ">
                    {" "}
                    Prime customers that have access to bank credit and are
                    satisfied with the current product
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="bg-[#4a62d8] px-8 py-2 rounded-full">
                    Satisfied
                  </button>
                  <span className="inline-block rounded-full bg-[#4a62d8] p-2">
                    <img src="/arrow-right.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1661761351842-df28bda187a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-80  shrink-0 rounded-4xl  h-[80%] overflow-hidden"
          >
            <div className="bg-black/40 text-white w-full h-full px-10 py-10 flex justify-between flex-col ">
              <div className="bg-white text-black p-5 w-[20px] h-[20px] font-bold text-xl flex items-center justify-center rounded-full">
                2
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xl ">
                    {" "}
                    Prime customers that have access to bank credit and are not
                    satisfied with the current service
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="bg-[#4a62d8] px-5 py-2 rounded-full">
                    Underserved
                  </button>
                  <span className="inline-block rounded-full bg-[#4a62d8] p-2">
                    <img src="/arrow-right.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1661759245158-9b90e7400dae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-80 shrink-0 rounded-4xl h-[80%] overflow-hidden"
          >
            <div className="bg-black/40 text-white w-full h-full px-10 py-10 flex justify-between flex-col">
              <div className="bg-white text-black p-5 w-[20px] h-[20px] font-bold text-xl flex items-center justify-center rounded-full">
                3
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xl ">
                    Customers from near-prime and sub-prime segments with no
                    access to bank credit
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="bg-[#4a62d8] px-8 py-2 rounded-full">
                    Satisfied
                  </button>
                  <span className="inline-block rounded-full bg-[#4a62d8] p-2">
                    <img src="/arrow-right.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>

            {/* first card */}
          <div
            style={{
              backgroundImage:
                "url(https://cdn.pixabay.com/photo/2023/04/03/04/48/woman-7895953_1280.jpg",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
            className="w-80 shrink-0 rounded-4xl h-[80%] overflow-hidden"
          >
            <div className="bg-black/40 text-white w-full h-full px-10 py-10 flex justify-between flex-col">
              <div className="bg-white text-black p-5 w-[20px] h-[20px] font-bold text-xl flex items-center justify-center rounded-full">
                1
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xl ">
                    {" "}
                    Prime customers that have access to bank credit and are
                    satisfied with the current product
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="bg-[#4a62d8] px-8 py-2 rounded-full">
                    Satisfied
                  </button>
                  <span className="inline-block rounded-full bg-[#4a62d8] p-2">
                    <img src="/arrow-right.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1661761351842-df28bda187a3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-80  shrink-0 rounded-4xl  h-[80%] overflow-hidden"
          >
            <div className="bg-black/40 text-white w-full h-full px-10 py-10 flex justify-between flex-col ">
              <div className="bg-white text-black p-5 w-[20px] h-[20px] font-bold text-xl flex items-center justify-center rounded-full">
                2
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xl ">
                    {" "}
                    Prime customers that have access to bank credit and are not
                    satisfied with the current service
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="bg-[#4a62d8] px-5 py-2 rounded-full">
                    Underserved
                  </button>
                  <span className="inline-block rounded-full bg-[#4a62d8] p-2">
                    <img src="/arrow-right.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1661759245158-9b90e7400dae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-80 shrink-0 rounded-4xl h-[80%] overflow-hidden"
          >
            <div className="bg-black/40 text-white w-full h-full px-10 py-10 flex justify-between flex-col">
              <div className="bg-white text-black p-5 w-[20px] h-[20px] font-bold text-xl flex items-center justify-center rounded-full">
                3
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xl ">
                    Customers from near-prime and sub-prime segments with no
                    access to bank credit
                  </p>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="bg-[#4a62d8] px-8 py-2 rounded-full">
                    Satisfied
                  </button>
                  <span className="inline-block rounded-full bg-[#4a62d8] p-2">
                    <img src="/arrow-right.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  );
};

export default HeroSection;
