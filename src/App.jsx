/* eslint-disable react-hooks/exhaustive-deps */

import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tareas from "./components/Tareas";
import SobreNosotros from "./components/SobreNosotros";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/tareas">Tareas</Link>
          </li>
          <li>
            <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
