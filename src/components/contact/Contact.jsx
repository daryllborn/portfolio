import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fdmmnpv",
        "template_upj18rd",
        formRef.current,
        "user_DHWquWKmFSIxQiHUNwh4T"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c" id="contact">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="/assets/phone.png" alt="" className="c-icon" />
              <h4>+31651724674 </h4>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/assets/email.png" alt="" />
              <h4>born.dd@gmail.com</h4>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/assets/address.png" alt="" />
              <h4>Hellevoetsluis</h4>
            </div>
          </div>
        </div>
        <div className="c-middle">
          <form ref={formRef} onSubmit={handleSubmit}>
            <h4>Fill out the form below to send me a message</h4>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <br />
            <button>Submit</button>
            {done && "Message sent successfully"}
          </form>
        </div>
        <div className="c-right">
          <img className="c-img" src="/assets/contact.png" alt="" />
        </div>
      </div>
      <img className="footer" src="/assets/clouds.png" alt="" />
    </div>
  );
};

export default Contact;
