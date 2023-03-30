import React, { FC, createContext, useState } from 'react';

export interface formDataType {
  [key: string | number]: string | number | boolean;
}

interface ContextProps {
  formData: formDataType | null;
  setFormData: (prevFormData: formDataType) => formDataType | void;
}

export const formDataContext = createContext<ContextProps>({
  formData: null,
  setFormData: (prevFormData: formDataType) => {},
});

interface formDataContextProps {
  children: React.ReactNode;
}

const FormDataProvider: FC<formDataContextProps> = ({ children }) => {
  const [formData, setFormData] = useState<formDataType>({});

  return (
    <formDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </formDataContext.Provider>
  );
};

export default FormDataProvider;
