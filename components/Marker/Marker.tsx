import { OutdoorCrag } from "client";
import styles from "./Marker.module.css";

export interface MarkerProps {
  outdoorCrag: OutdoorCrag;
  lat: number;
  lng: number;
}

function Marker({ outdoorCrag }: MarkerProps) {
  return <div className={styles.marker}>🧗🏾‍♂️</div>;
}

export default Marker;
