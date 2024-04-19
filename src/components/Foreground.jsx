import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing edit Impedit, in.",
      fileSize: "1.3mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa iste provident, animi officiis aliquam.",
      fileSize: "0.8mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "",
      },
    },
    {
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quas molestiae voluptatem.",
      fileSize: "1.7mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-[3] flex gap-8 flex-wrap p-6"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
