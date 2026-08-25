import SearchBar from "./SearchBar";
import DestinationGrid from "./DestinationGrid";

export default function DestinationExplorer({destinations}){
  return (
    <>
      <SearchBar />
      <DestinationGrid destinations={destinations}/>
    </>
  )
}