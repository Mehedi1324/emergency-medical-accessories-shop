import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { BsFillTelephoneFill, BsFillClockFill } from 'react-icons/bs';
import '../Stylings/Contact.scss';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_kqao65l',
        'template_enp5fxy',
        form.current,
        '85d415elI-p0bIdzf'
      )
      .then(
        (result) => {
          alert('Message successfully sent');
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact__container">
      <Row>
        <Col md={6} lg={6} sm={12} xs={12} data-aos="fade-right">
          <h2>SEND US A MESSAGE</h2>

          <form ref={form} onSubmit={sendEmail}>
            <div className="collect__data">
              <p>
                Name <span style={{ color: 'red' }}> *</span>{' '}
              </p>
              <input type="text" name="user_name" />
            </div>
            <div className="collect__data">
              <p>
                Email <span style={{ color: 'red' }}> *</span>{' '}
              </p>
              <input type="email" name="user_email" />
            </div>
            <div className="collect__data">
              <p>Phone</p>
              <input type="text" />
            </div>
            <div className="collect__data">
              <p>
                Message <span style={{ color: 'red' }}> *</span>{' '}
              </p>
              <textarea name="message" />
            </div>
            <div className="sub__btn">
              {' '}
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </Col>
        <Col md={6} lg={6} sm={12} xs={12} data-aos="fade-left">
          <h2>GET OFFICE ONFO</h2>
          <p
            style={{
              margin: '35px 0px',
            }}
          >
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan.
          </p>
          <div className="contact__me">
            <div className="infoicon">
              <ImLocation2 />
            </div>
            <div className="contact__info">
              <p>184 Main Rd E, St Albans</p>
              <p>VIC 3021, Australia</p>
            </div>
          </div>
          <div className="contact__me">
            <div className="infoicon">
              {' '}
              <MdEmail />
            </div>
            <div className="contact__info">
              <p>52mehedi.hasan@gmail.com</p>
            </div>
          </div>
          <div className="contact__me">
            <div className="infoicon">
              <BsFillTelephoneFill />
            </div>
            <div className="contact__info">
              <p>+01 23456789</p>
              <p>001 2233 456</p>
            </div>
          </div>
          <div className="contact__me2">
            <div className="infoicon">
              <BsFillClockFill />
            </div>
            <div className="contact__info">
              <p>Monday: 13:00-18:00 (shops open later than usual)</p>
              <br />
              <p>Tuesday, Wednesday, Friday & Saturday: 09:00-18:00</p>
              <br />
              <p>Thursday: 09:00-21:00 (late-night shopping)</p>
              <br />
              <p>
                Sunday: 12:00-17:00 (This primarily applies to the shops on and
                near the Nieuwendijk and Kalverstraat. In some of the other
                shopping streets, you may find that only a selection of the
                shops are open on Sundays).
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
