import destinations from "../../../data/destinations.json";

export default async function DestinationDetailPage({ params }){

  const {city} = await params;

  const destination = destinations.find(
    (destination) => destination.city.toLowerCase() === city.toLowerCase()
  );

  if (!destination) {
    return <p>Sorry, destination not found!</p>;
  }

  return (
     <div>
      {/* <img src={destination.image} alt={destination.city} /> */}
      <h1>{destination.city}</h1>
      <p>{destination.country}</p>
      <p>{destination.description}</p>
    </div>  
  )
}