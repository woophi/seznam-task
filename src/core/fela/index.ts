import plugins from 'fela-preset-web';
import { createRenderer } from 'fela';

export const configureFela = () => {
  const renderer = createRenderer({
    selectorPrefix: 'f_',
    plugins
  });

  return renderer;
};
