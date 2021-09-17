import { OutdoorCrag } from "client";

export interface CardProps {
  outdoorCrag: OutdoorCrag;
  lat?: number;
  lng?: number;
}

function Card({ outdoorCrag }: CardProps) {
  const { cragName } = outdoorCrag;

  return (
    <div className="card">
      <div className="cragname">
        <span>{cragName}</span>
        {/* <span>{suggestedroutes}</span>
        <span>{address}</span>
        <span>{routepic}</span> */}
      </div>
    </div>
  );
}

export default Card;
