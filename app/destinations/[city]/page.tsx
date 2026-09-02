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
    <div className="destination-banner">
      <Link href="/" className="back">&larr; Back to destinations</Link>
      <img src={destination.image} className="destination-banner-image" alt={destination.city} />
      <div className="destination-header">
        <h1>Explore {destination.city}</h1>
        <p>{destination.description}</p>
      </div>
    </div>  

    <section className="destination-overview">
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
        <div className="destination-tags">
          {destination.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="highlights">
        <h2>{destination.city} Highlights</h2>
        <ul className="highlights-list">
          {destination.highlights.map((highlight) => (
            <li key={highlight.label} className="highlight">
              <img src={highlight.image} alt={highlight.label} className="highlights-image" />
              <label>{highlight.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </>

  )
}