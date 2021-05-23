import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ShopInfo } from 'core/models';
import { actionIcon, firstUppercase } from 'core/shared/styles';
import { FC } from 'react';
import { useFela } from 'react-fela';
type Props = {
  info: ShopInfo;
};

export const ShopRow: FC<Props> = ({ info: { name, price, link } }) => {
  const { css } = useFela();
  return (
    <a
      href={link}
      target="__blank"
      className={css(actionIcon, {
        display: 'flex',
        alignItems: 'center',
        marginTop: '.5rem',
        textDecoration: 'none',
        color: '#000',
        padding: '.5rem',
        border: '1px solid whitesmoke'
      })}
    >
      <div className={css(firstUppercase, { marginRight: '.5rem' })}>
        <b>{name}</b> - {price}$
      </div>
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </a>
  );
};
