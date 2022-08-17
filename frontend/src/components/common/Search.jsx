import React, { useState } from "react";
import Imgsearch from "../../assets/img/searchicon.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();

  const inputSearch = (event) => {
    setSearch(event.target.value);
  };

  const submitAction = () => {
    dispatch(push("/details?search=" + search));
  };

  return (
    <form onSubmit={submitAction}>
      
        <input
          name="search"
          type="inputbox"
          onChange={inputSearch}
          placeholder="Search for destination"
        />
        <a onclick={() => (console.log('test'))}>
          <img
            className="search"
            onClick={() =>{alert('test')}}
            src={Imgsearch}
            alt=""
          />
        </a>
    
    </form>
  );
};

export default Search;
