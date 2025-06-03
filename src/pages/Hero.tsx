import Navbar from "../components/navbar/Navbar";

function Hero() {
  return (
    <section
      className="flex min-h-screen w-full flex-col items-start justify-start bg-cover bg-center px-5 py-1 text-left text-white"
      style={{ backgroundImage: "url('/bg01.webp')" }}
    >
      <Navbar />
    </section>
  );
}

export default Hero;
