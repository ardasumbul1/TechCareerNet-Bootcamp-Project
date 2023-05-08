import Link from 'next/link';
import styles from '../styles/Navbar.module.css'
import { useState } from 'react';

function Navbar() {

  const genres = ["Action","Adventure","Animation","Comedy","Crime","Documentary","Drama","Family","Fantasy",
  "History","Horror","Music","Mystery","Romance","Scien Fiction","TV Movies","Thriller","War","Western"]

  const [showGenres, setShowGenres] = useState(false);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/"  style={{ fontSize: "25px" }}>
            Home
          </Link>
        </li>
        <li className={styles.dropdown}>
          <button style={{ fontSize: "25px" }} className={styles.dropbtn} onClick={toggleGenres}>
            Genres
          </button>
          {showGenres && (
      
            <div className={styles.dropdownContent}>
              {genres.map((genre) => (
                <Link key={genre} href={`/genres/${genre}`}>
                  {genre}
                </Link>
              ))}
            </div>

          )}
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;


