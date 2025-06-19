import Iconbar from "../Icons/Iconbar";

function FinalLabel() {
  return (
    <div className="flex h-6 flex-row items-center">
      <img src="/logo.webp" alt="Logo Img" className="hidden md:block md:h-14 xl:h-22 2xl:h-32" />
      <img
        src="/buynow.webp"
        alt="Buy Now Img"
        className="hidden md:ml-40 md:block md:h-20 lg:ml-64 lg:h-20 xl:ml-84 xl:h-28 2xl:ml-116 2xl:h-38"
      />
      <div className="absolute top-100 ml-20 scale-150 sm:top-116 sm:ml-32 sm:scale-140 md:relative md:top-0 md:ml-20 md:scale-80 lg:ml-50 lg:scale-70 xl:ml-70 xl:scale-90 2xl:-mt-20 2xl:ml-90 2xl:scale-70">
        <Iconbar />
      </div>
    </div>
  );
}

export default FinalLabel;
