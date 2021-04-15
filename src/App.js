import Navbar from "./components/Navbar/Navbar";
import ImageBox from "./components/ImageBox/ImageBox";
const images = [
  "bhindi-curry",
  "chole-batura",
  "chole-subji",
  "dahivada",
  "idly",
  "kadai-veg",
  "masala-pav",
  "medu-vada",
  "pepper-rasam",
  "plain-dosa",
];
function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="bg-green-500 p-10 transition duration-300 text-3xl dark:bg-gray-800 dark:text-green-500">
          Welcome to test App
        </div>
        <div>
          <div className="grid grid-cols-4 justify-items-center">
            {images.map((image) => (
              <ImageBox key={image} fileName={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
