import React from "react"
import "./about.scss"
import aboutimage from "../../images/about-image.JPG"


export default function About() {
    return (
        <div className="about">
            <div className="container">
            <h2 className="about--title">鈴木建築の思</h2>
            <div className="about--card">
                <div className="about--information">
                    <h2>鈴木建築の思</h2>
                    <p className="margin-silence">弊社は創業以来一貫して手仕事、日本古来の在来軸組工法に拘って施工してきました。これまでの施工実績は１５００件を超えています。海外（マレーシア）での施工実績もあり、幅広い知識、感性を持ち合わせています。<br/>
注文住宅、文化住宅、こだわりの家など受注し、難しいことも常に努力し、失敗も経験に生かし常に前を向く姿勢をとっています。<br/>
                    </p>
                    <p>
                    先人たちの築いてきた工法や思いを守り、末長く建築でお手伝いさせていただいています。作業員で終わらず今では珍しいお金にならない事、例えば研ぐ事、考える事などに沢山の経験を大事に現場に伝えています。作業員で終わらずお客様のよきパートナーとなるべく努力し邁進していく所存です。
                    </p>
                    <p>これからもお客様の希望をどんどんお聞きして一緒に人生で一番高い買い物にお付き合いさせて頂けると幸いです。</p>
                    </div>
                
                <div className="about--card--picture">
                    <img src={aboutimage} alt="" className="about--card--picture--image"/>
                    
                    
                    {/* <div className="about--card--picture--image"></div> */}
                    </div>
                
                </div>
                </div>
            </div>
    )
}