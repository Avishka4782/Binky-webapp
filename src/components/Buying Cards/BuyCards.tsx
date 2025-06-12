type Props = {
  text1: string;
  text2: string;
};

function BuyCards({ text1, text2 }: Props) {
  return (
    <div className="grid-y-2 relative grid">
      <img src="/cardimage.webp" alt="Buy Card Image" className="mx-auto h-60" />
      <div className="bg-bg_gray flex h-155 flex-col rounded-[20px]">
        <div className="font-odor m-5 mt-5 text-center text-[36px] font-bold">{text1}</div>
        <div className="font-odor m-12 mt-0 text-center text-[24px]">{text2}</div>
      </div>
    </div>
  );
}

export default BuyCards;
