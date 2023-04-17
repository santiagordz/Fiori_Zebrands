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
}

const DropdownSprints = ({ onSprintsSeleccionadasChange }: Props) => {
  const [sprintsSeleccionadas, setSprintsSeleccionadas] = useState<
    OptionsSprints[]
  >([]);

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
    <div className="w-full">
      <Select
        isMulti
        placeholder="Selecciona uno o varios sprints"
        className="text-xs"
        options={sprintsOptions}
        value={sprintsSeleccionadas}
        onChange={handleSprintsSeleccionadasChange}
      />
    </div>
  );
};

export default DropdownSprints;
