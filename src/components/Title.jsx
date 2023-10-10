import React from "react";
import { useLang } from "../context/Lang";

const Title = ({ title, subtitle }) => {
  const { lang } = useLang();

  return (
    <div className="text-left pb-5 border-b-2 border-gray-200">
      <h2
        className="font-bold text-gray-900 text-4xl lg:text-5xl pb-2"
        style={{ fontFamily: "Bree Serif" }}
      >
        {lang === "en" ? title.en : title.es}
      </h2>
      <h3 className="text-red-700" style={{ fontFamily: "Inclusive Sans" }}>
        {lang === "en" ? subtitle.en : subtitle.es}
      </h3>
    </div>
  );
};

export default Title;
