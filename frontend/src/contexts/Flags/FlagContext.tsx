import React, { FC, ReactNode, createContext, useState } from 'react';
import type { GlyphProps } from '@atlaskit/icon/types';

export interface FlagType {
  id: number;
  title: string;
  icon?: React.ComponentType<GlyphProps>;
  appearance: 'error' | 'info' | 'success' | 'warning' | 'normal';
  description?: string;
}

interface ContextProps {
  flags: FlagType[];
  addFlag: (
    title: string,
    icon?: React.ComponentType<GlyphProps>,
    appearance?: 'error' | 'info' | 'success' | 'warning' | 'normal',
    description?: string
  ) => void;
  removeFlag: (id: number) => void;
}

const initialContextProps: ContextProps = {
  flags: [],
  addFlag: () => {},
  removeFlag: () => {},
};

export const FlagContext = createContext(initialContextProps);

interface FlagContextProps {
  children: React.ReactNode;
}

const FlagProvider: FC<FlagContextProps> = ({ children }) => {
  const [flags, setFlags] = useState<FlagType[]>([]);

  const addFlag = (
    title: string,
    icon?: React.ComponentType<GlyphProps>,
    appearance:
      | 'error'
      | 'info'
      | 'success'
      | 'warning'
      | 'normal' = 'normal',
    description?: string
  ) => {
    const newFlag: FlagType = {
      id: Date.now(),
      title,
      icon,
      appearance,
      description,
    };

    setFlags((prevState) => [...prevState, newFlag]);
  };

  const removeFlag = (id: number) => {
    setFlags((prevState) =>
      prevState.filter((flag) => flag.id !== id)
    );
  };

  return (
    <FlagContext.Provider value={{ flags, addFlag, removeFlag }}>
      {children}
    </FlagContext.Provider>
  );
};

export default FlagProvider;
