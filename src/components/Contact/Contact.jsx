import React from "react"
import "./contact.scss"
import PaperAirplane from "../../images/Paper-Airplane.svg"
import SDS from "../../images/SDS.JPG"
import emailjs from "@emailjs/browser"
import { useRef } from "react"





export default function Contact() {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_i1t8es2', 'template_2zjp239', form.current, 'U70IZ_VVyXVnO_fQH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div className="contact">
            <div className="container">
            <h2>お問い合わせ</h2>
            <div className="contact--grid">
                <div className="contact--grid--form">
                    <form ref={form} onSubmit={sendEmail}>
                        <label className="margin-silence" htmlFor="name">お名前</label>
                        <input type="text" name="name"/>
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" name="email" />
                        <label htmlFor="message">メッセージ</label>
                        <input className="text-field" type="text" name="message" />
                        <p>お問い合わせの内容を第三者に公開することはありません。<br></br>詳しくはプライバシーポリシーをご覧ください。</p>
                        <button type="submit" value="send">送信  </button>


                        {/* <img src={PaperAirplane} alt="" /> */}
                    </form>
                </div>
                <div className="contact--grid--image">
                    <img src={SDS} alt="" />
                </div>
            </div>
            </div>
        </div>
    )
    }