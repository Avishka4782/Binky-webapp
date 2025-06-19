type Photo = {
  src: string;
  alt: string;
};

type PhotoframesProps = {
  photos: Photo[];
};

const Photoframes: React.FC<PhotoframesProps> = ({ photos }) => {
  return (
    <div className="relative grid grid-cols-4 gap-x-8 sm:gap-x-2 md:gap-x-10 lg:gap-x-4 xl:gap-x-0 2xl:mt-10">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="h-44 sm:h-52 lg:h-68 xl:h-78 2xl:h-140"
        />
      ))}
    </div>
  );
};

export default Photoframes;
