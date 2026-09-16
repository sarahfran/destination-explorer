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
  
  return (
    
  <section className={styles['']}>
    <label>Sort by region</label>
    <select value={selectedRegion} onChange={(event) => setSelectedRegion(event.target.value)}>
      <option value="">All regions</option>
      {regions.map((region) => <option value={region} key={region}>{region}</option>)}
    </select>
  </section>
  )

}