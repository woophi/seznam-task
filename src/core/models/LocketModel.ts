import { MobileOS, MobileProcessor } from './enums';

export type MobileDisplay = '6,5' | '6,1' | '6,7' | '4,7';
export type MobileRam = 16 | 12 | 8 | 6;
export type MobileInternalMemory = 512 | 256 | 128 | 64 | 32;

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

export type LocketDetail = {
  parameters: {
    ram: MobileRam;
    internalMemory: MobileInternalMemory;
  } & LocketParameters;
  shops: ShopInfo[];
  reviews: ReviewInfo[];
} & Omit<LocketItem, 'parameters'>;

export type ShopInfo = {
  name: string;
  price: string;
  link: string;
};
export type ReviewInfo = {
  name: string;
  feedback: string;
  positive: boolean | null;
};
