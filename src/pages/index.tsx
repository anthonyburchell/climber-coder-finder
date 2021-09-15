import { getNextStaticProps } from "@faustjs/next";
import GoogleMapReact from "google-map-react";
import { GetStaticPropsContext } from "next";
import React from "react";
import Card from "../../components/Card/Card";
import Map from "../../components/map";
import { client } from "../client";

export default function Page() {
  return (
    <>
      <Map />
    </>
  );
}
export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Page,
    client,
  });
}
