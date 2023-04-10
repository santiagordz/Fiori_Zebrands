import React, { FC, useMemo, useState, useEffect } from "react";
import { PieChart, BarChart } from "../charts";
import type { OpcionesType } from "./Respuestas";

interface ResultadosProps {
  id_tipo_pregunta: number;
  pregunta: string;
  opciones: OpcionesType[] | null;
  respuestas: {
    respuesta: string;
    id_pregunta: number;
    id_usuario: number;
    anonimo: boolean;
  }[];
}

interface DataType {
  status: string;
  total: number;
}

const Resultados: FC<ResultadosProps> = ({
  id_tipo_pregunta,
  pregunta,
  respuestas,
  opciones,
}) => {
  const [numRespuestas, setNumRespuestas] = useState<number>(0);

  const [data, setData] = useState<DataType[]>([]);

  const handleDataType3 = (): DataType[] => {
    const opcionesData: DataType[] = opciones?.map((opcion) => {
      const valueRespuestas = respuestas.filter(
        (respuesta) => respuesta.respuesta === opcion.opcion_respuesta
      ).length;
      return {
        status: opcion.opcion_respuesta,
        total: valueRespuestas,
      };
    }) as DataType[];
    return opcionesData;
  };

  const handleDataType4 = (): DataType[] => {
    const opcionesData: DataType[] = [];

    for (let index = 1; index <= 5; index++) {
      const valueRespuestas = respuestas.filter(
        (respuesta) => Number(respuesta.respuesta) === index
      ).length;
      opcionesData.push({
        status: index.toString(),
        total: valueRespuestas,
      });
    }

    return opcionesData;
  };

  useEffect(() => {
    setNumRespuestas(respuestas.length);
    if (id_tipo_pregunta === 3) {
      setData(handleDataType3);
    }
    if (id_tipo_pregunta === 4) {
      setData(handleDataType4);
    }
  }, [respuestas]);

  const Case = useMemo(() => {
    switch (id_tipo_pregunta) {
      case 3:
        return (
          <div>
            <PieChart data={data} />
          </div>
        );
      case 4:
        return (
          <div>
            <BarChart data={data} />
          </div>
        );
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
      <h2>{pregunta}</h2>
      {Case}
    </div>
  );
};

export default Resultados;
