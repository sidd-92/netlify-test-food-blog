import { Link, useParams } from "react-router-dom";
function FoodDetails() {
  let { id } = useParams();
  return (
    <div className="dark:text-white">
      <Link to="/">
        <div
          className="fixed right-0 flex items-center text-green-800 p-1 bg-green-50 dark:bg-transparent dark:text-green-100 hover:text-green-700 text-xs"
          style={{ width: "fit-content" }}
        >
          <i className="pi pi-arrow-left mr-2" style={{ fontSize: "14px" }}></i>
          <div>Back</div>
        </div>
      </Link>
      <div className="h-screen">My Food Details {id}</div>
    </div>
  );
}

export default FoodDetails;
