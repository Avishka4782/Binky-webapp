interface ProductTagProps {
  imgSrc: string;
  description: string;
}
const ProductTag: React.FC<ProductTagProps> = ({ imgSrc, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Background gif */}
        <img src="/product.gif" alt="Gif" className="h-100" />

        {/* Overlay image */}
        <img
          src={imgSrc}
          alt="Product Image"
          className="absolute top-1 left-3 flex h-50 translate-x-1/2 translate-y-1/2 items-center justify-center"
        />
      </div>
      <div className="font-odor mt-8 w-65 text-center">{description}</div>
    </div>
  );
};

interface ProductsTagsProps {
  products: ProductTagProps[];
}
const ProductsTags: React.FC<ProductsTagsProps> = ({ products }) => {
  return (
    <div className="relative grid h-auto w-full grid-cols-3 gap-x-8">
      {products.map((product, index) => (
        <ProductTag key={index} imgSrc={product.imgSrc} description={product.description} />
      ))}
    </div>
  );
};

export default ProductsTags;
