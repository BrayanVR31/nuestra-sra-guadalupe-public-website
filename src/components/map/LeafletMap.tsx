import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { MapOptions } from "leaflet";
import useLocation from "../../hooks/useLocation";
import RoutingMachine from "./RoutingMachine";

const defaultMapContainerOptions: MapOptions = {
  zoom: 18,
  scrollWheelZoom: true,
};

type Props = {
  routingUrl: string;
};

export default function LeafletMap({ routingUrl }: Props) {
  const userLocation: [number, number] = useLocation() ?? [19.0414, -98.2063];
  const destinationLocation: [number, number] = [18.9773528, -98.2456837];
  return (
    <MapContainer
      {...defaultMapContainerOptions}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      center={destinationLocation}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RoutingMachine
        originPosition={destinationLocation}
        destinationPosition={userLocation}
        routingUrl={routingUrl}
      />
      {/** User position marker(pin) */}
      <Marker position={userLocation}>
        <Popup>Tu Ubicación</Popup>
      </Marker>
      {/** Destination position marker(pin) */}
      <Marker position={destinationLocation}>
        <Popup>Parroquia de Nuestra Sra. de Guadalupe</Popup>
      </Marker>
    </MapContainer>
  );
}
