function About() {
  return (
    <section className="bg-nav-blue relative flex h-200 w-full flex-col bg-cover">
      <div className="font-snow relative mt-3">
        <p className="pt-35 text-center text-6xl">ABOUT</p>
      </div>

      <div className="relative mx-auto w-full">
        {/* Smaller background div centered inside frame */}
        <div className="absolute inset-0 top-15 left-10 z-0 ml-7 flex">
          <div className="flex h-105 w-[90%] flex-row rounded-md bg-blue-100 shadow-md">
            <div className="relative top-32 left-120 flex w-[680px] flex-col">
              <div className="font-odor mb-8 text-center">
                Welcome to Binky, where innovation meets charm! At Binky, we’re inspired by the
                agility and energy of a playful bunny, delivering a token experience that’s as
                dynamic as it is secure. Designed to empower and engage our community, Binky
                combines cutting-edge technology with a lighthearted touch, making digital finance
                approachable and fun. Hop on board and explore a world where every token brings new
                opportunities
              </div>
              <div className="font-snow text-center text-2xl uppercase">join community</div>
            </div>
          </div>
        </div>

        <div className="absolute top-24 left-25 w-70">
          <img src="/rabbit01.webp" alt="Rabbit" />
        </div>

        {/* Frame image on top f backgound*/}
        <img
          src="/frame.webp"
          alt="frame"
          className="pointer-events-none relative z-10 ml-5 h-150 w-[95%]"
        />
      </div>
    </section>
  );
}

export default About;
