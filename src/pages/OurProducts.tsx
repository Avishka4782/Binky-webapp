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
    <section className="relative h-full w-full overflow-hidden pb-615 sm:pb-660 md:pb-320 lg:pb-364 xl:pb-440 2xl:pb-584">
      <div className="absolute top-50 left-3 flex h-410 w-100 flex-col items-center justify-center sm:top-50 sm:left-30 md:top-0 md:left-0 md:h-380 md:w-188 lg:top-38 lg:w-256 xl:w-360 2xl:top-160 2xl:left-15 2xl:w-440">
        <div className="font-snow mb-8 w-full text-center text-[46px] uppercase lg:text-[60px] xl:text-[64px] 2xl:text-[96px]">
          our products
        </div>
        <ProductsTags products={productList} />
      </div>
      <div
        className="absolute inset-0 top-470 h-200 overflow-x-hidden bg-[length:180%] bg-[90%_20%] bg-no-repeat sm:top-500 sm:bg-[length:150%] sm:bg-[80%_0%] md:top-160 md:bg-[length:120%] md:bg-[40%_0%] lg:top-185 lg:bg-[length:110%] lg:bg-[40%_0%] xl:top-180 xl:h-260 xl:bg-[length:100%] 2xl:top-288 2xl:h-296"
        style={{
          backgroundImage: "url('/bg04.webp')",
        }}
      >
        <div className="absolute top-47 left-12 sm:top-32 md:top-39 md:left-58 lg:top-47 lg:left-78 xl:top-44 xl:left-110 2xl:top-92 2xl:left-160">
          <img
            src="/rabbit05.webp"
            alt="Rabbit Shadow"
            className="h-[164px] w-[153px] scale-x-[-1] sm:h-54 md:h-44 lg:h-54 lg:w-46 xl:h-86 xl:w-70 2xl:h-80"
          />
        </div>
        <div className="relative -bottom-10 ml-14 md:top-120 lg:top-142 lg:ml-4 xl:top-205 xl:ml-18 2xl:top-235">
          <FinalLabel />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default OurProducts;
