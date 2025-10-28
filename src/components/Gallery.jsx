import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const initialImages = ["/image.jpg", "/image.jpg", "/image.jpg", "/image.jpg"];

function Gallery() {
  const [images, setImages] = useState(initialImages);
  const scrollRef = useRef(null);
  function handleAddImage(e) {
    const file = e.target.files[0];

    if (!file) return;
    const newImage = URL.createObjectURL(file);

    setImages((prev) => [...prev, newImage]);
  }

  function scroll(direction) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 200 : -200,
      behavior: "smooth",
    });
  }

  return (
    <div className="w-[720px] bg-[#363C43]  px-5 py-4 gap-4 rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] h-[360px]">
      {/* gallery button */}
      <div className="flex justify-between items-center">
        <button className="w-[149px] h-[42px] rounded-[20px] p-7 bg-black text-white flex items-center justify-center">
          Gallery
        </button>

        {/* buttons  */}
        <div className="flex gap-4">
          <label className="w-[137px] h-[47px] bg-[#363C43] shadow-[0px_-4px_8px_0px_rgba(255,255,255,0.4),0px_6px_12px_0px_rgba(0,0,0,0.6)] rounded-[23px] flex items-center justify-center gap-2 text-white cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAddImage}
            />
            + Add
          </label>

          {/* prevBtn */}
          <button
            className="bg-linear-to-b from-[#303439] to-[#161718] rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_4px_30px_5px_#101213] text-gray-600 cursor-pointer"
            onClick={() => scroll("left")}
          >
            <FaArrowLeft />
          </button>

          {/* nextBtn */}

          <button
            className="bg-linear-to-b from-[#303439] to-[#161718] rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_4px_30px_5px_#101213] text-gray-600 cursor-pointer"
            onClick={() => scroll("right")}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* images */}
      <div className="overflow-x-scroll hide-scrollbar  mt-12 " ref={scrollRef}>
        <div className="flex justify-center items-center gap-4">
          {images.map((imgSrc, i) => (
            <img
              src={imgSrc}
              key={i}
              alt={`Gallery image ${i}`}
              className="w-[191px] h-[180px] object-fill filter grayscale-100 hover:grayscale-0 hover:scale-[1.05] hover:-rotate-2 hover:-translate-y-2 transition-transform duration-300 ease-in-out shrink-0 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
