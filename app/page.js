import styles from "./page.module.css";
import destinations from "../data/destinations.json";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";
import SearchBar from "./components/SearchBar";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <SearchBar />
      <DestinationGrid destinations={destinations}/>
    </main>
  )
}
