import { OutdoorCrag } from "client";
import styles from "./Card.module.css";

export interface CardProps {
  outdoorCrag: OutdoorCrag;
}

function Card({ outdoorCrag }: CardProps) {
  return (
    <div className={styles.card}>
      <div className="cragname">
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.cragName }} />
        <span
          dangerouslySetInnerHTML={{ __html: outdoorCrag?.suggestedRoutes }}
        />
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.address }} />
        <span>{outdoorCrag?.routePic.sourceUrl}</span>
      </div>
    </div>
  );
}

export default Card;
