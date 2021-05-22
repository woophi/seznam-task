import { NativeCheckBox } from 'modules/native-checkbox';
import { useFela } from 'react-fela';

type Props<T> = {
  title: string;
  options: {
    label: string;
    value: T;
    checked: boolean;
  }[];
  onChange: (value: T) => void;
};

export function FilterRow<T>({ title, options, onChange }: Props<T>) {
  const { css } = useFela();
  return (
    <div className={css({ display: 'flex', flexDirection: 'column', margin: '.25rem .5rem 0 1rem', cursor: 'pointer' })}>
      <b className={css({ marginBottom: '.5rem' })}>{title}</b>
      {options.map(option => (
        <span key={`${option.value}`} className={css({ marginBottom: '.5rem' })} onClick={() => onChange(option.value)}>
          <NativeCheckBox onChange={() => onChange(option.value)} checked={option.checked} computedId={`${option.value}`} />
          {option.label}
        </span>
      ))}
    </div>
  );
}
