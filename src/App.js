import Navbar from "./components/Navbar/Navbar";
import ImageBox from "./components/ImageBox/ImageBox";
import FoodDetails from "./components/views/FoodDetails/FoodDetails";
import { ScrollTop } from "primereact/scrolltop";
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
    name:
      "how to make chole bhature recipe | chhole bhature | chana bhatura | chola batura",
    description: "",
    link: "2",
  },
  {
    fileName: "chole-subji",
    name:
      "how to make pindi chole recipe | pindi chana masala | how to make chole pindi masala",
    description: "",
    link: "3",
  },
  {
    fileName: "dahivada",
    name:
      "how to make dahi vada recipe | dahi bhalla recipe | soft dahi balle | dahi bade",
    description: "",
    link: "4",
  },
  {
    fileName: "idly",
    name:
      "how to make idli with cooked rice recipe | idli with left over rice recipe",
    description: "",
    link: "5",
  },
  {
    fileName: "kadai-veg",
    name:
      "how to make kadai paneer recipe | karahi paneer | how to make kadai paneer gravy",
    description: "",
    link: "6",
  },
  {
    fileName: "masala-pav",
    name:
      "how to make masala pav recipe | bhaji masala pav | mumbai street style pav masala",
    description: "",
    link: "7",
  },
  {
    fileName: "medu-vada",
    name:
      "how to make medu vada recipe in mixie | uddina vada | medhu vadai | ulundu vadai",
    description: "",
    link: "8",
  },
  {
    fileName: "pepper-rasam",
    name:
      "how to make pepper rasam recipe | milagu rasam recipe | menasina saaru",
    description: "",
    link: "9",
  },
  {
    fileName: "plain-dosa",
    name: "how to make dosa recipe | plain dosa recipe | sada dosa recipe",
    description: "",
    link: "10",
  },
  {
    fileName: "ribbon-pakora",
    name:
      "how to make ribbon pakoda recipe | ribbon murukku recipe | ola pakoda",
    description: "",
    link: "11",
  },
  {
    fileName: "samosa",
    name: "how to make samosa recipe | how to make samosa | aloo samosa",
    description: "",
    link: "12",
  },
  {
    fileName: "semiya-upma",
    name:
      "how to make semiya upma recipe | vermicelli upma recipe | vermicelli recipe",
    description: "",
    link: "13",
  },
  {
    fileName: "sweet-pongal",
    name:
      "how to make sweet pongal recipe | sakkarai pongal recipe | chakkara pongal",
    description: "",
    link: "14",
  },
  {
    fileName: "tomato-rasam",
    name:
      "how to make instant rasam recipe | tomato rasam without dal | no dal rasam",
    description: "",
    link: "15",
  },
  {
    fileName: "ven-pongal",
    name:
      "how to make ven pongal recipe | khara pongal recipe | how to make ven pongal",
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
          <div className="bg-green-500 hidden lg:block transition p-1 lg:p-3 lg:text-2xl duration-300 dark:bg-gray-700 dark:text-green-500">
            Welcome to test App
          </div>
          <Switch>
            <Route exact path="/">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:justify-items-center">
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
      <ScrollTop />
    </>
  );
}

export default App;
