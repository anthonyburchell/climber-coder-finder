import { LibationFood } from "client";
import LibationFoodMarker from "../Marker/LibationsFoodMarker";
import styles from "./Card.module.css";

export interface CardProps {
  libationFood: LibationFood;
}

function Card({ libationFood }: CardProps) {
  if (libationFood == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
        <span
          dangerouslySetInnerHTML={{ __html: libationFood?.restaurantName }}
        />
        <span dangerouslySetInnerHTML={{ __html: libationFood?.description }} />
        <div>
          <input>Booze Friendly={libationFood?.alcohol}</input>
        </div>
      </div>
    </div>
  );
}

export default Card;
