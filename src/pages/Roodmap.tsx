import RdContainer from "../components/roadmap/RdContainer";
import Roadmap2 from "./Roadmap2";

function Roodmap() {
  return (
    <>
      <section className="relative flex h-[100vh] w-full flex-col overflow-visible">
        <div className="relative justify-center overflow-visible">
          <div className="absolute -top-15 z-30 h-[120vh] w-full overflow-hidden">
            <img
              src="/starbg.webp"
              alt="star bg"
              className="h-[110vh] w-full object-fill opacity-50"
            />
          </div>
          <img
            src="/rectangle.webp"
            alt="rectangle bg"
            className="absolute -top-72 z-20 h-[180vh] w-auto object-contain"
          />
        </div>
        <div className="relative z-40 flex w-full flex-row justify-between">
          <div className="relative h-160 w-3/4 content-center">
            <img
              src="/rabbit02.webp"
              alt="Rabbit Image"
              className="absolute top-15 right-20 h-150 scale-x-[-1]"
            />
          </div>
          <div className="mt-20 flex w-full flex-col">
            <div className="font-snow upper mb-15 text-7xl">roadmap</div>
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
