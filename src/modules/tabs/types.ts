import { ReactNode } from 'react';

export type TabModel<T> = {
  title: ReactNode;
  content: ReactNode;
  tabId: T;
};
