import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "motion/react";

const Card = ({ item, foreref }) => {
  return (
    <motion.div
      drag
      whileDrag={{
        scale: 0.5,
        boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      }}
      dragConstraints={foreref}
      className="w-60 flex  shrink-0  flex-col gap-2 relative p-5 overflow-hidden h-72 bg-zinc-700 rounded-[30px]"
    >
      <div>
        <div>
          <FaRegFileAlt size="1.5rem" color="#fff" />
        </div>
        <div>
          <p className="text-white mt-4">{item.description}</p>
        </div>
      </div>

      <div className="absolute  w-full   bottom-0 left-0">
        <div className="flex justify-between w-full mb-4 px-3">
          <p className="text-zinc-300">{item.fileSize}</p>

          {item.isOpen ? (
            <span>
              <IoCloseSharp size="1.5rem" color="#fff" />
            </span>
          ) : (
            <span>
              <MdOutlineFileDownload size="1.5rem" color="#fff" />
            </span>
          )}
        </div>

        {item.isDownloadAvailable && (
          <div
            style={{ background: `${item.color}`, color: `${item.textColor}` }}
            className={` cursor-pointer w-full py-2`}
          >
            <h1 className="text-center text-white">{item.option}</h1>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
