// THIS FILE IS USED FOR THE FAVE HEADER COMPONENT

// Import React, ...
import React, { useState } from "react";
// Import push
import { push } from 'connected-react-router';
// Import useDispatch
import { useDispatch } from "react-redux";
// Import logo
import ImgLogo from '../../assets/img/european-logo.svg';
// Import Menu icon
import Menu from '../../assets/img/menu-icon.svg'


// Create Favhead component
const Favhead = () => {
    const dispatch = useDispatch();

    const [color, setColor] = useState('black');

    const myStyle = {
        color: color,
    }

    let changeColor = () => {
        color !== '#08aeea' ? setColor('#08aeea') : setColor('black');
    }

    return (
        <>
            <div class="travel_site_wrapper">
                <header>
                    {/*  Header / Navbar  */}
                    <div class="header_container">
                        <div id="logo">
                            <img src={ImgLogo} alt="logo" />
                        </div>
                        <nav id="navbar">
                            {/*  <img src={Menu} id="Menu"  alt="" />  */}
                            <ul class="links">
                                <li>
                                    <a class="nav_link" href="/">Home</a>
                                </li>
                                <li>
                                    <a class="nav_link" href="#wonders">Wonders in Europe</a>
                                </li>
                                <li>
                                    <a class="nav_link" href="#attractions">Tourist Attractions</a>
                                </li>
                                <li
                                    onClick={() => {
                                        dispatch(push('/favourites'))
                                    }}
                                >
                                    <a class="nav_link" href="/favourites">Favourite</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                {/* <script
                    src="https://code.jquery.com/jquery-3.6.0.js"
                    integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
                    crossorigin="anonymous"
                ></script> */}
            </div>
        </>
    );
};

// Export Header
export default Favhead;