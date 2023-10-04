import React from "react";
import working from "../media/work-in-progress.png";

const MobileView = () => {
  return (
    <div className="m-20 flex flex-col place-items-center">
      <img src={working} alt="Work in progress" className="w-96" />
      <span className="mt-10 text-2xl" style={{ fontFamily: "Mukta" }}>
        Mobile view under construction. Please visit the webpage in a desktop
        device
      </span>
    </div>
  );
};

export default MobileView;
