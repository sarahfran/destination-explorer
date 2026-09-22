import styles from './Search.module.css';
import { Destination } from "@/app/types";
// import { useState } from "react";

interface InterestFiltersProps {
  destinations: Destination[];
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  // isVisible: boolean;
  // setIsVisible: (value: boolean) => void;
}

export default function InterestFilters({ destinations, selectedTags, setSelectedTags } : InterestFiltersProps){

  // const [isVisible, setIsVisible] = useState<boolean>(false);
  // Use flatMap to put the items in the nested tags array into a single list
  // Use Set to remove the duplicate tags so they are not repeating when displayed
  const interestTags = [...new Set(destinations.flatMap((destination) => destination.tags ))];

  function toggleTag(tag){
    if(selectedTags.includes(tag)){
      // tag is already selected, so toggle it off and keep the others 
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      // tag isn't selected, so toggle it on and add it to selectedTags add tag to selectedTags
      setSelectedTags([...selectedTags, tag]);
    }
  }

  // const toggleDropdown = function(){
  //   setIsVisible(!isVisible);
  // }

  // function toggleDropdown(){
  //   console.log('toggle clicked');
  //   if(!isVisible){
  //     setIsVisible(true);
  //   }
    // we want to hide the elements by default 
    // we want to show the elements on click toggleDropdown
  // }

  return (

    <section className={styles['interest-filters']}>
    {/* <div onClick={toggleDropdown} className={`${styles['interests-dropdown']} ${isVisible ? 'dropdown-open' : ''}`}> */}
      {interestTags.map((tag) => (
        <span onClick={() => toggleTag(tag)} className={`${styles.filter} ${selectedTags.includes(tag) ? styles['filter-selected'] : ''}`} key={tag}>{tag}</span>
      ))}
    {/* </div>x */}
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