import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getLocketDetail } from 'core/data/lockets';
import { objKeys } from 'core/data/utils';
import { LocketItem } from 'core/models';
import { ViewContext } from 'modules/main-view';
import { memo, useContext } from 'react';
import { useFela } from 'react-fela';
import { locketContainer } from './styles';

type Props = {
  item: LocketItem;
};

export const Locket = memo<Props>(({ item }) => {
  const { imgUrl, title, description, parameters, reviewsCount } = item;
  const { css } = useFela();
  const { openDetail } = useContext(ViewContext);

  const selectLocket = () => openDetail(getLocketDetail(item));
  return (
    <div className={css(locketContainer)} onClick={selectLocket}>
      <div className={css({ display: 'flex', minWidth: '100px' })}>
        <div
          className={css({
            marginRight: '.75rem',
            minWidth: '100px'
          })}
        >
          <div>{title}</div>
          <img src={imgUrl} className={css({ maxWidth: '100%' })} alt={title} />
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        {objKeys(parameters).map(key => (
          <div key={key}>{`${key}: ${parameters[key]}`}</div>
        ))}
        <div>
          <FontAwesomeIcon icon={faUsers} /> {reviewsCount}
        </div>
      </div>
    </div>
  );
});
