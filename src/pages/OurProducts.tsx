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
    <section className="relative h-[260vh] w-full overflow-hidden">
      <div className="absolute top-40 left-1/2 mt-10 flex w-370 -translate-x-1/2 flex-col items-center justify-center">
        <div className="font-snow mr-12 w-full text-center text-[120px] uppercase">
          our products
        </div>
        <ProductsTags products={productList} />
      </div>
      <div className="relative top-[120vh]">
        <img src="/bg04.webp" alt="Background img 04" className="h-300 w-400" />
        <div className="absolute top-90 left-120">
          <img src="/rabbit05.webp" alt="Rabbit Shadow" className="h-[266px] scale-x-[-1]" />
        </div>
        <div className="absolute bottom-80 ml-14">
          <FinalLabel />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default OurProducts;
