interface ProductTagProps {
  imgSrc: string;
  description: string;
}
const ProductTag: React.FC<ProductTagProps> = ({ imgSrc, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Background gif */}
        <img src="/product.gif" alt="Gif" className="h-[427px] md:h-70 lg:h-85 2xl:h-140" />

        {/* Overlay image */}
        <img
          src={imgSrc}
          alt="Product Image"
          className="absolute top-18 left-23 flex h-[244px] items-center justify-center md:top-14 md:left-16 md:h-36 lg:top-17 lg:left-22 lg:h-45 xl:top-15 xl:left-22 xl:h-48 2xl:top-40 2xl:left-44 2xl:h-60"
        />
      </div>
      <div className="font-odor mt-10 w-78 text-center text-[18px] md:mt-6 md:w-50 md:text-[16px] lg:w-70 xl:w-100 xl:text-[24px]">
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
