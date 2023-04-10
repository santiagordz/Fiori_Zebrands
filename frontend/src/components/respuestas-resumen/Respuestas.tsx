import React, { FC, useEffect, useState } from 'react';
import RetrospectivaGeneral from '../respuesta-retro/reusable/RetrospectivaGeneral';
import type { Retrospectiva } from '../../views/mis-retrospectivas/MisRetrospectivas';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Resultados from './Resultados';

const URI = 'http://localhost:8000/retrospectivas';

export interface OpcionesType {
  id: number;
  opcion_respuesta: string;
}

interface PreguntaType {
  id: number;
  pregunta: string;
  predeterminada: boolean;
  id_tipo_pregunta: number;
  opciones?: OpcionesType[] | null;
}

interface RespuestaType {
  respuesta: string;
  id_pregunta: number;
  id_usuario: number;
  anonimo: boolean;
  nombre: string;
}

interface DetailedRetrospectiva extends Retrospectiva {
  preguntas: PreguntaType[];
  respuestas: RespuestaType[];
}

const Respuestas: FC = ({}) => {
  const { retroId } = useParams();

  const [infoRetro, setInfoRetro] = useState<DetailedRetrospectiva>(
    null!
  ); //State es una vaiable que puede cambiar con el timepo, para darle un valor, se lo das al setter

  const getInfo = async () => {
    try {
      const res = await axios.get(`${URI}/details/${retroId}`);
      console.log(res.data);
      setInfoRetro(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="">
      {infoRetro && (
        <RetrospectivaGeneral
          descripcion={infoRetro.descripcion || ''}
          titulo={infoRetro.titulo}
          tags={infoRetro.tags}
          fechaInicio={infoRetro.fecha_inicio}
          idRetrospectiva={infoRetro.id}
          fechaFin={!infoRetro.en_curso ? infoRetro.fecha_fin : ''}
        />
      )}
      {infoRetro?.preguntas.map((pregunta: PreguntaType) => {
        const respuestasFiltered = infoRetro?.respuestas.filter(
          (respuesta) => respuesta.id_pregunta === pregunta.id
        );

        return (
          <Resultados
            key={pregunta.id}
            id_tipo_pregunta={pregunta.id_tipo_pregunta}
            pregunta={pregunta.pregunta}
            respuestas={respuestasFiltered}
            opciones={pregunta.opciones ? pregunta.opciones : null}
          />
        );
      })}
    </div>
  );
};

export default Respuestas;
