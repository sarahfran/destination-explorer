import styles from './Header.module.css';

export default function Header(){
  return (
    <header className={styles['header-container']}>
      <h1 className={styles.header}>The world is your oyster</h1>
      <h2 className={styles.subheader}>Search for your next adventure with Destination Explorer</h2>
    </header>
  );
}