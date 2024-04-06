import RestaurantCard from "./RestaurantCard";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log();

  useEffect(function () {
    async function fetchRest() {
      const res = await fetch(
        " https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();
      console.log(json);
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }

    fetchRest();
  }, []);

  function handleClickBtn() {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );

    setListOfRestaurants(filteredList);
  }

  function handleDelivery() {
    const deliveryTimeFilter = listOfRestaurants.filter(
      (res) => res.info.sla.deliveryTime < 30
    );
    console.log(deliveryTimeFilter);
    setListOfRestaurants(deliveryTimeFilter);
  }

  function handleSearch() {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.includes(searchText.toLowerCase())
    );
    console.log(filteredRestaurant);
    setListOfRestaurants(filteredRestaurant);
  }

  if (listOfRestaurants.length === 0) {
    return (
      <div className="grid grid-cols-4  gap-10">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div className="max-w-[85%] mx-auto my-9">
      <div className="flex justify-start font-semibold text-xl mb-8 gap-8 ">
        <div className="relative">
          <input
            placeholder="Search..."
            type="text"
            className="bg-stone-200 px-5 py-3 rounded-lg w-[350px]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-300 px-5 py-3 rounded-lg absolute right-0"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleDelivery}
          className="bg-yellow-300 px-5 py-3 rounded-lg"
        >
          Delivery within 30 mins
        </button>
        <button
          className="bg-yellow-300 px-5 py-3 rounded-lg"
          onClick={handleClickBtn}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="grid grid-cols-4  gap-10">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
