import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import ArrowLeftIcon from "@atlaskit/icon/glyph/arrow-left";
import ArrowRightIcon from "@atlaskit/icon/glyph/arrow-right";
import axios from "axios";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { newRetroContext } from "../../local-contexts";

interface Step1Props {
  setStepNumber: (updater: (prev: number) => number) => void;
  stepNumber: number;
}

const Step1: FC<Step1Props> = ({ setStepNumber, stepNumber }) => {
  const { newRetro, setNewRetro } = useContext(newRetroContext);
  const [isError, setIsError] = useState<boolean>(false);
};

export default Step1;

const URI = "http://localhost:8000/preguntas";
