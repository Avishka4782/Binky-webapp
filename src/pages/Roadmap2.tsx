function Roadmap2() {
  return (
    <section className="relative h-160 w-full overflow-visible sm:h-190 md:h-150 lg:h-160 xl:h-240 2xl:h-330">
      {/* Colored background block */}
      <div className="bg-nav-blue absolute inset-0 -top-19 z-0 h-70 sm:h-85 md:-top-20 xl:h-130 2xl:h-150" />

      {/* Background image layer on top */}
      <div
        className="absolute inset-0 -top-30 z-10 scale-x-[-1] overflow-visible bg-[length:200%] bg-[80%_0%] bg-no-repeat sm:bg-[length:130%] sm:bg-[80%_20%] md:scale-x-[1] md:bg-[length:140%] md:bg-[50%_80%] lg:bg-[length:110%] lg:bg-[40%_10%] xl:bg-[length:110%] xl:bg-[40%_0%]"
        style={{
          backgroundImage: "url('/bg03.webp')",
        }}
      ></div>
      {/* Repeated background on mobile view */}
      <div
        className="absolute inset-0 top-40 z-10 overflow-visible bg-[length:160%] bg-[0%_120%] bg-no-repeat sm:bg-[length:140%] sm:bg-[30%_10%] md:hidden"
        style={{
          backgroundImage: "url('/bg03.webp')",
        }}
      ></div>
      <div className="relative z-10 grid h-full w-full grid-rows-2 opacity-50 md:flex md:flex-row">
        <div className="-mt-20 h-100 w-auto md:-mt-15 md:h-200">
          <img src="/snow.gif" alt="First GIF" className="w-full md:h-180 xl:h-240 2xl:h-300" />
        </div>
        <div className="mt-10 w-auto md:-mt-15">
          <img src="/snow.gif" alt="Second GIF" className="w-full md:h-180 xl:h-240 2xl:h-300" />
        </div>
      </div>
      <div className="relative z-15 flex">
        <img
          src="/rabbit03.webp"
          alt="Rabbit Image"
          className="absolute right-8 bottom-30 w-42 sm:right-8 sm:bottom-36 sm:w-56 md:right-14 md:bottom-26 md:w-58 lg:right-40 lg:bottom-22 lg:w-68 xl:right-56 xl:bottom-44 xl:h-100 xl:w-80 2xl:right-78 2xl:bottom-44 2xl:h-150 2xl:w-130"
        />
        <img
          src="/Union.webp"
          alt="Union Image"
          className="absolute bottom-82 left-16 h-20 w-80 sm:bottom-100 sm:left-28 sm:h-28 sm:w-100 md:bottom-90 md:left-36 md:h-28 md:w-100 lg:bottom-100 lg:left-68 xl:bottom-160 xl:left-84 xl:h-40 xl:w-150 2xl:bottom-200 2xl:left-130 2xl:h-46 2xl:w-156"
        />
        <div className="font-skrap absolute bottom-87 left-20 z-20 text-[24px] sm:bottom-108 sm:left-36 sm:z-20 sm:text-[28px] md:bottom-98 md:left-40 lg:bottom-108 lg:left-78 xl:bottom-172 xl:left-[28vw] xl:text-[40px] 2xl:bottom-213 2xl:left-139 2xl:text-[48px]">
          0x71297312753EA7A2570a5a3278eD
        </div>
      </div>
      <div className="relative z-30 flex">
        <img
          src="/buynow.gif"
          alt="Buy Now Gif"
          className="absolute hidden md:-top-40 md:left-28 md:block md:w-40 lg:-top-42 lg:left-16 lg:w-44 xl:-top-56 xl:left-32 xl:w-52 2xl:-top-88 2xl:left-53 2xl:w-84"
        />
      </div>

      {/*image as a divider*/}
      <div className="absolute -bottom-2 -left-6 z-25 flex overflow-hidden sm:-left-8 md:-left-3 lg:-bottom-4 lg:-left-7 xl:-left-12">
        {/* For mobile (2 images) */}
        <div className="flex w-full md:hidden">
          {[...Array(2)].map((_, idx) => (
            <img
              key={idx}
              src="/fence.webp"
              alt={`Fence img mobile ${idx + 1}`}
              className={`h-30 w-65 max-w-none sm:h-40 sm:w-92 ${idx === 0 ? "-mr-4 sm:-mr-6" : "-ml-4 sm:-ml-4"}`}
            />
          ))}
        </div>

        {/* For md and up (3 images) */}
        <div className="hidden w-full md:flex">
          {[...Array(3)].map((_, idx) => (
            <img
              key={idx}
              src="/fence.webp"
              alt={`Fence img desktop ${idx + 1}`}
              className={`max-w-none md:h-40 md:w-80 lg:h-44 lg:w-98 xl:h-58 xl:w-146 2xl:h-[358px] 2xl:w-220 ${idx === 0 ? "md:-mr-4 lg:-mr-6 xl:-mr-16 2xl:-mr-24" : "md:-ml-4"} ${idx === 1 ? "md:-mr-4 lg:-mr-6 xl:-mr-16 2xl:-mr-24" : "md:-ml-4"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap2;
