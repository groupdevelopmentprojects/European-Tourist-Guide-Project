// THIS FILE IS USED FOR THE FAVORITE CARD COMPONENT

// Import React snd useState
import React, { useState } from 'react';

// Import useDispatch
import { useDispatch } from 'react-redux';

// Import deleteFavourite
import { deleteFavourite } from '../../reducks/favourites/operations';

// Import haert
import like from '../../assets/img/white-heart.svg';

const FavCard = ({ favourite }) => {
    const dispatch = useDispatch();
    const [showLikeButton, setShowLikeButton] = useState(true);

  return (
    <>
        <section class="tourist_attractions_container">
                <div class="tourist_attractions">
                    <div class="tourist_attractions_cards">
                        <div class="attractions_card">
                            <div class="card_img">
                                <img src={favourite.image} alt="" />
                                <div class="like">
                                    {showLikeButton && (
                                        <img 
                                        src={like}
                                        onClick={() => {
                                            dispatch(deleteFavourite(favourite.id));
                                            }
                                        }
                                        style={{backgroundColor: showLikeButton ? 'white' : 'red'}}
                                        alt="" 
                                    />
                                    )}
                                </div>
                                <div class="card_img_text">
                                    <h2>{favourite.name}</h2>
                                    <p>{favourite.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default FavCard