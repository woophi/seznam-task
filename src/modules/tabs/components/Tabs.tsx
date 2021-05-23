import { useState } from 'react';
import { useFela } from 'react-fela';
import { TabModel } from '../types';
import { headerContainer, tabsContainer, tabsContent } from './styles';
import { TabHeader } from './TabHeader';

type Props<T> = {
  tabs: TabModel<T>[];
};

export function Tabs<T extends string>({ tabs }: Props<T>) {
  const [{ content, tabId }, setActive] = useState<TabModel<T>>(tabs[0]);
  const { css } = useFela();
  return (
    <div className={css(tabsContainer)}>
      <div className={css(headerContainer)}>
        {tabs.map(tab => (
          <TabHeader key={tab.tabId} activeTabId={tabId} tab={tab} onClick={() => setActive(tab)} />
        ))}
      </div>
      <div className={css(tabsContent)}>{content}</div>
    </div>
  );
}
