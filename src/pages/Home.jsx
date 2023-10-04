import React from "react";
import forest from "../media/forest.jpg";
import ReactTyped from "react-typed";
import { useLang } from "../context/Lang";

const Home = ({ info }) => {
  const { lang } = useLang();

  return (
    <div>
      <img src={forest} alt="forest" className="h-screen w-screen" />
      <div className="absolute top-24 left-1/3 ml-10 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-600">
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
      </div>
    </div>
  );
};

export default Home;
