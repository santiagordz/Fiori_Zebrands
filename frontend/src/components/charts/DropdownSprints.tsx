import React, { FC, useState, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';
import axios from 'axios';

const URI = 'http://localhost:8000/sprints';

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

    const [sprintsSeleccionadas, setSprintsSeleccionadas] =
        useState<OptionsSprints[]>(sprintsPreseleccionadas);
    const [sprintsOptions, setSprintsOptions] = useState<OptionsSprints[]>([]);

    const getOptionsSprints = () => {
        axios.get(URI).then((response) => {
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
        });
    };

    useEffect(() => {
        getOptionsSprints();
    }, []);

    useEffect(() => {
        onSprintsSeleccionadasChange(sprintsSeleccionadas);
        console.log(sprintsSeleccionadas)
    }, [sprintsSeleccionadas]);

    const handleSprintsSeleccionadasChange = (sprints: any) => {
        setSprintsSeleccionadas(sprints);
    };

    return (
        <div className="w-[42vmin]">
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