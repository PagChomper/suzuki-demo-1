import React from "react"
import "./nav.scss"
import Logo from "../../images/logo.png"
import Menu from "../../images/Menu.svg"
import { useState } from "react"






export default function Nav() {

    const [isOpen, setIsOpen] = useState(false)

    function handleOpen() {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="container nav">
            <a href="/"><img src={Logo} alt=""  className="nav--logo"/></a>
            <div className="nav--links">
                        <a href="/"><li className="nav--links--item home">ホーム</li></a>
                        <li className="nav--links--item">特徴</li>
                        <li className="nav--links--item">ギャラリー</li>
                        <a href="contact"><li className="nav--links--button">お問い合わせ</li></a>
            </div>
            <div>
                <img className="nav--menu" src={Menu} alt="" onClick={handleOpen}/>
                {isOpen ? 
                <div className="nav--overlay">
                    <p className="x-btn" onClick={handleOpen}>X</p>
                    <p className="margin-fix">ホーム</p>
                    <p>特徴</p> 
                    <p>ギャラリー</p>
                    <a href="contact"><p className="nav--overlay-btn">お問い合わせ</p></a> 
                </div> : ""}
            </div>
        </nav>
    )
}