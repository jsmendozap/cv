import React from "react";
import { Timeline } from "antd";
import Title from "../components/Title";
import Work from "../components/Work";
import { useLang } from "../context/Lang";

const Experiences = ({ title, subtitle, info }) => {
  const { lang } = useLang();
  const items = lang === "en" ? info.en : info.es;

  return (
    <div className="lg:mt-8 mt-32 md:mt-40 mx-8 sm:mx-16 lg:ml-72 lg:mr-16 xl:ml-96 xl:mr-32 xl:mt-24">
      <Title title={title} subtitle={subtitle} />
      <div className="mt-10 lg:ml-10">
        <Timeline>
          {items.map((el) => {
            return (
              <Timeline.Item key={el.id}>
                <Work info={el} />
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Experiences;
