import styles from "./page.module.css";
import destinations from "../data/destinations.json";
import Header from "./components/Header";
import DestinationGrid from "./components/DestinationGrid";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <DestinationGrid destinations={destinations}/>
    </main>
  )
}
