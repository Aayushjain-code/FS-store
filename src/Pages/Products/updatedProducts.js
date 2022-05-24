import { useFilter } from "../../context/context";

export const FilterFunction = (products) => {
  const { filterState, filterDispatch } = useFilter();
  let updatedProductList = products;

  if (filterState.excludeNotAvailable) {
    updatedProductList = updatedProductList.filter(
      (item) => item.availableOrNot
    );
  }

  if (filterState.offerItems) {
    updatedProductList = updatedProductList.filter((item) => item.offer);
  }

  if (filterState.byCategory) {
    if (filterState.byCategory === "All") {
      updatedProductList = products;
    } else {
      updatedProductList = updatedProductList.filter(
        (item) => item.categoryName === filterState.byCategory
      );
    }
  }

  if (filterState.byPrice) {
    if (filterState.byPrice === "All") {
      updatedProductList = products;
    } else if (filterState.byPrice === "Above 50 Below 100") {
      updatedProductList = updatedProductList.filter(
        (item) => item.priceNew >= 50 && item.priceNew < 100
      );
    } else if (filterState.byPrice === "Above 100 Below 200") {
      updatedProductList = updatedProductList.filter(
        (item) => item.priceNew >= 100 && item.priceNew < 200
      );
    } else if (filterState.byPrice === "Above 200 Below 300") {
      updatedProductList = updatedProductList.filter(
        (item) => item.priceNew >= 200 && item.priceNew < 300
      );
    }
  }

  if (filterState.sortByRange) {
    updatedProductList =
      filterState.sortByRange === 0
        ? updatedProductList
        : [...updatedProductList].filter(
            (product) => product.priceNew <= filterState.sortByRange
          );
  }

  if (filterState.isSort) {
    updatedProductList = updatedProductList.sort((a, b) =>
      filterState.isSort === "lowToHigh"
        ? a.priceNew - b.priceNew
        : b.priceNew - a.priceNew
    );
  }
  if (filterState.byRating) {
    if (filterState.byRating === "4StarAndAbove") {
      updatedProductList = updatedProductList.filter(
        (item) => item.rating >= 4
      );
    } else if (filterState.byRating === "3StarAndAbove") {
      updatedProductList = updatedProductList.filter(
        (item) => item.rating >= 3
      );
    } else if (filterState.byRating === "2StarAndAbove") {
      updatedProductList = updatedProductList.filter(
        (item) => item.rating >= 2
      );
    } else {
      updatedProductList = updatedProductList.filter(
        (item) => item.rating >= 1
      );
    }
  }
  return updatedProductList;
};
