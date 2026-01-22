import { useEffect, useState } from "react";

type Coordinates = [latitude: number, longitude: number];
type GeoSupport =
  | {
      type: "supported";
      geolocation: Geolocation;
    }
  | {
      type: "error";
      error: Error;
    };

/**
 * Verify fully support for older browser
 * on Geolocation API.
 */
function geoLocationSupport(): GeoSupport {
  if (!window.navigator.geolocation)
    return {
      type: "error",
      error: new Error("Your browser doesn't support Geolocation services."),
    };
  return {
    type: "supported",
    geolocation: window.navigator.geolocation,
  };
}

const positionOptions: PositionOptions = {
  enableHighAccuracy: true,
  timeout: 10_000, // 10s
  maximumAge: 0,
};

/**
 * This hook return the coordinates of browser user
 * or current position (lat, long)
 */
export default function useGeoLocation(): Coordinates | null {
  const [coords, setCoords] = useState<Coordinates | null>(null);
  useEffect(() => {
    const geoSupport = geoLocationSupport();
    // Debugging support errors here
    if (geoSupport.type === "error") return;
    const { geolocation } = geoSupport;
    // Geolocation event handlers (success & error)
    const success: PositionCallback = (geoPos) => {
      const {
        coords: { latitude, longitude },
      } = geoPos;
      setCoords([latitude, longitude]);
    };
    const error: PositionErrorCallback = () => {};
    const geoId = geolocation.watchPosition(success, error, positionOptions);
    return () => geolocation.clearWatch(geoId);
  }, []);
  return coords;
}
