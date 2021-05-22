import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, PropsWithChildren, useState } from 'react';
import { useFela } from 'react-fela';
import { filterIcon, searchContainer, searchInput } from './styles';

type Props = PropsWithChildren<{
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

export const Search = memo<Props>(({ onChange, children }) => {
  const [open, openFilters] = useState(false);
  const { css } = useFela({ open });
  return (
    <div className={css(searchContainer)}>
      <div className={css({ display: 'flex' })}>
        <FontAwesomeIcon icon={faFilter} className={css(filterIcon)} onClick={() => openFilters(v => !v)} />
        <FontAwesomeIcon icon={faSearch} className={css({ margin: '1rem 1rem 1rem .5rem' })} />
        <input onChange={onChange} className={css(searchInput)} />
      </div>
      {children}
    </div>
  );
});
