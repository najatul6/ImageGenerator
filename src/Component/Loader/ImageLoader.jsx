import img_loader from "../../assets/spin.png";
const ImageLoader = () => {
  return (
    <div className="border shadow rounded-md p-4 w-full h-full mx-auto animate-pulse bg-dark-blue">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-10">
          <img src={img_loader} alt="loading image" className="animate-spin" />
        </div>
        <p className="text-xl font-bold text-dark-orange">Loading...</p>
      </div>
    </div>
  );
};

export default ImageLoader;
