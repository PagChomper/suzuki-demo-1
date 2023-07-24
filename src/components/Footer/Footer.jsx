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
                <p>111-0055<br></br>
                東京都台東区三筋1丁目7番2-501号<br></br>
</p>
            </div>
            <div>
                <img className="phone" src={phone} alt="" />
                <p>03-6321-3606</p>
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