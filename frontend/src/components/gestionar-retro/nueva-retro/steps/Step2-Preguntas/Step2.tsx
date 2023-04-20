import Button from '@atlaskit/button';
import {
  AutoDismissFlag,
  FlagGroup,
  type AppearanceTypes,
} from '@atlaskit/flag';
import AddIcon from '@atlaskit/icon/glyph/add';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import axios from 'axios';
import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  newRetroContext,
  type PreguntaType,
} from '../../local-contexts';
import Pregunta from './Pregunta';
import { NuevaPregunta } from './modals';

const URI = `/api/preguntas`;

interface Step2Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step2: FC<Step2Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [isNewQuestionOpen, setIsNewQuestionOpen] =
    useState<boolean>(false);

  const getPreguntas = async () => {
    const { data } = await axios.get(URI);

    const predeterminadas: PreguntaType[] = data.filter(
      (pregunta: PreguntaType) => pregunta.predeterminada
    );

    const otras: PreguntaType[] = data.filter(
      (pregunta: PreguntaType) => !pregunta.predeterminada
    );

    setNewRetro({
      ...newRetro,
      predeterminadas: predeterminadas,
      otras: otras,
    });
  };

  const handleChecked = useCallback(
    (checked: boolean, id: number) => {
      if (checked) {
        const pregunta = newRetro?.predeterminadas?.find(
          (pregunta: PreguntaType) => pregunta.id === id
        );

        if (pregunta) {
          setNewRetro({
            ...newRetro,
            predeterminadas: newRetro?.predeterminadas?.filter(
              (pregunta: PreguntaType) => pregunta.id !== id
            ),
            otras: [
              ...(newRetro?.otras || []),
              { ...pregunta, predeterminada: false },
            ],
          });
        }
      } else {
        const pregunta = newRetro?.otras?.find(
          (pregunta: PreguntaType) => pregunta.id === id
        );

        if (pregunta) {
          setNewRetro({
            ...newRetro,
            predeterminadas: [
              ...(newRetro?.predeterminadas || []),
              { ...pregunta, predeterminada: true },
            ],
            otras: newRetro?.otras?.filter(
              (pregunta: PreguntaType) => pregunta.id !== id
            ),
          });
        }
      }
    },
    [newRetro]
  );

  useEffect(() => {
    getPreguntas();
  }, []);

  useEffect(() => {
    if (newRetro?.predeterminadas?.length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [newRetro?.predeterminadas?.length]);

  return (
    <span
      className={`flex flex-col gap-10 w-full text-left ${
        stepNumber === 2 ? '' : 'hidden'
      }`}
    >
      {isNewQuestionOpen && (
        <NuevaPregunta setIsNewQuestionOpen={setIsNewQuestionOpen} />
      )}

      <div className="flex flex-col gap-3">
        <div>
          <p className="font-semibold text-xs">
            {`Preguntas seleccionadas: ${
              newRetro?.predeterminadas?.length ?? 0
            }`}
          </p>
          <p className="text-xs text-[#626F86] mt-1">
            Las preguntas en este espacio se harán predeterminadas, lo
            que quiere decir que se establecerán como las preguntas
            seleccionadas por default para las futuras retrospectivas
            una vez que inicies esta retrospectiva.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {newRetro?.predeterminadas?.length ?? 0 > 0 ? (
            newRetro?.predeterminadas?.map(
              (pregunta: PreguntaType) => (
                <Pregunta
                  key={pregunta.id}
                  pregunta={pregunta.pregunta}
                  id={pregunta.id}
                  isChecked={true}
                  tipo={pregunta.id_tipo_pregunta}
                  handleChecked={handleChecked}
                />
              )
            )
          ) : (
            <p className="text-subtle text-sm">
              No haz seleccionado ninguna pregunta, por favor
              selecciona al menos una para continuar.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xs text-[#626F86]">
            {`Otras preguntas disponibles: 
            ${newRetro?.otras?.length ?? 0}`}
          </p>
          <span className="border border-solid border-gray-200 rounded scale-[0.85] mr-[-0.8rem]">
            <Button
              appearance="subtle"
              onClick={() => setIsNewQuestionOpen(true)}
              iconBefore={
                <AddIcon
                  label="agregar retrospectiva"
                  primaryColor="#0055CC"
                />
              }
            >
              <p className="text-information">Nueva pregunta</p>
            </Button>
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {newRetro?.otras?.length ?? 0 > 0 ? (
            newRetro?.otras?.map((pregunta: PreguntaType) => (
              <Pregunta
                key={pregunta.id}
                pregunta={pregunta.pregunta}
                id={pregunta.id}
                isChecked={false}
                tipo={pregunta.id_tipo_pregunta}
                handleChecked={handleChecked}
              />
            ))
          ) : (
            <p className="text-subtle text-sm">
              No hay otras preguntas disponibles. Si lo necesitas,
              puedes crear una nueva.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        {isError && (
          <p className="text-xs text-information font-medium">
            Selecciona al menos una pregunta para continuar.
          </p>
        )}
        <div className="flex gap-14 w-full items-center justify-center mt-4">
          <Button
            appearance="default"
            iconBefore={<ArrowLeftIcon label="paso anterior" />}
            label="Pregunta anterior"
            onClick={() => setStepNumber((prev: number) => prev - 1)}
          >
            Paso anterior
          </Button>
          <Button
            appearance="primary"
            isDisabled={isError}
            iconAfter={<ArrowRightIcon label="siguiente paso" />}
            label="Siguiente paso"
            onClick={() => setStepNumber((prev: number) => prev + 1)}
          >
            Siguiente paso
          </Button>
        </div>
      </div>
    </span>
  );
};

export default Step2;
