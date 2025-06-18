import Iconbar from "../Icons/Iconbar";

function FinalLabel() {
  return (
    <div className="flex h-6 flex-row items-center md:bottom-30 xl:bottom-0">
      <img src="/logo.webp" alt="Logo Img" className="hidden md:block md:h-14 xl:h-20" />
      <img
        src="/buynow.webp"
        alt="Buy Now Img"
        className="hidden md:ml-[20vw] md:block md:h-15 lg:ml-[24vw] lg:h-19 xl:h-28"
      />
      <div className="mt-[130vh] ml-[18vw] scale-150 sm:ml-[20vw] sm:scale-120 md:mt-[0vh] md:ml-[12vw] md:scale-70 lg:ml-[24vw] lg:scale-60 xl:mt-[4vh]">
        <Iconbar />
      </div>
    </div>
  );
}

export default FinalLabel;
