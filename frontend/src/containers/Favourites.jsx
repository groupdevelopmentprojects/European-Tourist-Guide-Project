import React from "react";
import FavCard from "../components/common/FavCard";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Search from "../components/common/Search";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFavourites } from "../reducks/favourites/selectors";
import { useEffect } from "react";
import { fetchFromLocalStorage } from "../reducks/favourites/operations";
import Imgbackground from "../assets/img/backgroundmaskimg.svg";
import ImgSearchicon from "../assets/img/searchicon.png";
import way from '../assets/img/wavyblue.svg'
import { getCategories } from "../reducks/categories/selectors";
import { fetchCategories } from "../reducks/categories/operations";
import GridContent from "../components/common/GridContent";
import Favhead from "../components/common/Favhead";

const Favourites = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const favourites = getFavourites(selector);
  console.log(favourites);
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, []);
  const categories = getCategories(selector);
 
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFromLocalStorage());
  }, []);

  return (
    <>
      <Favhead />
       <section className="firstpage">
        <h1>Favourites</h1>
      </section> 
      <section class="firstpage">
         <div className="background">
          <img src={Imgbackground} alt="" />
        </div> 

        <div className="shade"></div>
        <div className="input">
          <p id="maincap">Happiest place on Earth!</p>
          <Search img={ImgSearchicon} />
        </div>
        </section> 
      
        <div class="heading">
          <p>Favorite</p>
          <img src={way} alt="" />
        </div>

      <section class="grid">
        {favourites.map((favourite) => (
          <FavCard favourite={favourite} />
        ))}
      </section>

      <Footer />
    </>
  );
};

export default Favourites
