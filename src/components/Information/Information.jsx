import React from "react"
import "./information.scss"

export default function Information(){
    return(
        <div className="information">
            
            <div className="information--grid container">
                <div className="information--grid--tile margin-modifier">
                    <h2>会 社 案 内 内 容
                        </h2>
                        <span>主な取引先</span><br></br>
                        <p>一般顧客様、不動産業者様、<br></br>設計事務所様、建設会社様</p>
                        <span>会社のモットー</span>
                        <p>快適な住まいへの架け橋</p>
                        <span>保有資格</span>
                        <p className="bitch-tile">1級施工管理、2級建築士、<br></br>木造立て方、足場組み立て、
<br></br>玉掛け、フォークリフト運転免許</p>
                        </div>
                <div className="information--grid--tile divider">
                    </div>
                <div className="information--grid--tile">
                    
                    <h2>会 社 沿 革</h2>

                    <span>1994年</span>
                    <p>個人大工事業主として独立</p>
                    <span>2008年</span>
                    <p className="nowrap smaller">株式会社鈴木建築を資本金500万円で設立</p>
                    <span>2009年</span>
                    <p>特許所得「かまち固定くん」</p>
                    <span>2018年</span>
                    <p>資本金を1000万円に増資</p>
                    <span>2023 新本社移転</span>
                    <p className="nowrap smaller">本社建て替え SOHO DOUBLE SIX を竣工</p>

                    
                    </div>

                    <div className="information--grid--tile divider">
                    </div>
                <div className="information--grid--tile">
                    
                    <h2>会 社 概 要</h2>

                    <span>社名</span>
                    <p>株式会社鈴木建築</p>
                    <span>代表取締役</span>
                    <p>鈴木 裕行</p>
                    <span>所在地</span>
                    <p>111-0055<span className="nowrap">東京都台東区三筋1丁目7番2-501号</span></p>
                    <span>設立</span>
                    <p>個人事業主1994年株式会社 2008年</p>
                    <span>連絡先</span>
                    <p>hiro@s-kenchiku.jp</p>
                    </div>
            </div>
            <div className="information--image">
                <div className="information--image--picture"></div>
                
                </div>
        </div>
    )
}