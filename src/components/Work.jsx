import React from "react";
import { Card } from "antd";

const Work = ({ info }) => {
  return (
    <div className="lg:mx-10 hover:shadow-md hover:rounded-md text-justify">
      <Card>
        <p
          className="font-semibold text-xl text-gray-500 text-left"
          style={{ fontFamily: "Inclusive Sans" }}
        >
          {info.rol}
        </p>
        <p className="text-lg font-semibold" style={{ fontFamily: "Mukta" }}>
          {info.place}
        </p>
        <p className="text-base" style={{ fontFamily: "Mukta" }}>
          {info.date}
        </p>
        <p className="text-base" style={{ fontFamily: "Mukta" }}>
          {info.description}
        </p>
      </Card>
    </div>
  );
};

export default Work;
