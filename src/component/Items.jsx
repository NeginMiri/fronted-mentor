import { useState } from "react";

const Items = ({ filter }) => {
  // let name="eli"
  // name="reza"
  const [cards, setCards] = useState([
    {
      id: "1",
      logo: "./assets/images/logo-devlens.svg",
      name: "DevLens",
      description:
        "Quickly inspect page layouts and visualize element boundaries.",
      isActive: true,
    },
    {
      id: "2",
      logo: "./assets/images/logo-style-spy.svg",
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: true,
    },
    {
      id: "3",
      logo: "./assets/images/logo-speed-boost.svg",
      name: "SpeedBoost",
      description:
        "Optimizes browser resource usage to accelerate page loading.",
      isActive: false,
    },
    {
      id: "4",
      logo: "./assets/images/logo-json-wizard.svg",
      name: "JSONWizard",
      description:
        "Formats, validates, and prettifies JSON responses in-browser.",
      isActive: true,
    },
    {
      id: "5",
      logo: "./assets/images/logo-tab-master-pro.svg",
      name: "TabMaster Pro",
      description: "Organizes browser tabs into groups and sessions.",
      isActive: true,
    },
    {
      id: "6",
      logo: "./assets/images/logo-viewport-buddy.svg",
      name: "ViewportBuddy",
      description:
        "Simulates various screen resolutions directly within the browser.",
      isActive: false,
    },
    {
      id: "7",
      logo: "./assets/images/logo-markup-notes.svg",
      name: "Markup Notes",
      description:
        "Enables annotation and notes directly onto webpages for collaborative debugging.",
      isActive: true,
    },
    {
      id: "8",
      logo: "./assets/images/logo-grid-guides.svg",
      name: "GridGuides",
      description:
        "Overlay customizable grids and alignment guides on any webpage.",
      isActive: false,
    },
    {
      id: "9",
      logo: "./assets/images/logo-palette-picker.svg",
      name: "Palette Picker",
      description: "Instantly extracts color palettes from any webpage.",
      isActive: true,
    },
    {
      id: "10",
      logo: "./assets/images/logo-link-checker.svg",
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true,
    },
    {
      id: "11",
      logo: "./assets/images/logo-dom-snapshot.svg",
      name: "DOM Snapshot",
      description: "Capture and export DOM structures quickly.",
      isActive: false,
    },
    {
      id: "12",
      logo: "./assets/images/logo-console-plus.svg",
      name: "ConsolePlus",
      description:
        "Enhanced developer console with advanced filtering and logging.",
      isActive: true,
    },
  ]);

  const taggle = (id) => {
    const one = cards.map((item) =>
      item.id === id ? { ...item, isActive: !item.isActive } : item,
    );
    setCards(one);
  };
  const filterItem = cards.filter((i) => {
    if (filter === "active") return i.isActive;
    if (filter === "inactive") return !i.isActive;
    return true;
  });
  return (
    <section className="grid grid-cols-3 gap-3 pl-20 pb-20">
      {filterItem.map((item) => (
        <div
          key={item.id}
          className="flex flex-col rounded-[30px] bg-bg-400 p-[24px] w-[400px]"
        >
          <div className="flex gap-3">
            <img className="w-[60px] h-[60px] pt-2" src={item.logo} />
            <div className="flex flex-col">
              <h1 className="text-white text-[19px] font-bold">{item.name}</h1>
              <p className="text-tx-500">{item.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-15">
            <button className="text-tx-100 bg-bg-500 rounded-[60px] w-[123px] h-[43px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ">
              Remove
            </button>
            <div
              onClick={() => {
                taggle(item.id);
              }}
              className={` w-[60px] h-[24px] rounded-full cursor-pointer flex justify-end  ${item.isActive ? " bg-bg-100" : "bg-gray-400"} `}
            >
              <div
                className={`w-[24px] h-[24px] rounded-full  bg-white  ${item.isActive ? "translate-x-0 transition-all" : "-translate-x-9 transition-all "} `}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default Items;
