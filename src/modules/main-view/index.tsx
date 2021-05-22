import { noop } from 'core/data/utils';
import { LocketItem } from 'core/models';
import { createContext } from 'react';

export enum MainView {
  Lockets = 'lockets',
  Detail = 'detail'
}

export type ViewProps = {
  openDetail: (locket: LocketItem) => void;
  closeDetail: () => void;
  selectedLocket: LocketItem | null;
};

const defaultView: ViewProps = {
  openDetail: noop,
  closeDetail: noop,
  selectedLocket: null
};

export const ViewContext = createContext<ViewProps>(defaultView);
