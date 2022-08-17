import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Card from "../components/common/Card";
import { fetchPlaces } from "../reducks/places/operations";
import { getPlaces } from "../reducks/places/selectors";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import Imgbackground from "../assets/img/backgroundmaskimg.svg";
import ImgSearchicon from "../assets/img/searchicon.png";
import way from "../assets/img/wavyblue.svg";
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operations";
import GridContent from "../components/common/GridContent";
import { push } from "connected-react-router";
import close from '../assets/img/close.svg'
import Prev from "../components/common/Prev";
import Thumbnail from "../components/common/Thumbnail";
import Video from "../components/common/Video";
import Offer from "../components/common/Offer";
import Map from "../components/common/Map";
const Preview = (props) => {
  const parsed = queryString.parse(window.location.search);
  const [search, setSearch] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  // console.log(places);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);
  const categories = getCategories(selector);
  // console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);
  const catid=props.match.params.id

  

     
  //   if (parsed.search !== undefined) {
  //     setSearch(parsed.search);
  //   }
  //   if (parsed.category !== undefined) {
  //     setCategory(parsed.category);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (search != null || category != null) {
  //     dispatch(fetchPlaces(search, category));
  //   }
  // }, [search, category]);
  return (
    <>
      <Header />
      <div className="bi">
        <div className="blur">
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
          {/* <section class="cols">
            <div className="heading">
              <p>Natural wonders in Europe</p>
              <img src={way} alt="" />
            </div>
            <div className="flex">
              {categories.map((category) => (
                
                <GridContent key={category.id} category={category} />
              ))}
            </div>
          </section> */}
        </div>
        {/* <div class="index">
          <img src={category.image} alt="" />
          <a onClick={() => dispatch(push("/"))}>
            <img src={close} alt="" className="close" />
          </a>
        </div> */}
        <div className="index">
          {categories.map((category) => {
            return (
              category.id==catid &&
            
        
            <Prev category={category} />)})}
          
        </div>
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

export default Preview;
