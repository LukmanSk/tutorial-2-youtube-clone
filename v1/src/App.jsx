import { Container } from "react-bootstrap";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
};

export default App;
