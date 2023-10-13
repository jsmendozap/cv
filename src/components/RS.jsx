import React from "react";
import { useLang } from "../context/Lang";
import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";
import { LatLngBounds } from "leaflet";

const RS = ({ info }) => {
  const { lang } = useLang();

  const url = "http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg";
  const bounds = new LatLngBounds(
    [2.64, -73.4415555555556],
    [1.60422222222222, -74.7488888888889]
  );

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
          <ImageOverlay url={url} bounds={bounds} alt="prueba" opacity={0.4} />
        </MapContainer>
      </div>
    </div>
  );
};

export default RS;
