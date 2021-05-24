import { noop } from 'core/data/utils';
import { LocketDetail } from 'core/models';
import { createContext } from 'react';

export enum View {
  Lockets = 'lockets',
  Detail = 'detail'
}

type ContextProps = {
  openDetail: (locket: LocketDetail) => void;
  closeDetail: () => void;
  selectedLocket: LocketDetail | null;
};

const defaultState: ContextProps = {
  openDetail: noop,
  closeDetail: noop,
  selectedLocket: null
};

export const LocketDetailContext = createContext<ContextProps>(defaultState);
