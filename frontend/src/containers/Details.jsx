// THIS FILE IS USED FOR THE DETAILS PAGE CONTAINER

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlaces } from '../reducks/places/operations';

import { getPlaces } from '../reducks/places/selectors';

import queryString from 'query-string';

import { fetchFromLocaleStorage } from '../reducks/favourites/operations';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Categorycard from '../components/common/Categorycard';

function Details() {
    const parsed = queryString.parse(window.location.search);

    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);

    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);
    // console.log(places);
    useEffect(() => {
        dispatch(fetchFromLocaleStorage());

        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (parsed.category !== undefined) {
            setCategory(parsed.category);
        }
    }, []);

    useEffect(() => {
        if (search != null || category != null) {
            dispatch(fetchPlaces(search, category));
        }
    }, [search, category])


  return (
    <>
        <Header />
        <main class="travel_site">
            {/* <!-- Details: Showcase --> */}
            <section class="details_showcase_container">
                <div class="details_showcase">
                    <img class="single_banner_img" src={Details.image} alt="" />
                    <div class="details_showcase_content">
                        <div class="showcase_images">
                               <div class="arrow_img">
                                    <img  src="images/arrow-places.svg" alt="" />
                               </div>
                            
                            {places.map((place) => (
                                <Categorycard place={place} />  
                            ))} 
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Details: Description --> */}
            {/* <section class="details_description_container">
                <div class="details_description">
                    <h2 class="title">{place.name}</h2>
                    <div class="details_description_text">
                        <p>{place.description}
                        </p>
                    </div>
                </div>
            </section> */}
            
            {/* <!-- Details: Map --> */}
            <section class="details_map_container">
                <div class="details_map">
                    <img src="images/maps2.png" alt=""/>
                </div>
            </section>
        </main>
        <Footer />
    </>
  )
}

export default Details