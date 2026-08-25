import styles from './Destinations.module.css';

export default function DestinationCard({ destination }){
  return (
    
    <article className={styles['destination-card']}>
      <img src={destination.image} alt={destination.city} className={styles['destination-image']}></img>
      <div className={styles['destination-info']}>
        <h2 key={destination.city}>{destination.city}</h2>
        <label>{destination.country}</label>
        <p>{destination.description}</p>
      </div>
    </article>

  )
}