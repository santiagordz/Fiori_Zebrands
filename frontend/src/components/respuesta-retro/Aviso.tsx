import React, { FC } from 'react'
import Blanket from '@atlaskit/blanket';


interface AvisoProps {
  
}

const Aviso: FC<AvisoProps> = ({  }) => {
  return (
      <div className=''>

     <Blanket 
        //onBlanketClicked={onBlanketClicked}
        isTinted={true}
        //shouldAllowClickThrough={shouldAllowClickThrough}
        //testId="basic-blanket"
          >
              <div>
                  <div className='flex flex-col h-4/5 w-2/5 rounded bg-white border border-solid border-gray-300 border-collapse justify-center items-center py-10 px-1 gap-10'> {/* Div del rectángulo blanco */}
                        <div>
                            <h2 className='flex font-bold w-full'>Algunos recordatorios antes de empezar</h2>
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <h3 className='font-bold'>Accionables</h3>
                        </div>
                    </div>
              </div>
              
              
              
              
          
          
          
          
          </Blanket>
    </div>
  )
}

export default Aviso;