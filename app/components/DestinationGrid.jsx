import DestinationCard from './DestinationCard';
import styles from './Destinations.module.css';

export default function DestinationGrid(){
  return (
    <>
      <section>
        <h2 className={styles['destinations-heading']}>Places people love</h2>
        <div className={styles['destinations-list']}>
          <DestinationCard/>
        </div>
      </section>
    </>
  )
}