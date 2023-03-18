import Pregunta from './Pregunta'

const ListaPreguntas = () => {
  return (
    <div className='grid grid-cols-1 gap-y-4 px-[8vmin]'>
        <p className='font-semibold text-lg text-[#626F86] p-[1vmin]'>Preguntas seleccionadas: 5</p>
        <Pregunta />
        <Pregunta />
        <Pregunta />
        <Pregunta />
        <Pregunta />
        <p className='font-semibold text-lg text-[#626F86] p-[1vmin]'>Otras preguntas: </p>
        <Pregunta />
        <Pregunta />
        <Pregunta />
    </div>
  )
}

export default ListaPreguntas