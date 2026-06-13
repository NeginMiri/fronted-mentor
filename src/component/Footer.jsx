import { createElement } from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <h1 className=" flex text text-[22px] text-tx-400 mr-1.5">
          Project page, and code written by
        </h1>
        <a className="flex text text-[22px] text-white cursor-pointer mr-1">
          Negin
        </a>
        <a className=" text text-[22px] text-white cursor-pointer ">Ahoura</a>
      </div>
      <div className="w-full flex justify-center">
        <h1 className="flex text text-[22px] text-tx-400 mr-1.5">
          Designed by
        </h1>
        <a className="flex text text-[22px] text-white mr-1.5">
          Fronted Mentor
        </a>
      </div>
    </>
  );
  
};
export default Footer;
