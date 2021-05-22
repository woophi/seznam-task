import { FC } from 'react';
import { useFela } from 'react-fela';
import './styleCbx.css';

type Props = {
  computedId: string;
  onChange: () => void;
  checked: boolean;
};

export const NativeCheckBox: FC<Props> = ({ checked, computedId, onChange }) => {
  const { css } = useFela();

  return (
    <span className={css({ marginRight: '1rem' })} onClick={e => e.stopPropagation()}>
      <input
        id={computedId}
        className="inp-cbx"
        type="checkbox"
        style={{ display: 'none' }}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={computedId} className="cbx">
        <span>
          <svg width="12px" height="12px" viewBox="0 0 12 12">
            <polyline points="1 5 4 8 11 1" />
          </svg>
        </span>
      </label>
    </span>
  );
};
