'use client';

import { useState } from "react";

import SearchBar from "./SearchBar";
import DestinationGrid from "./DestinationGrid";

export default function DestinationExplorer({destinations}){

  const [searchTerm, setSearchTerm] = useState("");

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