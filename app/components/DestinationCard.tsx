import styles from './Destinations.module.css';
import Link from "next/link";
import { Destination } from "@/app/types";
import { useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination } : DestinationCardProps){

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const setFavourite = function(){
    setIsFavourite(!isFavourite)
  }


  return ( 
    <>
    <div className={styles['destination-card']}>
    <button className={styles['favourite-button']} onClick={setFavourite}>
     {isFavourite === true ? (<FaHeart className={styles['favourite-selected']} />) : (<FaRegHeart className={styles['']} />)}
    </button>
    <Link className={styles['destination-link']} href={`/destinations/${destination.city}`}>
      <article className={styles['destination-card-contents']}>
        <img src={destination.image} alt={destination.city} className={styles['destination-image']}></img>
        <div className={styles['destination-info']}>
          <h2 key={destination.city}>{destination.city}</h2>
          <label>{destination.country}</label>
          <p>{destination.description}</p>
        </div>
      </article>
    </Link>
    </div>
    </>

  )
}
