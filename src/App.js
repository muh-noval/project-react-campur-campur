import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Beranda from "./views/beranda";

function App() {
  useEffect(() => {
    document.title = "My React";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
}

export default App;
