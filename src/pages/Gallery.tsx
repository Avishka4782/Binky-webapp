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
    <section className="bg-bg_gray relative h-[280vh] w-full">
      <div className="relative">
        <img src="/snow02.webp" alt="Background Img" className="h-[170vh] opacity-60" />
      </div>
      <div className="absolute inset-0">
        {/* Content goes here*/}

        <div className="font-snow mt-20 mb-10 text-center text-6xl">Gallery</div>
        <div className="relative -left-[180px] grid w-[120%] items-center p-4">
          <Photoframes photos={photoSet1} />
        </div>
        <div className="relative right-[40px] mt-10 grid w-[120%] items-center p-4">
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
