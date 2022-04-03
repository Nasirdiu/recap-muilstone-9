import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";

import Bike from "./components/Bike/Bike";
import NotFound from "./components/NotFound/NotFound";
import Reacharts from "./components/Reacharts/Reacharts";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/home" element={<Home></Home>}>
          Home
        </Route>
        <Route path="/about" element={<About></About>}>
          About
        </Route>
        <Route path="/bike" element={<Bike></Bike>}>
          Product
        </Route>
        <Route path="/reachart" element={<Reacharts></Reacharts>}>
          Product
        </Route>
        <Route path="*" element={<NotFound></NotFound>}>
          Product
        </Route>
      </Routes>
    </div>
  );
}

export default App;
