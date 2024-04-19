import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tight text-zinc-400 text-[11rem] font-medium font-['ubuntu']">
        Notes
      </h1>
      <div className="absolute w-full text-center mt-10 text-xl text-zinc-500">
        NoteFiles
      </div>
      <div className="absolute bottom-14 w-full text-center mb-10 text-2xl font-semibold text-zinc-600">
        Drag Files & Play
      </div>
    </div>
  );
};

export default Background;
