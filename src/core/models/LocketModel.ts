import { MobileOS, MobileProcessor } from './enums';

export type MobileDisplay = '6,5' | '6,1' | '6,7' | '4,7';

export type LocketItem = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  parameters: LocketParameters;
  reviewsCount: number;
};

export type LocketParameters = {
  os: MobileOS;
  processor: MobileProcessor;
  display: MobileDisplay;
};
