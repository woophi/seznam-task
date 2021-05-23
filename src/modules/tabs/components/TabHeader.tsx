import { useFela } from 'react-fela';
import { TabModel } from '../types';
import { tabStyle } from './styles';

type Props<T> = {
  onClick: () => void;
  tab: TabModel<T>;
  activeTabValue: T;
};

export function TabHeader<T>({ onClick, tab, activeTabValue }: Props<T>) {
  const { css } = useFela({ active: activeTabValue === tab.value });
  return (
    <div onClick={onClick} className={css(tabStyle)}>
      {tab.title}
    </div>
  );
}
