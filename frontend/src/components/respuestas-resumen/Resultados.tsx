import React, { FC } from "react";

interface ResultadosProps {
  id_tipo_pregunta: number;
  pregunta: string;
  respuestas: {
    respuesta: string;
    id_pregunta: number;
    id_usuario: number;
    anonimo: boolean;
  }[];
}

const Resultados: FC<ResultadosProps> = ({}) => {
  return (
    <div
      className={`flex flex-col py-3 px-5 w-full gap-1 rounded bg-white 
    shadow-sm
    }`}
    >
      Resultados
    </div>
  );
};

export default Resultados;
