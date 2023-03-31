import React, { FC } from 'react';

interface PanelGestionarRetroProps {}

const divCardsStyle =
  'flex flex-col gap-5 bg-[#ffffff] py-5 px-5 rounded-sm shadow-sm overflow-y-auto max-h-[50rem]';

const PanelGestionarRetro: FC<PanelGestionarRetroProps> = ({}) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className={divCardsStyle}>
        <h2 className="text-base font-bold text-information">
          Retrospectivas en curso
        </h2>
      </div>
      <div className={divCardsStyle}>
        <h2 className="text-base font-bold text-information">
          Retrospectivas finalizadas
        </h2>
      </div>
    </div>
  );
};

export default PanelGestionarRetro;
