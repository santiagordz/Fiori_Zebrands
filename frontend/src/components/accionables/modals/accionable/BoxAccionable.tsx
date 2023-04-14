import React, { FC } from "react";

const accionable = "ejemplo accionable";
const id = 1;

interface BoxAccionableProps {
  accionable: string;
  id: number;
}

const BoxAccionable: FC<BoxAccionableProps> = ({ accionable, id }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="w-full flex justify-between items-center bg-[#FFFFFF] py-2 px-4 rounded">
        {accionable}
      </p>
    </div>
  );
};

export default BoxAccionable;
