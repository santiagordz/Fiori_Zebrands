import React, { FC, useEffect, useState } from 'react';
import RetrospectivaGeneral from '../respuesta-retro/reusable/RetrospectivaGeneral';
import type { Retrospectiva } from '../../views/mis-retrospectivas/MisRetrospectivas';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Resultados from './Resultados';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import Button from '@atlaskit/button';
import { useNavigate } from 'react-router-dom';
import Spinner from '../design-template/spinner/Spinner';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/retrospectivas`;

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
  const navigate = useNavigate();
  const [tryFetch, setTryFetch] = useState(false);
  const [infoRetro, setInfoRetro] = useState<DetailedRetrospectiva>(
    null!
  );

  const getInfo = async () => {
    try {
      const res = await axios.get(`${URI}/details/${retroId}`);
      setInfoRetro(res.data);
      setTryFetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  if (!tryFetch)
    return <Spinner message="Cargando respuestas..." gap={6} />;

  return (
    <div className="flex gap-5 flex-col p-2">
      <span className="w-full">
        <Button
          className="!items-center !text-[0.85rem]"
          appearance="subtle-link"
          iconBefore={
            <ArrowLeftIcon label="volver a gestionar retrospectivas" />
          }
          onClick={() => navigate(-1)}
        >
          Volver a la página anterior
        </Button>
      </span>
      <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm w-full">
        <h2 className="font-semibold text-information">
          Resultados de la retrospectiva
        </h2>
      </div>

      {infoRetro && (
        <RetrospectivaGeneral
          descripcion={infoRetro.descripcion || ''}
          titulo={infoRetro.titulo}
          tags={infoRetro.tags}
          fechaInicio={infoRetro.fecha_inicio}
          idRetrospectiva={infoRetro.id}
          enCurso={infoRetro.en_curso}
          fechaFin={!infoRetro.en_curso ? infoRetro.fecha_fin : ''}
          respuestas={infoRetro.num_respuestas}
          noIcon={true}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
    </div>
  );
};

export default Respuestas;
