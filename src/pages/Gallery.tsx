import React from "react";

function Gallery() {
  return (
    <section className="relative h-screen w-full">
      {/* Background image layer on top */}
      <div
        className="absolute inset-0 -top-14 z-10 bg-green-400 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg0.webp')",
          backgroundSize: "100% 100%",
        }}
      >
        {/* Content goes here */}
      </div>
    </section>
  );
}

export default Gallery;
