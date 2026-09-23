## Destination Explorer

A Next.js app for searching and browsing popular travel destinations.

View live demo: https://destination-explorer-lyart.vercel.app/

## Features
- Browse a selection of travel destinations
- Search by city or country
- Filter by interests, such as 'Culture & Heritage' or 'Hiking'
- Sort by regions around the world
- View information about each destination, such as destination highlights and the best time to visit

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

## Notes on Project & Development Process

This project was built as part of an application for a junior front-end development role, where I was tasked with building a destination explorer that displayed a list of destinations from a mock dataset, and allowed users to view individual destination details. 

Prior to this project, I had some basic understanding of React, however, was completely new to Next.js and TypeScript. Ultimately, the purpose of this project was to gain an introduction and understanding of how these tools worked together and to upskill in modern front-end technology.

I used AI throughout my learning process, to help explain concepts that were difficult or unfamiliar, to help me debug, and to guide my configuration when migrating my project from JavaScrpt to TypeScript. In addition to AI, I conducted my own research by following the Next.js and React documentation, Googling, and watching YouTube videos for concepts I needed more information and clarity on. 

## Accessibility

An accessibility audit was conducted using axe DevTools alongside testing manual keyboard navigation. Some additions to improve accessibility included:
- Added aria attributes for all labels and buttons
- Changing the interest filters span to be button elements with an aria-pressed attribute to for selected filters
- Added dynamic aria-label and aria-pressed attributes to the favourites button in DestinationCard to indicate whether this was selected or not
- Improved HTML semantics

## Future Improvements

With time I would like to develop this project further and make the application more complex. For example:
- Fetching data from a real or mock API endpoint as opposed to importing JSON
- Enhance sorting/filtering options based a larger dataset
- Introduce pagination or a way to manage larger dataset for better UX
- Potentially display the destination details within the same window as search; where users can select destinations and view them side by side, rather than routing to a new page 