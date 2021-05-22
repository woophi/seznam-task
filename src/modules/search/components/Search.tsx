import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { noop } from 'core/data/utils';
import { MobileOS, MobileProcessor } from 'core/models';
import { memo, useState } from 'react';
import { useFela } from 'react-fela';
import { FilterRow } from './FilterRow';
import { filterIcon, searchContainer, searchInput } from './styles';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = memo<Props>(({ onChange }) => {
  const [open, openFilters] = useState(false);
  const { css } = useFela({ open });
  return (
    <div className={css(searchContainer)}>
      <div className={css({ display: 'flex' })}>
        <FontAwesomeIcon icon={faFilter} className={css(filterIcon)} onClick={() => openFilters(v => !v)} />
        <FontAwesomeIcon icon={faSearch} className={css({ margin: '1rem 1rem 1rem .5rem' })} />
        <input onChange={onChange} className={css(searchInput)} />
      </div>
      <div>
        <FilterRow<MobileOS>
          onChange={noop}
          title="OS"
          options={[
            {
              checked: false,
              label: MobileOS.Android,
              value: MobileOS.Android
            },
            {
              checked: false,
              label: MobileOS.IOS,
              value: MobileOS.IOS
            }
          ]}
        />
        <FilterRow<MobileProcessor>
          onChange={noop}
          title="Processor"
          options={[
            {
              checked: false,
              label: MobileProcessor.Apple13,
              value: MobileProcessor.Apple13
            },
            {
              checked: false,
              label: MobileProcessor.Apple14,
              value: MobileProcessor.Apple14
            },
            {
              checked: false,
              label: MobileProcessor.Exynos2100,
              value: MobileProcessor.Exynos2100
            },
            {
              checked: false,
              label: MobileProcessor.Snapdragon888,
              value: MobileProcessor.Snapdragon888
            }
          ]}
        />
      </div>
    </div>
  );
});
