import React, { FC, createContext, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';

const SECRET_KEY_1 =
  import.meta.env.VITE_APP_COOKIE_KEY_1 || 'secret1';
const SECRET_KEY_2 =
  import.meta.env.VITE_APP_COOKIE_KEY_2 || 'secret2';

interface ContextProps {
  user: { [key: string]: any } | null | -2;
  setUser: (data: any) => void;
}

export const userDataContext = createContext<ContextProps>({
  user: null,
  setUser: (data: any) => {},
});

interface UserContextProps {
  children: React.ReactNode;
}

const UserContext: FC<UserContextProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [hasAttemptedFetch, setHasAttemptedFetch] = useState(false);

  const decryptData = (
    encryptedData: string,
    key1: string,
    key2: string
  ) => {
    const decryptedBytes1 = CryptoJS.AES.decrypt(encryptedData, key2);
    const decryptedData1 = decryptedBytes1.toString(
      CryptoJS.enc.Utf8
    );
    const decryptedBytes2 = CryptoJS.AES.decrypt(
      decryptedData1,
      key1
    );
    const decryptedData2 = JSON.parse(
      decryptedBytes2.toString(CryptoJS.enc.Utf8)
    );
    return decryptedData2;
  };

  useEffect(() => {
    const storedEnryptedUser = Cookies.get('user');
    if (storedEnryptedUser) {
      const decryptedUser = decryptData(
        storedEnryptedUser,
        SECRET_KEY_1,
        SECRET_KEY_2
      );

      setUser(decryptedUser);
    }
    setHasAttemptedFetch(true);
  }, []);

  return (
    <userDataContext.Provider value={{ user, setUser }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
