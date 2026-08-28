import styles from './Search.module.css';

interface SearchBarPops {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm } : SearchBarPops){
  return (
    <section className={styles.search}>
       <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className={styles['search-input']} placeholder="Search by country or city"></input>
       
       {/* <div className={styles['search-tags']}>
        <span>Culture & Heritage</span>
        <span>City Escapes</span>
        <span>Architecture</span>
        <span>Nature & Wildlife</span>
        <span>Mountains</span>
        <span>Adventure</span>
        <span>Hiking</span>
       </div> */}

      
    </section>
  )
}