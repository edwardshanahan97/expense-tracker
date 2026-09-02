import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Overview />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
