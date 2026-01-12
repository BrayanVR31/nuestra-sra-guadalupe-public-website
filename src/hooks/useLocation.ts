import { useEffect, useState } from "react"

export default function useLocation() {
  const [currentPosition, setCurrentPosition] = useState<[lat: number, long: number] | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition([latitude, longitude]);
    }, (e) => e)
  }, []);
}