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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredDestinations = destinations.filter((destination) => {
    
    // Check if destination's city or country includes the current searchTerm
    const matchedSearch = destination.city.toLowerCase().includes(searchTerm.toLowerCase()) || destination.country.toLowerCase().includes(searchTerm.toLowerCase());

    // Check if destination has selected tags
      // if no tags are selected (=== 0), each destination passes
      // if tags are selected, the destination must share at least one tag present in selectedTags (using some() )
    const matchedTags = selectedTags.length === 0 || destination.tags.some((tag) => selectedTags.includes(tag));

    return matchedSearch && matchedTags;
  
  });

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <InterestFilters destinations={destinations} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
      <DestinationGrid destinations={filteredDestinations} />
    </>
  )
}