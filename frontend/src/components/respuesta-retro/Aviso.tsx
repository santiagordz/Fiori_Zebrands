import React, { FC, useCallback, useState } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import ErrorIcon from '@atlaskit/icon/glyph/error';
import Blanket from '@atlaskit/blanket';
import WarningIcon from '@atlaskit/icon/glyph/warning';

interface AvisoProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Aviso: FC<AvisoProps> = ({ isOpen, setIsOpen }) => {
  const closeModal = useCallback(() => setIsOpen(true), []);

  return (
    <div className="">
      <Blanket
        //onBlanketClicked={onBlanketClicked}
        isTinted={true}
        //shouldAllowClickThrough={shouldAllowClickThrough}
        //</div>testId="basic-blanket"
      >
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="flex flex-col bg-white rounded p-10 gap-10">
            <h3 className="font-bold">
              Algunos recordatorios antes de comenzar
            </h3>
            <div className="flex flex-col gap-3">
              <h4 className="flex font-bold text-sm">Accionables</h4>
              <p className="text-xs">
                Es importante atender los accionables con mayor
                prioridad cuanto antes para evitar que se acumulen en
                futuros Sprints.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <ErrorIcon label="error" primaryColor="#E34935" />
                <p className="flex flex-row text-xs text-danger">
                  Tienes 3 accionables en alta prioridad
                </p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <WarningIcon label="warning" primaryColor="#D97008" />
              </div>
            </div>
            <ButtonGroup>
              <Button appearance="subtle-link">
                Remind me later
              </Button>
              <Button
                onClick={closeModal}
                appearance="primary"
                autoFocus
              >
                Switch to the new Jira
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Blanket>
    </div>
  );
};

export default Aviso;
