import React from "react"
import "./hero.scss"
import lines from "../../images/stroke.svg"
import bigangle from "../../images/bigangle.svg"
import midangle from "../../images/midangle.svg"
import smangle from "../../images/smangle.svg"




export default function Hero(){
    return (
        <div className="container hero">
            <div className="flex-center">
                <div className="hero--image">
                    <div className="hero--image--rectangle">
                    <h3 className="hero--sub-title">快適な住まいへの架け橋</h3>
                    <img className="hero-lines" src={lines} alt="" />
                    </div>
                </div>
            
            <div className="hero-text-container">
            <h1 className="hero--title">株式会社</h1>
            <h1 className="hero--title hero-bottom">鈴木建築</h1>
            </div>
            <div className="hero--image--outline"></div>
            </div>
            <div>
                <img className="hero--smangle" src={smangle} alt="" />
            </div>
            <div>
                <img className="hero--bigangle" src={bigangle} alt="" />
            </div>
            <div>
                <img className="hero--midangle" src={midangle} alt="" />
            </div>
        </div>
    )
}