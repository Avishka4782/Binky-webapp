import React from "react";

type BoardProps = {
  text1: string;
  text2: React.ReactNode;
  rotation?: number;
};

function Board({ text1, text2, rotation }: BoardProps) {
  return (
    <div className="relative">
      <img src="/board.webp" alt="Notice Board" className="h-p0 w-80" />
      <div
        className={`absolute inset-0 top-22 grid h-20 grid-rows-2 items-center justify-center gap-x-2`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="font-odor p-2 text-center text-[28px]">{text1}</div>
        <div className="font-odor p-2 text-center text-[28px]">{text2}</div>
      </div>
    </div>
  );
}

export default Board;
