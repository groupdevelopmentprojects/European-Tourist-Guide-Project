// THIS IS THE CARD COMPONENT

// Import React, useEffect, useSelector, useDispatch and useState
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import addFavourites and getFavourites
import { addFavourite } from '../../reducks/favourites/operations';
import { getFavourites } from '../../reducks/favourites/selectors';

// Import map
import map from '../../assets/img/maps2.png';

// Card Component similar to thumbnail 

const Card = ({ place }) => {
    const dispatch = useDispatch();
    const clickFavourite = (place) => {
        dispatch(addFavourite(place));
    }

    const selector = useSelector((state) => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);

    useEffect(() => {
        let favoritePlace = favourites.filter(
            (favourite) => favourites.id == place.id
        );
        if (favoritePlace.length > 0) {
            setShowLikeButton(false);
        }
    }, [favourites]);

  return (
    <>
        <section class="details_showcase_container">
            <div class="details_showcase">
                <img class="single_banner_img" 
                    src={place.image} 
                    alt="" 
                />
            </div>
        </section>

        {/* Details: Description */}
        <section class="details_description_container">
            <div class="details_description">
                <h2 class="title">{place.name}</h2>
                <div class="details_description_text">
                    <p>{place.description}</p>
                </div>
            </div>
        </section>
        
        {/* Details: Map */}
        <section class="details_map_container">
            <div class="details_map">
                <img src={map} alt="" />
            </div>
        </section>
    </>
  )
}

export default Card;