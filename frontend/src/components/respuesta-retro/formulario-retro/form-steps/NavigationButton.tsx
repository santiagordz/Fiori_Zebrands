import { FC } from 'react';
import Button from '@atlaskit/button';

interface NavigationButtonProps {
  appearance: 'default' | 'primary';
  icon: React.ReactElement;
  label: string;
  onClick: () => void;
  isError: boolean;
}

const NavigationButton: FC<NavigationButtonProps> = ({
  appearance,
  icon,
  label,
  onClick,
  isError,
}) => {
  return (
    <Button
      isDisabled={isError}
      appearance={appearance}
      iconBefore={icon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default NavigationButton;
