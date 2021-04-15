import { useParams } from "react-router-dom";
function FoodDetails() {
  let { id } = useParams();
  return <div className="dark:text-white">My Food Details {id}</div>;
}

export default FoodDetails;
