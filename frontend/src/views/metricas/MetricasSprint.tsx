import React, { FC, useState} from 'react'

import DropdownSprints from '../../components/charts/DropdownSprints'
interface MetricasSprintProps {
  
}




const MetricasSprint: FC<MetricasSprintProps> = ({  }) => {
    const [sprintsSeleccionadas, setSprintsSeleccionadas] = useState<any>([])
    const handleSprintSeleccionados = (sprints: string[]) => {
    setSprintsSeleccionadas(sprints)
}

  return (
    <div className=''>
        <div className='flex justify-end'>
            <DropdownSprints  sprintsActuales={[]} onSprintsSeleccionadasChange={handleSprintSeleccionados}/>
        </div>
    </div>
  )
}

export default MetricasSprint;