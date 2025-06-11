type Photo = {
  src: string;
  alt: string;
};

type PhotoframesProps = {
  photos: Photo[];
};

const Photoframes: React.FC<PhotoframesProps> = ({ photos }) => {
  return (
    <div className="relative grid grid-cols-4">
      {photos.map((photo, index) => (
        <img key={index} src={photo.src} alt={photo.alt} className="h-90" />
      ))}
    </div>
  );
};

export default Photoframes;
