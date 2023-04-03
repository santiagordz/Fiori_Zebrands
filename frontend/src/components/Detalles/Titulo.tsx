import React, { Fragment } from "react";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

const Titulo = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-4 px-[8vmin]">
        <p className="text-left font-semibold text-md text-[#626F86]">Título</p>
        <p className=" text-left text-xs text-[#44546F]">
          La fecha del Sprint seleccionado será el título de la retrospectiva.
        </p>
      </div>

      <div className="text-left"></div>
    </>
  );
};
export default Titulo;
