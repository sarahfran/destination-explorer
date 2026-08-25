import DestinationCard from './DestinationCard';
import styles from './Destinations.module.css';

export default function DestinationGrid({ destinations }){
   
  // refactor to use ternary operator
    if(destinations.length === 0){
      return <p>Sorry, no destinations found!</p>
    }

    return (  
      <section>
        <h2 className={styles['destinations-heading']}>Places people love</h2>
        <div className={styles['destinations-list']}>
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination}/>
        ))}
        </div>
      </section>
  )
}