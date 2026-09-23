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

  <section className={styles['regions-dropdown']}>
    <label htmlFor="select-region">Sort by region</label>
    <select id="select-region" value={selectedRegion} onChange={(event) => setSelectedRegion(event.target.value)} className={styles['select-region']}>
      <option value="">All regions</option>
      {regions.map((region) => <option value={region} key={region}>{region}</option>)}
    </select>
  </section>
  )

}