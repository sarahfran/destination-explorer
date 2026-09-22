import { Destination } from "@/app/types";

interface HighlightProps {
  destination: Destination;
}

export default function Highlights({ destination } : HighlightProps){
  return (
    <ul className="destination-highlights-list">
      {destination.highlights.map((highlight) => (
        <li key={highlight.label} className="highlight">
        <img src={highlight.image} alt={highlight.label} className="destination-highlights-image" />
        <label>{highlight.label}</label>
        </li>
      ))}
    </ul>
  )
}