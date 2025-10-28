import { useState } from "react";
import Tabs from "./components/Tabs";
import Container from "./ui/Container";
import { tabsData } from "./constants/tabsData";
import Gallery from "./components/Gallery";
import SeparatingLine from "./components/SeparatingLine";

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
    <div className="grid grid-cols-[auto_1fr] gap-5 py-14 px-5  ">
      <Container
        style={"lg:flex flex-col justify-center gap-2 items-center hidden "}
      >
        <div className="text-white">
          <p className="">Name:BijetaSah</p>
          <p>Email:bijetasah30@gmail.com</p>
        </div>
      </Container>
      <main className="flex flex-col gap-2 items-center">
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

        <SeparatingLine />

        {/* for Galary widget */}
        <Gallery />
        <SeparatingLine />
      </main>
    </div>
  );
}

export default App;
