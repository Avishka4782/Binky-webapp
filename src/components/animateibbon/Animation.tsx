function Animation() {
  return (
    <div className="relative -ml-6 flex h-[40px] w-[110%] items-center overflow-hidden bg-amber-400 sm:h-12 md:h-16 xl:h-24">
      <div className="animate-loop-scroll absolute flex">
        {/* Repeat the content once for seamless looping */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center gap-4 px-8">
            <img src="/Star.webp" alt="" className="h-6" />
            <div className="font-odor text-[14px] md:text-[20px] xl:text-[36px]">Blinky</div>
            <img src="/Star.webp" alt="" className="h-6" />
            <div className="font-odor text-[14px] md:text-[20px] xl:text-[36px]">
              Blinky Hop into Fun and Adventure
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  {
    /*<div className="flex-row-2 -ml-6 flex h-[40px] w-[160%] items-center bg-amber-400 xl:-ml-5">
      <div className="animate-loop-scrol ml-3 flex w-[100%]">
        <div className="flex-row-4 flex gap-3 xl:gap-6">
          <img src="/Star.webp" alt="" className="h-6" />
          <div className="font-odor text-[14px] xl:text-[36px]">Blinky</div>
          <img src="/Star.webp" alt="" className="h-6" />
          <div className="font-odor text-[14px] xl:text-[36px]">
            Blinky Hop into Fun and Adventure
          </div>
        </div>
        <div className="flex-row-4 ml-3 flex gap-3">
          <img src="/Star.webp" alt="" className="h-6" />
          <div className="font-odor text-[14px] xl:text-[36px]">Blinky</div>
          <img src="/Star.webp" alt="" className="h-6" />
          <div className="font-odor hidden text-[12px] xl:text-[36px]">
            Blinky Hop into Fun and Adventure
          </div>
        </div>
      </div>
    </div>*/
  }
}

export default Animation;
