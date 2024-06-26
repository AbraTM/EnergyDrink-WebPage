import React from "react";
import './flavours.css';
import FlavourCards from './flavour-cards';
import FlavourText from './flavours-new.png';

export default function Flavours(){
    return(
        <div className="flavours-page">
            <div className="flavours-text">
                <img src={FlavourText}></img>
            </div>

            <div className="flavours-cn">
                <FlavourCards/>
            </div>
            
        </div>
    )
}