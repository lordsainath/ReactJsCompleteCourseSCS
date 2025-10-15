import { CirclePicker } from "react-color";
import { GiDrippingStar } from "react-icons/gi";

const AddNote = ({
  formInfo,
  handleSubmit,
  setFormInfo,
  textColors,
  bgColors,
}) => {
  return (
    <div className="w-[40%]">
      <div>
        {/* Title */}
        <div className="flex items-center gap-2">
          <span className="text-[#995eef]">
            <GiDrippingStar size="2rem" />
          </span>
          <p className="text-2xl text-[#995eef] font-semibold">
            Create New Note
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-5">
          <input
            value={formInfo.title}
            onChange={(e) =>
              setFormInfo({ ...formInfo, title: e.target.value })
            }
            type="text"
            className="bg-white px-5 py-2 outline-none rounded-md w-[80%]"
            placeholder="Enter Note Title"
            required
            id=""
          />
          <textarea
            value={formInfo.content}
            onChange={(e) =>
              setFormInfo({ ...formInfo, content: e.target.value })
            }
            rows="5"
            className="bg-white px-5 py-2 rows-5 resize-none outline-none rounded-md  w-[80%]"
            placeholder="Enter Note Content"
            required
          ></textarea>

          <label htmlFor="bgnotes">Background Color </label>

          <CirclePicker
            colors={bgColors}
            color={formInfo.bgcolor}
            onChange={(e) => setFormInfo({ ...formInfo, bgcolor: e.hex })}
          />

          <label htmlFor="textcolor">Title Color</label>

          <CirclePicker
            colors={textColors}
            color={formInfo.textcolor}
            onChange={(e) => setFormInfo({ ...formInfo, textcolor: e.hex })}
          />

          <div className="grid grid-cols-4 gap-5 w-[80%]">
            <button
              type="submit"
              className="col-span-3 py-2 bgbtn text-white rounded-lg cursor-pointer"
            >
              Create Note
            </button>
            <button
              onClick={() =>
                setFormInfo({
                  title: "",
                  content: "",
                  bgcolor: "#fff59d",
                  textcolor: "000000",
                })
              }
              type="button"
              className="bg-white py-2 col-span-1 border border-[#995eef] w-full text-[#995eef] cursor-pointer px-5  rounded-lg"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
