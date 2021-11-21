import React from 'react'
import { Link } from "react-router-dom";
import styles from '../Styles/navbar.module.css'

export default function NavBar() {
    return (
        <div>
            <nav className={styles.navbar}>

                {/* App title */}
                <h1 className={styles.title}>AWA</h1>

                {/* Pages */}
                <div className={styles.pages}>
                    <Link to="/">Home</Link>
                    <Link to="/restaurants">Restaurants</Link>
                </div>

                {/* Cart and user personal page */}
                <div className={styles.userPart}>
                    <Link to="/login">Log in</Link>
                    <p>Cart</p>
                </div>
                
            </nav>
        </div>
    )
}
