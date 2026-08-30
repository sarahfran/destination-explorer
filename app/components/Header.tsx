import styles from './Header.module.css';

export default function Header(){
  return (
    <header className={styles['header']}>
      <h1>The world is your oyster</h1>
      <h2>Find inspiration for your next adventure</h2>
    </header>
  );
}