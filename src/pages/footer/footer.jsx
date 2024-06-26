import React from "react";
import "./footer.css";
import EnergyPng from "./energy-txt.png"
import Instagram from "./instagram.png"
import Twitter from "./twitter.png"
import Facebook from "./facebook.png"

export default function Footer(){
    return (
        <div className="footer-section">
            <div className="footer">
                <div className="footer-left">
                    <h1>ENERGY</h1>
                    <h3>Don't miss a beat, be the first to know when we release new flavours</h3>
                    <a href="#" className="email-btn">
                        <div>EMAIL</div>
                        <div>&#x2192;</div>
                    </a>
                </div>
                <div className="footer-right">
                    <div className="customer-care">
                        <h3>CUSTOMER CARE</h3>
                        <ul className="cc-options">
                            <li>SEARCH</li>
                            <li>FREQUENTLY ASKED QUESTIONS</li>
                            <li>REFUND POLICY</li>
                            <li>PRIVACY POLICY</li>
                            <li>CONTACT US</li>
                            <li>TERMS OF SERVICE</li>
                        </ul>
                    </div>
                    <div className="socials">
                        <h3>FIND US ON SOCIALS</h3>
                        <div className="social-links">
                            <img src={Instagram}></img>
                            <img src={Twitter}></img>
                            <img src={Facebook}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}