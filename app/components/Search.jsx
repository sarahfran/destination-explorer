import styles from './Search.module.css';

export default function Search(){
  return (
    <section className={styles.search}>
       <input type="" value="" className={styles['search-input']} placeholder="Search by country or city"></input>
       
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