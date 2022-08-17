import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import React from "react";
import way from "../../assets/img/wavyblue.svg";

const GridContent = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <div className="block">
      <img
        src={category.image}
        onClick={() => dispatch(push("/preview/" +category.id))}
        alt=""
      />
      <p>{category.name}</p>
    </div>
  );
};

export default GridContent;
