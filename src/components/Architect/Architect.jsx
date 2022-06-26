import React from "react"
import "./architect.scss"
import archy from "../../images/SUZUKI ARCHITECT.svg"
import ArchitechImage1 from "../../images/ArchitechImage1.JPG"
import ArchitechImage2 from "../../images/ArchitechImage2.JPG"
import ArchitechImage3 from "../../images/ArchitechImage3.JPG"
import ArchitechImage4 from "../../images/ArchitechImage4.JPG"
import ArchitechImage5 from "../../images/ArchitechImage5.JPG"
import ArchitechImage6 from "../../images/ArchitechImage6.JPG"

export default function Architech() {
    return (
        <div className="architech">
            <div className="container">
            <div className="architech--title">
                <div className="architech--title--top">写真</div>
                <div className="architech--title--bottom">ギャラリー</div>
                </div>
                </div>

                <div className="marquee">
                    <div className="marquee-content">
                        <img className="architech--background-text" src={archy} alt="suzuki architect" />
                        <img className="architech--background-text" src={archy} alt="suzuki architect" />
                    </div>
                    </div>
                    <div className="architech--grid">
                        <div className="center"><img className="architech--image" src={ArchitechImage1} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage2} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage3} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage4} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage5} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage6} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage1} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage2} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage3} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage4} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage5} alt="" /></div>
                        <div className="center"><img className="architech--image" src={ArchitechImage6} alt="" /></div>
                    </div>
                    <div>
                    <div className="marquee2">
                        <div className="marquee-content2">
                            <img className="architech--background-text2" src={archy} alt="suzuki architect" />
                            <img className="architech--background-text2" src={archy} alt="suzuki architect" />
                        </div>
                    </div>
                    </div>
                </div>
    )
}