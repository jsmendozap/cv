import React from "react";
import Publications from "../pages/Publications";

const Section = ({ id, component }) => {
  const style = { all: "h-screen w-screen", pub: "w-screen" };

  return (
    <section id={id} className={id === "publications" ? style.pub : style.all}>
      {component}
    </section>
  );
};

export default Section;
