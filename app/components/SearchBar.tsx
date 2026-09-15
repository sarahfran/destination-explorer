import styles from './Search.module.css';

interface SearchBarPops {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm } : SearchBarPops){

  return (
    <section className={styles.search}>
      <div className={styles['search-bar']}>
         <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} className={styles['search-input']} placeholder="Search by country or city" />
         {searchTerm && (
          <button onClick={() => setSearchTerm("")} className={styles.clear}>Clear search</button>
        )}  
      </div>  
    </section>
  )
}