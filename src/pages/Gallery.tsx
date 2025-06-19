import Photoframes from "../components/photoframes/Photoframes";
import Ribbon from "../components/Ribbon/Ribbon";

const photoSet1 = [
  { src: "/fImg01.webp", alt: "Logo 1" },
  { src: "/fImg02.webp", alt: "Logo 2" },
  { src: "/fImg03.webp", alt: "Logo 3" },
  { src: "/fImg04.webp", alt: "Logo 4" },
];

const photoSet2 = [
  { src: "/fImg05.webp", alt: "Logo 5" },
  { src: "/fImg06.webp", alt: "Logo 6" },
  { src: "/fImg07.webp", alt: "Logo 7" },
  { src: "/fImg05.webp", alt: "Logo 8" },
];
function Gallery() {
  return (
    <section className="bg-bg_gray relative z-20 h-full w-full bg-cover pb-178 sm:pb-194 md:pb-200 lg:pb-240 xl:pb-290 2xl:pb-456">
      <div
        className="absolute inset-0 overflow-hidden bg-cover opacity-60"
        style={{
          backgroundImage: "url('/snow02.webp')",
        }}
      ></div>

      <div className="absolute inset-0">
        {/* Content goes here*/}

        <div className="font-snow mt-15 mb-9 text-center text-4xl md:text-5xl lg:mt-18 lg:text-[48px] xl:mt-26 xl:text-[64px] 2xl:text-[96px]">
          Gallery
        </div>
        <div className="relative -left-[90px] grid w-200 items-center p-2 sm:w-230 md:-left-[100px] md:w-236 lg:-left-[136px] lg:w-320 xl:-left-36 xl:w-420 2xl:-left-70 2xl:w-600">
          <Photoframes photos={photoSet1} />
        </div>
        <div className="relative right-23 mt-5 grid w-200 items-center p-2 sm:w-230 md:right-[50px] md:w-236 lg:right-18 lg:mt-[5vh] lg:w-320 xl:-right-8 xl:w-420 2xl:right-36 2xl:w-600">
          <Photoframes photos={photoSet2} />
        </div>
        <div className="relative">
          <Ribbon />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
