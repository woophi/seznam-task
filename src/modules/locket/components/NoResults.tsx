import { memo } from 'react';
import noResultsImg from 'assets/imgs/no-results-found.png';
import { useFela } from 'react-fela';

export const NoResults = memo(() => {
  const { css } = useFela();
  return (
    <div
      className={css({ minHeight: 'calc(100vh - 64px)', display: 'flex', justifyContent: 'center', alignItems: 'center' })}
    >
      <img src={noResultsImg} alt="No results found." className={css({ maxWidth: '100%' })} />
    </div>
  );
});
