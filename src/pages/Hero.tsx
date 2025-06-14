import Navbar from "../components/navbar/Navbar";

function Hero() {
  return (
    <section className="relative flex h-[110vh] w-[100vw] max-w-[100%] flex-col lg:h-[120vh]">
      <div
        className="absolute inset-0 bg-cover bg-[calc(-39vw)_top] bg-no-repeat sm:bg-cover sm:bg-center"
        style={{ backgroundImage: "url('/bg01.webp')" }}
      >
        {" "}
        {/* */}
        <div className="w-auto">
          <img
            src="/snow.gif"
            alt="Second GIF"
            className="h-[816px] w-[414px] opacity-50 sm:h-[100vw] sm:w-full"
          />
        </div>
      </div>

      <div className="relative z-40 md:top-[4vh] md:left-[5vw] lg:left-[2vw]">
        <Navbar />
      </div>
      {/* Mobile-only position (not inside flex) */}
      <div className="absolute top-[89vh] left-[10vw] animate-pulse sm:hidden">
        <img src="/buynow.webp" alt="Buy Now" className="h-[90px] w-[140px]" />
      </div>

      <div className="font-snow hover:animate-wiggle absolute top-[24vh] left-[6vw] h-[89.24px] translate-y-[-50%] text-[99.32px] text-black sm:top-[34vh] sm:left-[24vw] sm:h-[20vh] sm:text-[18vh] lg:top-[48vh] lg:left-[37vw] lg:h-[22vh]">
        <span className="">BINKY</span>
      </div>
      <div className="absolute top-[55vh] left-[50vw] flex w-max flex-col justify-between text-black sm:top-[57vh] sm:left-[32vw] sm:flex-row lg:top-[74vh] lg:left-[36vw] xl:left-[36vw]">
        <div className="font-odorr h-[20vh] w-[40vw] text-center font-bold sm:h-[4vh] sm:w-[26vw] sm:text-[18px] sm:font-normal xl:h-[20vh] xl:w-[26vw] xl:text-[28px]">
          <p>Hop into a world of rewards, innovation, and community-driven growth.</p>
        </div>
        <div className="hidden animate-pulse sm:ml-4 sm:block lg:-ml-2">
          <img
            src="/buynow.webp"
            alt="Buy Now"
            className="h-[160.83px] w-[248px] sm:h-[17vh] sm:w-[18vh] lg:h-[17vh] lg:w-[22vh] xl:h-[18vh] xl:w-[24vh]"
          />
        </div>
      </div>

      <div className="absolute top-[66vh] left-[4vw] z-20 w-[22vw] sm:top-[66vh] sm:left-[6vw] sm:w-[15vw] lg:top-[62vh] lg:left-[7vw] lg:w-[13vw] xl:top-[62vh] xl:left-[9vw] xl:w-[12vw]">
        <img src="/snowman.webp" alt="SnowMan" />
      </div>
      <div className="absolute top-[70vh] left-[51vw] z-20 w-[50vw] sm:top-[54vh] sm:left-[66vw] sm:w-[32vw] lg:top-[40vh] lg:left-[70vw] lg:w-[30vw] xl:top-[36vh] xl:left-[70vw] xl:w-[28vw]">
        <img src="/snowrabbit.webp" alt="SnowRabbit" />
      </div>
      {/*image as a divider*/}
      <div className="absolute top-[105vh] left-[-18vw] z-15 overflow-hidden sm:top-[100vh] sm:left-[-20vw] md:top-[96vh] lg:top-[90vh] lg:left-[-16vw] xl:top-[92vh]">
        <img
          src="/cloud.png"
          alt="Cloud Divider"
          className="w-[150vw] max-w-none scale-x-[-1] sm:w-[155vw] md:w-[152vw] lg:w-[140vw] xl:w-[120vw]"
        />
      </div>
    </section>
  );
}

export default Hero;
