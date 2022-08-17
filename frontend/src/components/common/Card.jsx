import React, { useEffect, useState } from "react";
import { addFavourite } from "../../reducks/favourites/operations";
import { getFavourites } from "../../reducks/favourites/selectors";
import { useSelector, useDispatch } from "react-redux";
import Imglike from "../../assets/img/Like_button.svg";
import Places from "../../containers/Places";
import { push } from "connected-react-router";
import map from "../../assets/img/MAP.png";
import mapicon from "../../assets/img/mapicon.svg";

const Card = ({ place }) => {
  const dispatch = useDispatch();
  const clickFavourite = (place) => {
    dispatch(addFavourite(place));
  };
  
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  const [showLikeButton, setShowLikeButton] = useState(true);
  useEffect(() => {
    let favoritePlace = favourites.filter(
      (favourite) => favourite.id == place.id
    );
    if (favoritePlace.length > 0) {
      setShowLikeButton(false);
    }
  }, [favourites]);

  return (
    <>
      <section class="firstpage">
        <img
          src={place.image}
          alt=""
          id="aboutimage"/>

        <section className="details">
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </section>
        <section class="location">
          <div class="map">
            <img src={map} alt="" />
          </div>
          <div class="mapimage">
            <a target="_blank" href={place.googel_map_link}>
              <img src={mapicon} alt="" class="src" />
            </a>
          </div>
        </section>
      </section>
    </>
  );
};

export default Card;
