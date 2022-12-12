import React from "react";
import CVOmarZRIBI from "../file/CvOmarZribi.pdf";
import OmarZribiCertif from "../file/OmarZribiCertif.pdf";

const Whoiam = () => {
  return (
    <div className="flex">
      <span className="mt-10">
        <div className=" absolute mt-[7.5%] ml-[4%] w-[500px]">
          <h6 className="underline decoration-double text-[25px]">Introduce</h6>
          <h4 className="font-bold text-[33px]">Hello, I'm Omar Zribi</h4>
          <h4 className="text-[33px]">
            Creative and passionate about the world of web development which has
            always been my vacation. <br />I was able to develop my technical
            skills and master the various tools in a self-taught way in addition
            to my studies at the go my code training center
          </h4>
        </div>
        <div className=" absolute mt-[15%] ml-[45%] w-[500px]">
          <h1 className="font-bold h-[60px] w-[800px] text-center  text-green-400 text-4xl">
            WEB DEVELOPPER
          </h1>
          <span>
            <h1 className="font-bold h-[60px] w-[800px] border-4 my-4 border-double border-green-400 text-4xl">
              I develop Front-End with React js
            </h1>
          </span>
          <span>
            <h1 className="font-bold h-[60px] w-[800px] border-4 my-4 border-double border-green-400 text-4xl ">
              I develop Back-End with Node js && Express
            </h1>
          </span>
          <a href={CVOmarZRIBI} download="CVOmarZRIBI.pdf">
          <button className="ml-[52%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[250px] px-10
          hover:bg-black hover:text-green-400">
              download my cv
          </button>
            </a>
            <a href={CVOmarZRIBI} target="blank">
          <button className="ml-[52%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[250px] px-10
          hover:bg-black hover:text-green-400">
              show my cv
          </button>
            </a>
            <a href={OmarZribiCertif} download="OmarZribiCertif.pdf">
          <button className="ml-[52%] bg-green-400 rounded-[100px] text-center text-[17.5px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[250px] px-10
          hover:bg-black hover:text-green-400">
              download my certif
          </button>
            </a>
            <a href={OmarZribiCertif} target="blank">
          <button className="ml-[52%] bg-green-400 rounded-[100px] text-center text-[17.5px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[250px] px-10
          hover:bg-black hover:text-green-400">
              show my certif
          </button>
            </a>
        </div>
      </span>
    </div>
  );
};

export default Whoiam;
