import { getLockets } from 'core/data/lockets';
import { LocketItem } from 'core/models';
import { Search } from 'modules/search';
import { FC, useCallback, useState } from 'react';
import { useFela } from 'react-fela';
import { Locket } from './Locket';
import { locketsGrid } from './styles';

const initialData = getLockets();

export const LocketsLayout: FC = () => {
  const { css } = useFela();
  const [data, setData] = useState<LocketItem[]>(initialData);

  const searchLockets = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    if (!query) {
      setData(initialData);
    } else {
      setData(d => d.filter(locket => !!~locket.title.toLowerCase().indexOf(query)));
    }
  }, []);

  return (
    <>
      <Search onChange={searchLockets} />
      <div className={css(locketsGrid)}>
        {data.map(item => (
          <Locket key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};
