import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview/Overview";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
};

export default App;
