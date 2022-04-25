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
  
  const coloresBase = { color: 'grey' }

  const [districte, setDistricte] = useState();

  function getGeoDades() {
    fetch("districtes_geo.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setGeo(data.features);
        console.log(geo);
      });
  }

  useEffect(() => {
    getGeoDades();
  }, []);

  const center = [41.390205, 2.154007];

  return (
    <MapContainer center={center} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
   
      {geo.map((element) => {
        return (
            

        <FeatureGroup pathOptions={coloresBase}>
        <Tooltip sticky>{element.properties.N_Distri}</Tooltip>
        
        <GeoJSON 
      
        key={element.properties.C_Distri} 
        data={element} 
        />
       </FeatureGroup>
      
    
        );
      })}
    </MapContainer>
  );
}
