import { useState } from "react";
import { OutdoorCrag } from "client";
import { MouseEvent } from "react";
import styles from "./Marker.module.css";

export interface MarkerProps {
  outdoorCrag: OutdoorCrag;
  lat: number;
  lng: number;
}

function Marker({ outdoorCrag }: MarkerProps) {
  const [isCardToggled, setIsCardToggled] = useState(false);
  const onMarkerClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);
    setIsCardToggled(true);
  };

  return (
    <div onClick={onMarkerClick} className={styles.marker}>
      🧗🏾‍♂️
      {isCardToggled === true && <div>display card content</div>}
    </div>
  );
}

export default Marker;
