import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Polyline,
  FeatureGroup,
  GeoJSON,
  Popup,
  Tooltip,
} from "react-leaflet";

export default function Map() {
  const [geo, setGeo] = useState([]);

  const [districte, setDistricte] = useState("");

  const changeStyle = (dis) => {
    setDistricte(dis);
  };
  const backStyle = () => {
    setDistricte("");
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => {
        layer.setStyle({ fillColor: feature.properties.color });
      },
      mouseout: (e) => {
        layer.setStyle({ fillColor: "grey" });
      },
      click: (e) => {
        window.open(feature.properties.WEB_1, "_blank");
      },
    });
  };

  function getGeoDades() {
    fetch("districtes_geo.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setGeo(data.features);
        //console.log(geo);
      });
  }

  useEffect(() => {
    getGeoDades();
  }, []);

  const center = [41.390205, 2.154007];

  return (
    <div className="App-header">
      <h1>{districte}</h1>
      <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geo.map((element) => {
          return (
            <GeoJSON
              key={element.properties.N_Distri}
              data={element}
              eventHandlers={{
                mouseover: () => {
                  changeStyle(element.properties.N_Distri);
                },
                mouseout: () => {
                  backStyle();
                },
              }}
              pathOptions={{
                color: "grey",
              }}
              onEachFeature={onEachFeature}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
