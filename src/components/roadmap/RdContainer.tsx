type Props = {
  title: string;
  text1: string;
  text2: string;
};

function RdContainer({ title, text1, text2 }: Props) {
  return (
    <div className="relative">
      <div className="flex grid-rows-3 flex-col">
        <div className="font-odor mb-16 ml-10 flex h-[140px] flex-col gap-y-[20px] md:mb-12 md:ml-0 xl:mb-16 2xl:mb-20">
          <p className="mt-2 text-[20px] sm:font-bold lg:text-[24px] xl:mt-6 xl:text-[30px] 2xl:text-[36px]">
            {title}
          </p>
          <ul className="ml-8 w-[334px] list-disc text-[16px] sm:w-[400px] md:w-100 lg:mb-0 lg:w-120 lg:text-[18px] xl:mt-2 xl:mb-8 xl:ml-12 xl:w-full xl:text-[24px] 2xl:text-[28px]">
            <li>{text1}</li>
            <li>{text2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RdContainer;
