import React, { FC } from 'react';
import DesignTemplate from '../../components/design-template/DesignTemplate';
import { AnswerForm } from '../../components';

interface MisRetrospectivasProps {}

const MisRetrospectivas: FC<MisRetrospectivasProps> = ({}) => {
  return (
    <DesignTemplate>
      <AnswerForm />
    </DesignTemplate>
  );
};

export default MisRetrospectivas;
