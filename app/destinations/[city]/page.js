import destinations from "../../../data/destinations.json";
import "./detail-page.css";
import Link from "next/link";

export default async function DestinationDetailPage({ params }){

  const {city} = await params;

  const destination = destinations.find(
    (destination) => destination.city.toLowerCase() === city.toLowerCase()
  );

  if (!destination) {
    return <p>Sorry, destination not found!</p>;
  }

  return (
    <>
    <div className="back-banner">
      <Link href="/">&larr; Back to destinations</Link>
    </div>
     <div className="destination-banner">
      {/* <div className="destination-banner" style={{ backgroundImage: `url(${destination.image})` }} role="img" aria-label={destination.city}></div> */}
      <div className="image-filter">
        <img src={destination.image} className="destination-banner-image" style={{ backgroundImage: `url(${destination.image})` }} alt={destination.city} />
      </div>
      <div className="destination-header">
        <h1>Explore {destination.city}</h1>
        {/* <p>{destination.country}</p> */}
        <p>{destination.description}</p>
      </div>
    </div>  
    {/* <div className="destination-overview">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div> */}
    </>

  )
}