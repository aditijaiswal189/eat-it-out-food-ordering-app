import RestaurantCard from "./RestaurantCard";
import { resObj } from "./resData";

function Body() {
  return (
    <div className="body">
      <div className="res-container">
        <RestaurantCard resData={resObj[0]} />
        <RestaurantCard resData={resObj[1]} />
        <RestaurantCard resData={resObj[2]} />
        <RestaurantCard resData={resObj[3]} />
        <RestaurantCard resData={resObj[4]} />
        <RestaurantCard resData={resObj[5]} />
        <RestaurantCard resData={resObj[6]} />
        <RestaurantCard resData={resObj[7]} />
        <RestaurantCard resData={resObj[8]} />
        <RestaurantCard resData={resObj[9]} />
        <RestaurantCard resData={resObj[10]} />
        <RestaurantCard resData={resObj[11]} />
        <RestaurantCard resData={resObj[18]} />

        <RestaurantCard resData={resObj[13]} />

        <RestaurantCard resData={resObj[15]} />
        <RestaurantCard resData={resObj[16]} />
        <RestaurantCard resData={resObj[17]} />
        <RestaurantCard resData={resObj[19]} />
        <RestaurantCard resData={resObj[12]} />
        <RestaurantCard resData={resObj[14]} />
        {/* {resObj.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.info.differentiatedUi.id}
            resData={restaurant}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Body;
