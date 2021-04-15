import NavItem from "../NavItem/NavItem";
import useDarkMode from "../../hooks/useDarkMode";
import { ToggleButton } from "primereact/togglebutton";

function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="bg-gray-800 dark:bg-green-500 text-white p-3 flex flex-col lg:flex-row lg:justify-between transition duration-300">
      <div className="text-3xl mb-2 lg:mb-0 text-center lg:text-left lg:mr-10 font-bold dark:text-gray-800">
        Netlify Blog For Testing
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <NavItem activeOnlyWhenExact={true} label="Home" to="/" />
        <NavItem activeOnlyWhenExact={true} label="About" to="/about" />
        <NavItem
          activeOnlyWhenExact={true}
          label="Categories"
          to="/categories"
        />
        <div className="w-full flex lg:hidden items-center">
          <div className="transition text-green-500 dark:text-white text-2xl font-bold pt-1">
            Welcome to test App
          </div>
          <ToggleButton
            onIcon="pi pi-sun"
            offIcon="pi pi-moon"
            onLabel=""
            offLabel=""
            tooltip={colorTheme === "light" ? "Toggle Dark" : "Toggle Light"}
            tooltipOptions={{ position: "left", className: "text-xs" }}
            className="w-10 h-auto ml-auto lg:m-auto mt-2 lg:mt-0"
            checked={colorTheme === "light"}
            onChange={(e) => setTheme(colorTheme)}
          />
        </div>
        <div className="hidden lg:block">
          <ToggleButton
            onIcon="pi pi-sun"
            offIcon="pi pi-moon"
            onLabel=""
            offLabel=""
            tooltip={colorTheme === "light" ? "Toggle Dark" : "Toggle Light"}
            tooltipOptions={{ position: "left", className: "text-xs" }}
            className="w-10 h-auto ml-auto lg:m-auto mt-2 lg:mt-0"
            checked={colorTheme === "light"}
            onChange={(e) => setTheme(colorTheme)}
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
