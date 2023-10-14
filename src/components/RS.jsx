import React, { useEffect, useState } from "react";
import { useLang } from "../context/Lang";
import LollipopChart from "./LollipopChart";

const RS = ({ info }) => {
  const { lang } = useLang();
  const [year, setYear] = useState(2017);

  useEffect(() => {
    const interval = setInterval(() => {
      setYear((prevYear) => (prevYear === 2020 ? 2017 : prevYear + 1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p
        className="text-justify text-lg mt-6 lg:mx-6"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[0] : info.es.text[0]}
      </p>
      <LollipopChart year={year} />
    </div>
  );
};

export default RS;
