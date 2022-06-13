import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./lib/Auth";
import Home from "./lib/Home";
import Profile from "./lib/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
