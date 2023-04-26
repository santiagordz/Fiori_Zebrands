import { SimpleTag as Tag } from '@atlaskit/tag';
import React, { FC } from 'react';
import CheckAccionableIcon from './CheckAccionableIcon';

interface BoxAccionableProps {
  accionable: string;
  id: number;
  fecha: string;
}

const BoxAccionable: FC<BoxAccionableProps> = ({
  accionable,
  id,
  fecha,
}) => {
  return (
    <div className="w-full flex justify-between items-center bg-[#E9F2FF] py-2 pr-2 rounded">
      <div className="flex items-center justify-between w-full">
        <div id="tag" className="scale-[0.9] text-right">
          <Tag
            text={fecha}
            appearance="rounded"
            color="purpleLight"
          />
        </div>
        <div className="text-sm font-semibold flex items-start w-full px-1">
          {accionable}
        </div>
        <div className="flex items-center justify-center">
          <CheckAccionableIcon id_accionable={id} />
        </div>
      </div>
    </div>
  );
};

export default BoxAccionable;
