import { Destination }from "@/app/types";

interface TagsProps {
  destination: Destination;
}

export default function Tags({ destination } : TagsProps ){

  return (
    <div className="destination-detail">
        <h2>Known for</h2>
        <div className="destination-tags">
          {destination.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
  )
 
}