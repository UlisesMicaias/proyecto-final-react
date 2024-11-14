import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget";
import styles from "../../css/navBar.module.css"; 

const NavBar = () => (
    <nav className={styles.navBar}>
        <Link to="/" className={styles.link}>Home</Link>
        <div className={styles.categories}>
            <h3 className={styles.categoriesTitle}>Categorías</h3>
            <Link to="/genres/Drama" className={styles.link}>DRAMA</Link>
            <Link to="/genres/Comedy" className={styles.link}>COMEDY</Link>
            <Link to="/genres/Action" className={styles.link}>ACTION</Link>
        </div>
        <Link to="/cart" className={styles.cartLink}>
            <CartWidget />
        </Link>
    </nav>
);

export default NavBar;

