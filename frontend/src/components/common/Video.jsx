import React from 'react'
import wavywhite from '../../assets/img/wavywhite.svg'
import videolink from '../../assets/img/videolink.png'
import play from '../../assets/img/play.svg'
import videobackground from '../../assets/img/videobackground.png'

function Video() {
  return (
   <>
   <section class="video">
      <img src={videobackground} alt="" id="bgvideo" />
      <div class="caption">
        <p >
          DISCOVER
        </p>
        <div class="wavy">
          <p>
            Watch Our Video Tour
          </p>
          <img src={wavywhite} alt="" />
        </div>
        <a href=""><img src={videolink} alt="" /></a>
      </div>
      <div class="play">
        <img src={play} alt="" id='playbutton' />
      </div>
     </section>
   </>
  )
}

export default Video