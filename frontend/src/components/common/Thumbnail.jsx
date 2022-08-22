// THIS IS THE THUMBNAIL COMPONENT FILE

import React, { useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

// DOWNLOAD DEPENDENCY ...
import { push } from 'connected-react-router';

// Import addFavourite and deleteFavourite
import { addFavourite, deleteFavourite } from '../../reducks/favourites/operations';

// Import getFavourites
import { getFavourites } from '../../reducks/favourites/selectors';

// Import heart
import heart from '../../assets/img/white-heart.svg';


const Thumbnail = ({ place }) => {
    const dispatch = useDispatch();
    const clickFavourite = (place) => {
        dispatch(addFavourite(place));
    };

    const selector = useSelector((state) => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);

    useEffect(() => {
        let favouritePlace = favourites.filter(
            (favourite) => favourite.id == place.id);
            if (favouritePlace.length > 0) {
                setShowLikeButton(false);
            }
    }, [favourites]);
  return (
    <>
        <div class="tourist_attractions_cards">
            <div class="attractions_card">
                <div class="card_img">
                    <img 
                        src={place.image} 
                        onClick={() => dispatch(push('/places/' + place.id))}
                        alt="" />
                    <div class="like">
                        <img 
                            src={heart}
                            onClick={() => {
                                setShowLikeButton(!showLikeButton);
                                if (showLikeButton) {
                                    clickFavourite(place);
                                } else {
                                    dispatch(deleteFavourite(place.id));
                                }
                            }}
                            style={{backgroundColor: showLikeButton ? 'white' : 'red'}}
                            alt="" 
                        />
                    </div>
                    <div class="card_img_text">
                        <h2>{place.name}</h2>
                        <p>{place.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Thumbnail;