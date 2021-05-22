import * as f from 'react-fela';

declare module 'react-fela' {
  export type FelaRule<P = {}> = FelaStyle<{}, P>;
}
