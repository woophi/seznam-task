import * as f from 'react-fela';

declare module 'react-fela' {
  export type FelaRule<P = {}> = FelaStyle<{}, P>;

  export type CSSThemeFunction<T = {}, P> = (...style: FelaStyle<T, P>[]) => string;

  export interface FelaHookProps<T, P> {
    css: CSSThemeFunction<T, P>;
    theme: {};
    renderer: IRenderer;
  }

  export function useFela<T = {}, P = {}>(props?: P): FelaHookProps<T, P>;
}
