import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { objKeys } from 'core/data/utils';
import { LocketItem } from 'core/models';
import { memo } from 'react';
import { useFela } from 'react-fela';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

type Props = {
  item: LocketItem;
};

export const Locket = memo<Props>(({ item }) => {
  const { imgUrl, title, description, parameters, reviewsCount } = item;
  const { css } = useFela();
  return (
    <div
      className={css({
        backgroundColor: 'white',
        borderRadius: '.25rem',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 6%)',
        padding: '1rem',
        cursor: 'pointer',
        transition: 'ease-in-out .2s transform',
        '&:hover': {
          transform: 'scale(1.02)'
        },
        '&:active': {
          transform: 'translate(0, 2px)'
        }
      })}
    >
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
          <div>{description}</div>
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
