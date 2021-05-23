import { ReactNode } from 'react';

export type TabModel<T> = {
  title: string;
  content: ReactNode;
  value: T;
};
