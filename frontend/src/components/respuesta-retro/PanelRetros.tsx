import React, { FC } from 'react'
import RetrospectivaGeneral from './RetrospectivaGeneral';
import { retrospective } from './RetroDomi';

interface PanelRetrosProps {
  
}

const PanelRetros: FC<PanelRetrosProps> = ({  }) => {
  return (
    <>
     <h2 className='text-lg font-bold text-information'>Retrospectivas pendientes de responder</h2>
      <RetrospectivaGeneral titulo = {retrospective.titulo} descripcion = {retrospective.descripcion} fechaInicio = {retrospective.fechaInicio} idRetrospectiva = {retrospective.id_retrospectiva} /> {/* De esta manera le pasamos los props que ya definimos en el componente hijo*/}
      <h2 className='text-lg font-bold text-information'> Otras Retrospectivas</h2>
    </>
  )
}

export default PanelRetros;