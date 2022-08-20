// THIS FILE IS USED FOR THE NATURAL WONDERS CONTENT COMPONENT

import React from 'react';

// Import push for re-direct
import { push } from 'connected-react-router';

// Import useDispatch
import { useDispatch } from 'react-redux';

// Create Grid Content component
const GridContent = ({ category }) => {
    const dispatch = useDispatch();

  return (
    <div class="wonders_img">
        <img 
        src={category.image} 
        onClick={() => dispatch(push('/preview/' + category.id))}
        alt="" 
        />
        <p>{category.name}</p>
    </div>
  );
};

export default GridContent;