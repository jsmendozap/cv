import React from "react";
import Title from "../components/Title";
import CardPub from "../components/CardPub";
import { useLang } from "../context/Lang";

const Publications = ({ title, subtitle, info }) => {
  const { lang } = useLang();
  const items = lang === "en" ? info.en : info.es;

  return (
    <div className="lg:mt-32 mb-32 lg:ml-72 lg:mr-16 mx-8 sm:mx-16 xl:ml-96 xl:mr-32 xl:mt-20">
      <Title title={title} subtitle={subtitle} />
      <div className="my-10">
        {items.map((el, index) => {
          return <CardPub info={el} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Publications;
