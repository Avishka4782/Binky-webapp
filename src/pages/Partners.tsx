import LogoBox from "../components/logobox/LogoBox.tsx";

function partners() {
  return (
    <section className='"relative bg-light_brown z-10 flex h-full w-full flex-col bg-cover'>
      <div className="flex w-full flex-col">
        <div className="font-snow relative mt-10 mb-10 lg:mt-14 xl:mt-[9vh]">
          <p className="upper text-center text-4xl md:text-5xl xl:text-[64px] 2xl:text-[96px]">
            Partners
          </p>
        </div>
        <div className="flex items-center justify-center pb-10 lg:pb-16 2xl:pb-24">
          <LogoBox />
        </div>
      </div>
    </section>
  );
}

export default partners;
