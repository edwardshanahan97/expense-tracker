import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="app">
      <Navbar />

      <Header />

      <Routes>
        <Route
          index
          path="/"
          element={<Overview isActive={isActive} setIsActive={setIsActive} />}
        />
      </Routes>
    </div>
  );
};

export default App;
