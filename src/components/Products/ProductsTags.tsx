interface ProductTagProps {
  imgSrc: string;
  description: string;
}
const ProductTag: React.FC<ProductTagProps> = ({ imgSrc, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Background gif */}
        <img src="/product.gif" alt="Gif" className="h-[427px] md:h-[50vh] lg:h-[60vh]" />

        {/* Overlay image */}
        <img
          src={imgSrc}
          alt="Product Image"
          className="absolute top-18 left-23 flex h-[244px] items-center justify-center md:top-14 md:left-16 md:h-[25vh] lg:top-17 lg:left-22 lg:h-[32vh] xl:top-22 xl:left-32 xl:h-[32vh]"
        />
      </div>
      <div className="font-odor mt-10 w-[70vw] text-center text-[18px] sm:w-[60vw] md:mt-6 md:w-[26vw] md:text-[16px] xl:w-[23vw] xl:text-[24px]">
        {description}
      </div>
    </div>
  );
};

interface ProductsTagsProps {
  products: ProductTagProps[];
}
const ProductsTags: React.FC<ProductsTagsProps> = ({ products }) => {
  return (
    <div className="relative grid h-auto w-full grid-rows-3 gap-y-8 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductTag key={index} imgSrc={product.imgSrc} description={product.description} />
      ))}
    </div>
  );
};

export default ProductsTags;
