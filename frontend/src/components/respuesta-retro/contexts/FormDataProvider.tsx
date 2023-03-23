import React, { FC, createContext, useState } from 'react';

interface ContextProps {
  formData: { [key: string]: any };
  setFormData: (data: any) => void;
}

export const formDataContext = createContext<ContextProps>({
  formData: {},
  setFormData: (data: any) => {},
});

interface formDataContextProps {
  children: React.ReactNode;
}

const FormDataProvider: FC<formDataContextProps> = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <formDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </formDataContext.Provider>
  );
};

export default FormDataProvider;
