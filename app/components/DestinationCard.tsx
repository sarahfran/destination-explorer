import styles from './Destinations.module.css';
import Link from "next/link";
import { Destination } from "@/app/types";
import { useState } from 'react';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination } : DestinationCardProps){

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const setFavourite = function(){
    setIsFavourite(!isFavourite)
  }

  return (

    <Link className={styles['destination-link']} href={`/destinations/${destination.city}`}>
      <button onClick={setFavourite} className={`${styles.favourite} ${isFavourite === true ? styles['favourite-selected'] : ''}`}>Favourite</button>
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
