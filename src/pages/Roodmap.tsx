import RdContainer from "../components/roadmap/RdContainer";
import Roadmap2 from "./Roadmap2";

function Roodmap() {
  return (
    <>
      <section className="relative flex h-[110vh] w-full flex-col overflow-visible">
        <div className="relative justify-center overflow-visible">
          <div className="absolute -top-25 z-25 h-[130vh] w-full overflow-hidden">
            <img
              src="/starbg.webp"
              alt="star bg"
              className="h-[110vh] w-full object-fill opacity-50"
            />
          </div>
          <div className="relative">
            <img
              src="/rectangle.webp"
              alt="rectangle bg"
              className="absolute -top-52 z-20 h-[160vh] w-auto object-contain"
            />
          </div>
        </div>
        <div className="relative z-40 flex w-full flex-row justify-between">
          <div className="relative h-160 w-3/4 content-center">
            <img
              src="/rabbit02.webp"
              alt="Rabbit Image"
              className="absolute top-8 right-20 h-160 scale-x-[-1]"
            />
          </div>
          <div className="mt-10 flex w-full flex-col">
            <div className="font-snow upper mb-15 text-[84px]">roadmap</div>
            <RdContainer
              title="Launch & Foundation"
              text1="Establish Binky token infrastructure and secure initial funding."
              text2="Begin community building initiatives, focusing brand awareness."
            />
            <RdContainer
              title="Expansion & Engagement"
              text1="Introduce staking and reward programs to incentivize token holders."
              text2="Form strategic partnerships to broaden the Binky ecosystem."
            />
            <RdContainer
              title="Innovation & Growth"
              text1="Expand token utility with new features and platform integrations."
              text2="Implement governance and voting features for community participation."
            />
          </div>
        </div>
      </section>
      <section>
        <Roadmap2 />
      </section>
    </>
  );
}

export default Roodmap;
