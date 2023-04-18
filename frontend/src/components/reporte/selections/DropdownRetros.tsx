import React, { FC, useState, useEffect } from 'react';
import type { Retrospectiva } from '../../../views/mis-retrospectivas/MisRetrospectivas';
import axios from 'axios';
import Select from 'react-select';
import { SimpleTag as Tag } from '@atlaskit/tag';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/retrospectivas`;

interface DropdownRetrosProps {
  setSelectedRetroId: (id: number) => void;
  selectedRetroId: number;
}

const DropdownRetros: FC<DropdownRetrosProps> = ({
  setSelectedRetroId,
  selectedRetroId,
}) => {
  const [retrospectivas, setRetrospectivas] = useState<
    Array<Retrospectiva>
  >([]);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  const getRetrospectivas = async () => {
    try {
      const { data } = await axios.get(URI);
      setRetrospectivas(data);
      setSelectedRetroId(data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRetrospectivas();
  }, []);

  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      borderColor: '#dbdbdb',
      borderRadius: '0.125rem',
      borderWidth: 2,
    }),
    placeholder: (base: any) => ({
      ...base,
      color: '#979caa',
    }),
    menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isFocused ? '#d6e8ff' : 'white',
      color: state.isFocused ? 'black' : 'inherit',
    }),
    singleValue: (base: any, state: any) => ({
      ...base,
      color: state.isDisabled ? '#ccc' : '#000',
    }),
  };

  return (
    <div className="">
      <Select
        className="text-xs"
        placeholder="Selecciona una retrospeciva"
        menuPortalTarget={document.body}
        styles={selectStyles}
        value={
          selectedRetroId
            ? retrospectivas.find(
                (retro) => retro.id === selectedRetroId
              )
            : retrospectivas[0]
        }
        options={retrospectivas}
        onChange={(e) => {
          setSelectedRetroId(e!.id);
        }}
        getOptionLabel={(e) =>
          (
            <div
              className={`flex items-center gap-2 text-sm text-textNormal w-full justify-between`}
            >
              <span>{e.titulo}</span>
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-xs">
                    Inicio: {formatDate(e.fecha_inicio)}
                  </span>
                  {!e.en_curso && (
                    <span className="text-slate-500 text-xs">
                      Fin: {formatDate(e.fecha_fin)}
                    </span>
                  )}
                </div>
                <div id="tag">
                  <Tag
                    appearance="rounded"
                    text={e.en_curso ? 'En curso' : 'Finalizada'}
                    color={e.en_curso ? 'green' : 'standard'}
                  />
                </div>
              </div>
            </div>
          ) as unknown as string
        }
      />
    </div>
  );
};

export default DropdownRetros;
