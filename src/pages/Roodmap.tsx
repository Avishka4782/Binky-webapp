import RdContainer from "../components/roadmap/RdContainer";
import Roadmap2 from "./Roadmap2";

function Roodmap() {
  return (
    <>
      <section className="relative flex h-[125vh] w-full flex-col overflow-visible sm:h-[130vh] md:h-[126vh] lg:h-[110vh] xl:h-[110vh]">
        <div className="relative justify-center overflow-visible">
          <div className="absolute -top-[36vh] z-25 h-[130vh] w-[100vw] overflow-hidden object-cover sm:top-[-3vh] md:top-[-14vh] md:h-[131vh] lg:top-[-15vh] lg:h-[116vh] xl:top-[-10vh] xl:h-[125vh]">
            <img
              src="/starbg.webp"
              alt="star bg"
              className="h-[110vh] w-full object-fill opacity-50 sm:h-[150vh]"
            />
          </div>
          <div className="relative">
            <img
              src="/rectangle.webp"
              alt="rectangle bg"
              className="absolute -top-[38vh] z-20 h-[173vh] object-cover sm:-top-[12vh] sm:h-[154vh] md:-top-[22vh] md:h-[154vh] md:w-200 md:object-cover lg:-top-[26vh] lg:h-[144vh] lg:w-280 xl:-top-[20vh] xl:h-[150vh] xl:w-full"
            />
          </div>
        </div>
        <div className="relative z-40 grid w-full grid-rows-2 md:flex md:flex-row md:justify-between">
          <div className="relative order-2 w-[50vw] content-center md:order-1 md:h-80 md:w-[72vw] lg:w-[68vw]">
            <img
              src="/rabbit02.webp"
              alt="Rabbit Image"
              className="absolute -top-14 left-[42vw] h-66 scale-x-[-1] sm:-top-18 sm:left-[48vw] sm:h-55 sm:scale-x-[-1] md:top-26 md:left-[1vw] md:h-90 md:scale-x-[-1] lg:top-20 lg:h-100 xl:top-16 xl:left-[3vw] xl:h-180"
            />
          </div>
          <div className="order-1 mt-[-20vh] flex w-full flex-col sm:mt-[4vh] sm:ml-[10vw] md:order-2 md:mt-[-3vh] md:ml-0 xl:mt-[4vh]">
            <div className="font-snow upper mb-[5vh] ml-[25vw] flex text-center text-4xl sm:ml-32 sm:text-5xl md:ml-0 md:text-[64px] lg:text-[56px] xl:text-[84px]">
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
