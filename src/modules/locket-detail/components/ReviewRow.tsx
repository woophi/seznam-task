import { faAngry, faMeh, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReviewInfo } from 'core/models';
import { firstLetterUp } from 'core/shared/styles';
import { FC } from 'react';
import { useFela } from 'react-fela';

type Props = {
  info: ReviewInfo;
};

export const ReviewRow: FC<Props> = ({ info: { name, positive, feedback, created } }) => {
  const { css } = useFela();

  const icon = positive === null ? faMeh : positive ? faSmileBeam : faAngry;
  const iconColor = positive === null ? undefined : positive ? '#8cc643' : '#FF5A32';
  return (
    <div>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <b className={css(firstLetterUp, { padding: '.25rem 0', marginRight: '.5rem' })}>{name}</b>{' '}
        <FontAwesomeIcon icon={icon} className={css({ color: iconColor, marginRight: '.5rem' })} />
        <div className={css({ opacity: 0.6, fontStyle: 'italic' })}>
          {created.getDate()}-{created.getMonth()}-{created.getFullYear()}
        </div>
      </div>
      <p className={css({ margin: '0 0 1rem' })}>{feedback}</p>
    </div>
  );
};
