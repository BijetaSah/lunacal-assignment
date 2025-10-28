import { motion } from "framer-motion";

function Tabs({ activeTab, onActiveTab, tabs }) {
  return (
    <div className="w-[614px] h-[62px] bg-[#171717] shadow-[0px_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)] rounded-[23px] flex justify-between items-center px-10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onActiveTab(tab.id)}
          className="relative px-7 py-3.5 text-sm font-medium text-gray-300 rounded-[23px] transition-colors group"
        >
          {/* Hover effect background - positioned behind text */}
          <span className="absolute inset-x-2 inset-y-1 bg-[#3a434e]/80 blur-[1px] scale-x-0 origin-left transition-transform duration-700 ease-in-out group-hover:scale-x-100 rounded-[23px] z-0"></span>

          {/* Text */}
          <span
            className={`relative z-10 text-[18px] ${
              activeTab === tab.id ? "text-white" : "text-gray-400"
            }`}
          >
            {tab.name}
          </span>

          {/* Active sliding background */}
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-zinc-800 rounded-[23px] z-0 shadow-[13.49px_16.87px_67.47px_8.43px_#0a0a0a,-8.43px_-16.87px_50.6px_-16.87px_#485B71]"
              transition={{
                type: "tween",
                ease: "easeInOut",
                duration: 0.4,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
