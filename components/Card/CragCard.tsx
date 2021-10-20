import { MediaItem } from "@faustjs/core";
import { Office } from "client";
import styles from "./Card.module.css";

export interface CardProps {
  office: Office;
}

function Card({ office }: CardProps) {
  if (office == undefined) {
    return null;
  }

  return (
    <div className={styles.card}>
      <div className="cragname">
          <img
            className="card-hero"
            src={office?.routePic.sourceUrl()}
            alt={office.routePic.altText}
          />
        <div className="office-name" dangerouslySetInnerHTML={{ __html: office?.cragName }} />
        <div
          dangerouslySetInnerHTML={{ __html: office?.suggestedRoutes }}
        />
        <span dangerouslySetInnerHTML={{ __html: office?.address }} />
      </div>
    </div>
  );
}

export default Card;
