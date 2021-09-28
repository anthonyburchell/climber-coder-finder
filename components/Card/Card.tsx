import { OutdoorCrag } from "client";

export interface CardProps {
  outdoorCrag: OutdoorCrag;
}

function Card({ outdoorCrag }: CardProps) {
  return (
    <div className="card">
      <div className="cragname">
        <span dangerouslySetInnerHTML={{ __html: outdoorCrag?.cragName }} />
        <span>{outdoorCrag?.suggestedRoutes}</span>
        <span>{outdoorCrag?.address}</span>
        <span>{outdoorCrag?.routePic}</span>
      </div>
    </div>
  );
}

export default Card;
