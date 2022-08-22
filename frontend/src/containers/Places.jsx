// THIS FILE IS USED FOR THE PLACES CONTAINER

import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import queryString from 'query-string';

import { fetchPlaces } from '../reducks/places/operations';

import { getPlaces } from '../reducks/places/selectors';

import { fetchFromLocaleStorage } from '../reducks/favourites/operations';

import bgImg from '../assets/img/banner-img.png';
import Header from '../components/common/Header';
import Card from '../components/common/Card';
import Footer from '../components/common/Footer';


const Places = (props) => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);

    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const places = getPlaces(selector);

    useEffect(() => {
        dispatch(fetchFromLocaleStorage());

        if (parsed.search !== undefined) {
            setSearch(parsed.search)
        }
        if (parsed.category !== undefined) {
            setCategory(parsed.category)
        }
    }, []);
    useEffect(() => {
        if (search != null || category != null) {
            dispatch(fetchPlaces(search, category));
        }
    }, [search, category]);
    const placeid=props.match.params.id


  return (
    <>
        <Header />
        <main class="travel_site">                    
            {places.map((place) => {
                return (
                    place.id==placeid && 
                <Card place={place} />)
            })} 
        </main>        
        <Footer />
    </>
  )
};

export default Places;