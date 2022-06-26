import React from "react"
import "./beforeafter.scss"
import ItabashiBefore from "../../images/Itabashi Before.JPG"
import ItabashiAfter from "../../images/Itabashi After.JPG"
import KitchenBefore from "../../images/KitchenBefore.JPG"
import KitchenAfter from "../../images/KitchenAfter.JPG"
import BathroomBefore from "../../images/Bathroom Before.jpg"
import BathroomAfter from "../../images/Bathroom After.jpg"
import WhiteArrow from "../../images/WhiteArrow.svg"




export default function BeforeAfter() {
    return (
        <div className="before-after">
            <div className="container">
                


            <h1 className="before-after--title">Before & After</h1>
            <div className="before-after--grid">
                    <div className="grid-picture before one"><img src={ItabashiBefore} alt="" /></div>
                    <div className="grid-picture before three"><img src={KitchenBefore} alt="" /></div>
                    <div className="grid-picture before five"><img src={BathroomBefore} alt="" /></div>
                    <div className="grid-picture2 after two"><img src={ItabashiAfter} alt="" /></div>
                    <div className="grid-picture2 after four"><img src={KitchenAfter} alt="" /></div>
                    <div className="grid-picture2 after six"><img src={BathroomAfter} alt="" /></div>
            </div>
            <div className="before-after--arrow">
                <div>
                    <img src={WhiteArrow} alt="" />
                </div>
                <div>
                    <img src={WhiteArrow} alt="" />
                </div>
                <div>
                    <img src={WhiteArrow} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}