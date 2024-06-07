import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import SaveMoney from "./Components/SaveMoney/SaveMoney";
import Benifits from "./Components/Benifits/Benifits";
import Delivering from "./Components/Delivering/Delivering";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/save-money" element={<SaveMoney />} />
      <Route exact path="/benifits" element={<Benifits />} />
      <Route exact path="/delivering" element={<Delivering />} />
    </Routes>
  );
}

export default App;
