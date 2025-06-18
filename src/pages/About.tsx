function About() {
  return (
    <section className="bg-nav-blue relative flex h-auto w-full flex-col bg-cover">
      <div
        className="absolute inset-0 hidden w-[100vw] overflow-hidden bg-cover md:block"
        style={{
          backgroundImage: "url('/dottedbg.webp')",
        }}
      ></div>
      {/*mobile bg image */}
      <div
        className="absolute inset-0 w-[120vw] overflow-hidden bg-cover md:hidden"
        style={{
          backgroundImage: "url('/dottedgmb.webp')",
        }}
      ></div>
      <div className="font-snow relative z-10 pt-30 sm:mt-12 md:mt-16 lg:mt-4 2xl:mt-29">
        <p className="text-center text-4xl sm:text-5xl lg:text-[48px] xl:text-[64px] 2xl:text-[96px]">
          ABOUT
        </p>
      </div>

      <div className="relative mx-auto w-full pb-20 sm:pb-8 md:pb-4 lg:pb-1">
        {/* Smaller background div centered inside frame */}
        <div className="absolute inset-0 top-[10vh] left-[9vw] ml-[6vw] flex md:top-18 md:left-[0vw] 2xl:top-[10vh]">
          <div className="flex flex-row rounded-md md:h-87 md:w-[86vw] md:bg-blue-100 xl:h-96 xl:w-[88vw] 2xl:h-138 2xl:w-420">
            <div className="relative top-20 left-[4vw] flex w-[60vw] flex-col sm:left-[6vw] sm:w-[55vw] md:top-18 md:left-40 md:w-120 lg:top-26 lg:left-58 lg:w-148 xl:top-28 xl:left-[23vw] xl:w-210 2xl:top-40 2xl:w-294">
              <div className="font-odor z-12 mb-6 text-center lg:text-[15px] xl:text-[20px] 2xl:mb-8 2xl:text-[28px]">
                Welcome to Binky, where innovation meets charm! At Binky, we’re inspired by the
                agility and energy of a playful bunny, delivering a token experience that’s as
                dynamic as it is secure. Designed to empower and engage our community, Binky
                combines cutting-edge technology with a lighthearted touch, making digital finance
                approachable and fun. Hop on board and explore a world where every token brings new
                opportunities
              </div>
              <div className="font-snow hidden text-center uppercase sm:block sm:text-[24px] md:text-2xl lg:text-[30px] xl:text-[36px] 2xl:text-[42px]">
                join community
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-110 left-[3vw] z-10 w-38 pb-10 sm:top-88 sm:left-10 sm:w-42 md:top-60 md:left-10 md:w-46 lg:top-32 lg:left-20 lg:w-50 xl:top-28 xl:left-[8vw] xl:w-[17vw] 2xl:top-46 2xl:left-[7vw] 2xl:w-84">
          <img src="/rabbit01.webp" alt="Rabbit" />
        </div>

        {/* Frame image on top of backgound*/}
        <img
          src="/frame.webp"
          alt="frame"
          className="relative z-0 ml-5 hidden md:top-[2vh] md:block md:h-130 md:w-[95vw] xl:h-140 xl:w-[98vw] 2xl:h-200"
        />
        {/* Frame image on mobile backgound*/}
        <img
          src="/framemobile.webp"
          alt="frame"
          className="relative mt-[5vh] ml-[5vw] h-140 w-[95%] sm:mt-[5vh] sm:ml-[8vw] sm:h-135 sm:w-[85vw] md:hidden"
        />
      </div>
    </section>
  );
}

export default About;
