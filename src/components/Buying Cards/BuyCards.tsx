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
        className="mx-auto h-[25vh] sm:h-[28vh] md:h-[24vh] xl:h-[34vh]"
      />
      <div className="bg-bg_gray flex h-[259px] flex-col rounded-[20px] sm:h-[46vh] md:h-[62vh] lg:h-[68vh] xl:h-[90vh]">
        <div className="font-odor m-5 mt-5 text-center text-[18px] font-bold sm:text-[22px] md:m-4 md:text-[16px] lg:text-[23px] xl:m-14 xl:mb-8 xl:text-[34px]">
          {text1}
        </div>
        <div className="font-odor m-8 mt-0 text-center text-[14px] sm:m-14 sm:mt-0 sm:text-[16px] md:m-3 md:mt-0 md:text-[14px] lg:m-5 lg:mt-0 lg:text-[16px] xl:m-15 xl:mt-0 xl:text-[26px]">
          {text2}
        </div>
      </div>
    </div>
  );
}

export default BuyCards;
