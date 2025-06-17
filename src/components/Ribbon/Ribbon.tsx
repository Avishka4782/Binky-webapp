import Iconbar from "../Icons/Iconbar";

function Ribbon() {
  return (
    <>
      {/*top Ribbon*/}
      <div className="absolute -top-10 left-0 z-0 w-[150vw] md:top-10 lg:top-4">
        <img
          src="/rectangle03.webp"
          alt="Rectangle 03"
          className="-rotae-[9deg] h-[120vh] md:h-[130vh] lg:h-[140vh]"
        />
      </div>
      <img
        src="/rectangle02.webp"
        alt="Rectangle Img"
        className="relative -top-4 z-20 h-[24vh] w-full sm:h-[30vh] md:top-10 lg:h-[40vh]"
      />
      <div className="absolute -top-3 z-20 h-10 w-full -rotate-[2deg] sm:top-1 sm:-rotate-[0.5deg] md:top-14 lg:top-16 xl:top-12 xl:-rotate-[1.5deg]">
        <img
          src="/Blinky01.webp"
          alt="Blinky Ribbon 1"
          className="h-[25vh] w-auto lg:h-[30vh] xl:h-[36vh]"
        />
      </div>

      {/*Bottm Ribbon */}
      <div className="relative -bottom-94 sm:top-80 md:top-110 lg:top-96 xl:top-120">
        <img
          src="/rectangle04.webp"
          alt="Rectangle Img"
          className="h-[24vh] w-full sm:h-[30vh] lg:h-[40vh]"
        />
        <div className="absolute -top-1.5 w-full rotate-[2deg] sm:top-2 sm:rotate-[0deg] lg:top-4 lg:rotate-[-1deg] xl:top-2 xl:rotate-[0.5deg]">
          <img
            src="/Binky02.webp"
            alt="Blinky Ribbon 2"
            className="h-[25vh] w-full lg:h-[30vh] xl:h-[36vh]"
          />
        </div>
      </div>
      <div className="absolute top-17 -right-56 z-40 md:top-8 md:-right-64 xl:-top-5 xl:-right-100">
        <img
          src="/rabbit04.webp"
          alt="Rabbit 04"
          className="h-[88vh] w-auto md:h-[110vh] xl:h-[120vh]"
        />
      </div>
      <div className="relative -top-86 left-6 h-auto w-[57vw] sm:-top-96 sm:left-16 sm:w-[42vw] md:-top-30 md:left-16 md:w-[60vw] lg:-top-44 lg:w-[56vw] xl:-top-60 xl:left-30 xl:w-[48vw]">
        <div className="flex flex-col">
          <div className="font-snow hidden text-center uppercase md:mb-1 md:block md:text-[42px] lg:text-[52px] xl:mb-4 xl:text-[64px]">
            join community
          </div>
          <div className="font-odor mt-50 text-center text-[32px] font-bold md:mt-16 md:text-[22px] lg:mt-8 lg:text-[28px] xl:text-[34px]">
            Become a part of the Binky family
          </div>
          <div className="font-odor mb-10 text-center text-[20px] md:mt-4 md:mb-16 md:text-[16px] lg:mb-12 lg:text-[20px] xl:text-[28px]">
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
