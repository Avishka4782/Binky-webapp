import LogoBox from "../components/logobox/LogoBox.tsx";

function partners() {
  return (
    <section className='"relative bg-light_brown flex h-120 w-full flex-col bg-cover'>
      <div className="flex w-full flex-col">
        <div className="font-snow relative mt-3 mb-6">
          <p className="upper m pt-10 text-center text-6xl">Partners</p>
        </div>
        <div className="flex items-center justify-center">
          <LogoBox />
        </div>
      </div>
    </section>
  );
}

export default partners;
