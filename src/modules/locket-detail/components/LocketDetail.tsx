import { ViewContext } from 'modules/main-view';
import { FC, useContext } from 'react';

export const LocketDetail: FC = () => {
  const { selectedLocket } = useContext(ViewContext);

  return <div>{selectedLocket?.title}</div>;
};
