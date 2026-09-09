import styles from './Search.module.css';
import { Destination } from "@/app/types";

interface RegionDropdownProps {
  destinations: Destination[];
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
}


export default function RegionDropdown ({ destinations, selectedRegion, setSelectedRegion } : RegionDropdownProps ){

  const allRegions = destinations.flatMap((destination) => destination.region);
  const regions = [...new Set(allRegions)];

  // update the selectedRegion state to whatever is selected
  // event listener for toggle change of the dropdown
  // value of user's selected option is assigned to selectedRegion state to match with region of destination
  
  return (

  <section className={styles['']}>
    <label>Sort by region</label>
    <select>
      {regions.map((region) => <option value={region} key={region}>{region}</option>)}
    </select>
  </section>
  )

}