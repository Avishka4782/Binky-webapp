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
        className="h-45 w-44 sm:h-50 sm:w-46 md:w-50 lg:h-52 lg:w-58 xl:h-75 xl:w-72 2xl:h-130 2xl:w-120"
      />
      <div
        className={`absolute inset-0 top-10 grid h-12 grid-rows-2 items-center justify-center gap-y-2 sm:top-12 md:top-12 lg:top-12 xl:top-21 xl:gap-y-12 2xl:top-36 2xl:gap-y-20`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="font-odor text-center text-[18px] md:text-[24px] xl:text-[36px] 2xl:text-[48px]">
          {text1}
        </div>
        <div className="font-odor text-center text-[18px] md:text-[24px] xl:text-[36px] 2xl:text-[48px]">
          {text2}
        </div>
      </div>
    </div>
  );
}

export default Board;
