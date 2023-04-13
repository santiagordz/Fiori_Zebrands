import React, { FC, useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';
import axios from 'axios';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/sprints`;

interface Sprint {
  id: number;
  nombre: string;
}

interface OptionsSprints {
  value: number;
  label: string;
}

interface Props {
  onSprintsSeleccionadasChange: (sprints: any) => void;
  sprintsActuales: any;
}

const DropdownSprints = ({
  onSprintsSeleccionadasChange,
  sprintsActuales,
}: Props) => {
  const sprintsPreseleccionadas = sprintsActuales.map(
    (sprint: Sprint) => ({
      value: sprint.id,
      label: sprint.nombre,
    })
  );

  const [sprintsSeleccionadas, setSprintsSeleccionadas] = useState<
    OptionsSprints[]
  >(sprintsPreseleccionadas);

  const [sprintsOptions, setSprintsOptions] = useState<
    OptionsSprints[]
  >([]);

  const getOptionsSprints = async () => {
    try {
      const response = await axios.get(URI);
      const options = response.data.map((sprint: Sprint) => ({
        value: sprint.id,
        label: sprint.nombre,
      }));

      if (options.length > 0) {
        setSprintsSeleccionadas([options[options.length - 1]]);
      }

      const newOptions = options.filter((option: any) => {
        for (let i = 0; i < sprintsSeleccionadas.length; i++) {
          if (sprintsSeleccionadas[i].value === option.value) {
            return false;
          }
        }
        return true;
      });

      setSprintsOptions(newOptions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOptionsSprints();
  }, []);

  useEffect(() => {
    onSprintsSeleccionadasChange(sprintsSeleccionadas);
  }, [sprintsSeleccionadas]);

  const handleSprintsSeleccionadasChange = (sprints: any) => {
    setSprintsSeleccionadas(sprints);
  };

  return (
    <div className="w-[48vmin]">
      <Select
        isMulti
        options={sprintsOptions}
        value={sprintsSeleccionadas}
        onChange={handleSprintsSeleccionadasChange}
      />
    </div>
  );
};

export default DropdownSprints;
