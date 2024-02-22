import { CDN_URL } from "../utils/constants";

function RestaurantCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, locality } =
    resData?.info;
  return (
    <div className="max-w-[350px] cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 ">
      <div className="mt-5">
        <img
          src={CDN_URL + cloudinaryImageId}
          className="h-[200px] object-cover w-[100%] rounded-lg"
          alt="foodimage"
        />
      </div>
      <div className="h-[150px] mt-4 mb-6">
        <h3 className="text-xl font-bold">{name}</h3>

        <h4 className="text-xl font-medium">
          {avgRatingString} stars &#8226; {sla.slaString}
        </h4>

        <h4 className="text-lg font-normal text-stone-500">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-lg font-normal text-stone-500">{locality}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
