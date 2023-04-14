import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DesignTemplate from "../../components/design-template/DesignTemplate";
import ModalNuevoAccionable from "../../components/accionables/modals/ModalNuevoAccionable";

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
            <p className="font-semibold text-xs">¿Qué es un accionable?</p>
            <p className="text-xs text-[#626F86] mt-1">
              Las preguntas en este espacio se harán predeterminadas, lo que
              quiere decir que se establecerán como las preguntas seleccionadas
              por default para las futuras retrospectivas una vez que inicies
              esta retrospectiva.
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
