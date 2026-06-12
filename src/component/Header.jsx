const Header = () => {
  return (
    <>
      <div className="w-full pl-[150px]">
        <header className="w-[1230px] h-[107px] bg-bg-300 rounded-[20px] flex justi items-center px-[30px] justify-between">
          <h1 className=" text-white text-2xl font-bold">Extension</h1>
          <button className="w-[65px] h-[60px] bg-bg-200 rounded-[15px] justify-center items-center flex  focus:bg-bg-100 text-tx-100  hover:bg-bg-300 cursor-pointer hover:border-3 hover:border-bg-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="moon-img"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 22 22"
              alt="dark mode"
            >
              <g clip-path="url(#a)">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.98"
                  d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h22v22H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </button>
        </header>
      </div>
    </>
  );
};
export default Header;
