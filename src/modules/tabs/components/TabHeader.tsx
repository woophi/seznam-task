import { useFela } from 'react-fela';
import { TabModel } from '../types';
import { tabStyle } from './styles';

type Props<T> = {
  onClick: () => void;
  tab: TabModel<T>;
  activeTabId: T;
};

export function TabHeader<T>({ onClick, tab, activeTabId }: Props<T>) {
  const { css } = useFela({ active: activeTabId === tab.tabId });
  return (
    <div onClick={onClick} className={css(tabStyle)}>
      {tab.title}
    </div>
  );
}
