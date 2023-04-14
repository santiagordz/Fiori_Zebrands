import React, { FC } from "react";

interface BoxAccionableProps {
  accionable: string;
  id: number;
  fecha: string;
}

const BoxAccionable: FC<BoxAccionableProps> = ({ accionable, id, fecha }) => {
  return (
    <div className="w-full flex justify-between items-center bg-[#FFFFFF] py-2 px-4 rounded">
      <div className="flex items-center gap-2">
        <p className="text-textNormal text-[0.8rem] font-semibold">
          {accionable} - {fecha}{" "}
        </p>
      </div>
    </div>
  );
};

export default BoxAccionable;
