import Board from "../components/NoticeBoard/Board";

function Tokenomics() {
  return (
    <section className="bg-nav-blue relative flex h-[120vh] w-full flex-col overflow-hidden">
      <div
        className="absolute inset-0 z-10 bg-cover bg-[center_-180px] bg-no-repeat"
        style={{ backgroundImage: "url('/bg02.webp')" }}
      ></div>

      <div className="font-snow relative mt-28">
        <p className="upper mr-13 mb-0 text-center text-[120px]">tokenomics</p>
      </div>
      <div className="-mt-8 h-30 overflow-hidden bg-white"></div>
      {/*board images */}
      <div className="absolute top-84 right-100 z-20">
        <Board text1={"Sell/Buy Tax"} text2={"O %"} rotation={-5} />
      </div>
      <div className="absolute right-30 bottom-0 z-20">
        <Board text1={"Liquidity"} text2={"Burned"} rotation={0} />
      </div>
      <div className="absolute bottom-10 left-100 z-20">
        <Board text1={"Total Supply"} text2={"4 M"} rotation={-5} />
      </div>
    </section>
  );
}

export default Tokenomics;
