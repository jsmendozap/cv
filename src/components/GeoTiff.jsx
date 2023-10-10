import { useEffect, useRef, useState } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import { useMap } from "react-leaflet";
import parseGeoraster from "georaster";

const GeoTiff = ({ file }) => {
  const geoTiffLayerRef = useRef();
  const context = useLeafletContext();
  const map = useMap();

  useEffect(() => {
    const container = context.layerContainer || context.map;

    fetch(file)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        parseGeoraster(arrayBuffer).then((georaster) => {
          console.log("georaster:", georaster);
          options.georaster = georaster;
          geoTiffLayerRef.current = new GeoRasterLayer(options);
          container.addLayer(geoTiffLayerRef.current);

          map.fitBounds(geoTiffLayerRef.current.getBounds());
        });
      });

    return () => {
      container.removeLayer(geoTiffLayerRef.current);
    };
  }, [context, file, map]);

  return null;
};

export default GeoTiff;
