import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

//not using keys (not acceptable) <<<<index as key <<< unique id (best practice)
const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);

  // const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  // const arr = useState(resList);
  // listOfRestaurants = arr[0];
  // setListOfRestaurant = arr[1];

  // Normal JS Variable
  // let listOfRestaurants = [];

  //Normal JS Variable
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "121782",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Continental", "Pizzas"],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 43,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "1217823",
  //       name: "Dominos",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Continental", "Pizzas"],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 43,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "121782322",
  //       name: "KFC",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       costForTwo: "₹300 for two",
  //       cuisines: ["Continental", "Pizzas"],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 43,
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            setListOfRestaurant();
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
