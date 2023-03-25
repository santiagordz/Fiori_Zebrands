import React, { FC, createContext, useState, useEffect } from 'react';

interface ContextProps {
  user: { [key: string]: any } | null;
  setUser: (data: any) => void;
  hasAttemptedFetch: boolean;
  setHasAttemptedFetch: (attempted: boolean) => void;
}

export const userDataContext = createContext<ContextProps>({
  user: null,
  setUser: (data: any) => {},
  hasAttemptedFetch: false,
  setHasAttemptedFetch: (attempted: boolean) => {},
});

interface UserContextProps {
  children: React.ReactNode;
}

const UserContext: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setHasAttemptedFetch(true);
  }, []);

  return (
    <userDataContext.Provider
      value={{
        user,
        setUser,
        hasAttemptedFetch,
        setHasAttemptedFetch,
      }}
    >
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
