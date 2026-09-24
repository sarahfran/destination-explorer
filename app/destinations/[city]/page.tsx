import destinations from "../../../data/destinations.json";
import "./detail-page.css";
import Link from "next/link";
import Tags from "../../components/Tags";
import Highlights from "../../components/Highlights";

interface DestinationPageProps {
  params: {city: string};
}

export default async function DestinationDetailPage({ params } : DestinationPageProps){

  const { city } = await params;

  const cleanUrlParam = decodeURIComponent(city).toLowerCase().replace(/[\s-]+/g, '');

  const destination = destinations.find((destination) => {
    const cleanJsonCity = destination.city.toLowerCase().replace(/[\s-]+/g, '');
    return cleanJsonCity === cleanUrlParam;
  });


  if (!destination) {
    return <p>Sorry, destination not found!</p>;
  }

  return (
    <>
    <header className="destination-banner">
      <Link href="/" className="back">&larr; Back to destinations</Link>
      <img src={destination.image} className="destination-banner-image" alt={`Landscape view of ${destination.city}`} />
      <div className="destination-header">
        <h1>Explore {destination.city}</h1>
        <p>{destination.description}</p>
      </div>
    </header>  

    <main className="destination-overview" aria-label={`Overview of ${destination.city}`}>
      <div className="destination-detail">
        <h2>Best time to visit</h2>
        <p>{destination.bestTimeToVisit}</p>
      </div>

      <div className="destination-detail">
        <h2>Population</h2>
        <p>{destination.population.toLocaleString()}</p>
      </div>

      <div className="destination-detail">
        <h2>Known for</h2>
        <Tags destination={destination} />
      </div>

      <div className="destination-highlights">
        <h2>{destination.city} Highlights</h2>
        <Highlights destination={destination} />
      </div>
    </main>
    </>

  )
}