function RestaurantCard(props) {
  const { resData } = props;
  console.log(resData);
  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        className="res-image"
        alt="foodimage"
      />
      <div className="res-details">
        <h3>{resData.info.name}</h3>

        <h4>
          {resData.info.avgRatingString} stars &#8226;{" "}
          {resData.info.sla.slaString}
        </h4>

        <h4 className="cuisines">{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.differentiatedUi.locality}</h4>
      </div>
    </div>
  );
}

export default RestaurantCard;
