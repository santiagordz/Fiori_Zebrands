import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard, Metricas, MisAccionables, MisRetrospectivas, GestionarRetrospectivas, AdministrarUsuarios } from './views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/metricas" element={<Metricas />} />
        <Route path="/mis-retrospectivas" element={<MisRetrospectivas />} />
        <Route path="/mis-accionables" element={<MisAccionables />} />
        <Route path="/gestionar-retrospectivas" element={<GestionarRetrospectivas />} />
        <Route path="/administrar-usuarios" element={<AdministrarUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
