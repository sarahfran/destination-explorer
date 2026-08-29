import { useState } from "react";
import styles from './Search.module.css';
import { Destination } from "@/app/types";

interface InterestFiltersProps {
  destinations: Destination[];
}

export default function InterestFilters({ destinations } : InterestFiltersProps){

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const interestTags = [...new Set(destinations.flatMap((destination) => destination.tags ))];

  function toggleTag(tag){
    if(selectedTags.includes(tag)){
      // remove tag from selectedTags
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      // add tag to selectedTags
      setSelectedTags([...selectedTags, tag]);
    }
  }

  return (

    <section className={styles['interest-tags']}>
    {interestTags.map((tag) => (
      <span onClick={() => toggleTag(tag)} className={`${styles.tag} ${selectedTags.includes(tag) ? styles['tag-selected'] : ''}`} key={tag}>{tag}</span>
    ))}
    </section>
  )

}

// Steps:
// map through each destination in destinations - done
// map through tags array with destination, display as span with styling - done
// set the state for when tags are selected (what user selects will update selectedTags state)
// the user can either:
//   - toggle tags off and on and this updates the cards - needs an onClick to set the state
//   - select a tag AND type in search input, which filters destinations based on city/country and the selectedTags