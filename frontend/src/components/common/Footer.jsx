// THIS FILE IS USED FOR FOOTER COMPONENT

import React from 'react';
// Import search arrow
import searchArrow from '../../assets/img/search-v.svg';

const Footer = ({ img }) => {
  return (
    <>
        <section className="contact_footer_container">
            <div className="quick_links">
                <h4>Quick Links</h4>
                <ul className="page_links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Things To Do</a></li>
                    <li><a href="#">Tourist Attraction</a></li>
                    <li><a href="#">Favourite</a></li>
                </ul>
            </div>
            <div className="contact_address">
                <h4>Address</h4>
                <address>
                    14, 1 Ellis bridge ST,
                    <br />
                    auckland 3500, Ethiopia
                    <br />
                    +15 9900 990 009
                    <br />
                    contactus@ethiopia.com
                </address>
            </div>
            <div className="newsletter_email">
                <p>Subscribe to our newsletter</p>
                <input type="email" className="email" placeholder='Your email' />
                <img src={searchArrow} alt="" className="arrow" />
            </div>
            <footer>
                <p>Techie.io &copy All Rights Reserved</p>
            </footer>
        </section>
    </>
  );
};

export default Footer;