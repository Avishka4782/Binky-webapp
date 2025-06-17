import Board from "../components/NoticeBoard/Board";

function Tokenomics() {
  return (
    <section className="relative flex h-[130vh] w-full flex-col overflow-hidden sm:h-[100vh] md:h-[110vh] lg:h-[120vh] xl:h-[130vh]">
      <div
        className="absolute inset-0 z-10 bg-[length:180%] bg-[50%_-33%] bg-no-repeat sm:bg-[length:110%] sm:bg-[50%_-80%] md:bg-[length:150%] md:bg-[30%_130%] lg:bg-[length:120%] lg:bg-[20%_140%] xl:bg-[length:104%] xl:bg-[20%_120%]"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>
      {/*repeated bg*/}
      <div
        className="absolute inset-0 top-[15vh] z-20 bg-[length:200%] bg-[50%_0%] bg-no-repeat sm:top-[30vh] sm:bg-[length:115%] sm:bg-[50%_40%] md:hidden"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>
      <div className="font-snow relative mt-20">
        <p className="upper absolute -top-[4vh] left-[20vw] text-center text-4xl sm:text-5xl md:-top-[3vh] md:text-6xl lg:left-[30vw] xl:top-[12vh] xl:left-[20vw] xl:text-[104px]">
          tokenomics
        </p>
      </div>

      <div className="bg-nav-blue -md:mt-200 -mt-20 h-40 overflow-hidden md:h-30 xl:h-67"></div>
      <div className="hidden h-10 overflow-hidden bg-yellow-300"></div>

      {/*board images */}
      <div className="absolute top-72 right-56 z-20 sm:top-66 sm:right-90 md:top-52 md:right-60 lg:top-52 lg:right-66 xl:top-108 xl:right-100">
        <Board text1={"Sell/Buy Tax"} text2={"O %"} rotation={-8} />
      </div>
      <div className="absolute top-46 right-14 z-15 sm:top-44 sm:right-28 md:top-100 md:right-26 lg:top-100 lg:right-22 xl:top-170 xl:right-20">
        <Board text1={"Liquidity"} text2={"Burned"} rotation={0} />
      </div>
      <div className="absolute bottom-44 left-58 z-20 sm:top-100 sm:left-100 md:top-72 md:left-20 lg:top-72 lg:left-48 xl:top-154 xl:left-90">
        <Board text1={"Total Supply"} text2={"4 M"} rotation={-8} />
      </div>
    </section>
  );
}

export default Tokenomics;
