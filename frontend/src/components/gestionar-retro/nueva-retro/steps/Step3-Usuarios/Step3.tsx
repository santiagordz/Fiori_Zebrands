import React, { FC, useContext, useEffect, useState } from 'react';
import { newRetroContext, EtiquetaType, newRetroType } from '../../local-contexts';
import DropdownEtiquetas from '../../../../administrar-usuarios/DropdownEtiquetas';
import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import ArrowLeftIcon from '@atlaskit/icon/glyph/arrow-left';
import ArrowRightIcon from '@atlaskit/icon/glyph/arrow-right';
import TablaUsuarios from './TablaUsuarios';
import axios from 'axios';

interface Step3Props {
  stepNumber: number;
  setStepNumber: (updater: (prev: number) => number) => void;
}

const Step3: FC<Step3Props> = ({ stepNumber, setStepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const [selectedUsers, setSelectedUsers] = useState<user[]>([]);
  const [etiquetas, setEtiquetas] = useState([])

  const getEtiquetas = async () => {
    const res = await axios.get('http://localhost:8000/etiquetas');
    const etiquetas = res.data.map((etiqueta: any) => ({
      id: etiqueta.id,
      nombre: etiqueta.nombre,
      color: etiqueta.color,
      id_color: etiqueta.id_color,
    }));

    setEtiquetas((prevEtiquetas) => ({ ...prevEtiquetas, etiquetas }));
  };

  useEffect(() => {
    getEtiquetas();
  }, []);

  const handleEtiquetasSeleccionadasChange = (
    etiquetas: EtiquetaType[]
  ) => {
    setNewRetro((prevNewRetro: newRetroType) => {
      return {
        ...prevNewRetro,
        etiquetas,
      };
    });
  };

  const isNextButtonDisabled = () => {
    const selectedUsersEmpty: boolean = selectedUsers.length === 0;
    const newRetroEtiquetasEmpty: boolean = newRetro?.etiquetas?.length === 0;
    if (selectedUsersEmpty && newRetroEtiquetasEmpty) {
      return true;
    } else {
      return false;
    }

  }


  useEffect(() => {
    setNewRetro((prevNewRetro: newRetroType) => {
      return {
        ...prevNewRetro,
        usuarios: selectedUsers,
      };
    });
    isNextButtonDisabled();
  }, [selectedUsers, newRetro?.etiquetas]);

  return (
    <div
      className={`w-full flex gap-3 flex-col text-left ${
        stepNumber === 3 ? '' : 'hidden'
      }`}
    >
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-sm">
          Seleccionar usuarios por etiqueta
        </p>
        <p className="text-paragraph text-xs">
          Las preguntas serán enviadas a todos los usuarios
          identificados con las etiquetas a continuación.
        </p>
        <div className="flex flex-col gap-1 w-full justify-center">
          <DropdownEtiquetas
            onEtiquetasSeleccionadasChange={
              handleEtiquetasSeleccionadasChange
            }
            etiquetasActuales={etiquetas || []}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-sm">
          Seleccionar usuarios individualmente
        </p>
        <p className="text-paragraph text-xs">
          Las preguntas serán enviadas a los usuarios seleccionados.
        </p>
        <p className="flex text-sm text-information font-semibold">
          NOTA: Si se seleccionó una etiqueta en la parte anterior,
          los usuarios con dicha etiqueta no aparecerán en la lista.
        </p>
      </div>
      <TablaUsuarios
        selectedTags={etiquetas || []}
        setSelectedUsers={setSelectedUsers}
      />
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
          isDisabled={isNextButtonDisabled()}
          appearance="primary"
          label="Siguiente paso"
          onClick={() => setStepNumber((prev: number) => prev + 1)}
        >
          Siguiente paso
        </Button>
      </div>
    </div>
  );
};

export default Step3;