import { noop } from 'core/data/utils';
import { LocketDetail } from 'core/models';
import { createContext } from 'react';

export enum MainView {
  Lockets = 'lockets',
  Detail = 'detail'
}

export type ViewProps = {
  openDetail: (locket: LocketDetail) => void;
  closeDetail: () => void;
  selectedLocket: LocketDetail | null;
};

const defaultView: ViewProps = {
  openDetail: noop,
  closeDetail: noop,
  selectedLocket: null
};

export const ViewContext = createContext<ViewProps>(defaultView);
