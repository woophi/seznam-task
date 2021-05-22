import { getLockets } from 'core/data/lockets';
import { LocketItem } from 'core/models';
import { FC, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { Locket } from './Locket';
import { locketsGrid } from './styles';

export const LocketsLayout: FC = () => {
  const { css } = useFela();
  const [data, setData] = useState<LocketItem[]>([]);

  useEffect(() => setData(getLockets()), []);

  return (
    <div className={css(locketsGrid)}>
      {data.map(item => (
        <Locket key={item.id} item={item} />
      ))}
    </div>
  );
};
