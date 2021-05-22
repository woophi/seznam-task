import { FC } from 'react';
import { useFela } from 'react-fela';

export const Footer: FC = () => {
  const { css } = useFela();
  return (
    <footer className={css({ backgroundColor: '#282c34', padding: '1rem', textAlign: 'center', color: '#FFF' })}>
      © Copyright {new Date().getFullYear()}
    </footer>
  );
};
