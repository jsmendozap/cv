import React from "react";
import foto from "../media/Foto2.jpeg";
import { useLang } from "../context/Lang";
import email from "../media/gmail.png";
import gh from "../media/github.png";
import linkedin from "../media/linkedin.png";
import Title from "../components/Title";

const About = ({ title, subtitle, info }) => {
  const { lang } = useLang();

  return (
    <div className="mx-8 sm:mx-16 lg:ml-72 lg:mr-20 xl:ml-96 xl:mr-32 xl:mt-16">
      <Title title={title} subtitle={subtitle} />
      <div className="lg:flex lg:flex-row mt-10 lg:h-96">
        <div className="flex justify-center lg:w-screen lg:mr-16  xl:mt-10">
          <img
            src={foto}
            alt="foto"
            className="h-64 xl:h-max xl:w-80 border-2 border-gray-200 rounded-md mb-6"
          />
        </div>
        <div className="flex flex-col">
          <div className="pb-5 border-b-2 border-red-100  xl:pb-12 xl:mb-5">
            <div style={{ fontFamily: "Inclusive Sans" }}>
              <p className="font-semibold text-2xl lg:text-3xl pb-2 xl:mb-3 xl:text-4xl">
                {lang === "en" ? info.en[0] : info.es[0]}
              </p>
            </div>
            <p
              className="text-justify text-lg pt-6"
              style={{ fontFamily: "Mukta" }}
            >
              {lang === "en" ? info.en[1] : info.es[1]}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-4 lg:mb-9 text-left lg:place-content-around">
            <p className="flex lg:mb-1 mb-3">
              <img src={email} alt="e-mail" className="w-5 h-5 mr-2" />
              <span>jsmendozap@gmail.com</span>
            </p>
            <p className="lg:mb-1 mb-3">
              <a
                className="flex"
                href="https://github.com/jsmendozap"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gh} alt="GitHub" className="w-5 h-5 mr-2" />
                <span>@jsmendozap</span>
              </a>
            </p>
            <p>
              <a
                className="flex"
                href="https://www.linkedin.com/in/jsmendozap/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Linkdin" className="w-5 h-5 mr-2" />
                <span>Juan Mendoza</span>
              </a>
            </p>
          </div>
          <div className="text-right mr-5 sm:mr-24 sm:mt-5 mb-10">
            <span className="rounded-full p-3 bg-gray-500 hover:bg-gray-600 text-gray-200 font-semibold w-32">
              <a href={lang === "en" ? "CV.pdf" : "HV.pdf"} download="CV.pdf">
                {lang === "en" ? "Download CV" : "Descargar CV"}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
