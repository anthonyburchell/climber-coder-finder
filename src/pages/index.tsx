import { getNextStaticProps } from "@faustjs/next";
import GoogleMapReact from "google-map-react";
import { GetStaticPropsContext } from "next";
import React from "react";
import Map from "../../components/map";
import { client } from "../client";
import Marker from "../../components/Marker/Marker";

export default function Page() {
  const { useQuery } = client;
  const outdoorCrags = useQuery().outdoorCrags()?.nodes;

  const onMapClick = (e: GoogleMapReact.ClickEventValue) => {
    setClicked({ lat: e.lat, lng: e.lng });
    setSelectedMarker(e);
  };

  const onMarkerClick = (event: Event) => setSelectedMarker(event);

  return (
    <>
      <Map>
        {outdoorCrags.map((outdoorCrag, index) => (
          <Marker outdoorCrag={outdoorCrag} />
        ))}
      </Map>
    </>
  );
}
export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Page,
    client,
  });
}
function setSelectedMarker(arg0: any) {
  throw new Error("Function not implemented.");
}

function setClicked(arg0: { lat: any; lng: any }) {
  throw new Error("Function not implemented.");
}
