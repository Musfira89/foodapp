import React, { useState, useEffect } from "react";
import "/index.css";
import RestCards from "./Restaurant";
import Shimmer from "./Shimmer";
import Error from "./Error";

const Body = () => {
  const [SearchTxt, SetSearchTxt] = useState();
  const [restaurants, Setrestaurants] = useState();
  const [originalRestaurants, setoriginalRestaurants] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    //API Call
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const fetchedRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setTimeout(() => {
      Setrestaurants(fetchedRestaurants);
      setLoading(false);
    }, 1);
    setoriginalRestaurants(fetchedRestaurants);
  }

  const filterData = (SearchTxt, restaurants) => {
    return restaurants.filter((rest) => rest?.info?.name?.toLowerCase()?.includes(SearchTxt.toLowerCase()));
  };

  const handleSearch = () => {
    const FilteredData = filterData(SearchTxt, originalRestaurants);
    Setrestaurants(FilteredData);
  };

 if (restaurants?.length === 0) return <Error/> 

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="searchBar"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) => {
            SetSearchTxt(e.target.value);
          }}
        />
        <button className="SearchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="restCardList">
        {Loading ? (
          <Shimmer />
        ) : (
          restaurants.map((rest) => (
            <RestCards {...rest.info} key={rest.info?.id} />
          ))
        )}
      </div>
    </>
  );
};

export default Body;
