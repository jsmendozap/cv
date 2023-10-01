import React from "react";
import Title from "../components/Title";
import { Tabs } from "antd";
import satellite from "../media/satellite.png";
import forest from "../media/forest.png";
import continents from "../media/continents.png";
import { useLang } from "../context/Lang";
import RS from "../components/RS";

const Interest = ({ title, subtitle, info }) => {
  const { lang } = useLang();

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={satellite} alt="satellite" className="w-8 mr-2" />
          {lang === "en" ? info.en.label[0] : info.es.label[0]}
        </span>
      ),
      children: <RS info={info} />,
    },
    {
      key: "2",
      label: (
        <span className="flex">
          <img src={continents} alt="Continets" className="w-8 mr-2" />
          {lang === "en" ? info.en.label[1] : info.es.label[1]}
        </span>
      ),
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: (
        <span className="flex">
          <img src={forest} alt="Forest" className="w-8 mr-2" />
          {lang === "en" ? info.en.label[2] : info.es.label[2]}
        </span>
      ),
      children: "Content of Tab Pane 5",
    },
  ];

  return (
    <div className="mt-8 ml-72 mr-16">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-row mt-10 h-96">
        <Tabs animated={true} tabPosition="left" items={items} />
      </div>
    </div>
  );
};

export default Interest;
