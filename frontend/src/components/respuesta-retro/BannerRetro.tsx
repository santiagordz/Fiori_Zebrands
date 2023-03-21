import React, { FC } from 'react';
import FlagFilledIcon from '@atlaskit/icon/glyph/flag-filled';
import { SimpleTag as Tag } from '@atlaskit/tag';


interface BannerRetroProps {
  titulo: string;
  fechaInicio: string;
  idRetrospectiva: number;
}

const BannerRetro: FC<BannerRetroProps> = ({ titulo, fechaInicio }) => {
        
  return (
    <div className="">
      <div className="flex flex-col py-3 px-5 w-full rounded bg-white border border-solid border-gray-300 border-collapse">
        <div className="flex flex-row gap-7 items-center ">
          <FlagFilledIcon
            label="retrospectiva-pendiente"
            primaryColor="#8270DB"
          />
          <h3 className="flex font-bold text-sm">
            {titulo}
          </h3>
          <p className="flex text-xs">
            {fechaInicio}
          </p>
          <div className="flex flex-row gap-4 ml-auto">
            {/* Div de el tag */}
            <Tag
              text="Front-end"
              appearance="rounded"
                          color="tealLight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerRetro;
