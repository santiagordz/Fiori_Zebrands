import { ErrorMessage, Field, HelperMessage } from '@atlaskit/form';
import Select from '@atlaskit/select';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/textfield';
import { FC, useContext, useEffect } from 'react';
import { formDataContext } from './formulario-retro/FormDataProvider';

interface TiposPreguntaProps {
  idTipoPregunta: number;
  opciones?: Array<string>;
  idPregunta: number;
  onChange: (e: any) => void;
  setIsError: (e: boolean) => void;
  isError: boolean;
}

const TiposPregunta: FC<TiposPreguntaProps> = ({
  idTipoPregunta,
  opciones,
  idPregunta,
  onChange,
  setIsError,
  isError,
}) => {
  const { formData, setFormData } = useContext(formDataContext);
  const value = formData[idPregunta.toString()] || '';

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
      case 1:
        return 'Escribe tu respuesta aquí';
      case 2:
        return 'Escribe tu respuesta aquí';
      case 3:
        return 'Selecciona una opción de la lista';
      default:
        return 'Escribe tu respuesta aquí';
    }
  };

  useEffect(() => {
    if (value) {
      if (idTipoPregunta === 1 && value.length > 500) {
        setIsError(true);
      } else if (idTipoPregunta === 2 && value.length > 100) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    } else {
      setIsError(false);
    }
  }, [idTipoPregunta, value]);

  return (
    <Field
      aria-required={true}
      name={`q_${idPregunta.toString()}`}
      label={label()}
    >
      {({ fieldProps, error }) => {
        switch (idTipoPregunta) {
          case 1:
            return (
              <div>
                <TextArea
                  {...fieldProps}
                  resize="vertical"
                  maxHeight="20vh"
                  placeholder="Escribe una respuesta"
                  onChange={onChange}
                  value={value}
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
                        Caracteres: {value ? value.length : 0} / 500
                      </HelperMessage>
                    )}
                  </>
                </div>
              </div>
            );

          case 2:
            return (
              <div>
                <TextField
                  {...fieldProps}
                  width={'100%'}
                  placeholder="Escribe una respuesta corta"
                  aria-required={true}
                  defaultValue=""
                  onChange={onChange}
                  value={value}
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
                        Caracteres: {value ? value.length : 0} / 100
                      </HelperMessage>
                    )}
                  </>
                </div>
              </div>
            );
          case 3:
            return (
              <Select
                {...fieldProps}
                isClearable={true}
                options={options}
                placeholder="Selecciona una opción"
                onChange={(e) => {
                  const key: string = idPregunta.toString();
                  setFormData({ ...formData, [key]: e?.label });
                }}
                value={{ label: value, value: value }}
              />
            );
          default:
            return (
              // TextArea se renderiza si el tipo de pregunta no es ninguno de los anteriores
              <div>
                <TextArea
                  {...fieldProps}
                  resize="vertical"
                  maxHeight="20vh"
                  placeholder="Escribe una respuesta"
                  onChange={onChange}
                  value={value}
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
                        Caracteres: {value ? value.length : 0} / 500
                      </HelperMessage>
                    )}
                  </>
                </div>
              </div>
            );
        }
      }}
    </Field>
  );
};

export default TiposPregunta;
