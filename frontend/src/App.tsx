import Pregunta from './components/preguntas/Pregunta';

function App() {
  const id = 1;
  const pred = true;
  const pregunta = '¿Que mejorarias del proceso de retrospectiva?';
  const id_preg = 2;

  return (
    <div>
      <Pregunta />
      <Pregunta />
      <Pregunta />
    </div>
  );
}

export default App;
