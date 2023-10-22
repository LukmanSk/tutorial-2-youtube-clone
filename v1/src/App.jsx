import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(true);
  function handleToggleMenu() {
    setOpen((open) => !open);
  }
  return (
    <>
      <Header className="" onToggleMenu={handleToggleMenu} />
      <div className="flex  border-3 border-cyan-800 ">
        <Sidebar isOpen={isOpen} />
        <div className="w-[100%]">{children}</div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomeScreen />
              </Layout>
            }
          />
          <Route path="/auth" element={<LoginScreen />} />
          <Route
            path="/search"
            element={
              <Layout>
                <h1>Search</h1>
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <h1>Page Not Found</h1>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
