import { LocketDetail as LocketDetailModel } from 'core/models';
import { Footer } from 'modules/footer';
import { LocketsLayout } from 'modules/locket';
import { LocketDetail } from 'modules/locket-detail';
import { MainView, ViewContext } from 'modules/main-view';
import { FC, useCallback, useState } from 'react';

const viewElements = {
  [MainView.Lockets]: LocketsLayout,
  [MainView.Detail]: LocketDetail
};

export const App: FC = () => {
  const [{ view, selectedLocket }, setState] = useState<{ selectedLocket: LocketDetailModel | null; view: MainView }>({
    selectedLocket: null,
    view: MainView.Lockets
  });

  const openDetail = useCallback(
    (locket: LocketDetailModel) => setState({ selectedLocket: locket, view: MainView.Detail }),
    []
  );
  const closeDetail = useCallback(() => setState({ selectedLocket: null, view: MainView.Lockets }), []);

  const Content = viewElements[view];

  return (
    <>
      <ViewContext.Provider
        value={{
          closeDetail,
          openDetail,
          selectedLocket
        }}
      >
        <Content />
      </ViewContext.Provider>
      <Footer />
    </>
  );
};
