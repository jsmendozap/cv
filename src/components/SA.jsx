import React from "react";
import { useLang } from "../context/Lang";
import tree from "../assets/tree_cover.json";
import Plot from "react-plotly.js";

const SA = ({ info }) => {
  const { lang } = useLang();

  const data = [
    {
      type: "choropleth",
      locationmode: "country names",
      locations: tree.map((item) => item.Country),
      z: tree.map((item) => item.Value),
      text: tree.map((item) => item.Country),
      colorbar: {
        title: {
          text: "Area (Km<sup>2</sup>)",
          font: { family: "Bree serif" },
        },
        thickness: 20,
      },
      marker: {
        line: {
          color: "rgb(255,255,255)",
          width: 0.1,
        },
      },
    },
  ];

  const layout = {
    title: {
      text:
        lang === "es"
          ? `Cobertura Forestal Mundial Año 2019`
          : `World Tree Forest Cover Year 2019`,
      font: { family: "Bree Serif", size: 20 },
      x: 0.11,
      y: 0.95,
    },
    width: 550,
    height: 300,
    geo: {
      projection: {
        type: "robinson",
      },
    },
    margin: { l: 0, t: 50, b: 50, r: 0 },
    annotations: [
      {
        x: 1.2,
        y: -0.15,
        xref: "paper",
        yref: "paper",
        text:
          lang === "es"
            ? "<b>Fuente</b>: Organización para la cooperación y desarrollo económico (OCDE)"
            : "<b>Source</b>: Organisation for economic co-operation and development (OECD)",
        showarrow: false,
        font: { family: "Bree Serif" },
      },
    ],
  };

  return (
    <div>
      <p
        className="text-justify text-lg mt-4 lg:mx-6 mb-4"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[1] : info.es.text[1]}
      </p>
      <div className="hidden md:block">
        <Plot data={data} layout={layout} config={{ displayModeBar: false }} />
      </div>
    </div>
  );
};

export default SA;
