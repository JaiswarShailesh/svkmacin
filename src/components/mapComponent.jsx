import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
// import { allSvkmInstitutes, getAllInstitutes, getMumbaiCampuses } from "../data/mapData";
import allSvkmInstitutes, { getAllDistrict } from "../data/mapData";
import "leaflet/dist/leaflet.css";
import Fuse from "fuse.js";
import FitBounds from "./fitBounds";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen";

const MapComponent = () => {
  const [stateFilter, setStateFilter] = useState("All");
  const [districtFilter, setDistrictFilter] = useState("All"); // selected district
  const [districtOptions, setDistrictOptions] = useState([]); // list of districts
  const [searchTerm, setSearchTerm] = useState("");

  const fuse = new Fuse(allSvkmInstitutes, {
    keys: ["name", "fullName", "state", "district", "shortName"], // search these fields
    threshold: 0.3, // lower = stricter matches
  });

  let filtered = allSvkmInstitutes;

  if (stateFilter !== "All") {
    filtered = filtered.filter((inst) => inst.state === stateFilter);
  }

  if (districtFilter !== "All") {
    filtered = filtered.filter((inst) => inst.district === districtFilter);
  }

  if (searchTerm.trim()) {
    const lowerTerm = searchTerm.toLowerCase();

    // exact matches across fields
    const exactMatches = allSvkmInstitutes.filter(
      (inst) =>
        inst.name.toLowerCase() === lowerTerm ||
        inst.fullName.toLowerCase() === lowerTerm ||
        (inst.shortName && inst.shortName.toLowerCase() === lowerTerm)
    );

    if (exactMatches.length > 0) {
      filtered = exactMatches;
    } else {
      filtered = fuse.search(searchTerm).map((result) => result.item);
    }
  }
  // if (searchTerm.trim()) {
  //   filtered = fuse.search(searchTerm).map((result) => result.item);
  // }

  useEffect(() => {
    setDistrictOptions(getAllDistrict());
  }, []);

  return (
    <div className="container-fluid border overflow-auto p-0 position-relative">
      <MapContainer
        center={[19.076, 72.8777]}
        doubleClickZoom={true}
        zoomControl={false}
        zoom={5}
        scrollWheelZoom={true}
        keyboard={true}
        boxZoom={true}
        maxBounds={[
          [90, -180],
          [-90, 180],
        ]}
        fullscreenControl={true}
        fullscreenControlOptions={{
          position: "bottomleft", // 👈 move control bottom left
        }}
        style={{ height: "400px", width: "100%" }}
      >
        <div
          className="row position-absolute p-2 w-100"
          style={{ zIndex: "401" }}
        >
          <div className="col-6 col-lg-3">
            <select
              value={districtFilter}
              onChange={(e) => setDistrictFilter(e.target.value)}
              className="form-select form-select-sm"
            >
              <option value="All">All Districts</option>
              {districtOptions.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6 col-lg-3">
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Search campuses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          subdomains={["a", "b", "c", "d"]}
          detectRetina={true} // 👈 makes it sharp on retina/HD screens
        />

        <FitBounds places={filtered} />

        {filtered.map((inst) => {
          const customIcon = L.icon({
            iconUrl: inst.markerIcon, // 👈 image path from data
            iconSize: [40, 60], // size of the icon
            iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
            popupAnchor: [0, -40], // point from which the popup should open
          });

          return (
            <Marker
              key={inst.id}
              position={[inst.lat, inst.long]}
              icon={customIcon}
            >
              <Popup>
                {/* <strong>{inst.name}</strong> <br />
                {inst.fullName} <br />
                📍 {inst.city}, {inst.state} <br />
                🎓 {inst.category} */}
                <p>
                  <strong>{inst.fullName}</strong>{" "}
                </p>
                <a href={inst.website_url} className="fw-bold" target="_blank">
                  Go to website
                </a>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
