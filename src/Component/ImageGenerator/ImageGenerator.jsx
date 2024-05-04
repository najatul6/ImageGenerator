import default_image from "../../assets/defult_image.jpg";
import { useState, useRef } from "react";
import ImageLoader from "../Loader/ImageLoader";
const ImageGenerator = () => {
  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer sk-proj-GVWEER5jGg0y33AXBIbUT3BlbkFJNegdG2FLqBLCmxKHNBcz`,
        "User-Agent": "Chrome",
      },
      body: JSON.stringify({
        prompt: `${inputRef.current.value}`,
        n: 1,
        size: "512x512",
      }),
    });
    let data = await response.json();
    setImage_url(data.data[0].url);
  };
  return (
    <div className="flex flex-col m-auto items-center mt-5 mb-5 gap-7">
      <div className="flex flex-col">
        <div className="w-[512px] relative">
          {loading ? (
            <img
              src={image_url === "/" ? default_image : image_url}
              alt="Default image"
            />
          ) : (
            <div className="absolute top-0 w-full h-full">
              <ImageLoader />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-[1000px] h-[95px] px-2 justify-between items-center rounded-full bg-[#1F3540]">
        <input
          type="text"
          className="w-3/4 h-12 bg-transparent border-none outline-none text-lg text-white pl-9 mr-9 placeholder:text-[#999]"
          ref={inputRef}
          placeholder="Describe What You Want To See"
        />
        <div
          className="flex items-center justify-center w-1/4 h-[85px] text-xl rounded-full bg-dark-orange cursor-pointer"
          onClick={() => {
            imageGenerator();
          }}
        >
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
