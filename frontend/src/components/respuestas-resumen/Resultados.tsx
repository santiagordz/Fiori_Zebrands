import React, { FC, useMemo, useState, useEffect } from 'react';
import { PieChart, BarChart } from '../charts';
import type { OpcionesType } from './Respuestas';
import { ReactComponent as IncognitoSVG } from '@/assets/icons/incognito.svg';

interface ResultadosProps {
  id_tipo_pregunta: number;
  pregunta: string;
  opciones: OpcionesType[] | null;
  respuestas: {
    respuesta: string;
    id_pregunta: number;
    id_usuario: number;
    anonimo: boolean;
    nombre: string;
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

  const [esAnonimo, setEsAnonimo] = useState<boolean>(false);
  const handleAnonimo = () => {
    const valueRespuestas = respuestas.filter(
      (respuesta) => !!respuesta.anonimo === true
    ).length;
    if (valueRespuestas > 0) {
      setEsAnonimo(true);
    }
  };

  useEffect(() => {
    handleAnonimo();
  }, []);

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
          <div className="flex w-full justify-center items-center">
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
        return (
          <div className="flex flex-col gap-7">
            {respuestas.map((respuesta) => (
              <div className="flex flex-col gap-3 border-2 border-gray0 rounded-sm p-5 shadow-sm ">
                
                  <p className="text-gray-400">
                    {esAnonimo ? 'Usuario Anónimo' : respuesta.nombre}
                  </p>
                
                <p className="text-gray-700">
                  {respuesta.respuesta}
                </p>
              </div>
            ))}
          </div>
        );
    }
  }, [id_tipo_pregunta, pregunta, respuestas]);

  return (
    <div
      className={`flex flex-col py-12 px-20 w-full gap-5 rounded bg-white 
    shadow-sm
    }`}
    >
      <h2 className="text-lg text-textNormal font-semibold">
        {pregunta}
      </h2>
      {Case}
      {esAnonimo && (
        <div>
          <p className='text-sm'>Algún usuario respondió de forma anónima</p>
          <IncognitoSVG width={15} height={15} fill="#000000" />
        </div>
      )}
    </div>
  );
};

export default Resultados;
