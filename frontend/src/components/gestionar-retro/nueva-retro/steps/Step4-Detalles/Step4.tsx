import { SimpleTag as Tag } from '@atlaskit/tag';
import { FC, useContext, useEffect } from 'react';
import { newRetroContext } from '../../local-contexts';
import { tipos } from '../Step2-Preguntas/tiposPregunta';
import Button from '@atlaskit/button';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface Step4Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step4: FC<Step4Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro } = useContext(newRetroContext);
  const navigate = useNavigate();
  const location = useLocation().pathname;

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location]);
  return (
    <span
      className={`flex flex-col gap-10 w-full text-left ${
        stepNumber === 4 ? '' : 'hidden'
      }`}
    >
      <div>
        <h2>Detalles básicos</h2>
        <p>Título: {newRetro?.titulo}</p>
        <p>
          Descripción:{' '}
          {newRetro?.descripcion ||
            'No se registró una descripción para esta retrospectiva'}
        </p>
      </div>
      <div>
        <h2>Preguntas</h2>
        {newRetro?.predeterminadas?.map((pregunta) => (
          <span key={pregunta.id}>
            <p>{pregunta.pregunta}</p>
            <div id="tag">
              <Tag
                text={tipos[pregunta.id_tipo_pregunta - 1].label}
                appearance="rounded"
                color="green"
              />
            </div>
          </span>
        ))}
      </div>
      <div>
        <h2>Usuarios</h2>
        <p>Etiquetas: {newRetro?.titulo}</p>
        <p>Usuarios seleccionados individualmente:</p>
      </div>
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
          label="Siguiente paso"
          //   onClick={() => }
        >
          Registrar e iniciar retrospectiva
        </Button>
      </div>
    </span>
  );
};

export default Step4;
