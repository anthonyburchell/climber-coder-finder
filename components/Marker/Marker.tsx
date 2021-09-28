import { useState } from "react";
import { OutdoorCrag } from "client";
import { MouseEvent } from "react";
import styles from "./Marker.module.css";

export interface MarkerProps {
  outdoorCrag: OutdoorCrag;
  lat: number;
  lng: number;
  onClick: Event;
}

function Marker({ outdoorCrag, onClick }: MarkerProps) {
  return (
    <div onClick={onClick} className={styles.marker}>
      🧗🏾‍♂️
    </div>
  );
}

export default Marker;
