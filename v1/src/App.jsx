import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header className="" />
      <div className="flex  border-3 border-cyan-800">
        <Sidebar className="border border-blue-600" />
        <div className=" w-[100%] border border-green-500">
          <HomeScreen />
        </div>
      </div>
    </>
  );
};

export default App;
