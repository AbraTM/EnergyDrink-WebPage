import React from "react";
import "./hero.css"
import Logo from "./logo-bgr.png"
import SearchLogo from "./search.png"
import CartLogo from "./cart.png"

export default function Hero(){
    return (
        <div className="hero">
            <img src={Logo} className="logo-img"></img>
            <nav className="navbar">
                <ul className="nav-menu">
                    <li>Shop</li>
                    <li>Extras</li>
                    <li>Stores</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>
                        <img src={SearchLogo} className="nav-icon"></img>
                    </li>
                    <li>
                        <img src={CartLogo} className="nav-icon"></img>
                    </li>
                </ul>
            </nav>
            <div className="hero-text">
                <h1>ENERGY</h1>
                <h2>エネルギー</h2>
                <button className="shop-now-btn">SHOP NOW</button>
            </div>
            <div className="blackout"></div>
        </div>
    )
}