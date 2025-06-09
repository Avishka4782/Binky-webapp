import Navbar from "../components/navbar/Navbar";

function Hero() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/bg01.webp')" }}
    >
      <div className="z-50">
        <Navbar />
      </div>

      <div className="font-snow hover:animate-wiggle absolute top-2/5 left-5/12 h-max w-max text-9xl text-black">
        <span className="">BINKY</span>
      </div>

      <div className="absolute top-2/3 left-5/12 flex w-max flex-row justify-between text-black">
        <div className="font-odorr -ml-4 w-65 p-1 text-center">
          <p>Hop into a world of rewards, innovation, and community-driven growth.</p>
        </div>
        <div className="ml-4 animate-pulse">
          <img src="/buynow.webp" alt="Buy Now" className="h-[95px] w-max" />
        </div>
      </div>

      <div className="absolute top-105 left-42 z-20 w-39.5">
        <img src="/snowman.webp" alt="SnowMan" />
      </div>

      <div className="absolute top-70 left-9/12 z-20 h-100 w-80">
        <img src="/snowrabbit.webp" alt="SnowMan" className="h-100" />
      </div>

      {/*image as a divider*/}
      <div className="absolute bottom-[-160px] left-1/2 z-15 -translate-x-1/2 overflow-hidden">
        <img
          src="/cloud.png"
          alt="Cloud Divider"
          className="pointer-events-none h-70 w-[126vw] max-w-none scale-x-[-1]"
        />
      </div>
    </section>
  );
}

export default Hero;
