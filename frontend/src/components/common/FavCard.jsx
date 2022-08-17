import React, { useState } from 'react'
import Imgdislike from '../../assets/img/dislike.png'
import Favourites from '../../containers/Favourites'

import { useDispatch } from 'react-redux'
import { deleteFavourite } from '../../reducks/favourites/operations'
import { addPlaceAction } from '../../reducks/places/actions'
import heart from '../../assets/img/heart.svg'
import like from '../../assets/img/Like_button.svg'


export const FavCard = ({favourite}) => {
    const dispatch = useDispatch()
    const [showLikeButton, setShowLikeButton] = useState(true);
    return (<>
  <div className="row">
    <div className="image-container">
      <img src={favourite.image} alt="" />
    </div>
    <div className="subrow">
      <h4>{favourite.name}</h4>
      <p>{favourite.description}</p>
      {showLikeButton && (
        <img
          id="like"
          src={like}
          style={{backgroundColor:showLikeButton?'red':'white'}}
          onClick={() => {
            dispatch(deleteFavourite(favourite.id));
          }}
          alt=""
        />
      )}
    </div>
  </div>
</>
    );
}
export default FavCard


