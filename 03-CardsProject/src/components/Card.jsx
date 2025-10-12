const Card = ({cardData}) => {
  const {company_logo,company_name,post_time,position,tags,price,location} = cardData
  return (
    <>
      <div className="w-[300px] h-[320px] rounded-3xl bg-white px-5 py-5 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={company_logo}
                className="w-[60px] rounded-full border border-gray-500 p-2"
                alt=""
              />
            </div>
            <button className="flex items-center px-3 py-1 gap-2 border cursor-pointer border-gray-300  rounded-md">
              <span>Save</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-bookmark-icon lucide-bookmark"
              >
                <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-[20px]">
              {company_name} <span className="text-gray-500 text-sm">{post_time}</span>
            </h1>
            <p className="font-semibold text-[18px] text-nowrap">{position}</p>
            <div className="flex gap-2">
              {
                tags.map((item,index)=>{
                  return    <button key={index} className="text-black bg-[#f0f0f0] px-3 py-1 rounded-md text-sm font-semibold">
                {item}
              </button>
                })
              }
           
              
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t pt-3 border-t-gray-300 ">
          <div className="flex flex-col">
            <p className="font-semibold text-xl">{price}</p>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
          <button className="bg-black cursor-pointer text-white px-5 py-0.5 rounded-md">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
