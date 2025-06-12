import Iconbar from "../Icons/Iconbar";

function FinalLabel() {
  return (
    <div className="flex h-32 flex-row items-center">
      <img src="/logo.webp" alt="Logo Img" className="mt-8 h-24" />
      <img src="/buynow.webp" alt="Buy Now Img" className="ml-84 h-36" />
      <div className="mt-16 ml-96 scale-70">
        <Iconbar />
      </div>
    </div>
  );
}

export default FinalLabel;
