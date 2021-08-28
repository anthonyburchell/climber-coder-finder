import GoogleMapReact from "google-map-react";
import React from "react";
import Marker from "./Marker/Marker";

export default function Page() {
  return (
    <div style={{ height: `100vh`, width: `100%` }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY }}
        defaultCenter={{ lat: 30.2672, lng: -97.7393 }}
        defaultZoom={16}
      />
      <Marker lat={30.2672} lng={-97.7393} name="Crag Climbing" color="blue" />
    </div>
  );
}
