import React from 'react';
import { Image } from 'antd';
import NavBar from './NavBar';
import '../styling/ContactPageStyle.css';

function ContactPage() {
  return (
    <div className="contact-page-container">
      <NavBar />
      <Image src="/img/area_map.jpeg" preview={false} width={700} />
      <h1>Email below</h1>
      <div className="contact-section">
        <ul>
          <li><i className="fas fa-envelope fa-2x" />
            {/* <p>Email</p><br /> */}
            jess@jessicasullivan.com
          </li>
          <li>
            <i className="fas fa-calendar-alt fa-2x" />
            Available by appointment only
          </li>
        </ul>
      </div>
      <footer>
        <ul>
          <li><a href="https://www.facebook.com/groups/152660442061070/" aria-label="Facebook group" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a></li>
          <li><a href="https://www.instagram.com/coachjessicasullivan/?hl=en" aria-label="Instagram profile" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default ContactPage;
