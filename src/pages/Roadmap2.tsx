function Roadmap2() {
  return (
    <section className="relative h-screen w-full overflow-visible">
      {/* Colored background block */}
      <div className="bg-nav-blue absolute inset-0 -top-19 z-0 h-85" />

      {/* Background image layer on top */}
      <div
        className="absolute inset-0 -top-10 z-10 overflow-visible bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg03.webp')",
          backgroundSize: "110% 105%",
        }}
      >
        {/* Content goes here */}
      </div>
      <div className="relative z-10 flex h-3/4 w-full flex-row">
        <div className="mt-10 w-1/2">
          <img src="/snow.gif" alt="First GIF" className="w-full" />
        </div>
        <div className="mt-10 w-1/2">
          <img src="/snow.gif" alt="Second GIF" className="w-full object-contain" />
        </div>
      </div>
      <div className="relative z-15 flex">
        <img
          src="/rabbit03.webp"
          alt="Rabbit Image"
          className="absolute right-67 -bottom-22 h-88 w-75"
        />
        <img src="/Union.webp" alt="Union Image" className="absolute left-90 -mt-82 h-25 w-110" />
        <div className="font-skrap absolute -top-74 left-99 z-20 text-3xl">
          0x71297312753EA7A2570a5a3278eD
        </div>
      </div>
      <div className="relative z-30 flex">
        <img src="/buynow.gif" alt="Buy Now Gif" className="absolute -top-2 left-25 w-50" />
      </div>

      {/*image as a divider*/}
      <div className="absolute left-222 z-25 flex w-[120vw] -translate-x-1/2 overflow-hidden">
        {[...Array(3)].map((_, idx) => (
          <img
            key={idx}
            src="/fence.webp"
            alt={`Fence img ${idx + 1}`}
            className="pointer-events-none -ml-14 h-[200px] w-1/3 max-w-none"
          />
        ))}
      </div>
    </section>
  );
}

export default Roadmap2;
