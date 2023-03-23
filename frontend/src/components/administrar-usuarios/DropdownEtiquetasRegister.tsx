import React, { useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';
import axios from 'axios';

const URI = 'http://localhost:8000/etiquetas';

interface Props {
  onEtiquetasSeleccionadasChange: (etiquetas: any) => void;
  etiquetasPreseleccionadas: Etiqueta[];
}

interface Etiqueta {
  id: string;
  nombre: string;
  color: string;
}

interface EtiquetaDropdown {
  value: string;
  label: string;
  color: string;
}

const DropdownEtiquetas = ({
  onEtiquetasSeleccionadasChange,
  etiquetasPreseleccionadas,
}: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [etiquetas, setEtiquetas] = useState<Etiqueta[]>([]);
  const [selectedEtiquetas, setSelectedEtiquetas] = useState<
    EtiquetaDropdown[]
  >([]);

  useEffect(() => {
    axios
      .get(URI)
      .then((response) => {
        const options = response.data.map((etiqueta: any) => ({
          value: etiqueta.id,
          label: etiqueta.etiqueta,
          color: etiqueta.color,
        }));
        setSelectedEtiquetas(options);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const etiquetaPS = etiquetasPreseleccionadas.map(
      (etiqueta): EtiquetaDropdown => ({
        value: etiqueta.id,
        label: etiqueta.nombre,
        color: etiqueta.color,
      })
    );

    setSelectedEtiquetas(etiquetaPS);
  }, []);

  function handleEtiquetasChange(selected: any) {
    setSelectedEtiquetas(selected);
    const etiquetasSeleccionadas = selected.map(
      (etiqueta: any) => etiqueta.value
    );
    if (onEtiquetasSeleccionadasChange) {
      onEtiquetasSeleccionadasChange(etiquetas);
    }
  }

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
    <div>
      {!isLoading && (
        <Select
          className="mt-1"
          id="etiquetas"
          name="etiquetas"
          options={selectedEtiquetas}
          isMulti={true}
          // value={etiquetas}
          onChange={handleEtiquetasChange}
          styles={colorStyles}
        ></Select>
      )}
    </div>
  );
};

export default DropdownEtiquetas;
