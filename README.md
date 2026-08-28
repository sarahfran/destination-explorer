## Destination Explorer

A Next.js app for searching and browsing popular travel destinations.

## Features
- Browse a selection of travel destinations
- Search by city or country
- View information about each destination, such as highlights and the best time to visit

## Built with

- Next.js
- React
- TypeScript
- CSS Modules

## Project Structure

- app/components - resuable UI (Header, DestinationExplorer, SearchBar, DestinationGrid, DestinationCard)
- app/data - mock data for destinations
- app/destinations/[city] - route page for individual destination pages
- app/types.ts - TypeScript interface for destination object shape

## Local Development

npm install<br/>
npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser

## Notes on development process

This was built as part of an application for a Junior Front-end Developer role at Fine Tours Group New Zealand. Prior to this project, I had some basic understanding of React, however, was completely new to Next.js and TypeScript. 

I used AI throughout my learning process, to help explain concepts that were difficult or unfamiliar, to help me debug, and to guide my configuration when migrating my project from JavaScrpt to TypeScript. In addition to AI, I conducted my own research by following the Next.js and React documentation, Googling, and watching YouTube videos for concepts I needed more information and clarity on. 

With time I would like to develop this project further and make the searching and filtering more complex, for example, by displaying destinations by regions around the world or being able to filter by specific travel interests. I would also like to improve the overall UI design and how the destination details are displayed.