import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getLocketDetail } from 'core/data/lockets';
import { LocketItem } from 'core/models';
import { firstUppercase } from 'core/shared/styles';
import { LocketParameters } from 'modules/locket-detail/components/LocketParameters';
import { ViewContext } from 'modules/main-view';
import { memo, useContext } from 'react';
import { useFela } from 'react-fela';
import { locketContainer, locketDescription } from './styles';

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
      <div className={css(firstUppercase, { textAlign: 'center', fontSize: '1.5rem', fontWeight: 500 })}>{title}</div>
      <div className={css({ display: 'flex', minWidth: '100px' })}>
        <div
          className={css({
            margin: '1rem 1rem 0 0',
            minWidth: '100px',
            width: '40%'
          })}
        >
          <img src={imgUrl} className={css({ maxWidth: '100%' })} alt={title} />
        </div>
        <p className={css(locketDescription)}>{description}</p>
      </div>
      <div className={css({ marginTop: 'auto' })}>
        <LocketParameters parameters={parameters} />
        <div>
          <FontAwesomeIcon icon={faCommentDots} /> {reviewsCount}
        </div>
      </div>
    </div>
  );
});
