import { faAngry, faMeh, faSmileBeam, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocketDetailParameters, LocketDetailTabs } from 'core/models';
import { actionIcon, firstUppercase } from 'core/shared/styles';
import { ViewContext } from 'modules/main-view';
import { Tabs } from 'modules/tabs';
import { FC, useContext, useEffect } from 'react';
import { useFela } from 'react-fela';
import { LocketParameters } from './LocketParameters';
import { ShopRow } from './ShopRow';
import { detailContainer, detailImg, detailTitle } from './styles';

export const LocketDetail: FC = () => {
  const { selectedLocket, closeDetail } = useContext(ViewContext);
  const { css } = useFela();

  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  const parameters = selectedLocket?.parameters ?? ({} as LocketDetailParameters);

  return (
    <div className={css(detailContainer)}>
      <div className={css(detailTitle)}>
        <h1 className={css(firstUppercase)}>{selectedLocket?.title}</h1>
        <FontAwesomeIcon icon={faTimes} onClick={closeDetail} className={css(actionIcon)} />
      </div>
      <div className={css({ display: 'flex', flexWrap: 'wrap' })}>
        <img src={selectedLocket?.imgUrl} alt={selectedLocket?.title} className={css(detailImg)} />
        <LocketParameters parameters={parameters} />
      </div>

      <p>{selectedLocket?.description}</p>
      <Tabs<LocketDetailTabs>
        tabs={[
          {
            title: 'Available in shops',
            content: selectedLocket?.shops
              .sort((a, b) => Number(a.price) - Number(b.price))
              .map(shop => <ShopRow key={shop.id} info={shop} />),
            tabId: LocketDetailTabs.Shops
          },
          {
            title: 'Reviews',
            content: (
              <>
                {selectedLocket?.reviews.map(review => (
                  <div key={review.id}>
                    <h4>
                      {review.created.toUTCString()}
                      {review.name}{' '}
                      {review.positive ? (
                        <FontAwesomeIcon icon={faSmileBeam} />
                      ) : review.positive !== null ? (
                        <FontAwesomeIcon icon={faAngry} />
                      ) : (
                        <FontAwesomeIcon icon={faMeh} />
                      )}
                    </h4>
                    <p>{review.feedback}</p>
                  </div>
                ))}
              </>
            ),
            tabId: LocketDetailTabs.Reviews
          }
        ]}
      />
    </div>
  );
};
