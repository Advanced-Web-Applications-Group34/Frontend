import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav className="navbar">

                {/* App title */}
                <h1>AWA</h1>

                {/* Pages */}
                <div className="pages">
                    <Link to="/">Home</Link>
                    <Link to="/restaurants">Restaurants</Link>
                </div>

                {/* Cart and user personal page */}
                <div className="userPart">
                    <Link to="/login">Log in</Link>
                    <p>Cart</p>
                </div>
                
            </nav>
        </div>
    )
}
