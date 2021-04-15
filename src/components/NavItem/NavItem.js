import { Link, useRouteMatch } from "react-router-dom";

function NavItem({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return match ? (
    <div className="bg-green-800 cursor-pointer transition duration-300 border border-green-500 p-2 text-green-500 dark:border-gray-800 dark:text-white lg:mr-2 hover:text-white dark:hover:text-green-300">
      {label}
    </div>
  ) : (
    <Link to={to}>
      <div className="cursor-pointer transition duration-300 border border-green-500 p-2 text-green-500 dark:border-gray-800 dark:text-gray-800 lg:mr-2 hover:text-white dark:hover:text-white">
        {label}
      </div>
    </Link>
  );
}

export default NavItem;
