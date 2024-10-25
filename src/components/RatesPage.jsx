// import React from 'react';
// import { Image } from 'antd';
// import NavBar from './NavBar';
// import '../styling/RatesPageStyling.css';

// function RatesPage() {
//   return (
//     <div className="rates-page-container">
//       <NavBar />
//       {/* <h1 className="services-header">Services and rates page</h1> */}
//       <Image preview={false} src="/img/jessartmuseum-31.jpg" className="background-image" />
//       <div className="services">
//         <ul>
//           <li>In home personal training (Philadelphia)<br />
//             $120/1 hour session
//           </li>
//           <li>Virtual personal training<br />
//             $100/1 hour session
//           </li
//           <li>Nutrition consultation (1 week food diary)<br />
//             $250
//           </li>
//         </ul>
//       </div>
//       <div className="descriptions">
//         <ul>
//           <li>Jess specializes in building long term, sustainable healthy lifestyles.
//             If you train with Jess,  you will address sleep, stress, and food in each session.
//             Yes, you will get a fantastic workout, but you will also get time with a coach invested in your health outside of that session.
//           </li>
//           <li>If you just need someone to check on what you are eating or have weight loss goals,
//             Jess would love to see what you eat over the course of a week and then meet with you,
//             discuss your needs, and create a sustainable program for you.
//           </li>
//         </ul>
//       </div>
//       <footer>
//         <ul>
//           <li><a href="https://www.facebook.com/groups/152660442061070/" aria-label="Facebook group" target="_blank" rel="noreferrer"><i className="fab fa-facebook" /></a></li>
//           <li><a href="https://www.instagram.com/coachjessicasullivan/?hl=en" aria-label="Instagram profile" target="_blank" rel="noreferrer"><i className="fab fa-instagram" /></a></li>
//         </ul>
//       </footer>
//     </div>
//   );
// }

// export default RatesPage;

import React from 'react';
import { Image } from 'antd';
import NavBar from './NavBar';
import '../styling/RatesPageStyling.css';

function RatesPage() {
  return (
    <div className="rates-page-container">
      <NavBar />
      <div className="image-container">
        <Image preview={false} src="/img/jessartmuseum-31.jpg" className="background-image" />
        <div className="overlay-text">
          Personal training, nutrition consultation,<br />
          kitchen clean out, grocery trip let&#39;s go!
        </div>
      </div>
      <div className="services">
        <ul>
          <li>In home personal training (Philadelphia)<br />
            $120/1 hour session
          </li>
          <li>Virtual personal training<br />
            $100/1 hour session
          </li>
          <li>Nutrition consultation (1 week food diary)<br />
            $250
          </li>
        </ul>
      </div>
      <div className="descriptions">
        <ul>
          <li>Jess specializes in building long term, sustainable healthy lifestyles.
            If you train with Jess,  you will address sleep, stress, and food in each session.
            Yes, you will get a fantastic workout, but you will also get time with a coach invested in your health outside of that session.
          </li>
          <li>If you just need someone to check on what you are eating or have weight loss goals,
            Jess would love to see what you eat over the course of a week and then meet with you,
            discuss your needs, and create a sustainable program for you.
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

export default RatesPage;
