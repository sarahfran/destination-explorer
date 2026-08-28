import destinations from "../../../data/destinations.json";
import "./detail-page.css";
import Link from "next/link";

interface DestinationPageProps {
  params: {city: string};
}

export default async function DestinationDetailPage({ params } : DestinationPageProps){

  const { city } = await params;

  const destination = destinations.find(
    (destination) => destination.city.toLowerCase() === city.toLowerCase()
  );

  if (!destination) {
    return <p>Sorry, destination not found!</p>;
  }

  return (
    <>
    {/* <div className="back-banner">
      <Link href="/">&larr; Back to destinations</Link>
    </div> */}
     <div className="destination-banner">
      <Link href="/" className="back">&larr; Back to destinations</Link>
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
    <div className="destination-overview">
      <div>
        <h3>Best time to visit</h3>
        <p>{destination.bestTimeToVisit}</p>
      </div>
      <div>
        <h3>{destination.city} Highlights</h3>
        <ul>
          {destination.highlights.map((highlight) => 
            <li key={highlight}>{highlight}</li>
          )}
        </ul>
      </div>
    </div>
    </>

  )
}