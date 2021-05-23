import { FelaRule } from 'react-fela';

export const tabStyle: FelaRule<{ active: boolean }> = ({ active }) => ({
  border: active ? '1px solid #9CA2A4' : '1px solid #fff',
  borderBottom: active ? '0' : '1px solid #9CA2A4',
  borderRadius: '.25rem .25rem 0 0',
  padding: '.5rem',
  cursor: !active ? 'pointer' : undefined,
  transition: 'ease .2s all',
  '&:hover': {
    backgroundColor: !active ? 'whitesmoke' : undefined
  },
  backgroundColor: '#fff'
});
export const headerContainer: FelaRule = () => ({
  display: 'flex',
  height: '38px',
  position: 'absolute',
  top: 1,
  left: '1rem',
  zIndex: 1
});
export const tabsContainer: FelaRule = () => ({ margin: '1rem 0', position: 'relative', paddingTop: '38px' });
export const tabsContent: FelaRule = () => ({ border: '1px solid #9CA2A4', padding: '.5rem', borderRadius: '.25rem' });
