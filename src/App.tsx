import { LocketDetail as LocketDetailModel } from 'core/models';
import { Footer } from 'modules/footer';
import { LocketsLayout } from 'modules/locket';
import { LocketDetail } from 'modules/locket-detail';
import { View, LocketDetailContext } from 'modules/locket-detail/context';
import { FC, useCallback, useState } from 'react';

const viewElements = {
  [View.Lockets]: LocketsLayout,
  [View.Detail]: LocketDetail
};

export const App: FC = () => {
  const [{ view, selectedLocket }, setState] = useState<{ selectedLocket: LocketDetailModel | null; view: View }>({
    selectedLocket: null,
    view: View.Lockets
  });

  const openDetail = useCallback((locket: LocketDetailModel) => setState({ selectedLocket: locket, view: View.Detail }), []);
  const closeDetail = useCallback(() => setState({ selectedLocket: null, view: View.Lockets }), []);

  const Content = viewElements[view];

  return (
    <>
      <LocketDetailContext.Provider
        value={{
          closeDetail,
          openDetail,
          selectedLocket
        }}
      >
        <Content />
      </LocketDetailContext.Provider>
      <Footer />
    </>
  );
};
