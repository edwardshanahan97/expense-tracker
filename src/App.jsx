import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { useState } from "react";
import Income from "./pages/Income/Income";
import Expenses from "./pages/Expenses/Expenses";

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
        <Route
          path="/income"
          element={<Income isActive={isActive} setIsActive={setIsActive} />}
        />

        <Route
          path="/expenses"
          element={<Expenses isActive={isActive} setIsActive={setIsActive} />}
        />
      </Routes>
    </div>
  );
};

export default App;
