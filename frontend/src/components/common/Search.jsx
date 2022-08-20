// THIS FILE IS USED FOR THE SEARCH BAR COMPONENT

import React, { useState } from "react";

// Import search icon
import Imgsearch from '../../assets/img/search-icon.svg';

import { useDispatch } from "react-redux";

// Import push for re-direction
import { push } from 'connected-react-router';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();

    const inputSearch = (event) => {
        setSearch(event.target.value);
    }
    const submitAction = () => {
        dispatch(push('/details?search=' + search));
    }

    return (
        <form onSubmit={submitAction}>
            <div class="search">
                <input 
                    className="search_input"
                    type="search" 
                    onChange={inputSearch}
                    placeholder="Search your Destination" 
                />
                <a onClick={() => (console.log('test'))}>
                    <img
                        className="search_icon" 
                        src={Imgsearch}
                        onClick={alert('test')}
                        alt="" 
                    />
                </a>
            </div>
        </form>
    )
};

export default Search;