import {
  LazyExoticComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { OutdoorCrag } from "client";
import { MouseEvent } from "react";
import styles from "./Marker.module.css";
import googleMapReact from "google-map-react";

export interface MarkerProps {
  emoji: string;
  outdoorCrag: OutdoorCrag;
  lat: number;
  lng: number;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export interface Imarker {
  lat: number;
  lng: number;
  address: string;
}

function Marker({ outdoorCrag, emoji, onClick }: MarkerProps) {
  switch (emoji) {
    case "🧗🏾":
      return (
        <div onClick={onClick} className={styles.marker}>
          <span
            className={styles.hovertext}
            data-hover="Click here for crag info"
          >
            🧗🏾‍♂️
          </span>
        </div>
      );
    case "🎒":
      return (
        <div onClick={onClick} className={styles.marker}>
          <span
            className={styles.hovertext}
            data-hover="Click here for pro shops info"
          >
            🧗🏾‍♂️
          </span>
        </div>
      );
  }
}

export default Marker;
