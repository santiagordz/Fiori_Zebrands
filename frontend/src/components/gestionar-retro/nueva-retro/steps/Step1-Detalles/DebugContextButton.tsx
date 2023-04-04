import React, { useContext } from "react";
import { newRetroContext } from "../../local-contexts";

const DebugContextButton = () => {
  const { newRetro } = useContext(newRetroContext);

  const handleDebugClick = () => {
    console.log(newRetro);
  };

  return <button onClick={handleDebugClick}>Debug Context</button>;
};

export default DebugContextButton;
