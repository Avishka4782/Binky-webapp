type Photo = {
  src: string;
  alt: string;
};

type PhotoframesProps = {
  photos: Photo[];
};

const Photoframes: React.FC<PhotoframesProps> = ({ photos }) => {
  return (
    <div className="relative grid grid-cols-4 gap-x-8 sm:gap-x-2 md:gap-x-10 lg:gap-x-4 xl:gap-x-0">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.alt}
          className="h-[30vh] sm:h-[36vh] lg:h-[48vh] xl:h-[52vh]"
        />
      ))}
    </div>
  );
};

export default Photoframes;
