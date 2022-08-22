// THIS FILE IS USED FOR THE VIDEO FUNCTION COMPONENT
import React from 'react'

// Import wave underline
import videoWave from '../../assets/img/video-underline.svg';

// Import video background
import bgVideo from '../../assets/img/video-background.png';

// Import play button
import play from '../../assets/img/play-button.png';


// Create Video component
function Video() {
  return (
    <>
        <section className="video_container">
            <div className="video_bg">
                <img className="bg_img" src={bgVideo} alt="" id='bg_video'/>
            </div>
            <div className="video_top">
                <div className="video_top_text">
                    <h3>Discover</h3>
                    <p>Watch Our Video Tour</p>
                    <img className="top_img_wave" src={videoWave} alt="" />
                </div>
                <img className="top_img" src={play} alt="" id='play_button'/>
            </div>
        </section>  
    </>
  )
}

export default Video