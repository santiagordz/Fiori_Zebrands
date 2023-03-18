import React, { FC } from 'react'
import Button from '@atlaskit/button'
import AddIcon from '@atlaskit/icon/glyph/add'

interface BotonRegistrarUsuarioProps {
  
}

const BotonRegistrarUsuario: FC<BotonRegistrarUsuarioProps> = ({  }) => {
  return (
    <div><Button appearance="primary" iconBefore={<AddIcon label=''/>}>Registrar Usuario</Button></div>

  )
}

export default BotonRegistrarUsuario;