import { ADD_FAV_PACKAGE, DEL_FAV_PACKAGE } from "../actions/action_type";

let initialState = {
  packageList: [],
};

export function FavouritePackagesReducer(state = initialState, action) {
  var packageList = state.packageList;
  switch (action.type) {
    case ADD_FAV_PACKAGE: {
      let tempPackageList = [action.data, ...packageList];
      return {
        packageList: tempPackageList,
      };
    }
    case DEL_FAV_PACKAGE: {
      let tempPackageList = packageList.filter((item) => {
        return item.name != action.name;
      });
      return {
        packageList: tempPackageList,
      };
    }
    default:
      return state;
  }
}
