import Navbar from "./components/Navbar/Navbar";
import ImageBox from "./components/ImageBox/ImageBox";
import FoodDetails from "./components/views/FoodDetails/FoodDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const images = [
  {
    fileName: "bhindi-curry",
    name:
      "how to make bhindi curry | bhindi subji | okra | ladies finger subji",
    description: "",
    link: "1",
  },
  {
    fileName: "chole-batura",
    name: "",
    description: "",
    link: "2",
  },
  {
    fileName: "chole-subji",
    name: "",
    description: "",
    link: "3",
  },
  {
    fileName: "dahivada",
    name: "",
    description: "",
    link: "4",
  },
  {
    fileName: "idly",
    name: "",
    description: "",
    link: "5",
  },
  {
    fileName: "kadai-veg",
    name: "",
    description: "",
    link: "6",
  },
  {
    fileName: "masala-pav",
    name: "",
    description: "",
    link: "7",
  },
  {
    fileName: "medu-vada",
    name: "",
    description: "",
    link: "8",
  },
  {
    fileName: "pepper-rasam",
    name: "",
    description: "",
    link: "9",
  },
  {
    fileName: "plain-dosa",
    name: "",
    description: "",
    link: "10",
  },
  {
    fileName: "ribbon-pakora",
    name: "",
    description: "",
    link: "11",
  },
  {
    fileName: "samosa",
    name: "",
    description: "",
    link: "12",
  },
  {
    fileName: "semiya-upma",
    name: "",
    description: "",
    link: "13",
  },
  {
    fileName: "sweet-pongal",
    name: "",
    description: "",
    link: "14",
  },
  {
    fileName: "tomato-rasam",
    name: "",
    description: "",
    link: "15",
  },
  {
    fileName: "ven-pongal",
    name: "",
    description: "",
    link: "16",
  },
];
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="">
          <div className="bg-green-500 hidden lg:block transition p-1 lg:p-3 lg:text-2xl duration-300 dark:bg-gray-800 dark:text-green-500">
            Welcome to test App
          </div>
          <Switch>
            <Route exact path="/">
              <div className="grid grid-cols-1 lg:grid-cols-4 lg:justify-items-center lg:my-2">
                {images.map((image) => (
                  <ImageBox
                    key={image.link}
                    fileName={image.fileName}
                    name={image.name}
                    link={image.link}
                  />
                ))}
              </div>
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
        </div>
      </Router>
    </>
  );
}

export default App;
