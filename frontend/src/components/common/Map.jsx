import React from "react";
import { useSelector } from "react-redux";
import map from "../../assets/img/MAP.png";
import mapicon from "../../assets/img/mapicon.svg";
import { getPlaces } from "../../reducks/places/selectors";

const Map = ({ place }) => {
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);

  return (
    <>
      <section class="location">
        <div class="map">
          <img src={map} alt="" />
        </div>
        <div class="mapimage">
          <a href="">
            
            <img src={mapicon} alt="" class="src" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Map;
