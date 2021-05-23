import { FelaRule } from 'react-fela';

export const locketContainer: FelaRule = () => ({
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
});
export const locketsGrid: FelaRule = () => ({
  padding: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '1rem 1rem',
  minHeight: 'calc(100vh - 64px)',

  '@media (min-width: 1001px) and (max-width: 1400px)': {
    gridTemplateColumns: '1fr 1fr 1fr'
  },
  '@media (min-width: 601px) and (max-width: 1000px)': {
    gridTemplateColumns: '1fr 1fr'
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr'
  }
});
