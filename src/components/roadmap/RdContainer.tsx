type Props = {
  title: string;
  text1: string;
  text2: string;
};

function RdContainer({ title, text1, text2 }: Props) {
  return (
    <div className="relative">
      <div className="flex grid-rows-3 flex-col">
        <div className="font-odor ml-10 flex flex-col gap-y-[20px] md:ml-0">
          <p className="mt-2 h-[24px] text-[20px] sm:text-[24px] sm:font-bold xl:mt-8 xl:text-[32px]">
            {title}
          </p>
          <ul className="mb-16 ml-8 h-[84px] w-[334px] list-disc text-[16px] sm:mb-12 sm:w-[400px] sm:text-[18px] md:w-auto lg:mb-0 lg:text-[16px] xl:mt-4 xl:mb-8 xl:ml-12 xl:text-[24px]">
            <li>{text1}</li>
            <li>{text2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RdContainer;
