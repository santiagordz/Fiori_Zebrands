import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DesignTemplate from "../../components/design-template/DesignTemplate";
import ModalNuevoAccionable from "../../components/accionables/modals/ModalNuevoAccionable";
import BoxAccionable from "../../components/accionables/modals/accionable/BoxAccionable";
import ErrorIcon from "@atlaskit/icon/glyph/error";
import WarningIcon from "@atlaskit/icon/glyph/warning";
import CheckCircleIcon from "@atlaskit/icon/glyph/check-circle";

interface MisAccionablesProps {
  setIsNewAccionableOpen: (value: boolean) => void;
  agregarAccionable: (accionable: any) => void;
}

const MisAccionables = ({}) => {
  const [isNewAccionableOpen, setIsNewAccionableOpen] =
    useState<boolean>(false);
  const [accionables, setAccionables] = useState<any[]>([]);

  const agregarAccionable = (accionable: any) => {
    setAccionables((prevAccionables) => [
      ...prevAccionables,
      { ...accionable, fecha: new Date().toLocaleDateString() },
    ]);
  };

  return (
    <>
      <DesignTemplate
        buttons={
          <Button
            appearance="subtle"
            iconBefore={
              <AddIcon label="agregar accionable" primaryColor="#5a67d8" />
            }
            onClick={() => setIsNewAccionableOpen(true)}
          >
            <p className="text-information">Nuevo Accionable</p>
          </Button>
        }
      >
        <div className="grid grid-cols-3 gap-5 pb-5">
          <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[40rem] min-w-[28rem]">
            <div className="flex items-center">
              <p className=" font-semibold flex flex-row text-s text-danger">
                Prioridad Alta
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[40rem] min-w-[28rem]">
            <div className="flex items-center">
              <p className=" font-semibold flex flex-row text-s text-mediumDanger">
                Prioridad Media
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[40rem] min-w-[28rem]">
            <div className="flex flex-col gap-3 ">
              <p className=" font-semibold flex flex-row text-s text-green">
                Prioridad Baja
              </p>
              {accionables.map((accionable) => (
                <BoxAccionable
                  key={accionable.id}
                  accionable={accionable.accionable}
                  id={accionable.id}
                  fecha={accionable.fecha}
                />
              ))}
            </div>
          </div>
        </div>
      </DesignTemplate>

      {isNewAccionableOpen && (
        <ModalNuevoAccionable
          setIsNewAccionableOpen={setIsNewAccionableOpen}
          agregarAccionable={agregarAccionable}
        />
      )}
    </>
  );
};

export default MisAccionables;
