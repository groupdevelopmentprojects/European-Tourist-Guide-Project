// THIS FILE IS USED FOR THE PREVIOUS CATEGORY COMPONENT

// Import React
import React from 'react'

// Import push
import { push } from 'connected-react-router';

// Import close svg for ...
import close from '../../assets/img/close.svg';

// Import useDispatch 
import { useDispatch } from 'react-redux';

// 

const Prev = ({ category }) => {
    const dispatch = useDispatch();

  return (
    <>
        <img src={category.image} alt="" />
        <a onClick={() => dispatch(push('/'))}>
            <img src={close} alt="" className='close'/>
        </a>
    </>
  );
};

export default Prev;