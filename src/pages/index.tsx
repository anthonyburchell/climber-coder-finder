import { getNextStaticProps } from "@faustjs/next";
import GoogleMapReact from "google-map-react";
import { GetStaticPropsContext } from "next";
import React from "react";
import Card from "../../components/Card/Card";
import Map from "../../components/map";
import { client } from "../client";

export default function Page() {
  const { useQuery } = client;
  const outdoorCrags = useQuery().outdoorCrags()?.nodes;

  return (
    <>
      <Map>
        {outdoorCrags.map((outdoorCrag, index) => (
          <Card
            key={index}
            outdoorCrag={outdoorCrag}
            lat={outdoorCrag.lat}
            lng={outdoorCrag.lng}
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
