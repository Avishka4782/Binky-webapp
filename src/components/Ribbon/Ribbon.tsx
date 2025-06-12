import Iconbar from "../Icons/Iconbar";

function Ribbon() {
  return (
    <>
      {/*top Ribbon*/}
      <img src="/rectangle02.webp" alt="Rectangle Img" className="w-full" />
      <div className="absolute top-8 w-full">
        <img src="/Blinky01.webp" alt="Blinky Ribbon 1" />
      </div>
      <div className="absolute top-10 -left-1 h-1/2">
        <img
          src="/rectangle03.webp"
          alt="Rectangle 03"
          className="h-[1000px] w-[120vw] -rotate-[0.5deg]"
        />
      </div>
      {/*Bottm Ribbon */}
      <div className="relative -bottom-104">
        <img src="/rectangle04.webp" alt="Rectangle Img" className="w-full" />
        <div className="absolute top-4 w-full">
          <img src="/Binky02.webp" alt="Blinky Ribbon 2" />
        </div>
      </div>
      <div className="absolute -top-6 -right-80">
        <img src="/rabbit04.webp" alt="Rabbit 04" className="h-220 w-180" />
      </div>
      <div className="relative -top-86 left-30 h-auto w-216">
        <div className="flex flex-col">
          <div className="font-snow mb-10 text-center text-[80px] uppercase">join community</div>
          <div className="font-odor mb-4 text-center text-[39px] font-bold">
            Become a part of the Binky family
          </div>
          <div className="font-odor mb-15 text-center text-3xl">
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
