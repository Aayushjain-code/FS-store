import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./reducer";

const Context = createContext();

const Provider = ({ children }) => {

	const [filterState, filterDispatch] = useReducer(filterReducer, {
		excludeNotAvailable: false,
		offerItems: false,
		byRating: "",
		isSort: "",
		byPrice: "",
		byCategory: "",
		sortByRange: 0,
	});
	return (
		<Context.Provider value={{ filterState, filterDispatch }}>
			{children}
		</Context.Provider>
	)
}


const useFilter = () => useContext(Context);


export { Provider, useFilter };



