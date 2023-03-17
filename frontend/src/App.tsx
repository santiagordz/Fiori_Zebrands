import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Dashboard, Metricas } from './views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/metricas" element={<Metricas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
