import { FC } from 'react';
import { RendererProvider as Fela } from 'react-fela';
import { configureFela } from './index';
const felaRenderer = configureFela();

export const FelaProvider: FC = ({ children }) => {
  return <Fela renderer={felaRenderer}>{children}</Fela>;
};
