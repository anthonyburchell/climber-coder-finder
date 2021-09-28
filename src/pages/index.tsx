import { getNextStaticProps } from "@faustjs/next";
import GoogleMapReact from "google-map-react";
import { GetStaticPropsContext } from "next";
import React from "react";
import Map from "../../components/map";
import { client } from "../client";
import Marker, { MarkerProps } from "../../components/Marker/Marker";
import { useState } from "react";
import { MouseEvent } from "react";
import Card, { CardProps } from "../../components/Card/Card";

export default function Page() {
  const { useQuery } = client;
  const outdoorCrags = useQuery().outdoorCrags()?.nodes;

  const [isCardToggled, setIsCardToggled] = useState(false);

  const onMarkerClick = (e: MouseEvent<CardProps>) => {
    console.log(e);
    setIsCardToggled(true);
  };

  return (
    <>
      <Map>
        {outdoorCrags.map((outdoorCrag, index) => (
          <Marker
            lat={outdoorCrag?.lat}
            lng={outdoorCrag?.lng}
            outdoorCrag={outdoorCrag}
            onClick={() => setIsCardToggled(true)}
          >
            <> {isCardToggled === true && <Card outdoorCrag={outdoorCrag} />}</>
          </Marker>
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
