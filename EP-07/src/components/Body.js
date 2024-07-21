import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //renders after the body component is rendered
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  //Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
  // console.log("Body rendered"); // Body rendered first

  const fetchData = async () => {
    try {
      // For CORs issue we use this method
      // const data = await fetch(
      //   `https://api.allorigins.win/get?url=${encodeURIComponent(
      //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1291712&lng=77.4883655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      //   )}`
      // );
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1291712&lng=77.4883655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${data.status}`);
      }

      const json = await data.json();
      console.log(json);
      //optional chaining
      setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Failed to fetch data:", error);
    }
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              // searchText
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            // setListOfRestaurant();
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
