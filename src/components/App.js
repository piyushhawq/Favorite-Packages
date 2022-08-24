import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddFavourite from "./AddFavourite";
import Navbar from "./Navbar";
import PackageList from "./PackageList";
import Page404 from "./Page404";
const App = () => {
  return (
    <Router>
      <div id="main-container">
        <Navbar />
        <Routes>
          <Route path="/addFavourite" element={<AddFavourite />} />
          <Route exact path="/" element={<PackageList />} />
          <Route component={Page404} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
