import {
  ErrorMessage,
  Field,
  type FieldProps,
  HelperMessage,
  RangeField,
} from '@atlaskit/form';
import Select from 'react-select';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/textfield';
import {
  ChangeEvent,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { formDataContext } from '../../local-contexts/FormDataProvider';
import type { Meta } from '@atlaskit/form/dist/types/field';
import type { RangeFieldProps } from '@atlaskit/form';
import Range from '@atlaskit/range';

interface TiposPreguntaProps {
  idTipoPregunta: number;
  opciones?: Array<string>;
  idPregunta: number;
  onChange: (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  setIsError: (e: boolean) => void;
  isError: boolean;
  handleRangeOnchange: (value: number) => void;
}

const TiposPregunta: FC<TiposPreguntaProps> = ({
  idTipoPregunta,
  opciones,
  idPregunta,
  onChange,
  setIsError,
  isError,
  handleRangeOnchange,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const value: string | number | boolean | null =
    formData && formData[idPregunta.toString()];
  const [range, setRange] = useState(0);
  const rangeNumbers = [1, 2, 3, 4, 5];

  const options =
    opciones &&
    opciones.map((opcion: string) => {
      return {
        label: opcion,
        value: opcion.toLowerCase(),
      };
    });

  const label = () => {
    switch (idTipoPregunta) {
      case 3:
        return 'Selecciona una opción de la lista';
      case 4:
        return 'Selecciona un número dentro del rango';
      default:
        return 'Escribe tu respuesta aquí';
    }
  };

  useEffect(() => {
    if (value) {
      if (
        idTipoPregunta === 1 &&
        typeof value === 'string' &&
        value.length > 500
      ) {
        setIsError(true);
      } else if (
        idTipoPregunta === 2 &&
        typeof value === 'string' &&
        value.length > 100
      ) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    } else {
      setIsError(false);
    }
  }, [idTipoPregunta, value]);

  return (
    <Field name={`q_${idPregunta.toString()}`} label={label()}>
      {({ fieldProps, error }: any) => {
        switch (idTipoPregunta) {
          case 1:
            return (
              <>
                <TextArea
                  {...fieldProps}
                  resize="vertical"
                  maxHeight="20vh"
                  placeholder="Escribe una respuesta"
                  onChange={onChange}
                />
                <div className="w-full flex flex-col justify-end items-end">
                  <>
                    <HelperMessage>
                      Caracteres:{' '}
                      {value && typeof value === 'string'
                        ? value.length
                        : 0}{' '}
                      / 500
                    </HelperMessage>
                    {isError && (
                      <ErrorMessage>
                        Tu respuesta excede el número de caracteres
                        permitidos
                      </ErrorMessage>
                    )}
                  </>
                </div>
              </>
            );

          case 2:
            return (
              <>
                <TextField
                  {...fieldProps}
                  width={'100%'}
                  placeholder="Escribe una respuesta corta"
                  aria-required={true}
                  defaultValue=""
                  onChange={onChange}
                />
                <div className="w-full flex flex-col justify-end items-end">
                  <>
                    <HelperMessage>
                      Caracteres:{' '}
                      {value && typeof value === 'string'
                        ? value.length
                        : 0}{' '}
                      / 100
                    </HelperMessage>
                    {isError && (
                      <ErrorMessage>
                        Tu respuesta excede el número de caracteres
                        permitidos
                      </ErrorMessage>
                    )}
                  </>
                </div>
              </>
            );
          case 3:
            return (
              <Select
                isClearable={true}
                options={options}
                placeholder="Selecciona una opción"
                onChange={(e) => {
                  const key: string = idPregunta.toString();
                  e?.label !== undefined &&
                    setFormData({ ...formData, [key]: e?.label });
                }}
              />
            );
          case 4:
            return (
              <>
                <Range
                  {...fieldProps}
                  defaultValue={0}
                  min={0}
                  max={5}
                  onChange={(value: number) => {
                    setRange(value);
                    handleRangeOnchange(value);
                  }}
                  value={range}
                />
                <span>
                  <span className="w-full flex justify-between mt-[-8px] text-xs text-slate-400 font-semibold mb-5">
                    <p className="text-slate-300">0</p>
                    {rangeNumbers.map((number) => {
                      return (
                        <p
                          key={number}
                          className={
                            range === number
                              ? 'text-jiraBlue text-sm'
                              : ''
                          }
                        >
                          {number}
                        </p>
                      );
                    })}
                  </span>
                  <HelperMessage>
                    Para no enviar una respuesta a esta pregunta,
                    desliza hasta el número 0.
                  </HelperMessage>
                </span>
              </>
            );
          default:
            return (
              // TextArea se renderiza si el tipo de pregunta no es ninguno de los anteriores
              <>
                <TextArea
                  {...fieldProps}
                  resize="vertical"
                  maxHeight="20vh"
                  placeholder="Escribe una respuesta"
                  onChange={onChange}
                />
                <div className="w-full flex flex-col justify-end items-end">
                  <>
                    {isError ? (
                      <ErrorMessage>
                        Tu respuesta excede el número de caracteres
                        permitidos
                      </ErrorMessage>
                    ) : (
                      <HelperMessage>
                        Caracteres:{' '}
                        {value && typeof value === 'string'
                          ? value.length
                          : 0}{' '}
                        / 500
                      </HelperMessage>
                    )}
                  </>
                </div>
              </>
            );
        }
      }}
    </Field>
  );
};

export default TiposPregunta;
