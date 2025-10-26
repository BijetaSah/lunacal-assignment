import { button } from "motion/react-m";
import { useState } from "react";

function Tabs() {
  const tabs = [
    { id: "aboutme", name: "About Me" },
    { id: "experiences", name: "Experiences" },
    { id: "recommended", name: "Recommended" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${activeTab === tab.id ? "text-blue-600" : "text-white"}`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
