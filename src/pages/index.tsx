import { getNextStaticProps } from "@faustjs/next";
import GoogleMapReact from "google-map-react";
import { GetStaticPropsContext } from "next";
import React from "react";
import Map from "../../components/map";
import { client, OutdoorCrag, ProShop } from "../client";
import CragMarker from "../../components/Marker/CragMarker";
import ProShopMarker from "../../components/Marker/ProShopMarker";
import { useState } from "react";
import { MouseEvent } from "react";
import CragCard from "../../components/Card/CragCard";
import ProShopCard from "../../components/Card/ProShopCard";

export default function Page() {
  const { useQuery } = client;
  const outdoorCrags = useQuery().outdoorCrags()?.nodes;
  const proShops = useQuery().proShops()?.nodes;

  const [isCardToggled, setIsCardToggled] = useState(false);
  const [selectedCrag, setSelectedCrag] = useState<OutdoorCrag>(undefined);
  const [selectedProShop, setSelectedProShop] = useState<ProShop>(undefined);

  const resetCards = () => {
    setSelectedCrag(undefined);
    setSelectedProShop(undefined);
  };

  const onCragMarkerClick = (outdoorCrag: OutdoorCrag) => {
    resetCards();
    setIsCardToggled(!isCardToggled);
    setSelectedCrag(outdoorCrag);
  };

  const onProShopMarkerClick = (proShop: ProShop) => {
    resetCards();
    setIsCardToggled(!isCardToggled);
    setSelectedProShop(proShop);
  };

  return (
    <>
      <Map>
        {outdoorCrags.map((outdoorCrag, index) => (
          <CragMarker
            lat={outdoorCrag?.lat}
            lng={outdoorCrag?.lng}
            outdoorCrag={outdoorCrag}
            onClick={(e) => onCragMarkerClick(outdoorCrag)}
          />
        ))}

        {proShops.map((proShop, index) => (
          <ProShopMarker
            lat={proShop?.lat}
            lng={proShop?.lng}
            proShop={proShop}
            onClick={(e) => onProShopMarkerClick(proShop)}
          />
        ))}

        <>
          {" "}
          {isCardToggled === true && (
            <>
              <CragCard outdoorCrag={selectedCrag} />
              <ProShopCard proShop={selectedProShop} />
            </>
          )}
        </>
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
