import React from "react";

type BoardProps = {
  text1: string;
  text2: React.ReactNode;
  rotation?: number;
};

function Board({ text1, text2, rotation }: BoardProps) {
  return (
    <div className="relative">
      <img
        src="/board.webp"
        alt="Notice Board"
        className="h-[30vh] w-[36vw] sm:h-[28vh] sm:w-[26vw] md:h-[30vh] md:w-[25vw] lg:h-[36vh] lg:w-[22vw] xl:h-[46vh] xl:w-[20vw]"
      />
      <div
        className={`absolute inset-0 top-[6vh] grid h-[10vh] grid-rows-2 items-center justify-center gap-y-2 lg:top-[8vh] xl:top-[12vh] 2xl:gap-y-6`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="font-odor p-2 text-center text-[20px] xl:text-[36px]">{text1}</div>
        <div className="font-odor p-2 text-center text-[20px] xl:text-[36px]">{text2}</div>
      </div>
    </div>
  );
}

export default Board;
