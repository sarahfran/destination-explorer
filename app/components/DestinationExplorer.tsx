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
      {/* pass through updated selectedTags state in DestinationGrid */}
    </>
  )
}