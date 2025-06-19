function LogoBox() {
  return (
    <div className="relative h-74 w-80 flex-col content-center items-center justify-center rounded-[6px] bg-white md:w-170 lg:w-210 xl:h-100 xl:w-[90vw] 2xl:h-[477px]">
      <div className="absolute -right-2 -mt-11 xl:-right-4 xl:-mt-16 2xl:-mt-24">
        <img
          src="/snow.webp"
          alt="snow cloud img"
          className="w-32 md:w-[20vw] lg:w-[16vw] xl:w-[14vw]"
        />
      </div>

      <div className="grid h-60 grid-cols-1 grid-rows-4 gap-y-3 md:grid-cols-2 md:grid-rows-2 md:gap-x-1 md:gap-y-2 lg:gap-x-10 xl:h-80 2xl:h-85 2xl:gap-y-6">
        <div className="order-3 flex justify-center md:order-1 md:pt-2 xl:mr-20">
          <img src="/kucoin.webp" alt="Kucoin Logo" className="w-54 md:w-58 xl:w-66 2xl:w-120" />
        </div>
        <div className="order-4 flex justify-center md:order-2 md:pt-2 xl:ml-20">
          <img
            src="/hostinger.webp"
            alt="Hostinger Logo"
            className="w-54 md:w-58 xl:w-66 2xl:w-120"
          />
        </div>
        <div className="relative order-1 flex justify-center md:order-3 md:pt-2 xl:mr-20">
          <img src="/binance.png" alt="Binance Logo" className="w-54 md:w-58 xl:w-66 2xl:w-120" />
        </div>
        <div className="relative order-2 flex justify-center md:order-4 md:pt-2 xl:ml-20">
          <img
            src="/namecheap.png"
            alt="NameCheap Logo"
            className="w-54 md:w-58 xl:w-66 2xl:w-120"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoBox;
