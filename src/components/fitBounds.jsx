import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const FitBounds = ({ places }) => {
  const map = useMap();

  useEffect(() => {
    if (!places.length) return;

    if (places.length === 1) {
      // Single result → center directly
      map.setView([places[0].lat, places[0].long], 12); // zoom in
    } else {
      // Multiple results → fit bounds
      const bounds = L.latLngBounds(
        places.map((p) => [p.lat, p.long])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [places, map]);

  return null;
};

export default FitBounds;
