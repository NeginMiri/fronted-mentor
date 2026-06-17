

const Lists = ({ setFilter, filter, cards }) => {
  const active = cards.filter((i) => i.isActive);
  const inactive = cards.filter((i) => !i.isActive);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex px-50 py-20 items-center justify-between ">
          <h1 className="text-white text-[32px] font-bold">
            Extensions List
            <span>(12)</span>
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setFilter("all");
              }}
              className={` text-tx-100 rounded-[60px] px-4 py-2 hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ${filter === "all" ? "bg-bg-100" : "bg-bg-200"}`}
            >
              All ({cards.length})
            </button>
            <button
              onClick={() => {
                setFilter("active");
              }}
              className={` text-tx-100 rounded-[60px] px-4 py-2 hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ${filter === "active" ? "bg-bg-100" : "bg-bg-200"}`}
            >
              Active <span>({active.length})</span>
            </button>
            <button
              onClick={() => {
                setFilter("inactive");
              }}
              className={` text-tx-100 rounded-[60px] px-4 py-2 hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ${filter === "inactive" ? "bg-bg-100" : "bg-bg-200"}`}
            >
              Inactive <span>({inactive.length})</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden fixed top-0 left-0 bg-bg-600/70 w-[100%] h-[100%] z-1 flex justify-center items-center">
        <div className="flex flex-col gap-2   justify-center items-center bg-bg-400 w-[575px] h-[155px] rounded-[30px] border-3 border-bg-100">
          <h3 className="text-[21px] text-white font-bold">
            Are you sure you want to remove this extension?
          </h3>
          <div className="flex gap-3">
            <button className="text-tx-100 bg-bg-200 rounded-[60px] w-[113px] h-[43px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ">
              Remove
            </button>
            <button className="text-tx-100 bg-bg-200 rounded-[60px] w-[101px] h-[43px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Lists;
