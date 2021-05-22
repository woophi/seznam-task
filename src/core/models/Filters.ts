import { MobileOS, MobileProcessor } from './enums';

export type FiltersModel = {
  processor: MobileProcessor[];
  os: MobileOS[];
};
