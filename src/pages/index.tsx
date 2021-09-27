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

  return (
    <>
      <Map>
        {outdoorCrags.map((outdoorCrag, index) => (
          <Marker
            lat={outdoorCrag?.lat}
            lng={outdoorCrag?.lng}
            outdoorCrag={outdoorCrag}
          />
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
