import FinalLabel from "../components/final/FinalLabel";
import Footer from "../components/Footer/Footer";
import ProductsTags from "../components/Products/ProductsTags";

const productList = [
  {
    imgSrc: "/productimg01.webp",
    description: "Carrot Wallet – A digital wallet for storing and managing Binky tokens",
  },
  {
    imgSrc: "/productimg02.webp",
    description: "Savings feature where users can “bury” their tokens to earn rewards",
  },
  {
    imgSrc: "/productimg03.webp",
    description: "Rewards bundle that users can earn by holding or staking Binky tokens",
  },
];

function OurProducts() {
  return (
    <section className="relative h-[434vh] w-full overflow-hidden md:h-[210vh] lg:h-[238vh]">
      <div className="absolute top-50 left-3 flex h-[1618px] w-[400px] flex-col items-center justify-center sm:top-50 sm:left-[20vw] md:top-0 md:left-0 md:h-[270vh] md:w-[100vw] lg:top-20">
        <div className="font-snow mb-8 w-full text-center text-[46px] uppercase lg:text-[60px] xl:text-[64px]">
          our products
        </div>
        <ProductsTags products={productList} />
      </div>
      <div
        className="absolute inset-0 top-[330vh] h-200 overflow-x-hidden bg-[length:180%] bg-[90%_20%] bg-no-repeat sm:bg-[length:150%] sm:bg-[80%_0%] md:top-[110vh] md:bg-[length:120%] md:bg-[40%_0%] lg:top-[120vh] lg:bg-[length:110%] lg:bg-[40%_0%] xl:top-[110vh] xl:h-260 xl:bg-[length:100%]"
        style={{
          backgroundImage: "url('/bg04.webp')",
        }}
      >
        <div className="absolute top-[33vh] left-[11vw] sm:top-[21vh] md:top-[28vh] md:left-[29vw] lg:top-[33vh] lg:left-[30vw] xl:top-[36vh]">
          <img
            src="/rabbit05.webp"
            alt="Rabbit Shadow"
            className="h-[164px] w-[153px] scale-x-[-1] sm:h-[40vh] md:h-[30vh] md:w-[20vw] lg:h-[38vh] lg:w-[21vw] xl:h-[42vh] xl:w-[21vw]"
          />
        </div>
        <div className="relative -bottom-10 ml-14 md:top-112 lg:top-132 lg:ml-4 xl:top-210 xl:ml-18">
          <FinalLabel />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default OurProducts;
