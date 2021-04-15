import { Link } from "react-router-dom";
const URL = "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies";

function ImageBox({ fileName, name, link }) {
  let url = URL + "/" + fileName + ".png";
  return (
    <Link to={`/food/${link}`} className="mt-2 lg:mt-10">
      <div className="bg-gray-100 dark:bg-gray-800 dark:text-green-600 w-full lg:w-320px shadow-xl border border-green-700 rounded-md  flex group cursor-pointer relative ">
        <img
          src={url}
          alt="food-url"
          className="w-100px object-cover lg:w-160px border-r dark:border-gray-600"
          width="10"
          height="10"
        />

        <div href="#" className="pt-1 pl-1 font-semibold group-hover:underline">
          {name}
        </div>
        <div className="absolute bottom-0 right-3">
          <i className="pi pi-arrow-right group-hover:underline"></i>
        </div>
      </div>
    </Link>
  );
}

export default ImageBox;
