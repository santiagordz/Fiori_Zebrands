import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import {
  Dashboard,
  Metricas,
  MisAccionables,
  MisRetrospectivas,
  GestionarRetrospectivas,
  AdministrarUsuarios,
  NotFound404,
} from './views';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/metricas/*" element={<Metricas />} />
        <Route
          path="/mis-retrospectivas/*"
          element={<MisRetrospectivas />}
        />
        <Route
          path="/mis-accionables/*"
          element={<MisAccionables />}
        />
        <Route
          path="/gestionar-retrospectivas/*"
          element={<GestionarRetrospectivas />}
        />
        <Route
          path="/administrar-usuarios/*"
          element={<AdministrarUsuarios />}
        />
      </Routes>
    </Router>
  );
}

export default App;
