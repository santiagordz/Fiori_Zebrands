import React, { FC, useContext, useEffect } from 'react';
import { userDataContext } from '../../contexts';

interface NotRegisteredProps {}

const NotRegistered: FC<NotRegisteredProps> = ({}) => {
  const { user, setUser } = useContext(userDataContext);

  //   useEffect(() => {
  //     if (user === -2) {
  //       setUser(null);
  //     }
  //   }, []);

  return <div className="">NotRegistered</div>;
};

export default NotRegistered;
