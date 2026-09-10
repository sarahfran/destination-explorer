import styles from './Tag.module.css';
import { Destination }from "@/app/types";

interface TagProps {
  destination: Destination;
}

export default function Tags({ destination } : TagProps ){

  return (
    <div className="destination-detail">
        <div className="destination-tags">
          {destination.tags.map((tag) => (
            <span key={tag} className={styles['tag']}>{tag}</span>
          ))}
        </div>
      </div>
  )
 
}