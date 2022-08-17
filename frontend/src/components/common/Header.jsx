import React, { useEffect, useState } from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import ImgLogo from "../../assets/img/logo.svg";
import listicon from "../../assets/img/listicon.svg";

const Header = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("black");

  const myStyle = {
    color: color,
  };
  let changeColor = () => {
    color !== "#08aeea" ? setColor("#08aeea") : setColor("black");
  }

  return (
    <>
      <header>
        <nav>
          <div class="logo">
            <img src={ImgLogo} alt="" />
          </div>
          <div class="navbar">
            <p>
              <a href="/" id="nic">
                HOME
              </a>
            </p>
            <p >
              WONDERS IN EUROPE
            </p>
            <p >
              TOURIST ATTRACTION
            </p>
            <p
              onClick={() => {
                dispatch(push("/favourites"));
              }}
            >
              <a>FAVOURITE</a>
            </p>
          </div>
          <div class="list">
            <img src={listicon} alt="" id="listicon" />
          </div>
        </nav>
      </header>
      <script
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Header;
