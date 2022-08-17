
import { useDispatch } from "react-redux";
import React from "react";
import way from "../../assets/img/wavyblue.svg";
import {push} from "connected-react-router";
import close from '../../assets/img/close.svg'

const Prev = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <>
      
        <img src={category.image} alt="" />
        <a onClick={() => dispatch(push("/"))}>
          <img src={close} alt="" className="close" />
        </a>
     
    </>
  );
};

export default Prev;
