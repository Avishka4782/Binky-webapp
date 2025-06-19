import RdContainer from "../components/roadmap/RdContainer";
import Roadmap2 from "./Roadmap2";

function Roodmap() {
  return (
    <>
      <section className="relative flex h-224 w-full flex-col overflow-visible sm:h-200 md:h-180 lg:h-186 xl:h-224 2xl:h-260">
        <div className="relative justify-center overflow-visible">
          <div className="absolute -top-3 z-25 h-150 w-full overflow-hidden bg-cover sm:-top-8 md:-top-14 md:h-182 lg:-top-7 lg:h-178 xl:-top-6 xl:h-220 2xl:-top-10 2xl:h-274">
            <img src="/starbg.webp" alt="star bg" className="h-full w-full opacity-50" />
          </div>
          <div className="relative">
            <img
              src="/rectangle.webp"
              alt="rectangle bg"
              className="absolute -top-14 z-20 h-258 object-cover sm:-top-20 sm:h-240 md:-top-20 md:h-210 md:w-200 md:object-cover lg:-top-24 lg:h-220 lg:w-280 xl:-top-30 xl:h-280 xl:w-full 2xl:-top-37 2xl:h-338"
            />
          </div>
        </div>
        <div className="relative z-40 grid w-full grid-rows-2 md:flex md:flex-row md:justify-between">
          <div className="relative order-2 content-center md:order-1 md:h-80 md:w-110 lg:w-150 xl:w-190 2xl:w-5/7">
            <img
              src="/rabbit02.webp"
              alt="Rabbit Image"
              className="absolute -top-14 left-43 h-70 w-56 scale-x-[-1] sm:-top-20 sm:left-74 sm:h-60 sm:w-48 sm:scale-x-[-1] md:top-36 md:left-2 md:h-90 md:w-80 md:scale-x-[-1] lg:top-20 lg:h-100 xl:top-12 xl:left-4 xl:h-180 xl:w-110 2xl:left-8 2xl:h-220 2xl:w-170"
            />
          </div>
          <div className="order-1 mt-14 flex w-full flex-col sm:mt-5 sm:ml-16 md:order-2 md:ml-0 2xl:mt-15">
            <div className="font-snow upper mb-[5vh] ml-[25vw] flex text-center text-4xl sm:ml-32 sm:text-5xl md:ml-0 md:text-[64px] lg:text-[56px] xl:text-[64px] 2xl:text-[96px]">
              roadmap
            </div>
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
