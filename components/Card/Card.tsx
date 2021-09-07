export interface CardProps {
  cragname: string;
  suggestedroutes: string;
  address: string;
  routepic: string;
}

function Card({ cragname, suggestedroutes, address, routepic }: CardProps) {
  return (
    <div className="card">
      <div className="cragname">
        <span>{cragname}</span>
        <span>{suggestedroutes}</span>
        <span>{address}</span>
        <span>{routepic}</span>
      </div>
    </div>
  );
}

export default Card;
