function LogoBox() {
  return (
    <div className="h-[50vh] w-[74vw] flex-col content-center items-center justify-center rounded-[6px] bg-white md:w-[80vw] xl:w-[90vw]">
      <div className="absolute right-[11vw] -mt-[8vh] md:right-[8.5vw] lg:right-[9vw] lg:-mt-[9vh] xl:right-[4vw]">
        <img src="/snow.webp" alt="" className="w-[30vw] md:w-[20vw] lg:w-[16vw] xl:w-[14vw]" />
      </div>

      <div className="grid h-[38vh] grid-cols-1 grid-rows-4 gap-y-[2vh] md:grid-cols-2 md:grid-rows-2 md:gap-x-1 md:gap-y-[1vh]">
        <div className="order-3 flex justify-center md:order-1 md:pt-2">
          <img src="/kucoin.webp" alt="Kucoin Logo" className="w-[50vw] md:w-[32vw]" />
        </div>
        <div className="order-4 flex justify-center md:order-2 md:pt-2">
          <img src="/hostinger.webp" alt="Hostinger Logo" className="w-[50vw] md:w-[32vw]" />
        </div>
        <div className="relative order-1 flex justify-center md:order-3 md:pt-2">
          <img src="/binance.png" alt="Binance Logo" className="w-[50vw] md:w-[32vw]" />
        </div>
        <div className="relative order-2 flex justify-center md:order-4 md:pt-2">
          <img src="/namecheap.png" alt="NameCheap Logo" className="w-[50vw] md:w-[32vw]" />
        </div>
      </div>
    </div>
  );
}

export default LogoBox;
