"use client";
import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { facilityData } from "../utils/mapData";  // Assuming facilityData is stored in this path

function DefaultPopup({ position }) {
  const map = useMap();
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
      map.setView(position, map.getZoom()); // Ensure the map view is centered on the position
    }
  }, [map, position]);

  return (
    <Marker position={position} ref={markerRef}>
      <Popup>Jashan Hall</Popup>
    </Marker>
  );
}

export default function MapView() {
  const center = [23.19190, 79.98600];  // Coordinates for JEC Main Building

  return (
    <MapContainer center={center} zoom={18} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <DefaultPopup position={center} />
      {facilityData.map((facility, idx) => (
        <Marker key={idx} position={facility.coordinates}>
          <Popup>{facility.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
