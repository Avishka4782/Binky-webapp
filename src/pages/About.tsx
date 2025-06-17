function About() {
  return (
    <section className="bg-nav-blue relative flex h-200 w-full flex-col bg-cover md:h-195 lg:h-200 xl:h-220 2xl:h-240">
      <div className="font-snow relative">
        <p className="mt-[18vh] text-center text-4xl sm:mt-[28vh] sm:text-5xl md:mt-[28vh] lg:mt-[24vh] lg:text-[48px] xl:mt-[28h] xl:text-[64px] 2xl:mt-[26vh] 2xl:text-[96px]">
          ABOUT
        </p>
      </div>

      <div className="relative mx-auto w-full">
        {/* Smaller background div centered inside frame */}
        <div className="absolute inset-0 top-[10vh] left-[9vw] ml-[7vw] flex md:top-[12vh] md:left-[0vw] 2xl:top-[10vh] 2xl:-left-[2vw]">
          <div className="flex flex-row rounded-md md:h-[65vh] md:w-[86vw] md:bg-blue-100 xl:h-[68vh] xl:w-[88vw] 2xl:h-[56vh] 2xl:w-[89vw]">
            <div className="relative top-[16vh] left-[4vw] flex w-[60vw] flex-col sm:left-[6vw] sm:w-[55vw] md:left-[8vw] md:w-[70vw] xl:top-[20vh] xl:left-[23vw] xl:w-[61vw] 2xl:w-[64vw]">
              <div className="font-odor z-12 mb-[6vh] text-center xl:text-[20px] 2xl:mb-[3vh] 2xl:text-[24px]">
                Welcome to Binky, where innovation meets charm! At Binky, we’re inspired by the
                agility and energy of a playful bunny, delivering a token experience that’s as
                dynamic as it is secure. Designed to empower and engage our community, Binky
                combines cutting-edge technology with a lighthearted touch, making digital finance
                approachable and fun. Hop on board and explore a world where every token brings new
                opportunities
              </div>
              <div className="font-snow hidden text-center uppercase sm:block sm:text-[24px] md:text-2xl lg:text-[30px] xl:text-[36px] 2xl:text-[40px]">
                join community
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[69vh] left-[3vw] z-10 w-[40vw] sm:top-[52vh] sm:left-[3vw] sm:w-[28vw] md:top-[46vh] md:left-[3vw] md:w-[28vw] lg:top-[40vh] lg:left-[1vw] lg:w-[24vw] xl:top-[22vh] xl:left-[8vw] xl:w-[17vw] 2xl:top-[19vh] 2xl:left-[7vw] 2xl:w-[15vw]">
          <img src="/rabbit01.webp" alt="Rabbit" />
        </div>

        {/* Frame image on top of backgound*/}
        <img
          src="/frame.webp"
          alt="frame"
          className="relative z-0 ml-5 hidden md:top-[2vh] md:block md:h-[96vh] md:w-[95vw] xl:h-[100vh] xl:w-[98vw] 2xl:h-[80vh] 2xl:w-[98vw]"
        />
        {/* Frame image on mobile backgound*/}
        <img
          src="/framemobile.webp"
          alt="frame"
          className="relative mt-[5vh] ml-[5vw] h-[95vh] w-[95%] sm:mt-[5vh] sm:ml-[8vw] sm:h-[90vh] sm:w-[85vw] md:hidden"
        />
      </div>
    </section>
  );
}

export default About;
