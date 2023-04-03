import React, { Fragment } from "react";
import TextArea from "@atlaskit/textarea";
import Titulo from "./Titulo";

const Descripcion = () => {
  return (
    <>
      <div className="text-center py-[8vmin]">
        <h1 className="text-[#5E4DB2] font-bold text-2xl">
          Detalles de la retrospectiva
        </h1>

        <p className="text-[#44546F]">
          Agrega los detalles báscios de la retrospectiva
        </p>
      </div>

      <Titulo />

      <div className="grid grid-cols-1 gap-y-4 px-[8vmin]">
        <p className="pr-[150vmin] font-semibold text-md text-[#626F86] pl-30">
          Descripción:
        </p>

        <TextArea
          resize="auto"
          maxHeight="20vh"
          name="descripcion"
          placeholder="Escribe una descripción para tu retrospectiva"
        />
      </div>
    </>
  );
};
export default Descripcion;
