import Board from "../components/NoticeBoard/Board";

function Tokenomics() {
  return (
    <section className="bg-nav-blue relative flex h-[100vh] w-full flex-col overflow-hidden">
      <div
        className="absolute inset-0 z-10 bg-cover bg-[center_-160px] bg-no-repeat"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>

      <div className="font-snow relative mt-20">
        <p className="upper absolute top-4 left-64 text-center text-[105px]">tokenomics</p>
      </div>
      <div className="mt-36 h-30 overflow-hidden bg-white"></div>
      {/*board images */}
      <div className="absolute top-69 right-92 z-20">
        <Board text1={"Sell/Buy Tax"} text2={"O %"} rotation={-5} />
      </div>
      <div className="absolute right-20 bottom-0 z-20">
        <Board text1={"Liquidity"} text2={"Burned"} rotation={0} />
      </div>
      <div className="absolute bottom-6 left-84 z-20">
        <Board text1={"Total Supply"} text2={"4 M"} rotation={-5} />
      </div>
    </section>
  );
}

export default Tokenomics;
