import React from "react";
import Title from "../components/Title";
import { Tabs } from "antd";
import satellite from "../media/satellite.png";
import forest from "../media/forest.png";
import continents from "../media/continents.png";
import { useLang } from "../context/Lang";
import RS from "../components/RS";
import SA from "../components/SA";
import FM from "../components/FM";

const Interest = ({ title, subtitle, info }) => {
  const { lang } = useLang();
  const screenWidth = window.innerWidth >= 1150;

  const items = [
    {
      key: "1",
      label: (
        <span className="flex">
          <img src={satellite} alt="satellite" className="w-8 lg:mr-2" />
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
      children: <SA info={info} />,
    },
    {
      key: "3",
      label: (
        <span className="flex">
          <img src={forest} alt="Forest" className="w-8 mr-2" />
          {lang === "en" ? info.en.label[2] : info.es.label[2]}
        </span>
      ),
      children: <FM info={info} />,
    },
  ];

  return (
    <div className="lg:mt-8 lg:ml-72 lg:mr-16 max-md:m-5">
      <Title title={title} subtitle={subtitle} />
      <div className="flex flex-row mt-10 h-96">
        <Tabs
          animated={true}
          tabPosition={screenWidth ? "left" : "top"}
          items={items}
          className="max-md:w-80"
          tabBarGutter={50}
        />
      </div>
    </div>
  );
};

export default Interest;
