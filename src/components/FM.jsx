import React from "react";
import { useLang } from "../context/Lang";

const FM = ({ info }) => {
  const { lang } = useLang();

  return (
    <div>
      <p
        className="text-justify text-lg mt-6 lg:mx-6 mb-8"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[2] : info.es.text[2]}
      </p>
    </div>
  );
};

export default FM;
