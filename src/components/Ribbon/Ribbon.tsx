import Iconbar from "../Icons/Iconbar";
import Animation from "../animateibbon/Animation";

function Ribbon() {
  return (
    <>
      {/*top Ribbon*/}
      <div className="absolute -top-4 left-0 z-0 w-full md:top-6 lg:top-4 xl:top-0">
        <img
          src="/rectangle03.webp"
          alt="Rectangle 03"
          className="h-180 sm:h-160 md:h-184 lg:h-196 xl:h-264 2xl:h-360"
        />
      </div>

      <div className="absolute top-20 z-20 w-full rotate-[20deg] sm:top-22 sm:rotate-[13deg] md:top-24 lg:rotate-[10deg] xl:top-28 xl:rotate-[6.7deg] 2xl:top-42 2xl:rotate-[9deg]">
        <Animation />
      </div>

      {/*Bottm Ribbon */}
      <div className="relative top-144 z-30 sm:top-132 md:top-160 xl:top-214 2xl:top-282">
        {/* Rotated wrapper relative to rectangle */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 -rotate-[19deg] sm:rotate-[-12deg] lg:rotate-[-8deg] xl:rotate-[-8.7deg]">
            <Animation />
          </div>
        </div>
      </div>
      <div className="absolute top-24 -right-48 z-40 sm:top-30 sm:-right-36 md:top-12 md:-right-64 xl:-top-0 xl:-right-88 2xl:top-24 2xl:-right-106">
        <img
          src="/rabbit04.webp"
          alt="Rabbit 04"
          className="h-110 w-auto sm:h-100 md:h-140 xl:h-200 2xl:h-248"
        />
      </div>
      <div className="relative -top-10 ml-6 h-auto w-60 sm:ml-20 sm:w-[42vw] md:top-60 md:w-[60vw] lg:w-[56vw] xl:top-84 xl:left-30 xl:w-200 2xl:top-100 2xl:w-260">
        <div className="flex flex-col">
          <div className="font-snow hidden text-center uppercase md:mb-1 md:block md:text-[42px] lg:text-[48px] xl:mb-4 xl:text-[64px] 2xl:mb-4 2xl:text-[96px]">
            join community
          </div>
          <div className="font-odor mt-50 text-center text-[32px] font-bold sm:mt-55 md:mt-16 md:text-[22px] lg:mt-8 lg:text-[28px] xl:text-[34px] 2xl:mt-24 2xl:text-[48px]">
            Become a part of the Binky family
          </div>
          <div className="font-odor mb-10 text-center text-[20px] md:mt-4 md:mb-16 md:text-[16px] lg:mb-12 lg:text-[20px] xl:text-[28px] 2xl:text-[36px]">
            Connect with fellow enthusiasts, stay updated on the latest developments, and share your
            thoughts directly with the team.
          </div>
          <div className="flex justify-center">
            <Iconbar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ribbon;
