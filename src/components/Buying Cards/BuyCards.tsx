type Props = {
  text1: string;
  text2: string;
};

function BuyCards({ text1, text2 }: Props) {
  return (
    <div className="relative grid">
      <img
        src="/cardimage.webp"
        alt="Buy Card Image"
        className="mx-auto h-32 sm:h-40 md:h-36 lg:h-40 xl:h-56 2xl:h-70"
      />
      <div className="bg-bg_gray flex h-[259px] flex-col rounded-[20px] sm:h-66 md:h-88 lg:h-102 xl:h-156 xl:rounded-[40px] 2xl:h-192">
        <div className="font-odor m-5 mt-5 text-center text-[18px] font-bold sm:text-[22px] md:m-4 md:text-[16px] lg:text-[23px] xl:m-8 xl:mb-6 xl:text-[30px] 2xl:m-16 2xl:mb-7 2xl:text-[36px]">
          {text1}
        </div>
        <div className="font-odor m-8 mt-0 text-center text-[14px] sm:m-14 sm:mt-0 sm:text-[16px] md:m-3 md:mt-0 md:text-[14px] lg:m-8 lg:mt-0 lg:text-[16px] xl:m-10 xl:mt-0 xl:text-[24px] 2xl:m-20 2xl:mt-0 2xl:text-[28px]">
          {text2}
        </div>
      </div>
    </div>
  );
}

export default BuyCards;
