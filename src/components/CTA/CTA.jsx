import React from "react"
import "./cta.scss"




export default function CTA() {
    return (
        <div className="cta">
            <div className="container">
                <div className="cta--text">
                    <h2 className="cta--text--title">お見積り等のご依頼はこちらから</h2>
                    <div className="center">
                    <a className="cta--text--btn" href="contact">お問い合わせ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}