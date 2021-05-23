import { FelaRule } from 'react-fela';

export const actionIcon: FelaRule = () => ({
  padding: '1rem',
  cursor: 'pointer',
  borderRadius: '.25rem',
  '&:hover': {
    backgroundColor: 'whitesmoke'
  }
});

export const firstUppercase: FelaRule = () => ({ textTransform: 'capitalize' });
