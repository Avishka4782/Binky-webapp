import Board from "../components/NoticeBoard/Board";

function Tokenomics() {
  return (
    <section className="relative flex h-full w-full flex-col overflow-hidden pb-120 sm:pb-140 md:pb-112 xl:pb-169 2xl:pb-246">
      <div
        className="absolute inset-0 z-10 h-full max-w-[100%] bg-cover bg-[50%_-150px] bg-no-repeat sm:bg-[60%_-160px] md:h-200 md:bg-[50%_-170px] lg:bg-[20%_-140px] xl:h-280 xl:bg-[25%_-190px] 2xl:h-414 2xl:bg-[35%_-270px]"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>
      {/*repeated bg*/}
      <div
        className="absolute inset-0 top-30 z-20 h-full bg-cover bg-[50%_-80px] bg-no-repeat sm:top-[30vh] sm:bg-cover sm:bg-[60%_-40px] md:hidden"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>
      <div className="font-snow relative z-10 mt-20 lg:z-0">
        <p className="absolute -top-10 left-20 text-center text-[40px] uppercase sm:top-0 sm:left-30 sm:text-5xl md:left-40 md:text-6xl lg:top-10 lg:left-76 xl:top-18 xl:text-[104px] 2xl:top-40 2xl:text-[153px]">
          tokenomics
        </p>
      </div>

      <div className="bg-nav-blue -mt-20 h-31 overflow-hidden sm:h-38 md:h-46 lg:h-45 xl:h-63 2xl:h-98"></div>

      {/*board images */}
      <div className="absolute top-64 right-50 z-20 sm:top-80 sm:right-88 md:top-58 md:right-50 lg:top-52 lg:right-66 xl:top-104 xl:right-82 2xl:top-132 2xl:right-100">
        <Board text1={"Sell/Buy Tax"} text2={"O %"} rotation={-8} />
      </div>
      <div className="absolute top-36 right-14 z-15 sm:top-60 sm:right-24 md:top-104 md:right-16 lg:top-100 lg:right-22 xl:top-158 xl:right-20 2xl:top-230 2xl:right-8">
        <Board text1={"Liquidity"} text2={"Burned"} rotation={0} />
      </div>
      <div className="absolute bottom-10 left-54 z-20 sm:top-110 sm:left-110 md:top-82 md:left-20 lg:top-72 lg:left-48 xl:top-144 xl:left-80 2xl:top-210 2xl:left-82">
        <Board text1={"Total Supply"} text2={"4 M"} rotation={-8} />
      </div>
    </section>
  );
}

export default Tokenomics;
