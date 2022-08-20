// THIS FILE IS USED FOR THE MAP COMPONENT

// Import React
import React from 'react';

// Import useSelector hook
import { useSelector } from 'react-redux';

// Import map image
import map from '../../assets/img/map.png';

// Import getPlaces selector
import { getPlaces } from '../../reducks/places/selectors';



const Map = ({ place }) => {
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);

  return (
    <>
        <div className="travel_site_wrapper">
            <main className="travel_site">
                <section class="map_container">
                    <div class="map">
                        <img src={map} alt="" />
                    </div>
                </section>    
            </main>
        </div>
    </>
  );
};

export default Map;