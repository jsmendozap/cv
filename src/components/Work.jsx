import React from "react";
import { Card } from "antd";

const Work = ({ info }) => {
  return (
    <div className="hover:shadow-md hover:rounded-md">
      <Card>
        <p>{info.rol}</p>
        <p>{info.date}</p>
        <p>{info.place}</p>
        <p>{info.city}</p>
        <p>{info.description}</p>
      </Card>
    </div>
  );
};

export default Work;
