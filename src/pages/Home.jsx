import React from "react";
import forest from "../media/forest.jpg";
import ReactTyped from "react-typed";
import { useLang } from "../context/Lang";

const Home = ({ info }) => {
  const { lang } = useLang();
  const screenWidth = window.innerWidth >= 1150;

  return (
    <div>
      <img src={forest} alt="forest" className="lg:h-screen h-32 w-screen" />
      {screenWidth ? (
        <div className="lg:absolute lg:top-24 lg:left-1/3 lg:ml-10 flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-xl font-bold text-green-600 max-md:mt-5">
            Juan Sebastián Mendoza Páez
          </h1>
          <p className="lg:mt-4 text-2xl text-gray-900 font-semibold">
            {""}
            <ReactTyped
              strings={lang === "es" ? info.es : info.en}
              typeSpeed={80}
              loop
            />
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
