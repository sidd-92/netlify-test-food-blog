function NavItem(props) {
  return (
    <div className="cursor-pointer transition duration-300 border border-green-500 p-2 text-green-500 dark:border-gray-800 dark:text-gray-800 mr-2 hover:text-white dark:hover:text-white">
      {props.children}
    </div>
  );
}

export default NavItem;
