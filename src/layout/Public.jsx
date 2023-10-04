import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import MobileView from "../components/MobileView";

const Public = () => {
  const screenWidth = window.innerWidth >= 1150;
  return (
    <div>
      {screenWidth ? (
        <div className="flex flex-row">
          <Sidebar />
          <Body />
        </div>
      ) : (
        <MobileView />
      )}
    </div>
  );
};

export default Public;
