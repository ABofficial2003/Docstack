import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

const Cards = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      className="relative w-52 h-64 rounded-[20px] px-4 py-5 overflow-hidden bg-zinc-200/50"
    >
      <FaRegFileLines />
      <p className="tracking-tight text-sm leading-tight mt-3">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className=" flex justify-between items-center px-4 py-4">
          <h5>{data.fileSize}</h5>
          <span>
            {data.close ? (
              <IoMdCloseCircleOutline size="1.2em" />
            ) : (
              <MdDownloadForOffline size="1.2em" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-3 ${
              data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
