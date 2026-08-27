import styles from './Destinations.module.css';
import Link from "next/link";

export default function DestinationCard({ destination }){
  return (

    <Link href={`/destinations/${destination.city}`}>
      <article className={styles['destination-card']}>
        <img src={destination.image} alt={destination} className={styles['destination-image']}></img>
        <div className={styles['destination-info']}>
          <h2 key={destination.city}>{destination.city}</h2>
          <label>{destination.country}</label>
          <p>{destination.description}</p>
        </div>
      </article>
    </Link>

  )
}