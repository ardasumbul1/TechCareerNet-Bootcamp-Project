import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <img src="../images/nextflix_logo.png" alt="" />
        </Link>
        <Navbar />
      </div>

      {children}
    </div>
  );
}

export default Layout;