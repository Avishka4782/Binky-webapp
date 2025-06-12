function LogoBox() {
  return (
    <div className="h-70 w-3/4 grid-cols-2 grid-rows-2 flex-col content-center items-center justify-center bg-white">
      <div className="absolute right-46 -mt-14">
        <img src="/snow.webp" alt="" className="w-40" />
      </div>

      <div className="grid h-50 grid-cols-2 grid-rows-2 gap-x-1">
        <div className="p-30 pt-2 text-center">
          <img src="/kucoin.webp" alt="Kucoin Logo" />
        </div>
        <div className="p-30 pt-2 text-center">
          <img src="/hostinger.webp" alt="Hostinger Logo" />
        </div>
        <div className="relative p-30 pt-10 text-center">
          <img src="/binance.png" alt="Binance Logo" />
        </div>
        <div className="relative p-30 pt-10 text-center">
          <img src="/namecheap.png" alt="NameCheap Logo" />
        </div>
      </div>
    </div>
  );
}

export default LogoBox;
