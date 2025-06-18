import LogoBox from "../components/logobox/LogoBox.tsx";

function partners() {
  return (
    <section className='"relative bg-light_brown sm:120 z-10 flex h-110 w-full flex-col bg-cover xl:h-120 2xl:h-170'>
      <div className="flex w-full flex-col">
        <div className="font-snow relative mt-[7vh] mb-[5vh] xl:mt-[9vh]">
          <p className="upper text-center text-4xl md:text-5xl xl:text-[64px]">Partners</p>
        </div>
        <div className="flex items-center justify-center">
          <LogoBox />
        </div>
      </div>
    </section>
  );
}

export default partners;
