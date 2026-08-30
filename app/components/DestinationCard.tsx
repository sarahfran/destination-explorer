import styles from './Destinations.module.css';
import Link from "next/link";
import { Destination } from "@/app/types";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination } : DestinationCardProps){
  return (

    <Link className={styles['destination-link']} href={`/destinations/${destination.city}`}>
      <article className={styles['destination-card']}>
        <img src={destination.image} alt={destination.city} className={styles['destination-image']}></img>
        <div className={styles['destination-info']}>
          <h2 key={destination.city}>{destination.city}</h2>
          <label>{destination.country}</label>
          <p>{destination.description}</p>
        </div>
      </article>
    </Link>

  )
}