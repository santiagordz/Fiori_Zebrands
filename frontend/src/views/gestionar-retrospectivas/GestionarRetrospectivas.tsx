import Button from '@atlaskit/button';
import AddIcon from '@atlaskit/icon/glyph/add';
import { FC, useState, useEffect } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  NuevaRetrospectiva,
  PanelGestionarRetro,
} from '../../components';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { NewRetroProvider } from '../../components/gestionar-retro/nueva-retro/local-contexts';
import {
  AutoDismissFlag,
  FlagGroup,
  type AppearanceTypes,
} from '@atlaskit/flag';

interface GestionarRetrospectivasProps {}

export type flagData = {
  created: number;
  icon: React.ReactNode;
  appearance: AppearanceTypes;
  id: number;
  title: string;
  description?: string;
};

const GestionarRetrospectivas: FC<
  GestionarRetrospectivasProps
> = ({}) => {
  const location = useLocation().pathname;
  const [isInNewRetro, setIsInNewRetro] = useState<boolean>(false);
  const navigate = useNavigate();

  const [flags, setFlags] = useState<Array<flagData>>([]);

  const addFlag = (
    title: string,
    icon: React.ReactNode,
    appearance: AppearanceTypes,
    description?: string
  ): void => {
    const flag = {
      created: Date.now(),
      appearance: appearance,
      icon: icon,
      id: flags.length,
      title: title,
      description: description || '',
    };

    setFlags((current) => [flag, ...current]);
  };

  const handleDismiss = () => {
    setFlags(flags.slice(1));
  };

  useEffect(() => {
    if (location.includes('nueva-retrospectiva')) {
      setIsInNewRetro(true);
    } else {
      setIsInNewRetro(false);
    }
  }, [location]);

  return (
    <DesignTemplate
      buttons={
        <span className={isInNewRetro ? 'hidden' : ''}>
          <Button
            appearance="primary"
            iconBefore={<AddIcon label="agregar retrospectiva" />}
            onClick={() =>
              navigate(
                '/gestionar-retrospectivas/nueva-retrospectiva'
              )
            }
          >
            Nueva retrospectiva
          </Button>
        </span>
      }
    >
      <Routes>
        <Route path="*" element={<Navigate to="/404" />} />
        <Route
          path="/"
          element={
            <PanelGestionarRetro
              addFlag={addFlag}
              handleDismiss={handleDismiss}
              flags={flags}
            />
          }
        />
        <Route
          path="nueva-retrospectiva"
          element={
            <NewRetroProvider>
              <NuevaRetrospectiva addFlag={addFlag} />
            </NewRetroProvider>
          }
        />
      </Routes>
    </DesignTemplate>
  );
};

export default GestionarRetrospectivas;
