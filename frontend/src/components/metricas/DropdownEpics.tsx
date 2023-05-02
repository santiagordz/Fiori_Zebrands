import axios from 'axios';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const URI = `${import.meta.env.VITE_APP_BACKEND_URI}/epics/issues`;

interface Epics {
  key: number;
  summary: string;
}

interface OptionsEpics {
  value: number;
  label: string;
}

interface Props {
  onEpicsSeleccionadasChange: (epics: any) => void;
}

const DropdownEpics = ({ onEpicsSeleccionadasChange }: Props) => {
  const [epicsSeleccionadas, setEpicsSeleccionadas] = useState<
    OptionsEpics[]
  >([]);

  const [epicsOptions, setEpicsOptions] = useState<OptionsEpics[]>(
    []
  );

  const getOptionsEpics = () => {
    axios.get(URI).then((response) => {
      const options = response.data[0].map((epics: Epics) => ({
        value: epics.key,
        label: epics.summary,
      }));

      const newOptions = options.filter((option: any) => {
        for (let i = 0; i < epicsSeleccionadas.length; i++) {
          if (epicsSeleccionadas[i].value === option.value) {
            return false;
          }
        }
        return true;
      });

      setEpicsOptions(newOptions);
    });
  };

  useEffect(() => {
    getOptionsEpics();
  }, []);

  useEffect(() => {
    onEpicsSeleccionadasChange(epicsSeleccionadas);
  }, [epicsSeleccionadas]);

  const handleEpicsSeleccionadasChange = (epics: any) => {
    setEpicsSeleccionadas(epics);
  };

  return (
    <div className="w-full">
      <Select
        isClearable
        placeholder="Selecciona un epic"
        className="text-xs"
        options={epicsOptions}
        value={epicsSeleccionadas}
        onChange={handleEpicsSeleccionadasChange}
      />
    </div>
  );
};

export default DropdownEpics;
