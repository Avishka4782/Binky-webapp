function About() {
  return (
    <section
      className="bg-nav-blue relative flex h-173 w-full flex-col bg-cover"
      style={{ backgroundImage: "url('/bg0.webp')" }}
    >
      <div className="font-snow relative mt-3">
        <p className="pt-35 text-center text-6xl text-black">ABOUT</p>
      </div>
      <div className="font-snow relative h-fit">
        <div>
          <img src="/frame.webp" alt="frame" className="h-125 w-[105%]" />
        </div>
      </div>

      {/*<div className="relative h-64 w-64 bg-gray-200">
        <div className="absolute top-4 left-4 h-20 w-20 bg-blue-500">
          I’m positioned inside the parent
        </div>
      </div> */}
    </section>
  );
}

export default About;
