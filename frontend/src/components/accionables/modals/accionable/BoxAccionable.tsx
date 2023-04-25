import { SimpleTag as Tag } from "@atlaskit/tag";
import React, { FC } from "react";

interface BoxAccionableProps {
  accionable: string;
  id: number;
  fecha: string;
}

const BoxAccionable: FC<BoxAccionableProps> = ({ accionable, id, fecha }) => {
  return (
    <div className="w-full flex justify-between items-center bg-[#E9F2FF] py-2 px-4 rounded">
      <div className="flex items-center gap-2">
        <div id="tag" className="scale-[0.9] text-right">
          <Tag text={fecha} appearance="rounded" color="purpleLight" />
        </div>
        <p className="text-textNormal text-[0.8rem] font-semibold flex-1">
          {accionable}
        </p>
      </div>
    </div>
  );
};

export default BoxAccionable;
