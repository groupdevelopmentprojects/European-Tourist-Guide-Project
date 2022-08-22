// THIS FILE IS USED FOR THE LOCATION PREVIEW PAGE CONTAINER

import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPlaces } from '../reducks/places/selectors';

import { getCategories } from '../reducks/categories/selectors';

import { fetchPlaces } from '../reducks/places/operations';

import { fetchCategories } from '../reducks/categories/operations';

import { fetchFromLocaleStorage } from '../reducks/favourites/operations';

import queryString from 'query-string';
// Import search icon
import Imgsearch from '../assets/img/search-icon.svg';
import Showcase from '../assets/img/banner-home.png';
import mouse from '../assets/img/mouse-down.svg';
import wave from '../assets/img/border-heading.svg';

import Header from '../components/common/Header';
import Search from '../components/common/Search';
import GridContent from '../components/common/GridContent';
import Thumbnail from '../components/common/Thumbnail';
import Video from '../components/common/Video';
import Offer from '../components/common/Offer';
import Map from '../components/common/Map';
import Prev from '../components/common/Prev';
import Footer from '../components/common/Footer';

// Preview container
const Preview = (props) => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);

    const dispatch =useDispatch();
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);
    // console.log(places);

    useEffect(() => {
        dispatch(fetchFromLocaleStorage());
    }, []);

    const categories = getCategories(selector);
    // console.log(places);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchFromLocaleStorage());
    }, []);
     const catid=props.match.params.id
    



  return (
    <>
        <Header />
        <main class="travel_site">
            {/* <!-- Showcase --> */}
            <section class="showcase_container">
                <div class="showcase">
                    <img class="banner_img" src={Showcase} alt="" />
                    <div class="showcase_content">
                        <h1>Happiest place on Earth!</h1>
                        <Search img={Imgsearch} alt='' />
                    </div>
                    {/* <div class="mouse">
                        <img src={mouse} alt="" />
                    </div> */}
                </div>
            </section>
            {/* <!-- Natural Wonders --> */}
            <section class="natural_wonders_container">
                <div class="natural_wonders">
                    <h2>Natural Wonders in Europe</h2>
                        {categories.map((category) => {
                            return (
                                category.id==catid && 
                                <Prev category={category} />
                            )
                        })}
                </div>
            </section>
            {/* <!-- Tourist Attractions --> */}
            <section class="tourist_attractions_container">
                <div class="tourist_attractions">
                    <h2>Tourist Attractions in Europe</h2>
                    <img src={wave} alt="" />
                    {places.map((place) => (
                        <Thumbnail place={place}/>
                    ))}
                </div>
            </section>
            {/* <!-- Video Section --> */}
            <Video />
            {/* <!-- Newsletter --> */}
            <Offer />
            {/* <!-- Map --> */}
            <Map />
            {/* <!-- Footer --> */}
            <Footer />
        </main>
    </>
  )
}

export default Preview