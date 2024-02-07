import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Addjoke from "./components/Addjoke";
import UpdateJoke from "./components/UpdateJoke";

function App() {
  return (
    <div className="bg-black h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addjoke" element={<Addjoke />} />
        <Route path="/updatejoke" element={<UpdateJoke />} />
      </Routes>
    </div>
  );
}

export default App;
