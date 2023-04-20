import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const URI = `/api/sprints`;

interface Sprint {
  id_jira: number;
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
        value: sprint.id_jira,
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

  const handleSprintsSeleccionadasChange = (sprints: any) => {
    setSprintsSeleccionadas(sprints);
  };
  useEffect(() => {
    getOptionsSprints();
  }, []);

  useEffect(() => {
    onSprintsSeleccionadasChange(sprintsSeleccionadas);
  }, [sprintsSeleccionadas]);

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
