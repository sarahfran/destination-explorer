import styles from './Destinations.module.css';

export default function DestinationCard(){
  return (
    <>
     <article className={styles['destination-card']}>
      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" alt="Tokyo" className={styles['destination-image']}></img>
      <div className={styles['destination-info']}>
        <h2>Destination Name</h2>
        <label>Country</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </article>

    <article className={styles['destination-card']}>
      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" alt="Tokyo" className={styles['destination-image']}></img>
      <div className={styles['destination-info']}>
        <h2>Destination Name</h2>
        <label>Country</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </article>

    <article className={styles['destination-card']}>
      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" alt="Tokyo" className={styles['destination-image']}></img>
      <div className={styles['destination-info']}>
        <h2>Destination Name</h2>
        <label>Country</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </article>

     <article className={styles['destination-card']}>
      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" alt="Tokyo" className={styles['destination-image']}></img>
      <div className={styles['destination-info']}>
        <h2>Destination Name</h2>
        <label>Country</label>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </article>
    </>
  )
}