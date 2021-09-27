import { OutdoorCrag } from "client";

export interface MarkerProps {
  outdoorCrag: OutdoorCrag;
}

function Marker({ outdoorCrag }: MarkerProps) {
  return (
    <div className="card">
      <div className="cragname">
        <span>{outdoorCrag?.cragName}</span>
        <span>{outdoorCrag?.suggestedRoutes}</span>
        <span>{outdoorCrag?.address}</span>
        <span>{outdoorCrag?.routePic}</span>
      </div>
    </div>
  );
}

export default Marker;
