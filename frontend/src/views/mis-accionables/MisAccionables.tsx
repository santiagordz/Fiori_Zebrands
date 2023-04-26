import { FC, useState, useEffect, useContext } from 'react';
import { userDataContext } from '../../contexts/';
import axios from 'axios';

import DesignTemplate from '../../components/design-template/DesignTemplate';
import ModalNuevoAccionable from '../../components/accionables/modals/ModalNuevoAccionable';
import BoxAccionable from '../../components/accionables/BoxAccionable';

import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import WarningIcon from '@atlaskit/icon/glyph/warning';
import CheckCircleIcon from '@atlaskit/icon/glyph/check-circle';

import Team from '../../assets/medal.png';

const URI = 'http://localhost:8000/accionables';

interface MisAccionablesProps {
  setIsNewAccionableOpen: (value: boolean) => void;
  agregarAccionable: (accionable: any) => void;
}

interface Accionable {
  id: number;
  descripcion: string;
  fecha_esperada: string;
}

const MisAccionables: FC<MisAccionablesProps> = ({}) => {
  const { user } = useContext(userDataContext);
  const [isNewAccionableOpen, setIsNewAccionableOpen] =
    useState<boolean>(false);
  const [accionables, setAccionables] = useState<Accionable[]>([]);
  const [prioridadBaja, setPrioridadBaja] = useState<Accionable[]>(
    []
  );
  const [prioridadMedia, setPrioridadMedia] = useState<Accionable[]>(
    []
  );
  const [prioridadAlta, setPrioridadAlta] = useState<Accionable[]>(
    []
  );

  const getAccionables = async () => {
    try {
      const response = await axios.get(`${URI}/${user?.id_usuario}`);
      setAccionables(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener los accionables:', error);
    }
  };

  const separarAccionables = async (accionables: any) => {
    const prioridadBaja: Accionable[] = [];
    const prioridadMedia: Accionable[] = [];
    const prioridadAlta: Accionable[] = [];

    accionables.forEach((accionable: Accionable) => {
      const fecha_accionable = accionable.fecha_esperada;
      const fecha_actual = new Date();

      const date1 = new Date(fecha_accionable);
      const date2 = new Date(fecha_actual);

      const diferenciaTiempo = date1.getTime() - date2.getTime();
      const diferenciaDias = Math.floor(
        diferenciaTiempo / (1000 * 60 * 60 * 24)
      );

      const fechaReact = accionable.fecha_esperada.split('T')[0];

      if (diferenciaDias > 30) {
        prioridadBaja.push({
          ...accionable,
          fecha_esperada: fechaReact,
        });
      } else if (diferenciaDias <= 30 && diferenciaDias > 7) {
        prioridadMedia.push({
          ...accionable,
          fecha_esperada: fechaReact,
        });
      } else if (diferenciaDias <= 7) {
        prioridadAlta.push({
          ...accionable,
          fecha_esperada: fechaReact,
        });
      }
    });

    setPrioridadBaja(prioridadBaja);
    setPrioridadMedia(prioridadMedia);
    setPrioridadAlta(prioridadAlta);
  };

  useEffect(() => {
    getAccionables();
  }, [isNewAccionableOpen]);

  useEffect(() => {
    if (accionables.length > 0) {
      separarAccionables(accionables);
    }
  }, [accionables]);

  return (
    <>
      <DesignTemplate
        buttons={
          <Button
            appearance="primary"
            iconBefore={<AddIcon label="agregar accionable" />}
            onClick={() => setIsNewAccionableOpen(true)}
          >
            Agregar accionable
          </Button>
        }
      >
        <div className="grid grid-cols-3 gap-5 pb-5 w-full">
          <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[40rem]">
            <div className="flex items-center w-full">
              <ErrorIcon
                label="error"
                size="medium"
                primaryColor="#DE350B"
              />
              <p className="font-semibold flex flex-row text-s text-danger ml-2">
                Prioridad Alta
              </p>
            </div>
            {prioridadAlta.map((accionable: Accionable) => (
              <BoxAccionable
                key={accionable.id}
                accionable={accionable.descripcion}
                id={accionable.id}
                fecha={accionable.fecha_esperada}
              />
            ))}
          </div>

          <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[40rem]">
            <div className="flex items-center">
              <WarningIcon
                size="medium"
                label="Prioridad media"
                primaryColor="#CD742D"
              />
              <p className="font-semibold flex flex-row text-s text-mediumDanger ml-2">
                Prioridad Media
              </p>
            </div>
            {prioridadMedia.map((accionable: Accionable) => (
              <BoxAccionable
                key={accionable.id}
                accionable={accionable.descripcion}
                id={accionable.id}
                fecha={accionable.fecha_esperada}
              />
            ))}
          </div>

          <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[40rem]">
            <div className="flex items-center">
              <CheckCircleIcon
                size="medium"
                label="Prioridad media"
                primaryColor="#4E9E70"
              />
              <p className="font-semibold flex flex-row text-s text-green ml-2">
                Prioridad Baja
              </p>
            </div>
            {prioridadBaja.map((accionable: Accionable) => (
              <BoxAccionable
                key={accionable.id}
                accionable={accionable.descripcion}
                id={accionable.id}
                fecha={accionable.fecha_esperada}
              />
            ))}
          </div>
        </div>
        <div className="w-full bg-white px-24 pt-10">
          <div className="bg-purpleLight flex px-8 gap-20">
            <div className="ml-10 w-1/6 p-5">
              <img src={Team} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold w-full text-discovery text-center text-lg">
                Recuerda que los pequeños actos que se ejecutan, son
                mejores que todos aquellos grandes que se planean
              </p>
              <p className="text-center">
                Debes completar los accionables que te habías
                propuesto, de esta forma podrás ver tu progreso y el
                de tu equipo desde otra perspectiva.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 pb-10">
            <a href="https://zebrands.atlassian.net" target="_blank">
              <button className="bg-jiraBlue px-3 py-1 rounded-sm text-white hover:bg-blue-500">
                Ir a JIRA
              </button>
            </a>
          </div>
        </div>
      </DesignTemplate>

      {isNewAccionableOpen && (
        <ModalNuevoAccionable
          setIsModalOpen={setIsNewAccionableOpen}
        />
      )}
    </>
  );
};

export default MisAccionables;
