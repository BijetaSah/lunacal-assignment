import { FaQuestion } from "react-icons/fa6";

// shadow-[5.67px_5.67px_3.78px_0px_rgba(0, 0, 0, 0.4)]

function Container({ children, height, leftLine = false }) {
  return (
    <div
      style={{ height }}
      className={`w-[720px] bg-[#363C43]  grid grid-cols-[2rem_1fr_2rem] p-2 gap-4 rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] `}
    >
      {/* question and boxed */}
      <div className="flex flex-col gap-[105px]">
        <div className="w-7 h-7 rounded-full bg-linear-to-bl from-[#4A4E54] to-[#A3ADBA] flex items-center justify-center">
          <FaQuestion className="w-6 h-6 rounded-full text-[#A3ADBA] bg-[#363C43]  p-1" />
        </div>
        {leftLine && (
          <div className="grid grid-cols-[9.31px_9.31px] gap-0.5 ">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className=" h-[9.31px] rounded-[1.16px] bg-[#4A4E54]"
                key={index}
              ></div>
            ))}
          </div>
        )}
      </div>
      {children}

      {/* long box */}

      {leftLine && (
        <div className="w-2 h-16 bg-linear-to-br from-[#888989] to-[#4A4E54] shadow-[4px_4px_4.9px_0_rgba(0,0,0,0.25)] rounded-lg self-center"></div>
      )}
    </div>
  );
}

export default Container;
