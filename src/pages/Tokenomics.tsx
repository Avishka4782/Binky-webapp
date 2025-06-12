import Board from "../components/NoticeBoard/Board";

function Tokenomics() {
  return (
    <section className="bg-nav-blue relative flex h-[130vh] w-full flex-col overflow-hidden">
      <div
        className="absolute inset-0 z-10 bg-cover bg-[center_-180px] bg-no-repeat"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>

      <div className="font-snow relative mt-20">
        <p className="upper absolute top-12 left-73 text-center text-[120px]">tokenomics</p>
      </div>
      <div className="mt-48 h-30 overflow-hidden bg-white"></div>
      {/*board images */}
      <div className="absolute top-88 right-100 z-20">
        <Board text1={"Sell/Buy Tax"} text2={"O %"} rotation={-5} />
      </div>
      <div className="absolute right-20 bottom-13 z-20">
        <Board text1={"Liquidity"} text2={"Burned"} rotation={0} />
      </div>
      <div className="absolute bottom-18 left-98 z-20">
        <Board text1={"Total Supply"} text2={"4 M"} rotation={-5} />
      </div>
    </section>
  );
}

export default Tokenomics;
