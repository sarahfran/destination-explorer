'use client';

import { useState } from "react";

import SearchBar from "./SearchBar";
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
      <DestinationGrid destinations={filteredDestinations} />
    </>
  )
}