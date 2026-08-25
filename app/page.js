import styles from "./page.module.css";
import destinations from "../data/destinations.json";
import Header from "./components/Header";
import DestinationExplorer from "./components/DestinationExplorer";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Header />
      <DestinationExplorer destinations={destinations}/>
    </main>
  )
}
