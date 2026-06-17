import Header from "./component/Header";
import Lists from "./component/Lists";
import Footer from "./component/Footer";
import Items from "./component/items";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      id: "1",
      logo: "./Image/1.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      id: "2",
      logo: "./Image/2.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      id: "3",
      logo: "./Image/3.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      id: "4",
      logo: "./Image/4.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      id: "5",
      logo: "./Image/5.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      id: "6",
      logo: "./Image/6.svg",
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      id: "7",
      logo: "./Image/7.svg",
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      id: "8",
      logo: "./Image/8.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      id: "9",
      logo: "./Image/9.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      id: "10",
      logo: "./Image/10.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      id: "11",
      logo: "./Image/11.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      id: "12",
      logo: "./Image/12.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ]);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Header />
      <Lists setFilter={setFilter} cards={cards} filter={filter} />
      <Items filter={filter} cards={cards} setCards={setCards} />
      <Footer />
    </>
  );
}

export default App;
