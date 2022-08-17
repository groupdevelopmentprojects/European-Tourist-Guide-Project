import React from 'react'
import mountain from '../../assets/img/mountain.png'
import index from '../../assets/img/index.png'
function Offer() {
  return (
    <>
      <section class="offer">
        <div class="img-gradient">
          <img src={mountain} alt="" id="mountain" />
        </div>

        <div class="main-img">
          <img src={index} alt="" />
        </div>

        <div class="ads">
          <p id='mainsub'>Get 10% Off on Your Next Travel</p>
          <p>Maximum discount 1000$ per person</p>
          <div class="fields">
            <input type="text" placeholder="Enter your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offer