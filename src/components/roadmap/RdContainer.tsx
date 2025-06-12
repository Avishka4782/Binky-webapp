type Props = {
  title: string;
  text1: string;
  text2: string;
};

function RdContainer({ title, text1, text2 }: Props) {
  return (
    <div className="relative">
      <div className="flex grid-rows-3 flex-col">
        <div className="font-odor flex flex-col gap-y-[25px]">
          <p className="mt-2 mb-2 h-[20px] text-[36px] font-bold">{title}</p>
          <ul className="h-[84px] list-inside list-disc p-3 text-[20px]">
            <li>{text1}</li>
            <li>{text2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RdContainer;
