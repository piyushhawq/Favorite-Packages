import { useDispatch, useSelector } from "react-redux";
import { deleteFavPackage } from "../actions";
import "./home.css";

const PackageList = (props) => {
  const { packageList: packageListArray } = useSelector(
    (state) => state.favouritePackage
  );
  const dispatch = useDispatch();
  console.log("aa", packageListArray);
  return (
    <div>
      <h1 className="packageHead">Package List</h1>
      {packageListArray.map((item) => {
        return (
          
          <div key={item.name}>
            
            <table className="tableContent">
  <tr>
    <th>Package</th>
    <th>Action</th>
  </tr>
  <tr>
    <td>{item.name}</td>
    <td> <button
              type="button"
              onClick={() => {
                dispatch(deleteFavPackage(item.name));
              }}
            >
              Delete
            </button></td>
  </tr>
</table>
          </div>
        );
      })}
    </div>
  );
};

export default PackageList;
