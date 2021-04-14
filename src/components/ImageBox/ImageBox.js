const URL = "https://food-blog-images-all.s3.ap-south-1.amazonaws.com/recipies";

function ImageBox({ fileName }) {
  let url = URL + "/" + fileName + ".png";
  return (
    <div>
      <img
        src={url}
        alt="food-url"
        className="shadow-2xl m-8 w-56"
        width="10"
        height="10"
      />
    </div>
  );
}

export default ImageBox;
