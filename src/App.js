import Navbar from "./components/Navbar/Navbar";
import ImageBox from "./components/ImageBox/ImageBox";
import { useEffect } from "react";
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
  useEffect(() => {
    let imgs = [
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/bhindi-curry.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/chole-batura.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/chole-subji.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/dahivada.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/idly.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/kadai-veg.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/masala-pav.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/medu-vada.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/pepper-rasam.png",
      "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies/plain-dosa.png",
    ];
    imgs.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

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
