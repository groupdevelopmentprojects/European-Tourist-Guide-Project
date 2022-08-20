// THIS FILE IS USED FOR THE OFFER / NEWSLETTER COMPONENT

import React from 'react';

// Import offer img
import offerImg from '../../assets/img/offer-bg.png';

function Offer() {
  return (
    <>
        <div className="travel_site_wrapper">
            <main className="travel_site">
                <section class="newsletter_container">
                    <div class="newsletter">
                        <img src={offerImg} alt="" />
                    </div>
                    <div class="newsletter_text">
                        <h3>Get 10% off on Your Next Travel</h3>
                        <p>Maximum discount $1000 per person</p>
                        <div class="newsletter_input">
                            <input type="email" placeholder="Enter your email" />
                            <button class="subscribe" type="submit">subscribe</button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </>
  );
}

export default Offer