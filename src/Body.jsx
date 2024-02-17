import RestaurantCard from "./RestaurantCard";
import { resList } from "./resData";

function Body() {
  return (
    <div className="body">
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info.differentiatedUi.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
