import React from 'react';
import { Link, Outlet  } from 'react-router-dom';

const Layout = () => {
  return (
   <>
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>BookManager</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/Authordetails" style={styles.link}>Insert Author</Link></li>
        <li><Link to="/BookDetails" style={styles.link}>Insert Book Details</Link></li>
      </ul>
    </nav>

    <Outlet/>
   </>


  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    margin: 0
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default Layout;
