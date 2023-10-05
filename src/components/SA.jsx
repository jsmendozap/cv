import React from "react";
import { useLang } from "../context/Lang";
import kriging from "../media/kriging.png";

const SA = ({ info }) => {
  const { lang } = useLang();

  return (
    <div>
      <p
        className="text-justify text-lg mt-6 mx-6 mb-8"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[1] : info.es.text[1]}
      </p>
      <img src={kriging} className="h-60 cursor-pointer ml-5" />
    </div>
  );
};

export default SA;
