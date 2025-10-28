import { useState } from "react";
import Tabs from "./components/Tabs";
import Container from "./ui/Container";
import { tabsData } from "./constants/tabsData";
import Gallery from "./components/Gallery";

function App() {
  const tabs = [
    { id: "aboutme", name: "About Me" },
    { id: "experiences", name: "Experiences" },
    { id: "recommended", name: "Recommended" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  function handleActiveTab(id) {
    setActiveTab(id);
  }

  return (
    <main className="space-y-2">
      {/* for tabs widget */}
      <Container height={"316px"} leftLine={true}>
        <div>
          <Tabs
            tabs={tabs}
            onActiveTab={handleActiveTab}
            activeTab={activeTab}
          />
          <p className="text-[#969696] text-lg leading-loose py-5">
            {tabsData.find((data) => data.name === activeTab)?.text}
          </p>
        </div>
      </Container>

      {/* for Galary widget */}
      <Gallery />
    </main>
  );
}

export default App;
