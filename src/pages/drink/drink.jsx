import React from "react";
import "./drink.css"
import Bottle from "./bottle.jpeg"


export default function Drink(){
    return(
        <div className="drink-page">
            <div className="drink">
                <div className="left">
                    <div className="bottle">
                        <img src={Bottle}></img>
                    </div>
                </div>

                <div className="right">
                    <h1>ENERGY</h1>
                    <h2>エネルギー</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur sit consequuntur. Fuga, velit! Delectus qui maxime illo tempora dignissimos at quos voluptatibus ab harum aliquam, suscipit eveniet repellendus nobis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci iusto ea harum officia amet maxime nam laudantium eaque assumenda. Quo dolor aut, corporis fugit laborum explicabo laudantium nesciunt eos recusandae!</p>
                </div>
            </div>
            <div className="curve"></div>
        </div>  
    )
}