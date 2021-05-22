import { FelaRule } from 'react-fela';

export const searchContainer: FelaRule<{ open: boolean }> = ({ open }) => ({
  margin: '1rem',
  borderRadius: '.25rem',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 6%)',
  display: 'flex',
  overflow: 'hidden',
  height: open ? '320px' : '48px',
  transition: 'ease-in-out .2s height',
  flexDirection: 'column'
});
export const searchInput: FelaRule = () => ({
  border: 'none',
  width: '100%',
  height: '48px',
  outline: 'none',
  lineHeight: '24px',
  fontSize: '21px',
  padding: 0
});
export const filterIcon: FelaRule = () => ({
  padding: '1rem',
  cursor: 'pointer',
  borderRadius: '.25rem',
  '&:hover': {
    backgroundColor: 'whitesmoke'
  }
});
