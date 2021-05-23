import { FelaRule } from 'react-fela';

export const locketContainer: FelaRule = () => ({
  backgroundColor: 'white',
  borderRadius: '.25rem',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 6%)',
  padding: '1rem',
  cursor: 'pointer',
  transition: 'ease-in-out .2s transform',
  display: 'flex',
  flexDirection: 'column',
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

export const locketDescription: FelaRule = () => ({
  width: '60%',
  height: '170px',
  position: 'relative',
  overflow: 'hidden',
  '&:after': {
    content: '""',
    textAlign: 'right',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '70%',
    height: '1.2em',
    background: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)'
  }
});
