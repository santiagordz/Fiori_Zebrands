import React, { FC, useEffect, useState } from 'react';
import RetrospectivaGeneral from '../respuesta-retro/reusable/RetrospectivaGeneral';
import type { Retrospectiva } from '../../views/mis-retrospectivas/MisRetrospectivas';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const URI = 'http://localhost:8000/retrospectivas';

interface RespuestasProps { 
}

interface DetailedRetrospectiva extends Retrospectiva {
    preguntas: {
        id: number;
        pregunta: string;
        predeterminada: boolean;
        id_tipo_pregunta: number;
        opciones?: string | null;
    }
    respuestas: {
        respuesta: string;
        id_pregunta: number;
        id_usuario: number;
        anonimo: boolean;
    }
}


const Respuestas: FC<RespuestasProps> = ({}) => {
  const { retroId } = useParams();

  const [infoRetro, setInfoRetro] = useState<DetailedRetrospectiva>(
    null!
  ); //State es una vaiable que puede cambiar con el timepo, para darle un valor, se lo das al setter

  const getInfo = async () => {
    try {
        const res = await axios.get(`${URI}/details/${retroId}`);
        console.log(res.data);
      setInfoRetro (res.data)
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
    </div>
  );
};

export default Respuestas;
