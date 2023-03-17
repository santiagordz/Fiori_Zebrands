import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';

interface RolesIconProps {}

const RolesIcon: FC<RolesIconProps> = ({}) => {
  const getRol = async () => {
    const res = await axios.get(URI);
    setRol(res.data);
  };

  const [rol, setRol] = useState([]);

  return <div className="">RolesIcon</div>;
};

export default RolesIcon;
