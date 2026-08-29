'use client';

import { useState } from "react";

import SearchBar from "./SearchBar";
import InterestFilters from './InterestFilters';
import DestinationGrid from "./DestinationGrid";
import { Destination } from "@/app/types";

interface DestinationExplorerProps {
  destinations: Destination[];
}

export default function DestinationExplorer({destinations} : DestinationExplorerProps){

  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedTags, setSelectedTags] = useState<string[]>([]);
    // InterestFilters state needs to live in parent comp to access destinations data (not in InterestFilters)

  // Todo: add filter logic for checking selectedTags, as well as searchTerm (to check search input AND selected interests)
  const filteredDestinations = destinations.filter((destination) => {
    return (
      destination.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <InterestFilters destinations={destinations}/>
      <DestinationGrid destinations={filteredDestinations} />
    </>
  )
}