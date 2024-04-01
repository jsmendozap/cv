import React from "react";

const Section = ({ id, component }) => {
  const style = { all: "lg:h-screen w-screen", pub: "w-screen" };

  return (
    <section id={id} className={id === "publications" ? style.pub : style.all}>
      {component}
    </section>
  );
};

export default Section;
