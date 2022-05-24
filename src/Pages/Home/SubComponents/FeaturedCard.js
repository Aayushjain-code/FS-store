import React from "react";
import { useNavigate } from "react-router";
import { useFilter } from "../../../context/context";

const FeaturedCard = ({ item }) => {
  const navigate = useNavigate();
  const { filterDispatch, filterState } = useFilter();

  const { imageUrl, categoryName } = item;
  return (
    <div>
      <div className="box">
        <div className="image">
          <img src={imageUrl} alt=""></img>
        </div>
        <div className="content">
          <h3>{categoryName}</h3>
          <button
            className="button btn-success"
            onClick={() => {
              navigate("/products");
              filterDispatch({ type: "CATEGORY", payload: categoryName });
            }}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
