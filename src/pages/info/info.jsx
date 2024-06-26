import React from "react";
import "./info.css"
import NowAvailPng from "./now-available.png"
import StoresPng from "./stores.png"

export default function Info(){
    return(
        <div className="info-page">
            <div className="wave-2"></div>
            <div className="info">
                <img src={NowAvailPng} className="now-available"></img>
                <img src={StoresPng} className="stores"></img>
            </div>
        </div>
    )
}