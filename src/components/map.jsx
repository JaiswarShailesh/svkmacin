"use client";
import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import * as d3Zoom from "d3-zoom";

const collegeData = [
  {
    name: "Mithibai College of Arts",
    district: "Mumbai",
    lat: 19.1075,
    lon: 72.8365,
  },
  {
    name: "SVKM Dwarkadas J. Sanghvi College of Engineering",
    district: "Mumbai",
    lat: 19.1079,
    lon: 72.8358,
  },
  {
    name: "SVKM’s Institute of Technology",
    district: "Dhule",
    lat: 21.1,
    lon: 74.7833,
  },
  {
    name: "SVKM's College of Engineering",
    district: "Shirpur",
    lat: 21.35,
    lon: 74.8833,
  },
  {
    name: "SVKM School Hyderabad",
    district: "Hyderabad",
    lat: 17.385,
    lon: 78.4867,
  },
];

const IndiaMapWithZoom = () => {
  const [features, setFeatures] = useState([]);
  const svgRef = useRef();
  const gRef = useRef();

  useEffect(() => {
    fetch("/india_district.geojson")
      .then((res) => res.json())
      .then((data) => setFeatures(data.features))
      .catch((err) => console.error("Error loading GeoJSON:", err));
  }, []);

  const width = 800;
  const height = 600;

  const projection = d3
    .geoMercator()
    .center([78.9629, 22.5937])
    .scale(1000)
    .translate([width / 2, height / 2]);

  const path = d3.geoPath().projection(projection);

  // Add zoom behavior
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    const zoom = d3Zoom
      .zoom()
      .scaleExtent([1, 8]) // Zoom range
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);
  }, []);

  const handleZoomToCollege = (college) => {
    const [x, y] = projection([college.lon, college.lat]);
    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    svg
      .transition()
      .duration(1000)
      .call(
        d3Zoom.zoom().transform,
        d3Zoom.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(4) // Zoom level
          .translate(-x, -y)
      );
  };

  return (
    <div style={{ display: "flex" }}>
      {/* MAP */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        style={{ border: "1px solid #ccc" }}
      >
        <g ref={gRef}>
          {features.map((f, i) => (
            <path
              key={i}
              d={path(f)}
              fill="#E0E0E0"
              stroke="#fff"
              strokeWidth={0.8}
            />
          ))}

          {/* Optional: Add circles for colleges */}
          {collegeData.map((college, i) => {
            const [cx, cy] = projection([college.lon, college.lat]);
            return <circle key={i} cx={cx} cy={cy} r={4} fill="red" />;
          })}
        </g>
      </svg>

      {/* LIST */}
      <div style={{ marginLeft: "20px" }}>
        <h3>Colleges</h3>
        {collegeData.map((college, i) => (
          <div
            key={i}
            onClick={() => handleZoomToCollege(college)}
            style={{
              padding: "8px",
              marginBottom: "4px",
              background: "#f9f9f9",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {college.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndiaMapWithZoom;
