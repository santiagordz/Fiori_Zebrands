import Pregunta from "./Pregunta";
import axios from "axios";
import { useState, useEffect } from "react";

const URI = "http://localhost:8000/pregunta";
const URIP = "http://localhost:8000/preguntasPredeterminadas";

const ListaPreguntas = () => {
  const [listaPregunta, setlistaPregunta] = useState([{}]);
  const [listaPredeterminadas, setListaPredeterminadas] = useState([{}]);

  const getListaPredeterminadas = async () => {
    const res = await axios.get(URIP);
    setListaPredeterminadas(res.data);
  };

  const getListaPreguntas = async () => {
    const res = await axios.get(URI);
    setlistaPregunta(res.data);
  };

  useEffect(() => {
    getListaPreguntas();
    getListaPredeterminadas();
  }, []);

  return (
    <>
      <div className="text-center py-[8vmin]">
        <h1 className="text-[#5E4DB2] font-bold text-2xl">
          Selecciona las preguntas
        </h1>

        <p className="text-[#44546F]">
          Elige las preguntas necesarias para satisfacer las necesidades de la
          retrospectiva
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-4 px-[8vmin]">
        <p className="font-semibold text-lg text-[#626F86] p-[1vmin]">
          Preguntas seleccionadas: {Object.keys(listaPredeterminadas).length}
        </p>
        <Pregunta pregunta={listaPredeterminadas} />
        <p className="font-semibold text-lg text-[#626F86] p-[1vmin]">
          Otras preguntas:{" "}
        </p>
        <Pregunta pregunta={listaPregunta} />
      </div>
    </>
  );
};

export default ListaPreguntas;
