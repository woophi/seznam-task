import { LocketDetailParameters, LocketParameters } from 'core/models';

export const randomStringEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.round(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex] ?? enumValues[0];
  return randomEnumValue;
};

export const objKeys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[];

export const noop = () => {
  // do nothing
};

export const parameterPostfix = (key: keyof LocketDetailParameters | keyof LocketParameters) => {
  switch (key) {
    case 'internalMemory':
    case 'ram':
      return ' GB';

    case 'display':
      return '"';

    default:
      return '';
  }
};
