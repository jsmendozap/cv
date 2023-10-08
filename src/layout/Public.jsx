import React from "react";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import MobileMenu from "../components/MobileMenu";
import { FloatButton } from "antd";
import translate from "../media/translation.png";
import uk from "../media/united-kingdom.png";
import spain from "../media/spain.png";
import { useLang } from "../context/Lang";

const Public = () => {
  const screenWidth = window.innerWidth >= 1151;
  const { setLang } = useLang();

  return (
    <div>
      {screenWidth ? (
        <div className="flex flex-row">
          <Sidebar />
          <Body />
        </div>
      ) : (
        <div>
          <MobileMenu />
          <Body />
          <FloatButton.Group
            trigger="click"
            type="default"
            style={{ right: 20 }}
            icon={<img src={translate} alt="img" />}
          >
            <FloatButton
              icon={<img src={spain} alt="uk" />}
              onClick={() => setLang("es")}
            />
            <FloatButton
              icon={<img src={uk} alt="uk" />}
              onClick={() => setLang("en")}
            />
          </FloatButton.Group>
        </div>
      )}
    </div>
  );
};

export default Public;
