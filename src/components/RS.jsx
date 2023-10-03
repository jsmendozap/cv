import React from "react";
import { useLang } from "../context/Lang";
import fnf_en from "../media/fnf_en.gif";
import fnf_es from "../media/fnf_es.gif";

const RS = ({ info }) => {
  const { lang } = useLang();

  return (
    <div>
      <p
        className="text-justify text-lg mt-6 mx-6"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[0] : info.es.text[0]}
      </p>
      <img src={lang === "en" ? fnf_en : fnf_es} className="h-72" />
    </div>
  );
};

export default RS;
