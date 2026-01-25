import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

type Position = [lat: number, long: number];

type Props = {
  originPosition: Position;
  destinationPosition: Position;
  routingUrl: string;
};

export default function RoutingMachine({
  originPosition,
  destinationPosition,
  routingUrl,
}: Props) {
  const map = useMap();
  const [origLat, origLong] = originPosition;
  const [destLat, destLong] = destinationPosition;

  useEffect(() => {
    if (!map) return;
    const waypoints: L.LatLng[] = [
      L.latLng(origLat, origLong),
      L.latLng(destLat, destLong),
    ];

    const routingControl = L.Routing.control({
      routeWhileDragging: false,
      plan: L.Routing.plan(waypoints, {
        createMarker: function (i, waypoint, n) {
          return null as any as boolean;
        },
        addWaypoints: false,
        draggableWaypoints: false,
      }),
      router: L.Routing.osrmv1({
        serviceUrl: routingUrl,
      }),
      lineOptions: {
        styles: [{ color: "#C40C0C", weight: 5, opacity: 0.7 }],
        extendToWaypoints: true,
        missingRouteTolerance: 10,
      },
      waypointMode: "snap",
      show: false,
    }).addTo(map);

    return () => {
      map.removeControl(routingControl);
    };
  }, [destLat, destLong]);

  return null;
}
