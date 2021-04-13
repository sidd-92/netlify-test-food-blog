import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className=" w-56 border border-gray-800 transition duration-300 p-2 my-2 dark:bg-gray-800 dark:text-white">
        Toggle Light / Dark Mode
      </div>
      <div className="bg-green-500 p-10 transition duration-300 text-3xl dark:bg-gray-800 dark:text-green-500">
        Welcome to test App
      </div>
    </>
  );
}

export default App;
