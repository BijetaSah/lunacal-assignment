import Container from "../ui/Container";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const initialImages = ["/image.jpg", "/image.jpg", "/image.jpg"];

function Gallery() {
  return (
    <div className="w-[720px] bg-[#363C43]  px-5 py-4 gap-4 rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] h-[360px]">
      {/* gallery button */}
      <div className="flex justify-between items-center">
        <button className="w-[149px] h-[42px] rounded-[20px] p-7 bg-black text-white flex items-center justify-center">
          Gallery
        </button>

        {/* buttons  */}
        <div className="flex gap-4">
          <button className="w-[137px] h-[47px] bg-[#363C43] shadow-[0px_-4px_8px_0px_rgba(255,255,255,0.4),0px_6px_12px_0px_rgba(0,0,0,0.6)] rounded-[23px] flex items-center justify-center gap-2 text-white cursor-pointer">
            + Add
          </button>
          <button className="bg-linear-to-b from-[#303439] to-[#161718] rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_4px_30px_5px_#101213] text-gray-600 cursor-pointer">
            <FaArrowLeft />
          </button>
          <button className="bg-linear-to-b from-[#303439] to-[#161718] rounded-full w-[45px] h-[45px] flex items-center justify-center shadow-[-5px_-3px_30px_-10px_#96BEE7,4px_4px_30px_5px_#101213] text-gray-600 cursor-pointer">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
