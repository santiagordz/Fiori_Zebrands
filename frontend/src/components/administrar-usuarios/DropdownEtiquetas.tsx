import axios from 'axios';
import { useEffect, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

const URI = 'http://localhost:8000/etiquetas';

interface Etiqueta {
  id: string;
  nombre: string;
  color: string;
}

interface OptionsEtiquetas {
  value: string;
  label: string;
  color: string;
}

interface Props {
  onEtiquetasSeleccionadasChange: (etiquetas: any) => void;
  etiquetasActuales: any;
}

const DropdownEtiquetas = ({
  onEtiquetasSeleccionadasChange,
  etiquetasActuales,
}: Props) => {
  const etiquetasPreseleccionadas = etiquetasActuales.length > 0 ? etiquetasActuales.map(
    (etiqueta: Etiqueta) => ({
      value: etiqueta.id,
      label: etiqueta.nombre,
      color: etiqueta.color,
    })
  ): [];

  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] =
    useState<OptionsEtiquetas[]>(etiquetasPreseleccionadas);
  const [etiquetasOptions, setEtiquetasOptions] = useState<
    OptionsEtiquetas[]
  >([]);

  const getOptionsEtiquetas = () => {
    axios.get(URI).then((response) => {
      const options = response.data.map((etiqueta: Etiqueta) => ({
        value: String(etiqueta.id),
        label: etiqueta.nombre,
        color: etiqueta.color,
      }));

      setEtiquetasOptions(options);
    });
  };

  const handleEtiquetasChange = (selected: any) => {
    const etiquetasReturn = selected.map(
      (etiqueta: OptionsEtiquetas) => ({
        id: etiqueta.value,
        nombre: etiqueta.label,
        color: etiqueta.color,
      })
    );

    onEtiquetasSeleccionadasChange(etiquetasReturn);
    setEtiquetasSeleccionadas(selected);
  };

  useEffect(() => {
    getOptionsEtiquetas();
  }, []);

  const colorStyles = {
    control: (styles: any, state: any) => ({
      ...styles,
      border: 0,
      boxShadow: 'none',
      backgroundColor: '#F1F2F4',
      '&:hover': { backgroundColor: '#e5e7eb' },
    }),
    option: (styles: any, { data }: any) => ({
      ...styles,
      backgroundColor: '#F1F2F4',
      '&:hover': { backgroundColor: '#e5e7eb' },
    }),
    multiValue: (
      styles: any,
      { data, isDisabled, isFocused, isSelected }: any
    ) => {
      if (data.color == 'blueLight') {
        return { ...styles, backgroundColor: '#CCE0FF' };
      } else if (data.color == 'yellowLight') {
        return { ...styles, backgroundColor: '#FFE2BD' };
      } else if (data.color == 'greenLight') {
        return { ...styles, backgroundColor: '#CCE0CC' };
      } else if (data.color == 'redLight') {
        return { ...styles, backgroundColor: '#FFCCCC' };
      } else if (data.color == 'tealLight') {
        return { ...styles, backgroundColor: '#CCE0E5' };
      } else if (data.color == 'purpleLight') {
        return { ...styles, backgroundColor: '#E5CCFF' };
      } else {
        return { ...styles, backgroundColor: '#DCDFE4' };
      }
    },
  };

  return (
    <>
      <Select
        className="mt-1 text-sm"
        id="etiquetas"
        placeholder="Selecciona etiquetas"
        isMulti={true}
        options={etiquetasOptions}
        onChange={handleEtiquetasChange}
        value={etiquetasSeleccionadas}
        styles={colorStyles as StylesConfig}
      ></Select>
    </>
  );
};

export default DropdownEtiquetas;
