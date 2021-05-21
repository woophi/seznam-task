export const randomStringEnum = <T>(anEnum: T): T[keyof T] => {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.round(Math.random() * enumValues.length);
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
};

export const objKeys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[];
