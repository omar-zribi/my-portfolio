import React from "react";
import MyPhoto from "../photo/my-photo.jpg";
import logocss from "../photo/logocss.png";
import logoes6 from "../photo/logoes6.png";
import logohtml from "../photo/logohtml.png";
import logojs from "../photo/logojs.png";
import logonodejs from "../photo/logonodejs.png";
import logoreact from "../photo/logoreact.png";
import logotailwindcss from "../photo/logotailwindcss.png";

const Home = () => {
  return (
    <div>
      <h2 className="font-bold text-green-500 mt-[14%] ml-[5%] text-6xl absolute">
        Full stack javascript
      </h2>
      <h4 className="font-bold text-black mt-[19%] ml-[6%] text-2xl absolute">
        coding is not just a job, <br />
        It is the art of playing on the computer to make life easier
      </h4>
      <img
        className="h-96 left-[70%] top-[25%] absolute rounded-full"
        src={MyPhoto}
        alt="MyPhoto"
      />
      <div className="absolute mt-[37%] mx-[10%]">
        <span className="flex">
          <img className="h-32 m-2" src={logohtml} alt="logohtml5" />
          <img className="h-32 m-2" src={logojs} alt="logojs" />
          <img className="h-32 m-2" src={logoes6} alt="logoes6" />

          {/* </span>
      <span className="flex"> */}
          <img className="h-32 m-2" src={logocss} alt="logocss3" />
          <img
            className="h-32 m-2"
            src={logotailwindcss}
            alt="logotailwindcss"
          />

          {/* </span>
      <span className="flex"> */}
          <img className="h-32 m-2" src={logoreact} alt="logoreact" />
          <img className="h-32 m-2" src={logonodejs} alt="logonodejs" />
        </span>
      </div>
    </div>
  );
};

export default Home;
