import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FoodDetails from "./components/views/FoodDetails/FoodDetails";
import { ScrollTop } from "primereact/scrolltop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = React.lazy(() => import("./components/views/Home/Home"));
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="">
          <div className="bg-green-500 hidden lg:block transition p-1 lg:p-3 lg:text-2xl duration-300 dark:bg-gray-700 dark:text-green-500">
            Welcome to test App
          </div>
          <React.Suspense fallback={<div>Loading..</div>}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <div className="dark:text-white">About</div>
              </Route>
              <Route path="/categories">
                <div className="dark:text-white">Categories</div>
              </Route>
              <Route path="/food/:id">
                <FoodDetails />
              </Route>
            </Switch>
          </React.Suspense>
        </div>
      </Router>
      <ScrollTop />
    </>
  );
}

export default App;
