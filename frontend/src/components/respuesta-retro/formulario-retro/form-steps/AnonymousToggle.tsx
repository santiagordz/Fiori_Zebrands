import { FC } from 'react';
import Toggle from '@atlaskit/toggle';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface AnonymousToggleProps {
  isDisabled: boolean;
  isChecked: boolean;
  onChange: () => void;
}

const AnonymousToggle: FC<AnonymousToggleProps> = ({
  isDisabled,
  isChecked,
  onChange,
}) => {
  return (
    <>
      <a
        data-tooltip-id="anon-tooltip"
        data-tooltip-content={`${
          isDisabled
            ? 'No puedes enviar una respuesta anónima de un campo vacío.'
            : 'Si se selecciona, todas las respuestas para esta pregunta serán anónimas.'
        }`}
      >
        <Toggle
          isDisabled={isDisabled}
          isChecked={isChecked}
          onChange={onChange}
        />
      </a>
      <Tooltip
        id="anon-tooltip"
        className="text-xs bg-deepBlue z-[3]"
      />
    </>
  );
};

export default AnonymousToggle;
