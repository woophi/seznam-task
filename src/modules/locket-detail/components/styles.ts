import { FelaRule } from 'react-fela';

export const detailContainer: FelaRule = () => ({ minHeight: '100vh', padding: '0 1rem' });
export const detailTitle: FelaRule = () => ({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' });
export const detailImg: FelaRule = () => ({ margin: '1rem 0', '@media (max-width: 460px)': { margin: '1rem auto' } });
