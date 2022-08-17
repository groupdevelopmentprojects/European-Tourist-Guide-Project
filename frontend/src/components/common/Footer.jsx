import React from "react";

const Footer = ({ img }) => {
  return (
    
    <>
      <footer class="footer">
        <div class="pairs">
          <div class="links">
            <p id="quicklink">Quick Links</p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/">Things to do</a>
            </p>
            <p>
              <a href="/preview">Tourist Attraction</a>
            </p>
            <p>
              <a href="/favorite">Favorite</a>
            </p>
          </div>
          <div class="address">
            <p id="addr">Address</p>
            <p>14.1 Ellis Bridge ST.</p>
            <p>Auckland 3500,Ethiopia</p>
            <p>+159090,9090</p>
            <p>contactus@ethiopia.com</p>
          </div>
        </div>
        <div class="subscribe">
          <p>Subscribe to our newletter</p>
          <div class="submit">
            <input
              type="email"
              placeholder="your email"
              name="email"
              id="email"
            />
            <button>v</button>
          </div>
        </div>
      </footer>
      <hr />
      <div class="copyright">
        <p>Techis.io©All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
