import { LocketItem } from 'core/models';
import { LocketsLayout } from 'modules/locket';
import { LocketDetail } from 'modules/locket-detail';
import { MainView, ViewContext } from 'modules/main-view';
import { FC, useCallback, useState } from 'react';

const viewElements = {
  [MainView.Lockets]: LocketsLayout,
  [MainView.Detail]: LocketDetail
};

export const App: FC = () => {
  const [{ view, selectedLocket }, setState] = useState<{ selectedLocket: LocketItem | null; view: MainView }>({
    selectedLocket: null,
    view: MainView.Lockets
  });

  const openDetail = useCallback((locket: LocketItem) => setState({ selectedLocket: locket, view: MainView.Detail }), []);
  const closeDetail = useCallback(() => setState({ selectedLocket: null, view: MainView.Lockets }), []);

  const Content = viewElements[view];

  return (
    <ViewContext.Provider
      value={{
        closeDetail,
        openDetail,
        selectedLocket
      }}
    >
      <Content />
    </ViewContext.Provider>
  );
};
