import { MediaItem } from "@faustjs/core";
import { OutdoorCrag } from "client";
import styles from "./Card.module.css";

export interface CardProps {
  outdoorCrag: OutdoorCrag;
}

function Card({ outdoorCrag }: CardProps) {
  if (outdoorCrag == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
      <span>
          <img
            className="card-hero"
            src={outdoorCrag?.routePic.sourceUrl()}
            alt={outdoorCrag.routePic.altText}
          />
        </span>
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.cragName }} />
        <span
          dangerouslySetInnerHTML={{ __html: outdoorCrag?.suggestedRoutes }}
        />
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.address }} />
      </div>
    </div>
  );
}

export default Card;
