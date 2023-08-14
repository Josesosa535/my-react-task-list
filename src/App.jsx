/* eslint-disable react-hooks/exhaustive-deps */

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tareas from "./components/Tareas";
import SobreNosotros from "./components/SobreNosotros";
import Simple from "./components/Simple";

function App() {
  return (
    <BrowserRouter>
      <Simple />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
