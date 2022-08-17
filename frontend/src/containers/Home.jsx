import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import GridContent from "../components/common/GridContent";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import Thumbnail from "../components/common/Thumbnail";
import Imgbackground from "../assets/img/backgroundmaskimg.svg";
import ImgEVGAlogo from "../assets/img/EVGA-logo.png";
import ImgSearchicon from "../assets/img/searchicon.png";
import { getPlaces } from "../reducks/places/selectors";
import { getCategories } from "../reducks/categories/selectors";
import { fetchPlaces } from "../reducks/places/operations";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../reducks/categories/operations";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import way from "../assets/img/wavyblue.svg";

import map from "../assets/img/MAP.png";
import Prev from "../components/common/Prev";
import Video from "../components/common/Video";
import Offer from "../components/common/Offer";
import Map from "../components/common/Map";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  // console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);

  // console.log(categories);

  return (
    <>
      <Header />
      
          <section className="firstpage">
            <div className="background">
              <img src={Imgbackground} alt="" />
            </div>

            <div className="shade"></div>
            <div className="input">
              <p id="maincap">Happiest place on Earth!</p>
              <Search img={ImgSearchicon} />
            </div>
          </section>
          <section class="cols">
            <div className="heading">
              <p>Natural wonders in Europe</p>
              <img src={way} alt="" />
            </div>
            <div className="flex">
              {categories.map((category) => (
                <GridContent key={category.id} category={category} />
              ))}
            </div>
          </section>
          <div class="heading">
            <p>Tourist Attraction Places</p>
            <img src={way} alt="" />
          </div>
          <section class="grid">
            {places.map((place) => (
              <Thumbnail place={place} />
              
            ))}
          </section>
          <Video/>
          <Offer/>
          <Map/>
       
      
    

      <Footer />
    </>
  );
};

export default Home;
