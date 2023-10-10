import React, { useState } from "react";
import { useLang } from "../context/Lang";
import fnf_en from "../media/fnf_en.gif";
import fnf_es from "../media/fnf_es.gif";
import { Modal } from "antd";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoTiff from "./GeoTiff";

const RS = ({ info }) => {
  const { lang } = useLang();
  const [isOpen, setOpen] = useState(false);

  /*
<img
  src={lang === "en" ? fnf_en : fnf_es}
  className="h-72 cursor-pointer"
  onClick={() => {
    setOpen(true);
  }}
/>
*/
  const handleOk = () => {
    setOpen(false);
  };

  return (
    <div>
      <p
        className="text-justify text-lg mt-6 lg:mx-6"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[0] : info.es.text[0]}
      </p>
      <div id="map" className="w-96 mt-5 ml-6">
        <MapContainer center={[4, -75]} className="h-52 rounded-md" zoom={3}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
        </MapContainer>
      </div>
      <Modal
        width={750}
        open={isOpen}
        closable={false}
        footer={(_, { OkBtn }) => (
          <>
            <OkBtn className="bg-gray-800" />
          </>
        )}
        onOk={handleOk}
        okButtonProps={{ className: "bg-gray-700" }}
      >
        <img src={lang === "en" ? fnf_en : fnf_es} />
      </Modal>
    </div>
  );
};

export default RS;
