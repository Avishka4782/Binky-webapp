import Navbar from "../components/navbar/Navbar";

function Hero() {
  return (
    <section className="relative flex h-full w-full max-w-[100%] flex-col pb-164 sm:pb-164 md:pb-160 lg:pb-175 xl:pb-190 2xl:pb-250">
      <div
        className="absolute inset-0 bg-cover bg-[calc(-39vw)_top] bg-no-repeat sm:bg-cover sm:bg-center lg:bg-[calc(-6vw)_top] xl:bg-[calc(0vw)_top]"
        style={{ backgroundImage: "url('/bg01.webp')" }}
      >
        {/* */}
        <div className="w-auto">
          <img src="/snow.gif" alt="Second GIF" className="h-160 w-full opacity-50 sm:h-full" />
        </div>
      </div>

      <div className="relative z-40 md:top-6 md:left-10 lg:left-5 xl:left-8 2xl:top-12">
        <Navbar />
      </div>
      {/* Mobile-only position (not inside flex) */}
      <div className="absolute top-138 left-12 animate-pulse sm:hidden">
        <img src="/buynow.webp" alt="Buy Now" className="h-[90px] w-[140px]" />
      </div>

      <div className="font-snow hover:animate-wiggle absolute top-52 left-8 w-full text-[99.32px] text-black sm:top-50 sm:left-30 md:top-50 md:left-50 lg:top-70 lg:left-90 lg:text-[130x] xl:top-60 xl:left-120 xl:text-[160px] 2xl:top-100 2xl:left-180 2xl:text-[200px]">
        BINKY
      </div>
      <div className="absolute top-92 left-58 flex w-max flex-col justify-between text-black sm:top-100 sm:left-45 sm:flex-row md:top-90 md:left-60 lg:top-116 lg:left-96 xl:top-130 xl:left-130 2xl:top-190 2xl:left-180">
        <div className="font-odorr h-30 w-40 text-center font-bold sm:h-[4vh] sm:w-42 sm:text-[18px] sm:font-normal lg:w-60 xl:w-100 xl:text-[28px] 2xl:w-110 2xl:text-[28px]">
          <p>Hop into a world of rewards, innovation, and community-driven growth.</p>
        </div>
        <div className="hidden animate-pulse sm:ml-4 sm:block lg:ml-4">
          <img
            src="/buynow.webp"
            alt="Buy Now"
            className="h-[160.83px] w-[248px] sm:h-24 sm:w-26 md:h-26 md:w-34 lg:h-26 lg:w-34 xl:h-32 xl:w-46 2xl:h-42 2xl:w-58"
          />
        </div>
      </div>

      <div className="absolute top-103 left-6 z-20 w-24 sm:top-105 sm:left-9 sm:w-24 md:w-30 lg:top-104 lg:left-16 lg:w-36 xl:top-120 xl:left-38 xl:w-40 2xl:top-160 2xl:left-44 2xl:w-55">
        <img src="/snowman.webp" alt="SnowMan" />
      </div>
      <div className="absolute top-114 left-54 z-20 w-52 sm:top-96 sm:left-100 sm:w-60 md:top-70 md:left-120 md:w-75 lg:top-68 lg:left-174 lg:w-85 xl:top-60 xl:left-260 xl:w-110 2xl:top-100 2xl:left-350 2xl:w-130">
        <img src="/snowrabbit.webp" alt="SnowRabbit" />
      </div>
      {/*image as a divider*/}
      <div className="absolute top-165 -left-18 z-15 overflow-hidden sm:top-154 sm:-left-30 md:top-150 md:-left-40 lg:top-156 xl:top-166 xl:-left-60 2xl:top-226 2xl:-left-70">
        <img
          src="/cloud.png"
          alt="Cloud Divider"
          className="w-170 max-w-none scale-x-[-1] sm:w-240 md:w-320 lg:w-350 xl:w-450 2xl:w-570"
        />
      </div>
    </section>
  );
}

export default Hero;
