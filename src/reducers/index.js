import { combineReducers } from "redux";
import { SearchReducer } from "./SearchReducer";
import { FavouritePackagesReducer } from "./FavouritePackagesReducer";

export default combineReducers({
  searchData: SearchReducer,
  favouritePackage: FavouritePackagesReducer,
});
