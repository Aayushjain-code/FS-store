import React from "react";
import { useFilter } from "../../context/context";

const FilterContainer = () => {
  const { filterDispatch, filterState } = useFilter();
  return (
    <div className="filter-container">
      <h1 className="filter-heading">filter-Products</h1>

      <span className="filter-sub-heading">
        <label style={{ fontSize: " 1.8rem" }}>Price: </label>
        <select
          onChange={(e) =>
            filterDispatch({
              type: "SORT_BY_PRICE_RANGE",
              payload: e.target.value,
            })
          }
        >
          <option value="All">All</option>
          <option value="Above 50 Below 100">Above 50 Below 100</option>
          <option value="Above 100 Below 200">Above 100 Below 200</option>
          <option value="Above 200 Below 300">Above 200 Below 300</option>
        </select>
      </span>

      <span className="filter-sub-heading">
        <label>
          <input
            type="radio"
            name="group1"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
            }
            checked={filterState.isSort === "lowToHigh" ? true : false}
          />{" "}
          <span>Low to high</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="group1"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
            }
            checked={filterState.isSort === "highToLow" ? true : false}
          />{" "}
          <span>High to low</span>
        </label>
      </span>

      <span className="filter-sub-heading">
        <label>
          <input
            type="checkbox"
            name="group1"
            onChange={() => filterDispatch({ type: "EXCLUDE_NOT_AVAILABLE" })}
            checked={filterState.excludeNotAvailable}
          />
          <span>Exclude Not Available</span>
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="group1"
            onChange={() => filterDispatch({ type: "ONLY_ITEMS_WITH_OFFER" })}
            checked={filterState.offerItems}
          />{" "}
          <span>Item With Offers Only</span>
        </label>
      </span>

      <span className="filter-sub-heading">
        <label style={{ fontSize: "1.8rem" }}>
          Category : {filterState.byCategory}
        </label>
        <select
          style={{ marginLeft: "1rem", width: "15rem" }}
          onChange={(e) =>
            filterDispatch({ type: "CATEGORY", payload: e.target.value })
          }
        >
          <option value="All">All</option>
          <option value="tuberous">tuberous</option>
          <option value="fruit">fruit</option>
          <option value="Green">Green</option>
          <option value="leafy">leafy</option>
        </select>
      </span>

      <span className="filter-sub-heading">
        <label style={{ fontSize: "1.8rem" }}>Range Slider: </label>
        <input
          type="range"
          min={60}
          max={300}
          step={30}
          defaultValue={250}
          onChange={(event) =>
            filterDispatch({
              type: "FILTER_BY_RANGE",
              payload: event.target.value,
            })
          }
        />
      </span>

      <span className="filter-sub-heading">
        <label style={{ fontSize: "1.8rem" }}>Ratings: </label>
        <br />
        <label>
          <span>
            <label>
              <input
                type="radio"
                name="group2"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER_BY_RATING",
                    payload: "4StarAndAbove",
                  })
                }
                checked={
                  filterState.byRating === "4StarAndAbove" ? true : false
                }
              />
              <p style={{ marginLeft: "2rem", marginTop: "-2.3rem" }}>
                4 Star and Above
              </p>
            </label>
          </span>
          <span>
            <label>
              <input
                type="radio"
                name="group2"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER_BY_RATING",
                    payload: "3StarAndAbove",
                  })
                }
                checked={
                  filterState.byRating === "3StarAndAbove" ? true : false
                }
              />
              <p style={{ marginLeft: "2rem", marginTop: "-2.3rem" }}>
                3 Star and Above
              </p>
            </label>
          </span>
          <span>
            <label>
              <input
                type="radio"
                name="group2"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER_BY_RATING",
                    payload: "2StarAndAbove",
                  })
                }
                checked={
                  filterState.byRating === "2StarAndAbove" ? true : false
                }
              />
              <p style={{ marginLeft: "2rem", marginTop: "-2.3rem" }}>
                2 Star and Above
              </p>
            </label>
          </span>
          <span>
            <label>
              <input
                type="radio"
                name="group2"
                onChange={() =>
                  filterDispatch({
                    type: "FILTER_BY_RATING",
                    payload: "1StarAndAbove",
                  })
                }
                checked={
                  filterState.byRating === "1StarAndAbove" ? true : false
                }
              />
              <p style={{ marginLeft: "2rem", marginTop: "-2.3rem" }}>
                1 Star and Above
              </p>
            </label>
          </span>
        </label>
      </span>
      <button
        className="btn filter-btn"
        onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterContainer;
