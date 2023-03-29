import Lozenge from '@atlaskit/lozenge';
import { FC } from 'react';

interface RolIconProps {
  rol: number;
}

const RolIcon: FC<RolIconProps> = ({ rol }) => {
  if (rol == 1) {
    return <Lozenge appearance="moved">Administrador</Lozenge>;
  } else if (rol == 2) {
    return <Lozenge appearance="inprogress">Responsable</Lozenge>;
  } else if (rol == 3) {
    return <Lozenge appearance="new">Squad Member</Lozenge>;
  } else {
    return <Lozenge>NULL</Lozenge>;
  }
};

export default RolIcon;
