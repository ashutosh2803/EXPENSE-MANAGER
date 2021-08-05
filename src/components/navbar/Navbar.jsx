import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
        <NavLink
            key={"LOGIN"}
            activeStyle={{ color: "red" }}
            style={{ margin: "20px" }}
            to={"/dashboard"}
            >
            {"LOGIN"}
            </NavLink>
        ))}
    </div>
    )
}

export { Navbar };
