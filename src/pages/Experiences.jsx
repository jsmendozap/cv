import React from "react";
import { Timeline } from "antd";
import Title from "../components/Title";
import Work from "../components/Work";
import { useLang } from "../context/Lang";

const Experiences = ({ title, subtitle, info }) => {
  const { lang } = useLang();
  const items = lang === "en" ? info.en : info.es;

  return (
    <div className="mt-8 ml-72 mr-16">
      <Title title={title} subtitle={subtitle} />
      <div className="mt-10 max-w max-h-96 overflow-y-auto p-4">
        <Timeline>
          {items.map((el) => {
            return (
              <Timeline.Item>
                <Work info={el} key={el.id} />
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
};

export default Experiences;
