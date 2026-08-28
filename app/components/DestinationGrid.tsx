import DestinationCard from './DestinationCard';
import styles from './Destinations.module.css';
import { Destination } from "@/app/types";

interface DestinationGridProps {
  destinations: Destination[];
}

export default function DestinationGrid({ destinations } : DestinationGridProps){
   
  // refactor to use ternary operator
    if(destinations.length === 0){
      return <h2 className={styles['destinations-heading']}>Sorry, no destinations found!</h2>
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