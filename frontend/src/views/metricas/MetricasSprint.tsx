import React, { FC, useState} from 'react'

import DropdownSprints from '../../components/charts/DropdownSprints'
import StackedBarChart from '../../components/charts/StackedBarchart'

interface MetricasSprintProps {
  
}




const MetricasSprint: FC<MetricasSprintProps> = ({  }) => {
    const [sprintsSeleccionadas, setSprintsSeleccionadas] = useState<any>([])
    const handleSprintSeleccionados = (sprints: string[]) => {
    setSprintsSeleccionadas(sprints)
}

  return (
    <div className=''>
        <div className='flex justify-end p-3'>
            <DropdownSprints sprintsActuales={[]} onSprintsSeleccionadasChange={handleSprintSeleccionados}/>
            <StackedBarChart />
         
        </div>
    </div>
  )
}

export default MetricasSprint;