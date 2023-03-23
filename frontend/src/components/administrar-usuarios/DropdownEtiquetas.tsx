import React, { useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';
import axios from 'axios';

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
  const etiquetasPreseleccionadas = etiquetasActuales.map(
    (etiqueta: Etiqueta) => ({
      value: etiqueta.id,
      label: etiqueta.nombre,
      color: etiqueta.color,
    })
  );

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

      // if options has etiquetasPreseleccionadas, remove them from options

      const newOptions = options.filter((option: any) => {
        for (let i = 0; i < etiquetasSeleccionadas.length; i++) {
          if (etiquetasSeleccionadas[i].value === option.value) {
            return false;
          }
        }
        return true;
      });

      setEtiquetasOptions(newOptions);
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

    const newOptions = etiquetasOptions.filter(
      (etiqueta) => !selected.includes(etiqueta)
    );

    setEtiquetasOptions(newOptions);
    onEtiquetasSeleccionadasChange(etiquetasReturn);
    setEtiquetasSeleccionadas(selected);
  };

  useEffect(() => {
    getOptionsEtiquetas();
  }, []);

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'white',
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
        className="mt-1"
        id="etiquetas"
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
