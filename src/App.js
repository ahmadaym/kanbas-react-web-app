// import logo from './logo.svg';
// import './App.css';
import { HashRouter } from "react-router-dom";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/HelloWorld";
import Labs from "./Labs/index";
import { Routes, Route, Navigate } from "react-router";
import Project from "./Project";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/project" />} />
          <Route path="/project/*" element={<Project />} />
          {/* <Route path="/" element={<Navigate to="/Labs" />} /> */}
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
