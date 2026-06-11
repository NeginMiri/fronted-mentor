const Lists = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex px-50 py-20 items-center justify-between ">
          <h1 className="text-white text-[32px] font-bold">
            Extensions List
            <span>(12)</span>
          </h1>
          <div className="flex gap-3">
            <button className="focus:bg-bg-100 text-tx-100 bg-bg-200 rounded-[60px] h-[48px] w-[65px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100">
              All
            </button>
            <button className="focus:bg-bg-100 text-tx-100 bg-bg-200 rounded-[60px] w-[123px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100">
              Active <span>(8)</span>
            </button>
            <button className="focus:bg-bg-100 text-tx-100 bg-bg-200 rounded-[60px] w-[140px] hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100">
              Inactive <span>(4)</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Lists;
