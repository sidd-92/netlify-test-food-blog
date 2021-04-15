const URL = "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies";

function ImageBox({ fileName }) {
  let url = URL + "/" + fileName + ".png";
  return (
    <div className="bg-gray-100 w-320px shadow-xl border border-green-700 rounded-md mt-10">
      <img
        src={url}
        alt="food-url"
        className="w-160px"
        width="10"
        height="10"
      />
    </div>
  );
}

export default ImageBox;
