import React from "react"
import Nav from "../Nav/Nav"
import "./footer.scss"
import email from "../../images/carbon_email.svg"
import pin from "../../images/charm_map-pin.svg"
import phone from "../../images/charm_phone.svg"

export default function Footer() {
    return (
        <>
    <div className="footer">
        <div className="container">
        <Nav/>
        <div className="footer--information">
            <div>
                <img className="pin" src={pin} alt="" />
                <p>266-0016<br></br>
千葉県千葉市緑区椎名崎町1156-3 <br></br>
SOHO DOUBLE SIX ROOM 2</p>
            </div>
            <div>
                <img className="phone" src={phone} alt="" />
                <p>043-308-3484</p>
            </div>
            <div>
                <img src={email} alt="" />
                <p>hiro@s-kenchiku.jp</p>
            </div>
            </div>
        </div>
    </div>
    <div className="privacy"><a href="/privacy">プライバシーポリシー</a></div>
    </>
)
}