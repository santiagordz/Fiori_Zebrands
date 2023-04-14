import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DesignTemplate from "../../components/design-template/DesignTemplate";
import ModalNuevoAccionable from "../../components/accionables/modals/ModalNuevoAccionable";
import BoxAccionable from "../../components/accionables/modals/accionable/BoxAccionable";
import Tag from "@atlaskit/tag/dist/types/tag";

interface MisAccionablesProps {}

const MisAccionables = ({}) => {
  const [isNewAccionableOpen, setIsNewAccionableOpen] =
    useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <>
      <DesignTemplate
        buttons={
          <Button
            appearance="subtle"
            iconBefore={
              <AddIcon label="agregar accionable" primaryColor="#0055CC" />
            }
            onClick={() => setIsNewAccionableOpen(true)}
          >
            <p className="text-information">Nuevo Accionable</p>
          </Button>
        }
      >
        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-m text-red-700 ">Prioridad Alta</p>
          </div>

          <BoxAccionable accionable={"hola"} id={0} />
          <BoxAccionable accionable={"adiós"} id={0} />
          <BoxAccionable accionable={"ven"} id={0} />

          <div className="flex items-center">
            <div id="tag" className="scale-[0.9]">
              <Tag text="Prioridad Alta" appearance="rounded" color="green" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-m text-amber-500 ">
              Prioridad Media
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div>
            <p className="font-semibold text-m text-lime-600 ">
              Prioridad Baja
            </p>
          </div>
        </div>
      </DesignTemplate>

      {isNewAccionableOpen && (
        <ModalNuevoAccionable setIsNewAccionableOpen={setIsNewAccionableOpen} />
      )}
    </>
  );
};

export default MisAccionables;
