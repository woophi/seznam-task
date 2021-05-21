import { getLockets } from 'core/data/lockets';
import { LocketItem } from 'core/models';
import { FC, useEffect, useState } from 'react';
import { useFela } from 'react-fela';
import { Locket } from './Locket';

export const LocketLayout: FC = () => {
  const { css } = useFela();
  const [data, setData] = useState<LocketItem[]>([]);

  useEffect(() => setData(getLockets()), []);

  return (
    <div
      className={css({
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '1rem 1rem'
      })}
    >
      {data.map(item => (
        <Locket key={item.id} item={item} />
      ))}
    </div>
  );
};
