import React, { FC, createContext, useState } from 'react';

interface ContextProps {
  user: { [key: string]: any } | null;
  setUser: (data: any) => void;
}

export const userDataContext = createContext<ContextProps>({
  user: null!,
  setUser: (data: any) => {},
});

interface UserContextProps {
  children: React.ReactNode;
}

const UserContext: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState(null!);

  return (
    <userDataContext.Provider value={{ user, setUser }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
