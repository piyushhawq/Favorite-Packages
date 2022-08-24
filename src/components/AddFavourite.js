import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavPackage, searchResult } from "../actions";
import { MAX_NO } from "../helper/url";

const AddFavourite = (props) => {
  const [packageName, setPackageName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [packageText, setPackageText] = useState("");
  const { data, error, inProgress } = useSelector((state) => state.searchData);
  const dispatch = useDispatch();
  const max_no = MAX_NO;
  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(searchResult(searchQuery.trim()));
    }
  }, [searchQuery]);
  handleSubmit = (e) => {
    e.preventDefault();
    //conditions --like text -empty
    dispatch(addFavPackage({ name: packageName, text: packageText }));
  };
  return (
    
    <div className="content">
      <br></br>
      <div>
        <label>Search for NPM Packages</label>
        <div>
      <input className="searchBox"
        type="text"
        name="searchQuery"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      </div>
        <br></br>
        <label>Results</label>
        <br></br>
      {error && <div>Not Found</div>}
      {data.results &&
        data["results"].map((item, index) => {
          return (
            
            <div key={index}>
              
              <input 
              
                type="radio"
                name="packageName"
                id={item.package.name}
                value={item.package.name}
                onClick={() => {
                  setPackageName(item.package.name);
                }}
              />
              <label className="radioOptions" htmlFor={item.package.name}> {item.package.name} </label>
              <br></br>
            </div>
          );
        })}
        <div>
        <br></br>
            <label>Why is this your fav?</label>
            <br></br>
      <textarea
       className="FavText"
        name="packageText"
        value={packageText}
        onChange={(e) => {
          setPackageText(e.target.value);
        }}
      />
      </div>
     
      <input
      className="submitBtn"
        type="submit"
        name="submit"
        value="Add Package"
        onClick={(e) => {
          handleSubmit(e);
        }}
      />
    </div>
    </div>
  );
};

export default AddFavourite;
