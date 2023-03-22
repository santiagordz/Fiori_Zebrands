import Flag from '@atlaskit/flag';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import CheckCircleOutlineIcon from '@atlaskit/icon/glyph/check-circle-outline';
import EditorHelpIcon from '@atlaskit/icon/glyph/editor/help';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface AnswersProps {}

const Answers: FC<AnswersProps> = ({}) => {
  return (
    <div>
      <div className="flex py-5 px-10 flex-col gap-5">
        <div className="w-full">
          <Link
            to="/mis-retrospectivas"
            className="flex flex-row items-center w-fit gap-2"
          >
            <ArrowLeftIcon label="volver" />
            Volver a mis retrospectivas
          </Link>
        </div>
        <div className="flex flex-col py-3 px-5 w-full rounded bg-white border border-solid border-gray-300 border-collapse items-center justify-center gap-4">
          <CheckCircleOutlineIcon
            label="retroCompletada"
            primaryColor="#1D7AFC"
            size="xlarge"
          />
          <p className="font-bold text-2xl">
            ¡Retrospectiva Sprint 3 completada con éxito!
          </p>
          <p className="text-sm">Tus respuestas se han registradas</p>
        </div>
        <div className="flex flex-col py-7 px-7 w-full rounded bg-white border border-solid border-gray-300 border-collapse gap-4">
          <div>
            <h3 className="">Resumen de tus respuestas</h3>
            <hr></hr>
          </div>
          <div id="quests" className="flex flex-col gap-6 !z-[1]">
            <Flag
              appearance="info"
              icon={
                <EditorHelpIcon
                  label="sugerencia"
                  primaryColor="#"
                  size="medium"
                />
              }
              id="info"
              key={1}
              title="¿Qué acciones tomarás para el siguiente Sprint?"
              description=" Mejoraré la comunicación con mi equipo."
            />
            <Flag
              appearance="info"
              icon={
                <EditorHelpIcon
                  label="sugerencia"
                  primaryColor="#"
                  size="medium"
                />
              }
              id="info"
              key={2}
              title="¿En que podrías mejorar individualmente?"
              description=" Ser más proactivo en las reuniones."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
