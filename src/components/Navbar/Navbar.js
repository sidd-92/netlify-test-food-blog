import NavItem from "../NavItem/NavItem";
import useDarkMode from "../../hooks/useDarkMode";
import { ToggleButton } from "primereact/togglebutton";
function Navbar() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="bg-gray-800 dark:bg-green-500 text-white p-3 flex justify-between transition duration-300">
      <div className="text-3xl mr-10 font-bold dark:text-gray-800">
        Netlify Blog For Testing
      </div>
      <div className="flex items-center">
        <NavItem>Nav1</NavItem>
        <NavItem>Nav2</NavItem>
        <NavItem>Nav2</NavItem>
        <ToggleButton
          onIcon="pi pi-sun"
          offIcon="pi pi-moon"
          onLabel=""
          offLabel=""
          tooltip={colorTheme === "light" ? "Toggle Dark" : "Toggle Light"}
          tooltipOptions={{ position: "left", className: "text-xs" }}
          className="custom-target-icon w-10 h-auto"
          checked={colorTheme === "light"}
          onChange={(e) => setTheme(colorTheme)}
        />
      </div>
    </div>
  );
}
export default Navbar;
