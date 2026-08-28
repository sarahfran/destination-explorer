import styles from './Search.module.css';
import { Destination } from "@/app/types";

interface InterestFiltersProps {
  destinations: Destination[];
}

export default function InterestFilters({ destinations } : InterestFiltersProps){

  const interestTags = [...new Set(destinations.flatMap((destination) => destination.tags ))];

  return (

    <section className={styles['interest-tags']}>
    {interestTags.map((tag) => (
      <span className={styles['tag']} key={tag}>{tag}</span>
    ))}
    </section>
  )

}