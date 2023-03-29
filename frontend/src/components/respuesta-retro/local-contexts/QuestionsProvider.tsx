import React, { FC, createContext, useState } from 'react';

export interface QuestionDB {
  id: number;
  id_tipo_pregunta: number;
  pregunta: string;
  opciones_respuestas: string | null;
}

interface ContextProps {
  questions: Array<QuestionDB>;
  setQuestions: (data: any) => void;
}

export const questionsContext = createContext<ContextProps>({
  questions: [],
  setQuestions: (data: any) => {},
});

interface questionsContextProps {
  children: React.ReactNode;
}

const QuestionsProvider: FC<questionsContextProps> = ({
  children,
}) => {
  const [questions, setQuestions] = useState([]);

  return (
    <questionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </questionsContext.Provider>
  );
};

export default QuestionsProvider;
