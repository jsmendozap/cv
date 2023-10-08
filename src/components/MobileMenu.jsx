import React from "react";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Label from "./Label";
import { useLang } from "../context/Lang";

const MobileMenu = () => {
  const { lang } = useLang();

  const items = [
    {
      label: "",
      icon: <MenuOutlined />,
      children: [
        {
          label: <Label id="#home" label={lang === "es" ? "Inicio" : "Home"} />,
        },
        {
          label: (
            <Label id="#about" label={lang === "es" ? "Acerca" : "About"} />
          ),
        },
        {
          label: (
            <Label
              id="#interest"
              label={lang === "es" ? "Intereses" : "My Interests"}
            />
          ),
        },
        {
          label: (
            <Label
              id="#experiences"
              label={lang === "es" ? "Experiencia laboral" : "Work Experience"}
            />
          ),
        },
        {
          label: (
            <Label
              id="#publications"
              label={lang === "es" ? "Publicaciones" : "Publications"}
            />
          ),
        },
      ],
    },
    {
      label: (
        <span className="font-semibold pl-10">Juan Sebastián Mendoza Páez</span>
      ),
    },
  ];

  return (
    <div className="fixed top-0 w-full">
      <Menu mode="horizontal" items={items} />
    </div>
  );
};

export default MobileMenu;
