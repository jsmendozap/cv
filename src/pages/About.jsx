import React from "react";
import foto from "../media/Foto.jpg";
import { useLang } from "../context/Lang";
import email from "../media/gmail.png";
import gh from "../media/github.png";
import linkedin from "../media/linkedin.png";
import Title from "../components/Title";
import grad from "../media/mortarboard.png";

const About = ({ title, subtitle, info }) => {
  const { lang } = useLang();

  return (
    <div className="mt-8 ml-72 mr-16">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-row mt-10 h-96">
        <img
          src={foto}
          alt="foto"
          className="h-80 mr-20 border-2 border-gray-200 rounded-md"
        />
        <div className="flex flex-col">
          <div className="pb-5 border-b-2 border-red-100">
            <div style={{ fontFamily: "Inclusive Sans" }}>
              <p className="font-semibold text-3xl pb-2">
                {lang === "en" ? info.en[0] : info.es[0]}
              </p>
              <div className="flex">
                <img src={grad} alt="graduate" className="w-5 mr-2" />
                <span className="font-semibold text-xl">
                  {lang === "en" ? info.en[1] : info.es[1]}
                </span>
              </div>
            </div>
            <p
              className="text-justify text-lg pt-6"
              style={{ fontFamily: "Mukta" }}
            >
              {lang === "en" ? info.en[2] : info.es[2]}
            </p>
          </div>
          <div className="flex mt-4 mb-9 text-left place-content-around">
            <p className="flex mb-1">
              <img src={email} alt="e-mail" className="w-5 h-5 mr-2" />
              <span>jsmendozap@gmail.com</span>
            </p>
            <p className="mb-1">
              <a
                className="flex"
                href="https://github.com/jsmendozap"
                target="_blank"
                rel="nonreferrer"
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
                rel="nonreferrer"
              >
                <img src={linkedin} alt="Linkdin" className="w-5 h-5 mr-2" />
                <span>Juan Mendoza</span>
              </a>
            </p>
          </div>
          <span className="rounded-full p-3 bg-gray-500 hover:bg-gray-600 text-gray-200 font-semibold w-32 ml-96">
            <a href={lang === "en" ? "CV.pdf" : "HV.pdf"} download="CV.pdf">
              {lang === "en" ? "Download CV" : "Descargar CV"}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
