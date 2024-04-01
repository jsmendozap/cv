import React from "react";
import Section from "./Section";
import info from "../info";

const Body = () => {
  return (
    <div className="w-full w-5/6 flex flex-col justify-center items-center lg:flex-grow overflow-x-hidden">
      {info.map((el) => {
        return (
          <Section
            id={el.id}
            key={el.id}
            component={
              <el.component
                info={el.info}
                title={el.title}
                subtitle={el.subtitle}
              />
            }
          />
        );
      })}
    </div>
  );
};

export default Body;
