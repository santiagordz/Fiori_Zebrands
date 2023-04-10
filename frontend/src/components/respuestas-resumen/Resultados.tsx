import React, { FC, useMemo } from "react";

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

const Resultados: FC<ResultadosProps> = ({
  id_tipo_pregunta,
  pregunta,
  respuestas,
}) => {
  const Case = useMemo(() => {
    switch (id_tipo_pregunta) {
      case 3:
        return <div>Respuestas de tipo 3</div>;
      case 4:
        return <div>Respuestas de tipo 4</div>;
      default:
        return <div>Respuestas de tipo default</div>;
    }
  }, [id_tipo_pregunta, pregunta, respuestas]);
  return (
    <div
      className={`flex flex-col py-3 px-5 w-full gap-1 rounded bg-white 
    shadow-sm
    }`}
    >
      {Case}
    </div>
  );
};

export default Resultados;
