import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Header />

      <Routes>
        <Route index path="/" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;
