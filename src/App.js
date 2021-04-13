import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme === "light" ? "dark" : "light";
  useEffect(
    () => {
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    },
    [theme],
    colorTheme
  );
  return [colorTheme, setTheme];
}

function App() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <>
      <div
        className=" w-56 border border-gray-800 transition duration-300 p-2 my-2 dark:bg-gray-800 dark:text-white"
        onClick={() => setTheme(colorTheme)}
      >
        Toggle Light / Dark Mode
      </div>
      <div className="bg-green-500 p-10 transition duration-300 text-3xl dark:bg-gray-800 dark:text-green-500">
        Welcome to test App
      </div>
    </>
  );
}

export default App;
