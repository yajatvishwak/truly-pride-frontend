import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./lib/Auth";
import Home from "./lib/Home";
import Profile from "./lib/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/profile/:username" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
