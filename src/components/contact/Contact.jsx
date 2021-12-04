import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
              <PhoneIcon fontSize="large" />
              <span>: +31651724674 </span>
            </div>
            <div className="c-info-item">
              <EmailIcon fontSize="large" />
              <span>: Born.dd@gmail.com</span>
            </div>
            <div className="c-info-item">
              <LocationOnIcon fontSize="large" />
              <span>: Hellevoetsluis, Netherlands</span>
            </div>
            <div className="c-info-item">
              <LinkedInIcon fontSize="large" />
              <span>: <a href="https://www.linkedin.com/in/daryll-born/" target="_blank">Linkedin</a></span>
            </div>
            <div className="c-info-item">
              <GitHubIcon fontSize="large" />
              <span>: <a href="https://github.com/daryllborn" target="_blank">Github</a></span>
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
