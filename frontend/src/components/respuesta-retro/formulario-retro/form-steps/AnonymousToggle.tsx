import { FC } from 'react';
import Toggle from '@atlaskit/toggle';
import Tooltip from '@atlaskit/tooltip';

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
    <Toggle
      isDisabled={isDisabled}
      isChecked={isChecked}
      onChange={onChange}
    />
  );
};

export default AnonymousToggle;
