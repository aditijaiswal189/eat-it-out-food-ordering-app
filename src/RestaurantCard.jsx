function RestaurantCard(props) {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRatingString, sla, cuisines, locality } =
    resData?.info;
  console.log(resData);
  return (
    <div className="res-card">
      <div className="image-div">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          className="res-image"
          alt="foodimage"
        />
      </div>
      <div className="res-details">
        <h3>{name}</h3>

        <h4>
          {avgRatingString} stars &#8226; {sla.slaString}
        </h4>

        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4>{locality}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
