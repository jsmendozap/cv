import React from "react";
import forest from "../media/forest.jpg";
import ReactTyped from "react-typed";
import { useLang } from "../context/Lang";

const Home = ({ info }) => {
  const { lang } = useLang();
  const screenWidth = window.innerWidth >= 1151;

  return (
    <div>
      <img
        src={forest}
        alt="forest"
        className="lg:h-screen h-32 sm:h-60 w-screen"
      />
      {screenWidth ? (
        <div className="absolute top-24 left-1/3 ml-10 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-xl font-bold text-green-600">
            Juan Sebastián Mendoza Páez
          </h1>
          <p className="mt-4 text-2xl text-gray-900 font-semibold">
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
