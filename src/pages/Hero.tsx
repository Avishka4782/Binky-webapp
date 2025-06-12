import Navbar from "../components/navbar/Navbar";

function Hero() {
  return (
    <section className="relative flex h-[816px] w-full flex-col sm:h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-[calc(-210px)_top] bg-no-repeat sm:bg-[center_-180px]"
        style={{ backgroundImage: "url('/bg01.webp')" }}
      >
        <div className="w-auto sm:w-auto">
          <img
            src="/snow.gif"
            alt="Second GIF"
            className="h-[816px] w-[414px] sm:h-[100vw] sm:w-full"
          />
        </div>
      </div>

      <div className="z-50">
        <Navbar />
      </div>
      {/* Mobile-only position (not inside flex) */}
      <div className="absolute top-[656px] left-[35px] animate-pulse sm:hidden">
        <img src="/buynow.webp" alt="Buy Now" className="h-[111.88px] w-[173px]" />
      </div>
      <div className="font-snow hover:animate-wiggle absolute top-[211px] left-[17px] h-[89.24px] w-[381px] text-[99.32px] text-black sm:top-2/5 sm:left-5/12 sm:h-max sm:w-max sm:text-9xl">
        <span className="">BINKY</span>
      </div>
      <div className="absolute top-[415px] left-[241px] flex w-max flex-col justify-between text-black sm:top-2/3 sm:left-5/12 sm:flex-row">
        <div className="font-odorr ml-2 h-[120px] w-[157px] p-1 text-center sm:-ml-4 sm:w-65">
          <p>Hop into a world of rewards, innovation, and community-driven growth.</p>
        </div>
        <div className="hidden animate-pulse sm:ml-4 sm:block">
          <img src="/buynow.webp" alt="Buy Now" className="h-[95px] w-max" />
        </div>
      </div>

      <div className="absolute top-[506px] left-[17px] z-20 h-[149px] w-[102.24px] sm:top-76 sm:left-36 sm:h-48 sm:w-40">
        <img src="/snowman.webp" alt="SnowMan" />
      </div>
      <div className="absolute top-[534px] left-[173px] z-20 h-[293.8px] w-[241px] sm:top-46 sm:left-9/12 sm:h-96 sm:w-80">
        <img src="/snowrabbit.webp" alt="SnowMan" />
      </div>
      {/*image as a divider*/}
      <div className="absolute top-[792px] left-[-89px] z-15 overflow-hidden sm:top-[492px] sm:left-172 sm:-translate-x-1/2">
        <img
          src="/cloud.png"
          alt="Cloud Divider"
          className="pointer-events-none h-[144.54px] w-[752px] max-w-none scale-x-[-1] sm:h-70 sm:w-[126vw]"
        />
      </div>
    </section>
  );
}

export default Hero;
