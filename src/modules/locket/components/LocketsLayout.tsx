import { getLockets } from 'core/data/lockets';
import { FiltersModel, LocketItem, MobileOS, MobileProcessor } from 'core/models';
import { Search } from 'modules/search';
import { Filters } from 'modules/search/components/Filters';
import { FC, useCallback, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { Locket } from './Locket';
import { NoResults } from './NoResults';
import { locketsGrid } from './styles';

const initialData = getLockets();
const initialFilters: FiltersModel = {
  os: [],
  processor: []
};

export const LocketsLayout: FC = () => {
  const { css } = useFela();
  const [data, setData] = useState<LocketItem[]>(initialData);
  const [filters, setFilters] = useState<FiltersModel>(initialFilters);

  useEffect(() => {
    const { os, processor } = filters;

    setData(
      initialData.filter(locket => {
        const byProcessor = processor.length ? processor.includes(locket.parameters.processor) : true;
        const byOs = os.length ? os.includes(locket.parameters.os) : true;

        return byProcessor && byOs;
      })
    );
  }, [filters]);

  const searchLockets = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setFilters(initialFilters);
    setData(initialData.filter(locket => !!~locket.title.toLowerCase().indexOf(query)));
  }, []);

  const changeOS = useCallback((filterValue: MobileOS) => {
    setFilters(v => ({
      ...v,
      os: v.os.includes(filterValue) ? v.os.filter(osv => osv !== filterValue) : [...v.os, filterValue]
    }));
  }, []);
  const changeProcessor = useCallback((filterValue: MobileProcessor) => {
    setFilters(v => ({
      ...v,
      processor: v.processor.includes(filterValue)
        ? v.processor.filter(pv => pv !== filterValue)
        : [...v.processor, filterValue]
    }));
  }, []);

  return (
    <>
      <Search onChange={searchLockets}>
        <Filters changeOS={changeOS} changeProcessor={changeProcessor} model={filters} />
      </Search>
      {data.length ? (
        <div className={css({ minHeight: 'calc(100vh - 64px)' })}>
          <div className={css(locketsGrid)}>
            {data.map(item => (
              <Locket key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <NoResults />
      )}
    </>
  );
};
