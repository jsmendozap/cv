import React from "react";
import { Card } from "antd";

const CardPub = ({ info }) => {
  return (
    <div className="mx-10 hover:shadow-md hover:rounded-md text-justify mt-4">
      <Card>
        <p
          className="font-semibold text-xl text-gray-600"
          style={{ fontFamily: "Inclusive Sans" }}
        >
          {info.name}
        </p>
        <p className="text-lg font-medium" style={{ fontFamily: "Mukta" }}>
          {info.auth}
        </p>
        <p className="text-base" style={{ fontFamily: "Mukta" }}>
          DOI: {info.doi}
        </p>
      </Card>
    </div>
  );
};

export default CardPub;
