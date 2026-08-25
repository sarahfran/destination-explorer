import styles from "./page.module.css";
import destinations from "../data/destinations.json";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";
import Search from "./components/Search";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <Search />
      <DestinationGrid destinations={destinations}/>
    </main>
  )
}
