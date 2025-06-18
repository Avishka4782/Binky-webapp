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
    <section className="bg-bg_gray relative z-20 h-[110vh] w-full sm:h-[130vh] md:h-[150vh] lg:h-[170vh]">
      <div className="relative">
        <img
          src="/snow02.webp"
          alt="Background Img"
          className="h-[104vh] opacity-60 sm:h-[110vh] md:h-[120vh] lg:h-[154vh]"
        />
      </div>
      <div className="absolute inset-0">
        {/* Content goes here*/}

        <div className="font-snow mt-15 mb-9 text-center text-4xl md:text-5xl lg:mt-18 lg:text-[52px] xl:mt-26 xl:text-[78px]">
          Gallery
        </div>
        <div className="relative -left-[90px] grid w-[180vw] items-center p-2 md:-left-[100px] md:w-[120vw] lg:-left-[136px] xl:-left-[12vw]">
          <Photoframes photos={photoSet1} />
        </div>
        <div className="relative right-[90px] mt-[3vh] grid w-[180vw] items-center p-2 md:right-[50px] md:w-[120vw] lg:right-[32px] lg:mt-[5vh] xl:right-[3vw]">
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
