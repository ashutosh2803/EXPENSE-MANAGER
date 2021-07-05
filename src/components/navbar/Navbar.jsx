import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.NavbarWrapper}>
            <p>Expense Manager</p>
            <button className={styles.logoutBtn}>LOGOUT</button>
        </div>
    )
}

export { Navbar };
