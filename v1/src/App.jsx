import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  const [isOpen, setOpen] = useState(true);

  function handleToggleMenu() {
    setOpen((open) => !open);
  }

  return (
    <>
      <Header className="" onToggleMenu={handleToggleMenu} />
      <div className="flex  border-3 border-cyan-800 ">
        <Sidebar isOpen={isOpen} />
        <div className=" w-[100%]">
          <HomeScreen />
        </div>
      </div>
    </>
  );
};

export default App;
