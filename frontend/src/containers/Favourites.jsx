// THIS FILE IS USED FOR THE FAVOURITES PAGE CONTAINER
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import { getFavourites } from '../reducks/favourites/selectors';

import { fetchFromLocaleStorage } from '../reducks/favourites/operations';

import { getCategories } from '../reducks/categories/selectors';

import { fetchCategories } from '../reducks/categories/operations';

import Favhead from '../components/common/Favhead';
import FavCard from '../components/common/FavCard';
import Search from '../components/common/Search';
import Footer from '../components/common/Footer';

import Imgsearch from '../assets/img/search-icon.svg';
import Showcase from '../assets/img/banner-home.png';
import mouse from '../assets/img/mouse-down.svg';
import wave from '../assets/img/border-heading.svg';

const Favourites = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const favourites = getFavourites(selector);
    console.log(favourites);

    useEffect(() => {
        dispatch(fetchFromLocaleStorage());
    }, []);

    const categories = getCategories(selector);
    
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchFromLocaleStorage());
    }, []);


  return (
    <>
        <Favhead />
        <main class="travel_site">
            {/* <!-- Showcase --> */}
            <section class="showcase_container">
                <div class="showcase">
                    <img class="banner_img" src={Showcase} alt="" />
                    <div class="showcase_content">
                        <h1>Happiest place on Earth!</h1>
                        <Search img={Imgsearch} alt='' />
                    </div>
                    <div class="mouse">
                        <img src={mouse} alt="" />
                    </div>
                </div>
            </section>
            {/* <!-- Favorite Wonders --> */}
            <section class="tourist_attractions_container">
                <div class="tourist_attractions">
                    <h2>Favourite</h2>
                    <img src={wave} alt="" />
                    <div class="tourist_attractions_cards">
                        {favourites.map((favourite) => (
                            <FavCard favourite={favourite}/>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- Footer --> */}
            <Footer />
        </main>

    </>
  )
}

export default Favourites