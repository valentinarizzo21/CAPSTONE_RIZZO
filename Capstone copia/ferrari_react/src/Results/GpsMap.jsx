import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const GPIcon = new L.Icon({
  iconUrl: "src/assets/img/LocationMark.png",
  iconSize: [20, 30],
  iconAnchor: [12, 35],
  popupAnchor: [0, -35],
});

const gpLocations = [
  { name: "Melbourne", lat: -37.8497, lng: 144.968 },
  { name: "Shanghai", lat: 31.3389, lng: 121.22 },
  { name: "Suzuka", lat: 34.8431, lng: 136.5411 },
  { name: "Sakhir", lat: 26.0325, lng: 50.5106 },
  { name: "Jeddah", lat: 21.6319, lng: 39.1044 },
  { name: "Miami", lat: 25.958, lng: -80.2389 },
  { name: "Imola", lat: 44.3439, lng: 11.7167 },
  { name: "Montecarlo", lat: 43.7347, lng: 7.4206 },
  { name: "Barcellona", lat: 41.57, lng: 2.2611 },
  { name: "Montreal", lat: 45.5, lng: -73.5228 },
  { name: "Spielberg", lat: 47.2197, lng: 14.6811 },
  { name: "Silverstone", lat: 52.0786, lng: -1.0169 },
  { name: "Spa-Francorchamps", lat: 50.4372, lng: 5.9714 },
  { name: "Budapest", lat: 47.5789, lng: 19.2486 },
  { name: "Zandvoort", lat: 52.3886, lng: 4.5406 },
  { name: "Monza", lat: 45.6156, lng: 9.2811 },
  { name: "Baku", lat: 40.3723, lng: 49.8533 },
  { name: "Singapore", lat: 1.2914, lng: 103.8642 },
  { name: "Austin", lat: 30.1328, lng: -97.6411 },
  { name: "Città del Messico", lat: 19.4042, lng: -99.0907 },
  { name: "San Paolo", lat: -23.7036, lng: -46.6997 },
  { name: "Las Vegas", lat: 36.1708, lng: -115.1456 },
  { name: "Lusail", lat: 25.4914, lng: 51.4522 },
  { name: "Abu Dhabi", lat: 24.4672, lng: 54.6031 },
];

const GpsMap = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={6}
      style={{ height: "50vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

      {gpLocations.map((gp, index) => (
        <Marker key={index} position={[gp.lat, gp.lng]} icon={GPIcon}>
          <Popup>{gp.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GpsMap;
