import React, { useEffect, useState } from "react";
import fnf from "../assets/fnf.json";
import Plot from "react-plotly.js";
import { useLang } from "../context/Lang";
import fnf_2017 from "../media/2017.png";
import fnf_2018 from "../media/2018.png";
import fnf_2019 from "../media/2019.png";
import fnf_2020 from "../media/2020.png";

const LollipopChart = ({ year }) => {
  const { lang } = useLang();
  const [img, setImg] = useState(null);

  useEffect(() => {
    // Cargar la imagen según el año
    let imgSrc;
    switch (year) {
      case 2017:
        imgSrc = fnf_2017;
        break;
      case 2018:
        imgSrc = fnf_2018;
        break;
      case 2019:
        imgSrc = fnf_2019;
        break;
      case 2020:
        imgSrc = fnf_2020;
        break;
    }
    setImg(imgSrc);
  }, [year]);

  const data = {};

  fnf.forEach((item) => {
    const { time, lc, n, area, lc_es } = item;

    if (!data[time]) {
      data[time] = [];
    }

    data[time].push({
      x: area,
      y: lang === "es" ? lc_es : lc,
    });
  });

  const filterData = [year].map((item) => [item, data[item]])[0][1];

  const plot = [
    {
      x: filterData.map((dato) => dato.x),
      y: filterData.map((dato) => dato.y),
      type: "scatter",
      mode: "markers",
      marker: { color: "red" },
    },
  ];

  const shapes = filterData.map((dato) => ({
    type: "line",
    xref: "x",
    yref: "y",
    x0: 0,
    x1: dato.x,
    y0: dato.y,
    y1: dato.y,
    line: {
      color: "grey",
      width: 1,
    },
  }));

  const layout = {
    width: 360,
    height: 300,
    xaxis: {
      title: lang === "es" ? "Área (Km<sup>2</sup>)" : "Area (Km<sup>2</sup>)",
    },
    title: {
      text:
        lang === "es"
          ? `Mapa bosque - no bosque <br><sup>La Macarena, Meta - año: ${year}</sup>`
          : `Forest/no Forest Map <br><sup>La Macarena, Meta - year: ${year}</sup>`,
      font: { family: "Bree Serif", size: 20 },
      x: 0.3,
      y: 0.9,
    },
    shapes,
    margin: { l: 120, t: 70, b: 100, r: 30 },
  };

  return (
    <div className="flex flex-row">
      <Plot data={plot} layout={layout} config={{ displayModeBar: false }} />
      <div>
        <img src={img} alt="img" className="w-72 h-60 pt-3 mr-5" />
        <div className="mt-2">
          <span
            className="font-semibold"
            style={{ fontFamily: "Inclusive Sans" }}
          >
            {lang === "es" ? "Fuente: " : "Source: "}
          </span>
          <span style={{ fontFamily: "Mukta" }}>
            Google Earth Engine - JAXA EORC
          </span>
        </div>
      </div>
    </div>
  );
};

export default LollipopChart;
