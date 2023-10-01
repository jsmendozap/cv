import React from "react";
import { useLang } from "../context/Lang";

const RS = ({ info }) => {
  const { lang } = useLang();

  return (
    <div className="flex">
      <p className="text-justify text-lg m-6" style={{ fontFamily: "Mukta" }}>
        {lang === "en" ? info.en.text[0] : info.es.text[0]}
      </p>
    </div>
  );
};

export default RS;
