import Iconbar from "../Icons/Iconbar";
import Animation from "../animateibbon/Animation";

function Ribbon() {
  return (
    <>
      {/*top Ribbon*/}
      <div className="absolute -top-10 left-0 z-0 w-[150vw] md:top-10 lg:top-4 xl:top-1">
        <img
          src="/rectangle03.webp"
          alt="Rectangle 03"
          className="-rotae-[9deg] h-[120vh] md:h-[130vh] lg:h-[140vh]"
        />
      </div>

      <div className="absolute top-12 z-20 w-full rotate-[13deg] sm:top-13 sm:rotate-[9deg] md:top-24 xl:top-34 xl:rotate-[6.7deg]">
        <Animation />
      </div>

      {/*Bottm Ribbon */}
      <div className="relative top-136 z-30 sm:top-136 md:top-160 xl:top-234">
        {/* Rotated wrapper relative to rectangle */}
        <div className="absolute inset-0">
          <div className="lg:rtate-[-1deg] absolute inset-0 -rotate-[12deg] sm:rotate-[-8deg] xl:rotate-[-8.7deg]">
            <Animation />
          </div>
        </div>
      </div>
      <div className="absolute top-17 -right-56 z-40 md:top-8 md:-right-64 xl:-top-5 xl:-right-100">
        <img
          src="/rabbit04.webp"
          alt="Rabbit 04"
          className="h-[88vh] w-auto md:h-[110vh] xl:h-[120vh]"
        />
      </div>
      <div className="relative -top-16 ml-6 h-auto w-[57vw] sm:ml-20 sm:w-[42vw] md:top-56 md:w-[60vw] lg:w-[56vw] xl:top-84 xl:left-30 xl:w-[48vw]">
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
