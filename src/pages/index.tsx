import { getNextStaticProps } from "@faustjs/next";
import GoogleMapReact from "google-map-react";
import { GetStaticPropsContext } from "next";
import React from "react";
import Map from "../../components/map";
import {
  client,
  Office,
} from "../client";
import LogoMarker from "../../components/Marker/LogoMarker";
import { useState } from "react";
import { MouseEvent } from "react";
import CragCard from "../../components/Card/CragCard";

export default function Page() {
  const { useQuery } = client;
  const outdoorCrags = useQuery().offices()?.nodes;
  const [isCardToggled, setIsCardToggled] = useState(false);
  const [selectedCrag, setSelectedCrag] = useState<Office>(undefined);

  const resetCards = () => {
    setSelectedCrag(undefined);
  };

  const onCragMarkerClick = (office: Office) => {
    resetCards();
    setIsCardToggled(!isCardToggled);
    setSelectedCrag(office);
  };

  return (
    <>
      <div className="main-container">
        <div className="meta-container">
            <h2>Office Details</h2>
            <CragCard office={selectedCrag} />
        </div>
        <div className="map-container">
        <Map>
          {outdoorCrags.map((office, index) => (
            <LogoMarker
              key={index}
              lat={office?.lat}
              lng={office?.lng}
              office={office}
              onClick={(e) => onCragMarkerClick(office)}
            />
          ))}
        </Map>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Page,
    client,
  });
}
