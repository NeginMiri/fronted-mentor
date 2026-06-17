import { useState } from "react";

const Items = ({ filter ,cards,setCards}) => {

  
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

  const deleteItem = (id)=>{
    setCards((prev)=>(prev.filter((i)=>(
  i.id !== id
   ) )))
  }
  return (
    <section className="grid grid-cols-3 gap-4 pl-30 pb-20">
      {filterItem.map((item) => (
        <div
          key={item.id}
          className="flex flex-col rounded-[30px] w-[400px] h-[235px] bg-bg-400 p-[24px] "
        >
          <div className="flex gap-3">
            <img className="w-[60px] h-[60px] pt-2" src={item.logo} />
            <div className="flex flex-col">
              <h1 className="text-white text-[19px] font-bold">{item.name}</h1>
              <p className="text-tx-500">{item.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-15">
            <button onClick={()=>{
                deleteItem(item.id)
            }} className="text-tx-100 bg-bg-500 rounded-[60px] w-[123px] h-[43px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ">
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
