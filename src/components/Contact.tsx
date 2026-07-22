import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:ashimsharma50@icloud.com" data-cursor="disable">
                ashimsharma50@icloud.com
              </a>
            </p>
            <h4>Phone</h4>
            <p><a href="tel:+918628021025" data-cursor="disable">+91 86280 21025</a></p>
            <h4>Based in</h4>
            <p>India</p>
            <h4>Education</h4>
            <p>
              MSc Computational Engineering, RUB Bochum &amp; VGU<br />
              BE Automobile Engineering, Sathyabama University
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ashim1600"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ashimsharma1609/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://confirm.udacity.com/JSKPFYUP"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Udacity <MdArrowOutward />
            </a>
            <a
              href="https://www.hackerrank.com/certificates/0044d5a87f71"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              HackerRank <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ashim Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
