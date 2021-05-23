import { objKeys } from 'core/data/utils';
import { LocketDetailParameters, LocketParameters as LocketParametersType } from 'core/models';
import { firstUppercase } from 'core/shared/styles';
import { memo } from 'react';
import { useFela } from 'react-fela';

type Props = {
  parameters: LocketDetailParameters | LocketParametersType;
};

const parameterPostfix = (key: keyof LocketDetailParameters | keyof LocketParametersType) => {
  switch (key) {
    case 'internalMemory':
    case 'ram':
      return ' GB';

    case 'display':
      return '"';

    default:
      return '';
  }
};

export const LocketParameters = memo<Props>(({ parameters }) => {
  const { css } = useFela();

  return (
    <div className={css({ marginTop: '1rem' })}>
      {objKeys(parameters).map(key => (
        <div key={key}>
          <b className={css(firstUppercase)}>{key}: </b>
          {parameters[key]}
          {parameterPostfix(key)}
        </div>
      ))}
    </div>
  );
});
