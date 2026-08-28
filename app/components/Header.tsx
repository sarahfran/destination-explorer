import styles from './Header.module.css';

export default function Header(){
  return (
    <header className={styles['header-container']}>
      <h1 className={styles.header}>The world is your oyster</h1>
      <h2 className={styles.subheader}>Find inspiration for your next adventure</h2>
    </header>
  );
}